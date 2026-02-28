#!/bin/bash

# Azure Static Web App - One-Time Setup Script
# This script automates the initial Azure configuration for GitHub Actions deployment

set -e  # Exit on any error

echo "=========================================="
echo "Azure Static Web App - Setup Script"
echo "=========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo -e "${RED}Error: Azure CLI is not installed${NC}"
    echo "Install from: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
    exit 1
fi

echo -e "${GREEN}✓ Azure CLI found${NC}"

# Check if GitHub CLI is installed (optional but recommended)
if command -v gh &> /dev/null; then
    GH_CLI_AVAILABLE=true
    echo -e "${GREEN}✓ GitHub CLI found${NC}"
else
    GH_CLI_AVAILABLE=false
    echo -e "${YELLOW}⚠ GitHub CLI not found (optional)${NC}"
    echo "  Install from: https://cli.github.com/"
fi

echo ""

# Login to Azure
echo -e "${YELLOW}Step 1: Azure Login${NC}"
echo "Checking Azure login status..."
if ! az account show &> /dev/null; then
    echo "Please login to Azure..."
    az login
else
    echo -e "${GREEN}✓ Already logged in to Azure${NC}"
fi

# Get and display current subscription
CURRENT_SUB=$(az account show --query name -o tsv)
echo ""
echo "Current subscription: ${CURRENT_SUB}"
echo ""
read -p "Do you want to use this subscription? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Available subscriptions:"
    az account list --query "[].{Name:name, ID:id}" -o table
    echo ""
    read -p "Enter subscription ID to use: " SUB_ID
    az account set --subscription "$SUB_ID"
    echo -e "${GREEN}✓ Subscription set${NC}"
fi

# Get subscription details
SUBSCRIPTION_ID=$(az account show --query id -o tsv)
TENANT_ID=$(az account show --query tenantId -o tsv)

echo ""
echo -e "${YELLOW}Step 2: Create Azure AD Application${NC}"
APP_NAME="GitHub-Portfolio-Deploy"

# Check if app already exists
EXISTING_APP=$(az ad app list --display-name "$APP_NAME" --query [].appId -o tsv)

if [ -n "$EXISTING_APP" ]; then
    echo -e "${YELLOW}⚠ Application '$APP_NAME' already exists${NC}"
    read -p "Do you want to use the existing app? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        APP_ID=$EXISTING_APP
        echo -e "${GREEN}✓ Using existing application${NC}"
    else
        read -p "Enter a new application name: " APP_NAME
        az ad app create --display-name "$APP_NAME"
        APP_ID=$(az ad app list --display-name "$APP_NAME" --query [].appId -o tsv)
        echo -e "${GREEN}✓ Created new application${NC}"
    fi
else
    az ad app create --display-name "$APP_NAME"
    APP_ID=$(az ad app list --display-name "$APP_NAME" --query [].appId -o tsv)
    echo -e "${GREEN}✓ Created Azure AD Application${NC}"
fi

echo ""
echo -e "${YELLOW}Step 3: Create Service Principal${NC}"

# Check if service principal exists
SP_EXISTS=$(az ad sp list --display-name "$APP_NAME" --query [].id -o tsv)

if [ -z "$SP_EXISTS" ]; then
    az ad sp create --id "$APP_ID"
    echo -e "${GREEN}✓ Created Service Principal${NC}"
else
    echo -e "${GREEN}✓ Service Principal already exists${NC}"
fi

echo ""
echo -e "${YELLOW}Step 4: Assign Contributor Role${NC}"

# Check if role assignment exists
ROLE_EXISTS=$(az role assignment list --assignee "$APP_ID" --role "Contributor" --scope "/subscriptions/$SUBSCRIPTION_ID" --query [].id -o tsv)

if [ -z "$ROLE_EXISTS" ]; then
    az role assignment create \
        --role Contributor \
        --assignee "$APP_ID" \
        --scope "/subscriptions/$SUBSCRIPTION_ID"
    echo -e "${GREEN}✓ Assigned Contributor role${NC}"
else
    echo -e "${GREEN}✓ Contributor role already assigned${NC}"
fi

echo ""
echo -e "${YELLOW}Step 5: Create Federated Credential for GitHub Actions${NC}"
read -p "Enter your GitHub username: " GITHUB_USER
read -p "Enter your repository name (default: kishan-portfolio): " REPO_NAME
REPO_NAME=${REPO_NAME:-kishan-portfolio}

CREDENTIAL_NAME="GitHubActionsPortfolio"

# Check if credential exists
CRED_EXISTS=$(az ad app federated-credential list --id "$APP_ID" --query "[?name=='$CREDENTIAL_NAME'].name" -o tsv)

if [ -z "$CRED_EXISTS" ]; then
    az ad app federated-credential create \
        --id "$APP_ID" \
        --parameters "{
            \"name\": \"$CREDENTIAL_NAME\",
            \"issuer\": \"https://token.actions.githubusercontent.com\",
            \"subject\": \"repo:$GITHUB_USER/$REPO_NAME:ref:refs/heads/main\",
            \"audiences\": [\"api://AzureADTokenExchange\"]
        }"
    echo -e "${GREEN}✓ Created federated credential${NC}"
else
    echo -e "${GREEN}✓ Federated credential already exists${NC}"
fi

echo ""
echo -e "${YELLOW}Step 6: Run Terraform to Create Static Web App${NC}"

# Navigate to terraform directory
cd "$(dirname "$0")/../terraform"

# Initialize Terraform
echo "Initializing Terraform..."
terraform init

# Plan
echo ""
echo "Creating Terraform plan..."
terraform plan -out=tfplan

echo ""
read -p "Apply Terraform configuration? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    terraform apply tfplan
    
    # Get the API key
    SWA_API_KEY=$(terraform output -raw static_web_app_api_key)
    SWA_URL=$(terraform output -raw static_web_app_url)
    
    echo -e "${GREEN}✓ Static Web App created successfully!${NC}"
    echo ""
    echo "Static Web App URL: $SWA_URL"
else
    echo -e "${YELLOW}Skipped Terraform apply${NC}"
    SWA_API_KEY=""
fi

cd - > /dev/null

echo ""
echo "=========================================="
echo -e "${GREEN}Setup Complete!${NC}"
echo "=========================================="
echo ""
echo "Save these values as GitHub Secrets:"
echo ""
echo "Secret Name: AZURE_CLIENT_ID"
echo "Value: $APP_ID"
echo ""
echo "Secret Name: AZURE_TENANT_ID"
echo "Value: $TENANT_ID"
echo ""
echo "Secret Name: AZURE_SUBSCRIPTION_ID"
echo "Value: $SUBSCRIPTION_ID"
echo ""

if [ -n "$SWA_API_KEY" ]; then
    echo "Secret Name: AZURE_STATIC_WEB_APP_API_KEY"
    echo "Value: (see output above - marked as sensitive)"
    echo ""
fi

echo "=========================================="
echo ""

# Optionally set secrets using GitHub CLI
if [ "$GH_CLI_AVAILABLE" = true ]; then
    read -p "Do you want to automatically set GitHub secrets? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Setting GitHub secrets..."
        
        gh secret set AZURE_CLIENT_ID --body "$APP_ID"
        gh secret set AZURE_TENANT_ID --body "$TENANT_ID"
        gh secret set AZURE_SUBSCRIPTION_ID --body "$SUBSCRIPTION_ID"
        
        if [ -n "$SWA_API_KEY" ]; then
            gh secret set AZURE_STATIC_WEB_APP_API_KEY --body "$SWA_API_KEY"
        fi
        
        echo -e "${GREEN}✓ GitHub secrets set successfully!${NC}"
    fi
else
    echo "To manually add secrets:"
    echo "1. Go to: https://github.com/$GITHUB_USER/$REPO_NAME/settings/secrets/actions"
    echo "2. Click 'New repository secret'"
    echo "3. Add each secret listed above"
fi

echo ""
echo -e "${GREEN}You can now push to the main branch to trigger deployment!${NC}"
echo ""

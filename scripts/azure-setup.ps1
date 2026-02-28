# Azure Static Web App - One-Time Setup Script (PowerShell)
# This script automates the initial Azure configuration for GitHub Actions deployment

$ErrorActionPreference = "Stop"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Azure Static Web App - Setup Script" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Azure CLI is installed
try {
    az --version | Out-Null
    Write-Host "✓ Azure CLI found" -ForegroundColor Green
}
catch {
    Write-Host "Error: Azure CLI is not installed" -ForegroundColor Red
    Write-Host "Install from: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
    exit 1
}

# Check if GitHub CLI is installed (optional)
$ghCliAvailable = $false
try {
    gh --version | Out-Null
    $ghCliAvailable = $true
    Write-Host "✓ GitHub CLI found" -ForegroundColor Green
}
catch {
    Write-Host "⚠ GitHub CLI not found (optional)" -ForegroundColor Yellow
    Write-Host "  Install from: https://cli.github.com/"
}

Write-Host ""

# Login to Azure
Write-Host "Step 1: Azure Login" -ForegroundColor Yellow
Write-Host "Checking Azure login status..."

try {
    az account show | Out-Null
    Write-Host "✓ Already logged in to Azure" -ForegroundColor Green
}
catch {
    Write-Host "Please login to Azure..."
    az login
}

# Get current subscription
$currentSub = az account show --query name -o tsv
Write-Host ""
Write-Host "Current subscription: $currentSub"
Write-Host ""

$useCurrentSub = Read-Host "Do you want to use this subscription? (y/n)"
if ($useCurrentSub -ne "y") {
    Write-Host "Available subscriptions:"
    az account list --query '[].{Name:name, ID:id}' -o table
    Write-Host ""
    $subId = Read-Host "Enter subscription ID to use"
    az account set --subscription $subId
    Write-Host "✓ Subscription set" -ForegroundColor Green
}

# Get subscription details
$subscriptionId = az account show --query id -o tsv
$tenantId = az account show --query tenantId -o tsv

Write-Host ""
Write-Host "Step 2: Create Azure AD Application" -ForegroundColor Yellow
$appName = "GitHub-Portfolio-Deploy"

# Check if app already exists
$existingApp = az ad app list --display-name $appName --query '[0].appId' -o tsv

if ($existingApp) {
    Write-Host "⚠ Application '$appName' already exists" -ForegroundColor Yellow
    $useExisting = Read-Host "Do you want to use the existing app? (y/n)"
    if ($useExisting -eq "y") {
        $appId = $existingApp
        Write-Host "✓ Using existing application" -ForegroundColor Green
    }
    else {
        $appName = Read-Host "Enter a new application name"
        az ad app create --display-name $appName
        $appId = az ad app list --display-name $appName --query '[0].appId' -o tsv
        Write-Host "✓ Created new application" -ForegroundColor Green
    }
}
else {
    az ad app create --display-name $appName
    $appId = az ad app list --display-name $appName --query '[0].appId' -o tsv
    Write-Host "✓ Created Azure AD Application" -ForegroundColor Green
}

Write-Host ""
Write-Host "Step 3: Create Service Principal" -ForegroundColor Yellow

$spExists = az ad sp list --display-name $appName --query '[0].id' -o tsv

if (-not $spExists) {
    az ad sp create --id $appId
    Write-Host "✓ Created Service Principal" -ForegroundColor Green
}
else {
    Write-Host "✓ Service Principal already exists" -ForegroundColor Green
}

Write-Host ""
Write-Host "Step 4: Assign Contributor Role" -ForegroundColor Yellow

$roleExists = az role assignment list --assignee $appId --role "Contributor" --scope "/subscriptions/$subscriptionId" --query '[0].id' -o tsv

if (-not $roleExists) {
    az role assignment create --role Contributor --assignee $appId --scope "/subscriptions/$subscriptionId"
    Write-Host "✓ Assigned Contributor role" -ForegroundColor Green
}
else {
    Write-Host "✓ Contributor role already assigned" -ForegroundColor Green
}

Write-Host ""
Write-Host "Step 5: Create Federated Credential for GitHub Actions" -ForegroundColor Yellow
$githubUser = Read-Host "Enter your GitHub username"
$repoName = Read-Host "Enter your repository name (default: kishan-portfolio)"
if (-not $repoName) { $repoName = "kishan-portfolio" }

$credentialName = "GitHubActionsPortfolio"

$credExists = az ad app federated-credential list --id $appId --query "[?name=='$credentialName'].name" -o tsv

if (-not $credExists) {
    $credParams = @{
        name = $credentialName
        issuer = "https://token.actions.githubusercontent.com"
        subject = "repo:$githubUser/$repoName`:ref:refs/heads/main"
        audiences = @("api://AzureADTokenExchange")
    } | ConvertTo-Json -Compress

    az ad app federated-credential create --id $appId --parameters $credParams
    Write-Host "✓ Created federated credential" -ForegroundColor Green
}
else {
    Write-Host "✓ Federated credential already exists" -ForegroundColor Green
}

Write-Host ""
Write-Host "Step 6: Run Terraform to Create Static Web App" -ForegroundColor Yellow

# Navigate to terraform directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$terraformPath = Join-Path $scriptPath "..\terraform"
Set-Location $terraformPath

# Initialize Terraform
Write-Host "Initializing Terraform..."
terraform init

# Plan
Write-Host ""
Write-Host "Creating Terraform plan..."
terraform plan -out=tfplan

Write-Host ""
$applyTerraform = Read-Host "Apply Terraform configuration? (y/n)"
if ($applyTerraform -eq "y") {
    terraform apply tfplan
    
    # Get the API key
    $swaApiKey = terraform output -raw static_web_app_api_key
    $swaUrl = terraform output -raw static_web_app_url
    
    Write-Host "✓ Static Web App created successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Static Web App URL: $swaUrl"
}
else {
    Write-Host "Skipped Terraform apply" -ForegroundColor Yellow
    $swaApiKey = ""
}

Set-Location $scriptPath

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Save these values as GitHub Secrets:"
Write-Host ""
Write-Host "Secret Name: AZURE_CLIENT_ID"
Write-Host "Value: $appId"
Write-Host ""
Write-Host "Secret Name: AZURE_TENANT_ID"
Write-Host "Value: $tenantId"
Write-Host ""
Write-Host "Secret Name: AZURE_SUBSCRIPTION_ID"
Write-Host "Value: $subscriptionId"
Write-Host ""

if ($swaApiKey) {
    Write-Host "Secret Name: AZURE_STATIC_WEB_APP_API_KEY"
    Write-Host "Value: (see output above - marked as sensitive)"
    Write-Host ""
}

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Optionally set secrets using GitHub CLI
if ($ghCliAvailable) {
    $setSecrets = Read-Host "Do you want to automatically set GitHub secrets? (y/n)"
    if ($setSecrets -eq "y") {
        Write-Host "Setting GitHub secrets..."
        
        gh secret set AZURE_CLIENT_ID --body $appId
        gh secret set AZURE_TENANT_ID --body $tenantId
        gh secret set AZURE_SUBSCRIPTION_ID --body $subscriptionId
        
        if ($swaApiKey) {
            gh secret set AZURE_STATIC_WEB_APP_API_KEY --body $swaApiKey
        }
        
        Write-Host "✓ GitHub secrets set successfully!" -ForegroundColor Green
    }
}
else {
    Write-Host "To manually add secrets:"
    Write-Host "1. Go to: https://github.com/$githubUser/$repoName/settings/secrets/actions"
    Write-Host "2. Click 'New repository secret'"
    Write-Host "3. Add each secret listed above"
}

Write-Host ""
Write-Host "You can now push to the main branch to trigger deployment!" -ForegroundColor Green
Write-Host ""

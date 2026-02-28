variable "resource_group_name" {
  description = "Name of the Azure Resource Group"
  type        = string
  default     = "kishan-portfolio-rg"
}

variable "location" {
  description = "Azure region for resources"
  type        = string
  default     = "westeurope"
}

variable "static_web_app_name" {
  description = "Name of the Azure Static Web App"
  type        = string
  default     = "kishan-portfolio-swa"
}

variable "sku_tier" {
  description = "SKU tier for Static Web App"
  type        = string
  default     = "Free"
  validation {
    condition     = contains(["Free", "Standard"], var.sku_tier)
    error_message = "SKU tier must be either Free or Standard"
  }
}

variable "sku_size" {
  description = "SKU size for Static Web App"
  type        = string
  default     = "Free"
  validation {
    condition     = contains(["Free", "Standard"], var.sku_size)
    error_message = "SKU size must be either Free or Standard"
  }
}

variable "tags" {
  description = "Tags to apply to all resources"
  type        = map(string)
  default = {
    Environment = "Production"
    Project     = "Portfolio"
    ManagedBy   = "Terraform"
    Owner       = "Kishan Kumar"
  }
}

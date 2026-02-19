export const profile = {
  name: "Kishan Kumar",
  role: "Cloud & DevOps Engineer | Azure Architect",
  location: "Egersund, Rogaland, Norway",
  summary:
    "Azure Architect and DevOps Engineer with 9+ years of experience designing, developing, and implementing cloud-native and DevOps solutions on Microsoft Azure. Strong in cloud adoption, IaC, CI/CD, security, and AI platforms.",
  contacts: {
    phone: "+91 9689851960",
    email: "kishankmr.kumar@gmail.com",
    linkedin: "https://www.linkedin.com/in/kishan-kumar-8a5b93b8",
    github: "https://github.com/kishankmr-kumar"
  },
  socialHandles: {
    linkedin: "kishan-kumar-8a5b93b8",
    github: "@kishankmr-kumar"
  },
  skills: {
    cloudDevOps: [
      "Microsoft Azure (AKS, ACI, App Services, Application Gateway, Storage, Monitor, Cosmos DB, Firewall, Network, Azure DevOps)",
      "Cloud Adoption Framework (CAF)",
      "Cloud Security & IAM",
      "Kubernetes, Docker, KEDA, Helm",
      "Infrastructure as Code (Terraform, ARM/Bicep, YAML, Helm)",
      "CI/CD (Azure DevOps, GitHub Actions, Bitbucket Pipelines)"
    ],
    aiPlatforms: [
      "Azure AI Services, Azure OpenAI, Azure AI Foundry",
      "AI Foundation & Platform Architecture",
      "AI Infrastructure Design & IaC (Terraform)",
      "Secure, scalable & governed AI workloads"
    ],
    automation: ["PowerShell", "Bash", "Azure CLI", "Python"],
    development: [
      "React",
      "ASP.NET",
      "Node.js",
      "REST APIs",
      "Python",
      "SQL Server",
      "SSMS, SSIS, ETL",
      "Power BI"
    ]
  },
  experience: [
    {
      title: "Senior Solution Consultant",
      company: "Vivicta",
      location: "Stavanger, Norway",
      period: "Oct 2024 – Present",
      bullets: [
        "Designed and implemented cloud architectures following Microsoft’s Cloud Adoption Framework (CAF).",
        "Led migration from legacy cloud services to Azure Kubernetes Service (AKS), reducing costs by 30%.",
        "Developed CI/CD pipelines for automated infrastructure deployment using Azure DevOps, Helm, and YAML.",
        "Managed Azure IAM policies to secure cloud environments and ensure compliance.",
        "Automated deployment processes with GitHub Actions and Terraform."
      ]
    },
    {
      title: "Azure Architect and Administrator",
      company: "Navtor AS",
      location: "Egersund, Norway",
      period: "Jan 2023 – Sep 2024",
      bullets: [
        "Led multiple projects designing and implementing Azure-based infrastructures for enterprise applications.",
        "Managed Azure cloud infrastructures with a focus on security, compliance, high availability, and cost optimization.",
        "Developed automation scripts for provisioning and monitoring using PowerShell, Bicep, and Terraform.",
        "Migrated on-premise applications to Azure, improving scalability and reducing operational costs.",
        "Designed backup and disaster recovery strategies for data resilience and business continuity.",
        "Created Infrastructure-as-Code templates with Bicep and ARM for repeatable deployments."
      ]
    },
    {
      title: "Senior Analyst",
      company: "Accenture",
      location: "Oslo, Norway",
      period: "May 2021 – Dec 2022",
      bullets: [
        "Worked on cloud and DevOps initiatives for enterprise customers on Microsoft Azure.",
        "Contributed to automation, CI/CD, and infrastructure modernization projects."
      ]
    },
    {
      title: "System Engineer / DevOps Engineer",
      company: "Tata Consultancy Services Limited",
      location: "Oslo, Norway",
      period: "Jun 2016 – May 2021",
      bullets: [
        "Implemented DevOps practices and CI/CD pipelines for large-scale enterprise systems.",
        "Supported cloud migration, automation, and production operations on Azure."
      ]
    }
  ],
  projects: [
    {
      name: "AI Foundation Platform – Architecture & Infrastructure Automation",
      customer: "AkerBP",
      role: "Cloud / AI Solution Architect",
      bullets: [
        "Architected and deployed an AI Foundation platform on Azure using Terraform for scalable, secure, automated AI workloads.",
        "Implemented Azure AI and Azure OpenAI services aligned with enterprise security, governance, and architecture standards."
      ],
      techStack: [
        "Terraform",
        "Azure",
        "Azure AI Services",
        "Azure OpenAI",
        "Azure Storage",
        "Azure Networking",
        "Entra ID",
        "Azure AI Foundry"
      ]
    },
    {
      name: "Tietoevry Tech Services – File Storage Migration to Microsoft Cloud",
      role: "Cloud Architect",
      bullets: [
        "Migrated on-prem file storage to Azure File Storage to improve scalability and accessibility.",
        "Designed cloud architecture and migration plan aligned with governance and security standards.",
        "Ensured seamless hybrid integration with minimal downtime and validated successful cutover."
      ],
      techStack: [
        "Azure File Storage",
        "OneDrive",
        "Azure Migrate",
        "PowerShell",
        "Azure CLI",
        "Entra ID",
        "AzCopy",
        "Storage Explorer"
      ]
    },
    {
      name: "Private Kubernetes Infrastructure Architecture and Deployment Pipeline",
      role: "Azure / Kubernetes Architect",
      bullets: [
        "Designed and deployed a secure private AKS cluster using hub-spoke architecture.",
        "Integrated Azure Firewall and VNET peering to enhance network security."
      ],
      techStack: [
        "AKS",
        "Azure Firewall",
        "Azure VNET",
        "Azure DevOps",
        "Helm",
        "Bicep"
      ]
    },
    {
      name: "Navtor AS – Weather App Migration using Kubernetes (AKS)",
      role: "Azure Tech Architect",
      bullets: [
        "Migrated legacy cloud services to AKS with Docker and KEDA, reducing costs by 50% and improving response time by 70%.",
        "Developed an automated CI/CD pipeline using Azure DevOps."
      ],
      techStack: [
        "AKS",
        "Docker",
        "ACR",
        "KEDA",
        "Helm",
        "Bicep",
        "YAML",
        "ACI",
        "PowerShell"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology",
      university: "Biju Patnaik University of Technology",
      location: "Bhubaneswar, India",
      period: "2012 – 2016"
    }
  ],
  certifications: [
    "AZ-305: Microsoft Certified Azure Solutions Architect Expert",
    "AI-102: Microsoft Certified Azure AI Engineer Associate",
    "Career Essentials in Generative AI by Microsoft and LinkedIn",
    "AZ-400: Designing and Implementing Microsoft DevOps Solutions – A Cloud Guru",
    "Kubernetes Administrator (2020)",
    "AZ-140: Microsoft Certified Azure Administrator Associate (2020)",
    "Introduction to Python for Data Science – Microsoft (2020)",
    "Big Data Foundation (204g)",
    "Other foundational finance and analytics certifications"
  ],
  awards: [
    "Best Team Member Award – DNB Bank ASA",
    "Emerging Leader Award – Tata Consultancy Services Pvt Ltd",
    "Hackathon Runner-up – DNB Bank ASA",
    "On the Spot Award – Tata Consultancy Services Pvt Ltd"
  ],
  hobbies: ["Music", "Playing guitar", "Reading"],
  languages: ["Norsk", "English"]
};

export const profile = {
  name: "Kishan Kumar",
  role: "Cloud & DevOps Engineer | Azure Architect",
  location: "Kolkata, India",
  summary:
    "Azure Architect and DevOps Engineer with 9+ years of experience designing, developing, and implementing cloud-native and DevOps solutions on Microsoft Azure. Strong in cloud adoption, IaC, CI/CD, security, and AI platforms.",
  contacts: {
    phone: "+91 9689851960",
    email: "kishankmr.kumar@gmail.com",
    linkedin: "https://www.linkedin.com/in/kishan-kumar-8a5b93b8",
    github: "https://github.com/1199692"
  },
  socialHandles: {
    linkedin: "kishan-kumar-8a5b93b8",
    github: "1199692"
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
    ],
    projectManagement: [
      "Agile & Scrum Methodologies",
      "Sprint Planning & Backlog Management",
      "Cross-functional Team Leadership",
      "Stakeholder Communication & Reporting",
      "Azure DevOps Boards & Work Items",
      "GitHub Projects & Issue Tracking",
      "Project Timeline & Resource Management"
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
      name: "Azure Landing Zone Infrastructure Management (Infrastructure as Code)",
      role: "Cloud Infrastructure Architect",
      bullets: [
        "Architected and managed enterprise-grade Azure Landing Zone environments using Infrastructure as Code (IaC) principles to ensure consistent, automated, and compliant deployments.",
        "Designed and implemented Azure Policy frameworks to enforce governance, security standards, and operational compliance across multi-subscription environments.",
        "Optimized and refactored IaC templates to enhance scalability, modularity, and alignment with best practices for cloud-native architectures.",
        "Collaborated with cross-functional teams to streamline infrastructure delivery pipelines, improving deployment efficiency and reducing operational overhead.",
        "Contributed to cloud governance and standardization, supporting organization-wide modernization and cost optimization initiatives."
      ],
      techStack: [
        "Azure Landing Zones",
        "Terraform",
        "Bicep",
        "Azure Policy",
        "Azure Blueprints",
        "Azure DevOps",
        "PowerShell",
        "Azure CLI",
        "Git",
        "YAML"
      ]
    },
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
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Electrical and Electronics Engineering",
      university: "Biju Patnaik University of Technology",
      location: "Bhubaneswar, India",
      period: "2012 – 2016",
      link: "https://www.bput.ac.in/",
      highlights: [
        "Strong analytical and problem-solving skills",
        "Foundation in systems design and architecture",
        "Electrical systems and automation principles"
      ]
    }
  ],
  certifications: [
    {
      name: "AZ-305: Microsoft Certified Azure Solutions Architect Expert",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/kishankumar-7879/5A271390DF72B5B8?sharingId=B41DEF08A5D77076"
    },
    {
      name: "AI-102: Microsoft Certified Azure AI Engineer Associate",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/kishankumar-7879/C762606A9393C31B?sharingId=B41DEF08A5D77076"
    },
    {
      name: "AZ-104: Microsoft Certified Azure Administrator Associate",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/kishankumar-7879/D8663CD9BE973371?sharingId=B41DEF08A5D77076"
    },
    {
      name: "AI-900: Microsoft Certified Azure AI Fundamentals",
      link: "https://learn.microsoft.com/en-us/users/kishankumar-7879/credentials/certification/azure-ai-fundamentals?tab=credentials-tab"
    },
    {
      name: "AZ-900: Microsoft Certified Azure Fundamentals",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/kishankumar-7879/4A8F6B97030FD605?sharingId=B41DEF08A5D77076"
    },
    {
      name: "AZ-400: Designing and Implementing Microsoft DevOps Solutions – A Cloud Guru",
      link: "https://drive.google.com/file/d/1gIo5vL3QlW7wMFXgBJs4xXXntl3wgPGD/view"
    },
    {
      name: "Career Essentials in Generative AI by Microsoft and LinkedIn",
      link: "https://www.linkedin.com/learning/certificates/856b8b8a9cdecb71f82c1389c7a883b3ef7abb79e09a17d38c695c7f9eb0b064"
    },
    {
      name: "Kubernetes Administrator",
      link: "https://www.edureka.co/certificates/mycertificate/b459ca9624fcf6807c900ea71a98cd00"
    },
    {
      name: "Big Data Foundation (204g)",
      link: "https://www.credly.com/badges/e784ddf9-f9d1-4cc3-be28-886031ef6062/public_url"
    },
    {
      name: "Introduction to Python for Data Science – Microsoft",
      link: "https://courses.edx.org/certificates/fed1ad590f22430a925c681792cfdfca"
    },
    {
      name: "Other foundational finance and analytics certifications",
      link: null
    }
  ],
  awards: [
    {
      title: "Best Team Member Award",
      organization: "DNB Bank ASA",
      year: "2021",
      description: "Recognized for exceptional collaboration, dedication, and outstanding contributions to team success"
    },
    {
      title: "Emerging Leader Award",
      organization: "Tata Consultancy Services Pvt Ltd",
      year: "2019",
      description: "Acknowledged for demonstrating leadership potential and driving innovation in cloud projects"
    },
    {
      title: "Hackathon Runner-up",
      organization: "DNB Bank ASA",
      year: "2022",
      description: "Secured second place in internal hackathon for developing an innovative cloud automation solution"
    },
    {
      title: "On the Spot Award",
      organization: "Tata Consultancy Services Pvt Ltd",
      year: "2018",
      description: "Awarded for quick problem-solving and exceptional performance in critical production issues"
    }
  ],
  hobbies: ["Music", "Playing guitar", "Reading"],
  languages: ["Norsk", "English"]
};

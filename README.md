# Kishan Kumar - Cloud Architect & DevOps Engineer

[![Azure Solutions Architect](https://img.shields.io/badge/Microsoft-Azure%20Solutions%20Architect-blue?style=flat&logo=microsoft-azure)](https://learn.microsoft.com/en-us/credentials/certifications/azure-solutions-architect/)
[![Azure AI Engineer](https://img.shields.io/badge/Microsoft-Azure%20AI%20Engineer%20Associate-blueviolet?style=flat&logo=microsoft-azure)](https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/)

Azure Architect with 10+ years experience designing enterprise-grade cloud-native solutions on Microsoft Azure. Specializing in:

- **Cloud Architecture**: AKS, ACI, App Services, Cosmos DB, Networking
- **Infrastructure as Code**: Terraform, Bicep, ARM, Helm
- **CI/CD**: Azure DevOps, GitHub Actions, Kubernetes deployments
- **AI Platforms**: Azure AI Services, Azure OpenAI, AI Foundation platforms
- **Security**: IAM, governance, compliance, Azure Firewall

## 🌐 Live Portfolio
[![Portfolio Website](https://img.shields.io/badge/Portfolio-Visit%20Site-blue?style=flat&logo=github&logoColor=white)](https://kishan-vivicta.github.io/kishan-portfolio)

## 🚀 Features

### Multi-Page Architecture
- **Dynamic Routing**: Navigate between dedicated pages for About, Skills, Experience, Projects, Education, Certifications, Awards, and Contact
- **Smooth Transitions**: Professional page transitions and animations
- **Modern UI/UX**: Enhanced design with gradient effects, hover animations, and professional styling
- **Responsive Design**: Optimized for all devices - desktop, tablet, and mobile
- **Fast Performance**: Built with React + Vite for lightning-fast load times
- **SEO Optimized**: Proper meta tags and routing for better search visibility

### GitHub Pages Ready
- Single Page Application (SPA) routing configured for GitHub Pages
- Custom 404 handling for seamless navigation
- Automatic deployment workflow

## 🛠️ Technology Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router v6
- **Styling**: Modern CSS with animations and transitions
- **Hosting**: GitHub Pages
- **Build Tool**: Vite for fast builds and hot module replacement

## 📦 Installation & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 🚀 Deployment Instructions

### First-Time Setup

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select the `gh-pages` branch
   - Save the settings

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

### Updating Your Portfolio

After making changes to your portfolio:

```bash
# 1. Test locally first
npm run dev

# 2. Build and deploy to GitHub Pages
npm run deploy
```

The `npm run deploy` command will:
- Build your application
- Create/update the `gh-pages` branch
- Deploy to GitHub Pages automatically

### Configuration Notes

- The `basename` in App.jsx is set to `/kishan-portfolio` (your repo name)
- The `homepage` in package.json matches your GitHub Pages URL
- The vite.config.js has the correct base path

## 📂 Project Structure

```
kishan-portfolio/
├── public/
│   └── 404.html              # GitHub Pages SPA routing handler
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Awards.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── ScrollToTopOnMount.jsx
│   ├── pages/
│   │   ├── HomePage.jsx       # Landing page with navigation cards
│   │   ├── AboutPage.jsx
│   │   ├── SkillsPage.jsx
│   │   ├── ExperiencePage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── EducationPage.jsx
│   │   ├── CertificationsPage.jsx
│   │   ├── AwardsPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── NotFoundPage.jsx   # Custom 404 page
│   ├── data/
│   │   └── profileData.js     # Your portfolio data
│   ├── App.jsx                # Main app with routing
│   ├── main.jsx
│   └── index.css              # Global styles and animations
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Featured Projects

### 🧠 AI Foundation Platform (AkerBP)
Architected secure, scalable AI workloads using Azure AI + Terraform IaC

### 🚀 Weather App Migration (Navtor AS)
Migrated to AKS + Docker + KEDA → **50% cost reduction, 70% faster response**

### ☁️ File Storage Migration (Tietoevry)
On-prem → Azure File Storage with zero-downtime hybrid integration

## Experience
- Senior Solution Consultant - Vivicta, Norway (2024-Now)
- Azure Architect - Navtor AS, Norway (2023-2024)
- Senior Analyst - Accenture, Norway (2021-2022)
- System Engineer - TCS, Norway (2016-2021)

## Certifications
- AZ-305: Azure Solutions Architect Expert
- AI-102: Azure AI Engineer Associate
- AZ-400: DevOps Engineer Expert
- Kubernetes Administrator

## Connect
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/kishan-kumar-8a5b93b8)
[![Email](https://img.shields.io/badge/Email-Contact%20Me-green?style=flat&logo=gmail)](mailto:kishankmr.kumar@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-Projects-white?style=flat&logo=github)](https://github.com/kishankmr-kumar)

**Open to opportunities in Azure Architecture, Kubernetes, AI Platforms & DevOps**

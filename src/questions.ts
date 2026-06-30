export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  category: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "A developer is designing a SitecoreAI CMS architecture for a multi-site implementation. What approach ensures scalability?",
    options: [
      "Following Sitecore's recommended multi-tenancy setup and implement structured content modeling",
      "Creating a separate Sitecore instance for each site to avoid complexity",
      "Disabling user roles to allow unrestricted content access across all sites.",
      "Storing all website content in a single content repository without structuring site collections"
    ],
    correctIndex: 0,
    category: "Architecture"
  },
  {
    id: 2,
    question: "When setting up a SitecoreAI project, which of the following best describes a structured development workflow?",
    options: [
      "Relying only on manual deployments without automation",
      "Ignoring branch management strategies and allow all developers to push directly to the main branch",
      "Deploying changes directly to production without using a version control system",
      "Using Git for version control, configure CI/CD pipelines, and follow Sitecore development best practices"
    ],
    correctIndex: 3,
    category: "Development Workflow"
  },
  {
    id: 3,
    question: "Which factor is most important when designing a SitecoreAI CMS content architecture for a global enterprise?",
    options: [
      "Implementing a well-structured content tree with localization support",
      "Avoiding configuring language versions to maintain a single language site",
      "Storing all content manually in HTML fields to allow unrestricted formatting",
      "Using a single content structure for all regions to simplify maintenance"
    ],
    correctIndex: 0,
    category: "Architecture"
  },
  {
    id: 4,
    question: "What is a key advantage of using SitecoreAI CMS's headless architecture?",
    options: [
      "Flexibility in using modern front-end frameworks like Next.js while delivering content efficiently",
      "Ensuring all components are hardcoded, making content updates more secure",
      "Reducing the need for structured content modeling",
      "Requiring that all content is managed within the Sitecore Experience Editor without external APIs"
    ],
    correctIndex: 0,
    category: "Architecture"
  },
  {
    id: 5,
    question: "Which approach should a developer use to ensure a smooth SitecoreAI CMS deployment process?",
    options: [
      "Skipping testing environments to speed up deployments",
      "Deploying updates manually to production without using a staging environment",
      "Using Sitecore Cloud CLI and automate deployment workflows via CI/CD pipelines",
      "Modifying live content directly in production without version control"
    ],
    correctIndex: 2,
    category: "Deployment"
  },
  {
    id: 6,
    question: "When troubleshooting a failed deployment in SitecoreAI, what is the best first step?",
    options: [
      "Delete and recreate the environment without diagnosing the issue.",
      "Rely on user feedback without checking the logs.",
      "Review the deployment logs in the SitecoreAI Cloud Deploy app.",
      "Immediately restart the entire Sitecore instance."
    ],
    correctIndex: 2,
    category: "Deployment"
  },
  {
    id: 7,
    question: "Which method provides the most automated and flexible approach to provisioning new SitecoreAI environments?",
    options: [
      "Configuring environment settings individually for each developer without automation",
      "Manually creating each environment through the Sitecore Cloud Portal UI",
      "Utilizing the Sitecore Cloud CLI or REST API for automated provisioning",
      "Storing environment configurations within the database and manually update settings"
    ],
    correctIndex: 2,
    category: "Deployment"
  },
  {
    id: 8,
    question: "What is the primary purpose of using environment variables in SitecoreAI deployments?",
    options: [
      "To ensure that every deployment requires manual configuration",
      "To store API keys publicly for easier developer access",
      "To define configurations dynamically and avoid hardcoding sensitive data",
      "To disable security settings for improved performance"
    ],
    correctIndex: 2,
    category: "Deployment"
  },
  {
    id: 9,
    question: "How should a team manage deployment across multiple SitecoreAI environments to maintain code stability?",
    options: [
      "Avoid using automated testing and rely on manual verification only.",
      "Deploy all changes directly to production without a staging phase.",
      "Allow every developer to push code changes to the live environment manually.",
      "Use CI/CD pipelines to automate testing and deploy changes incrementally."
    ],
    correctIndex: 3,
    category: "Deployment"
  },
  {
    id: 10,
    question: "When configuring automated deployments for a SitecoreAI project, how can a developer ensure that only tested code is deployed to production?",
    options: [
      "Allow all developers to deploy from feature branches to accelerate iteration speed.",
      "Use the Sitecore CLI to push untested changes directly to the production environment.",
      "Configure CI/CD pipelines to deploy only from a protected main branch after successful build and test validation.",
      "Disable automated pipelines and rely on manual verification for each deployment."
    ],
    correctIndex: 2,
    category: "Deployment"
  }
];

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
  },
  {
    id: 11,
    question: "A developer wants to trigger an external system when content is published in SitecoreAI CMS. What is the best way to achieve this?",
    options: [
      "Use a custom Sitecore module instead of webhooks for automation.",
      "Store content updates in a database and query them periodically from the external system.",
      "Manually notify the external system after each content update.",
      "Use Sitecore webhooks to send an HTTP request to the external system when a publish event occurs."
    ],
    correctIndex: 3,
    category: "Integration"
  },
  {
    id: 12,
    question: "How can a developer ensure their GraphQL queries retrieve the most up-to-date published content?",
    options: [
      "Use REST APIs instead of GraphQL.",
      "Use the Delivery API instead of the Preview API for live content.",
      "Fetch data directly from the Sitecore Content Management database.",
      "Rely on caching to automatically update content when changes occur."
    ],
    correctIndex: 1,
    category: "GraphQL"
  },
  {
    id: 13,
    question: "A developer needs to authenticate API requests for retrieving content from Sitecore Experience Edge. What is required?",
    options: [
      "An API key generated from the SitecoreAI Deploy app",
      "A manual login session within the Content Editor",
      "A direct connection to the Sitecore database",
      "A personal developer access token instead of API authentication"
    ],
    correctIndex: 0,
    category: "Integration"
  },
  {
    id: 14,
    question: "A developer wants to update item fields in SitecoreAI CMS programmatically. Which API should they use?",
    options: [
      "Authoring and Management GraphQL API",
      "Preview API and Authoring GraphQL API",
      "Edge Token API and Authoring GraphQL API",
      "Delivery API and Management GraphQL API"
    ],
    correctIndex: 0,
    category: "GraphQL"
  },
  {
    id: 15,
    question: "A developer needs to trigger an external process whenever content is published in SitecoreAI CMS. What should they configure?",
    options: [
      "A database listener for item changes",
      "A scheduled script that checks for updates",
      "A manual approval step after publishing",
      "A webhook that runs on publish events"
    ],
    correctIndex: 3,
    category: "Integration"
  },
  {
    id: 16,
    question: "Which API should a developer use to deliver live, published content to a front-end app?",
    options: [
      "Edge Token API",
      "Experience Edge Delivery API",
      "Authoring and Management API",
      "Sitecore CLI API"
    ],
    correctIndex: 1,
    category: "Integration"
  },
  {
    id: 17,
    question: "When designing a content model for SitecoreAI CMS, which is the best practice?",
    options: [
      "Avoiding using field validation to give content authors complete freedom",
      "Storing all content in a single large rich text field for flexibility",
      "Using modular content templates with well-defined field structures",
      "Using a single template for all content types to reduce complexity"
    ],
    correctIndex: 2,
    category: "Content Modeling"
  },
  {
    id: 18,
    question: "How should a developer ensure that a content template follows structured content modeling?",
    options: [
      "Use base templates to define reusable fields and maintain consistency.",
      "Create unique templates for every content item with no shared fields.",
      "Store all data in a single JSON field to increase flexibility.",
      "Only allow text fields to avoid complex content structures."
    ],
    correctIndex: 0,
    category: "Content Modeling"
  },
  {
    id: 19,
    question: "What is the main advantage of using Sitecore Standard Values in a content model?",
    options: [
      "They allow content to be stored as unstructured data.",
      "They enforce strict restrictions on content editors.",
      "They provide default values and configurations for new items.",
      "They replace the need for base templates."
    ],
    correctIndex: 2,
    category: "Content Modeling"
  },
  {
    id: 20,
    question: "A content author needs to relate articles to a product page. What field type should they use?",
    options: [
      "Single-line text field for manually entering article names",
      "Droplist field limited to one article selection",
      "Multilist field for selecting related articles",
      "Rich text field with manually entered hyperlinks"
    ],
    correctIndex: 2,
    category: "Content Modeling"
  },
  {
    id: 21,
    question: "Why should content authors use numbered versions in SitecoreAI CMS?",
    options: [
      "To create a new content template for each version",
      "To duplicate content across multiple pages manually",
      "To manage and revert content updates while keeping historical changes",
      "To avoid using workflows for content approval"
    ],
    correctIndex: 2,
    category: "Content Management"
  },
  {
    id: 22,
    question: "Which approach ensures consistent fields across multiple templates in SitecoreAI CMS?",
    options: [
      "Using base templates to share common fields",
      "Duplicating fields manually in each template",
      "Avoiding inheritance to keep templates simple",
      "Storing shared data in rich text fields"
    ],
    correctIndex: 0,
    category: "Content Modeling"
  },
  {
    id: 23,
    question: "What is the main purpose of using Standard Values in a data template?",
    options: [
      "Disabling inheritance on templates",
      "Restricting authors from editing fields",
      "Replacing insert options entirely",
      "Providing default settings for new items"
    ],
    correctIndex: 3,
    category: "Content Modeling"
  },
  {
    id: 24,
    question: "How can a developer define which item types can be created under a parent item?",
    options: [
      "Use a field restriction on the child item.",
      "Configure Insert Options on the parent template.",
      "Create a custom workflow rule.",
      "Add manual validation to authors"
    ],
    correctIndex: 1,
    category: "Content Modeling"
  },
  {
    id: 25,
    question: "Which feature helps developers map templates to schema fields in Experience Edge?",
    options: [
      "Workflow state triggers",
      "Rich text field tokenization",
      "Field mappings in template definitions",
      "JSON serialization rules"
    ],
    correctIndex: 2,
    category: "Content Modeling"
  },
  {
    id: 26,
    question: "Why should developers apply best practices for field naming and data resolution?",
    options: [
      "To increase field count for flexibility",
      "To ensure predictable schema mapping and content delivery",
      "To reduce dependency on templates",
      "To allow arbitrary author input"
    ],
    correctIndex: 1,
    category: "Content Modeling"
  },
  {
    id: 27,
    question: "How can a developer enable content authors to modify components dynamically in SitecoreAI CMS Page Builder?",
    options: [
      "Restrict content authors to pre-defined static layouts.",
      "Use placeholders and configure allowed components in layout settings.",
      "Disable the Pages editor to simplify content management.",
      "Hardcode all page components to ensure consistency."
    ],
    correctIndex: 1,
    category: "Page Builder"
  },
  {
    id: 28,
    question: "Which approach should a developer take when creating reusable renderings in SitecoreAI CMS?",
    options: [
      "Implement separate renderings for each page to increase flexibility.",
      "Hardcode all renderings into the page templates.",
      "Avoid using placeholder settings to simplify configurations.",
      "Use Headless SXA components with rendering variants."
    ],
    correctIndex: 3,
    category: "Page Builder"
  },
  {
    id: 29,
    question: "What is the benefit of defining component variants in SitecoreAI CMS?",
    options: [
      "It allows different display options for the same component without code changes.",
      "It eliminates the requirement for configuring rendering parameters.",
      "It restricts the ability to personalize or modify component content.",
      "It enforces predefined layout structures for consistent design."
    ],
    correctIndex: 0,
    category: "Page Builder"
  },
  {
    id: 30,
    question: "What is the purpose of using placeholder settings in SitecoreAI CMS?",
    options: [
      "To enforce global layout restrictions across all components",
      "To automatically generate new pages based on existing templates",
      "To control which components can be placed in specific areas of a layout",
      "To prevent content authors from modifying layouts"
    ],
    correctIndex: 2,
    category: "Page Builder"
  },
  {
    id: 31,
    question: "Which feature lets authors add components only to approved areas of a page?",
    options: [
      "CSS grid locking",
      "Placeholder settings with allowed controls",
      "Fixed page templates",
      "Dynamic variants for layout restrictions"
    ],
    correctIndex: 1,
    category: "Page Builder"
  },
  {
    id: 32,
    question: "What is the advantage of using rendering variants in SitecoreAI CMS?",
    options: [
      "Limiting personalization options",
      "Creating unique renderings per page",
      "Enforcing single design patterns",
      "Displaying the same component in different layouts without code changes"
    ],
    correctIndex: 3,
    category: "Page Builder"
  },
  {
    id: 33,
    question: "Which tool should developers use to build simple coded low or no-code components visually?",
    options: [
      "Experience Editor",
      "Component Builder",
      "Headless CLI",
      "Rendering Debugger"
    ],
    correctIndex: 1,
    category: "Page Builder"
  },
  {
    id: 34,
    question: "How can developers manage reusable layouts across multiple pages?",
    options: [
      "Clone pages manually.",
      "Create Page Designs and Partial Designs.",
      "Use a single master template for all pages.",
      "Embed layouts in components."
    ],
    correctIndex: 1,
    category: "Page Builder"
  },
  {
    id: 35,
    question: "When should coded components be used instead of Component Builder components?",
    options: [
      "When authors need quick visual changes",
      "When layouts are static",
      "When complex logic or custom data sources are required",
      "When templates lack variants"
    ],
    correctIndex: 2,
    category: "Page Builder"
  },
  {
    id: 36,
    question: "What defines how a rendering connects to content in SitecoreAI CMS?",
    options: [
      "Datasource location",
      "Static layout bindings",
      "Branch templates",
      "Workflow states"
    ],
    correctIndex: 0,
    category: "Page Builder"
  },
  {
    id: 37,
    question: "How can a developer enable additional devices in the SitecoreAI CMS Page Builder editor?",
    options: [
      "Use a third-party Sitecore module to extend device support.",
      "Modify the Sitecore database manually to add new devices.",
      "Configure device width, visibility, and an icon in the settings.",
      "Override default settings in the Experience Editor."
    ],
    correctIndex: 2,
    category: "Page Builder"
  },
  {
    id: 38,
    question: "Which feature allows content authors to rearrange components dynamically in SitecoreAI CMS Page Builder?",
    options: [
      "Dynamic placeholders configured in the layout",
      "Predefined templates without placeholder options",
      "Static content blocks with no rearrangement capabilities",
      "Hardcoded page layouts with fixed components"
    ],
    correctIndex: 0,
    category: "Page Builder"
  },
  {
    id: 39,
    question: "What is the primary function of the SitecoreAI CMS Page Builder?",
    options: [
      "To generate HTML pages without requiring structured content management",
      "To provide a user-friendly interface for arranging and editing page components",
      "To restrict content authors from editing page layouts",
      "To directly modify the Sitecore database schema"
    ],
    correctIndex: 1,
    category: "Page Builder"
  },
  {
    id: 40,
    question: "How should a developer handle grid system changes in an existing SitecoreAI CMS Page Builder project?",
    options: [
      "Delete and recreate all affected pages manually.",
      "Replace all existing grid structures with new ones immediately.",
      "Ensure updates are applied carefully to avoid breaking existing layouts.",
      "Avoid using grid systems to simplify content management."
    ],
    correctIndex: 2,
    category: "Page Builder"
  },
  {
    id: 41,
    question: "Which ensures proper rendering of SitecoreAI CMS Page Builder components across different devices?",
    options: [
      "Using responsive layouts and configure breakpoints for different screen sizes",
      "Relying on content authors to manually adjust layouts for different devices",
      "Avoiding using dynamic placeholders to maintain consistent layouts",
      "Restricting all pages to a single fixed-width layout"
    ],
    correctIndex: 0,
    category: "Page Builder"
  },
  {
    id: 42,
    question: "Which environment variable must a developer set to connect a local Next.js app to preview the content of a SitecoreAI CMS instance?",
    options: [
      "SITECORE_EDGE_SITE_ID",
      "SITECORE_CLOUD_DEPLOYMENT_KEY",
      "SITECORE_GRAPHQL_SCHEMA_ID",
      "SITECORE_EDGE_CONTEXT_ID"
    ],
    correctIndex: 3,
    category: "Development Workflow"
  },
  {
    id: 43,
    question: "A front-end developer is building a Next.js application for SitecoreAI CMS. What command should they use to fetch the latest live content?",
    options: [
      "npm run deploy",
      "npm run dev",
      "npm run start:disconnected",
      "npm run build"
    ],
    correctIndex: 1,
    category: "Development Workflow"
  },
  {
    id: 44,
    question: "Which Sitecore Content SDK component should be used to ensure images are responsive and editable in SitecoreAI CMS?",
    options: [
      "<MediaField>",
      "<img>",
      "<NextImage>",
      "<RichText>"
    ],
    correctIndex: 2,
    category: "Development Workflow"
  },
  {
    id: 45,
    question: "What is the best rendering strategy for a component that displays frequently changing stock market data in SitecoreAI CMS?",
    options: [
      "Incremental Static Regeneration (ISR) with a long revalidation period",
      "Server-Side Rendering (SSR) to update content on each request",
      "Client-side JavaScript updates without server interaction",
      "Static Site Generation (SSG) with no updates"
    ],
    correctIndex: 1,
    category: "Development Workflow"
  },
  {
    id: 46,
    question: "How can a developer verify that their GraphQL queries retrieve published content from Experience Edge?",
    options: [
      "Query content directly from the Sitecore database.",
      "Ensure they are using the correct API key and querying the Delivery API.",
      "Use the Preview API for published content.",
      "Disable caching and refresh the page repeatedly."
    ],
    correctIndex: 1,
    category: "GraphQL"
  },
  {
    id: 47,
    question: "What command runs a Next.js SitecoreAI CMS project in connected mode?",
    options: [
      "npm run preview",
      "npm run dev:local",
      "npm run edge",
      "npm run start:connected"
    ],
    correctIndex: 3,
    category: "Development Workflow"
  },
  {
    id: 48,
    question: "What rendering strategy ensures the latest data appears for rapidly changing content?",
    options: [
      "Incremental Static Regeneration (ISR)",
      "Static Site Generation (SSG)",
      "Server-Side Rendering (SSR)",
      "Client-Side Rendering only"
    ],
    correctIndex: 2,
    category: "Development Workflow"
  },
  {
    id: 49,
    question: "Which Sitecore Content SDK utility displays editable fields in SitecoreAI CMS Page Builder?",
    options: [
      "Inline HTML tags",
      "Custom Next.js wrappers",
      "Field helpers from Content SDK",
      "JSON mapping files"
    ],
    correctIndex: 2,
    category: "Development Workflow"
  },
  {
    id: 50,
    question: "How can developers integrate personalization data into a Next.js app?",
    options: [
      "Use the Content SDK to fetch analytics and personalized content.",
      "Query the database directly.",
      "Add tracking scripts manually to HTML.",
      "Build a custom API for each page."
    ],
    correctIndex: 0,
    category: "Development Workflow"
  },
  {
    id: 51,
    question: "Which configuration allows multiple locales for a single site in SitecoreAI CMS?",
    options: [
      "Using unique templates for each language",
      "Disabling API multisite features",
      "Defining multilocale settings in the Content SDK configuration",
      "Creating separate projects per locale"
    ],
    correctIndex: 2,
    category: "Architecture"
  },
  {
    id: 52,
    question: "How should a developer deploy serialized Sitecore items in a structured way?",
    options: [
      "Apply changes directly to the database without serialization.",
      "Store serialized content files outside of version control.",
      "Use the Sitecore CLI to push serialized content and track changes via Git.",
      "Manually copy database entries from one instance to another."
    ],
    correctIndex: 2,
    category: "Deployment"
  },
  {
    id: 53,
    question: "Which Sitecore CLI command is used to push serialized items from a local environment to SitecoreAI CMS?",
    options: [
      "sitecore deploy",
      "sitecore ser pull",
      "sitecore ser push",
      "sitecore update"
    ],
    correctIndex: 2,
    category: "Deployment"
  },
  {
    id: 54,
    question: "What is the primary benefit of using Sitecore Content Serialization (SCS) in SitecoreAI CMS?",
    options: [
      "Storing content and configurations in version control for deployment",
      "Replacing database backups entirely",
      "Only supporting on-premise installations",
      "Removing the need for content workflows"
    ],
    correctIndex: 0,
    category: "Deployment"
  },
  {
    id: 55,
    question: "Which Sitecore CLI command pushes serialized items from a local environment to SitecoreAI CMS?",
    options: [
      "sitecore update",
      "sitecore deploy",
      "sitecore ser pull",
      "sitecore ser push"
    ],
    correctIndex: 3,
    category: "Deployment"
  },
  {
    id: 56,
    question: "When should developers use Sitecore Serialization instead of manual content edits?",
    options: [
      "When promoting structured changes across multiple environments",
      "When making small text updates in Experience Editor",
      "When adjusting analytics settings",
      "When publishing media items only"
    ],
    correctIndex: 0,
    category: "Deployment"
  },
  {
    id: 57,
    question: "What is a critical security best practice when configuring authentication in SitecoreAI?",
    options: [
      "Disabling authentication for faster access to content",
      "Using API keys and authentication tokens instead of hardcoded credentials",
      "Storing credentials directly in public Git repositories",
      "Using a shared admin account for all developers"
    ],
    correctIndex: 1,
    category: "Security"
  },
  {
    id: 58,
    question: "Which practice helps prevent unauthorized access to SitecoreAI environments?",
    options: [
      "Disabling audit logging to improve performance",
      "Granting all users full admin rights to simplify management",
      "Enforcing least privilege access and use role-based permissions",
      "Storing passwords in plain text for easy retrieval"
    ],
    correctIndex: 2,
    category: "Security"
  },
  {
    id: 59,
    question: "How can developers secure API communication in SitecoreAI?",
    options: [
      "Store tokens in front-end code for easier debugging.",
      "Allow unrestricted API access for performance.",
      "Use HTTPS and authenticate requests with secure tokens.",
      "Disable authentication checks in staging environments."
    ],
    correctIndex: 2,
    category: "Security"
  },
  {
    id: 60,
    question: "What is the recommended way to manage API keys in a SitecoreAI project?",
    options: [
      "Storing them securely in environment variables or a secrets manager",
      "Saving API keys in public content items",
      "Emailing API keys to all contributors for convenience",
      "Publishing API keys within source code for developer access"
    ],
    correctIndex: 0,
    category: "Security"
  }
];

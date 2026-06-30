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
    question: "What is Sitecore XP primarily used for?",
    options: [
      "Database management",
      "Digital experience and content management",
      "Network security",
      "Cloud infrastructure"
    ],
    correctIndex: 1,
    category: "Core Concepts"
  },
  {
    id: 2,
    question: "Which rendering technology is used in Sitecore's headless architecture?",
    options: [
      "Web Forms",
      "MVC only",
      "JSS (JavaScript Services)",
      "Razor Pages"
    ],
    correctIndex: 2,
    category: "Architecture"
  },
  {
    id: 3,
    question: "What does Sitecore's 'Experience Editor' allow you to do?",
    options: [
      "Edit database schemas",
      "Edit content inline in a WYSIWYG interface",
      "Manage server deployments",
      "Configure network routing"
    ],
    correctIndex: 1,
    category: "Content Management"
  },
  {
    id: 4,
    question: "What is a Sitecore 'Item'?",
    options: [
      "A server configuration file",
      "A CSS stylesheet",
      "A unit of content stored in the Sitecore tree",
      "A JavaScript module"
    ],
    correctIndex: 2,
    category: "Core Concepts"
  },
  {
    id: 5,
    question: "Which Sitecore feature enables personalization of content based on visitor behavior?",
    options: [
      "Content Hub",
      "Experience Personalization / xDB",
      "Sitecore Forms",
      "Sitecore Search"
    ],
    correctIndex: 1,
    category: "Personalization"
  },
  {
    id: 6,
    question: "What is the Sitecore 'Master' database used for?",
    options: [
      "Storing analytics data",
      "Storing published live content only",
      "Authoring and staging content before publishing",
      "Caching rendered HTML"
    ],
    correctIndex: 2,
    category: "Architecture"
  },
  {
    id: 7,
    question: "Which Sitecore database serves content to website visitors?",
    options: [
      "Master",
      "Core",
      "Web",
      "Reporting"
    ],
    correctIndex: 2,
    category: "Architecture"
  },
  {
    id: 8,
    question: "What is Sitecore's 'Layout' in the context of rendering?",
    options: [
      "A CSS file that controls page styles",
      "A template that defines the outer structure of a page with placeholder slots",
      "A database schema definition",
      "A deployment configuration file"
    ],
    correctIndex: 1,
    category: "Rendering"
  },
  {
    id: 9,
    question: "What is a Sitecore 'Rendering'?",
    options: [
      "A visual component that outputs HTML for part of a page",
      "A server-side caching rule",
      "A content import script",
      "A deployment pipeline step"
    ],
    correctIndex: 0,
    category: "Rendering"
  },
  {
    id: 10,
    question: "What does xDB stand for in Sitecore?",
    options: [
      "Extended Database",
      "Experience Database",
      "External Data Bridge",
      "XML Data Builder"
    ],
    correctIndex: 1,
    category: "Analytics"
  },
  {
    id: 11,
    question: "What is a Sitecore 'Template'?",
    options: [
      "A pre-built page design",
      "A definition of fields that Items of that type will have",
      "A JavaScript component",
      "A deployment script"
    ],
    correctIndex: 1,
    category: "Core Concepts"
  },
  {
    id: 12,
    question: "Which Sitecore module handles form creation and data capture?",
    options: [
      "Sitecore Flow",
      "Sitecore Forms",
      "Sitecore Capture",
      "Sitecore Input"
    ],
    correctIndex: 1,
    category: "Modules"
  },
  {
    id: 13,
    question: "What is the role of the Sitecore 'Pipeline'?",
    options: [
      "Network data transfer between servers",
      "A sequence of processors that handle Sitecore requests and events",
      "A CI/CD deployment tool",
      "A content import utility"
    ],
    correctIndex: 1,
    category: "Architecture"
  },
  {
    id: 14,
    question: "What is Sitecore SXA (Sitecore Experience Accelerator)?",
    options: [
      "A performance monitoring tool",
      "A set of reusable components and page designs for faster site building",
      "A cloud hosting service",
      "A JavaScript testing framework"
    ],
    correctIndex: 1,
    category: "Modules"
  },
  {
    id: 15,
    question: "In Sitecore JSS, what does 'disconnected mode' allow developers to do?",
    options: [
      "Work without a network connection to the internet",
      "Develop frontend components without a running Sitecore instance",
      "Disable user authentication",
      "Run Sitecore in offline mode for visitors"
    ],
    correctIndex: 1,
    category: "Architecture"
  },
  {
    id: 16,
    question: "What is a Sitecore 'Placeholder'?",
    options: [
      "A default image used when no image is uploaded",
      "A region in a layout where renderings can be dynamically added",
      "A draft content item",
      "A temporary database record"
    ],
    correctIndex: 1,
    category: "Rendering"
  },
  {
    id: 17,
    question: "Which Sitecore tool is used to manage content workflows?",
    options: [
      "Workbox",
      "Task Manager",
      "Content Scheduler",
      "Approval Hub"
    ],
    correctIndex: 0,
    category: "Content Management"
  },
  {
    id: 18,
    question: "What is Sitecore CDP?",
    options: [
      "Content Delivery Pipeline",
      "Customer Data Platform",
      "Component Design Panel",
      "Cloud Deployment Processor"
    ],
    correctIndex: 1,
    category: "Core Concepts"
  },
  {
    id: 19,
    question: "What does 'publishing' do in Sitecore?",
    options: [
      "Exports content to a CSV file",
      "Moves approved content from the Master database to the Web database",
      "Deploys the Sitecore application to a server",
      "Sends email notifications to authors"
    ],
    correctIndex: 1,
    category: "Content Management"
  },
  {
    id: 20,
    question: "What is Sitecore Personalize?",
    options: [
      "A tool for personalizing developer workstations",
      "A decisioning and experimentation platform for real-time personalization",
      "A CSS theming engine",
      "A user authentication service"
    ],
    correctIndex: 1,
    category: "Personalization"
  }
];

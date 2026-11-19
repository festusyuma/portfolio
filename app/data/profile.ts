export const CONTACT_EMAIL = "info@festusyuma.com";

export const profile = {
  name: "Festus Agboma",
  handle: "festusyuma",
  title: "Senior Software Engineer",
  location: "Lagos, Nigeria · Remote",
  summary:
    "I build the parts of software most people never see: backend services, data pipelines, and the cloud infrastructure they run on. 7+ years shipping Rust, Node.js and AWS systems that stay fast and stay cheap as they grow, including Bambai, a learning platform reaching 10,000+ students across 100+ African schools; Skillpaddy, which has trained 5,000+ students; the white-label promotions system behind Nestlé's Golden Morn and Milo campaigns, with 15M+ entries processed; and banking middleware for Union Bank.",
  links: {
    github: "https://github.com/festusyuma",
    linkedin: "https://www.linkedin.com/in/festusagboma",
  },
};

export const metrics = [
  { label: "years in production", value: "7+" },
  { label: "page & API load time", value: "−90%" },
  { label: "cloud spend", value: "−50%" },
  { label: "open-source packages", value: "20+" },
  { label: "schools on the platform", value: "100+" },
  { label: "students served", value: "10k+" },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  mode: string;
  points: string[];
  stack: string[];
  earlier?: { role: string; period: string; mode: string }[];
};

export const experience: Job[] = [
  {
    company: "Rising Academies",
    role: "Senior Software Engineer",
    period: "Jan 2024 — now",
    mode: "Remote",
    points: [
      "Work on the Rust (Axum, Tokio) backend behind Bambai, the source of truth for user state and learning progress for 10,000+ students.",
      "Core engineer on the Bambai Control Panel (Next.js, Node.js), which 100+ schools across Africa use to configure and monitor their programmes.",
      "Cut load times on some pages and APIs by up to 90% by fixing MongoDB query and cron-job bottlenecks.",
      "Reworked CDK-managed AWS infrastructure (Lambda, ECS, S3, ALB, CloudFront) and cut cloud costs by over 50%.",
      "Run internal sessions on MongoDB query optimisation and Node.js performance tuning.",
    ],
    stack: ["Rust", "Axum", "Node.js", "Next.js", "MongoDB", "AWS CDK"],
  },
  {
    company: "Remotebase",
    role: "Software Engineer",
    period: "Apr 2022 — Aug 2023",
    mode: "Remote",
    points: [
      "Designed an internal batch processing system on AWS Batch, EventBridge and Lambda, deployed with AWS SAM, that streamlined operational workflows.",
      "Scaled the core platform on Amplify, AppSync (GraphQL), Cognito and DynamoDB to support the end-to-end candidate journey and multi-stage interview flows.",
      "Built change data capture (CDC) pipelines for real-time profile sync and kept webhook handlers for third-party ATS and assessment tools reliable.",
      "Set up a central job-listing database aggregating multiple sources, and automated business operations with Python, TypeScript and MySQL.",
    ],
    stack: ["AWS Batch", "EventBridge", "AppSync", "DynamoDB", "Lambda", "Python"],
  },
  {
    company: "Intelligent Innovations",
    role: "Software Engineer",
    period: "Jan 2021 — Dec 2023",
    mode: "Hybrid · Lagos",
    points: [
      "Led the white-label promotions system behind Nestlé's Golden Morn and Milo campaigns, processing 15M+ entries, with code generation and validation in Rust (Tokio).",
      "Built banking middleware for Union Bank: messaging and transfer services on Spring Boot, Kafka and Azure.",
      "Key developer on Skillpaddy, an e-learning platform that has trained 5,000+ students, with content delivered over S3 and CloudFront.",
    ],
    stack: ["Rust", "Spring Boot", "Kafka", "Azure", "PostgreSQL", "Nuxt"],
  },
  {
    company: "Longbridge Technologies",
    role: "Software Engineer",
    period: "Jul 2019 — Dec 2020",
    mode: "Hybrid",
    earlier: [{ role: "Intern", period: "Jun 2018 — Sep 2018", mode: "On-site" }],
    points: [
      "Built a school management system on Java Spring, Hibernate and MySQL.",
      "Built a bespoke e-commerce application with Spring Boot, Laravel and React.",
      "Led data migrations from legacy databases with 100% data integrity.",
    ],
    stack: ["Java", "Spring", "Hibernate", "MySQL", "Laravel"],
  },
];

export type OpenSource = {
  name: string;
  tagline: string;
  description: string;
  language: string;
  url: string;
  snippet: string;
  tags: string[];
};

export const openSource: OpenSource[] = [
  {
    name: "fy-stack",
    tagline: "AWS CDK deployment framework",
    description:
      "CDK constructs and a CLI that provision a full-stack app's infrastructure: API Gateway, auth, database, storage, CDN, events, tasks and secrets. Running in production at two companies.",
    language: "TypeScript",
    url: "https://github.com/festusyuma/fy-stack",
    snippet: `new FullStackConstruct(stack, "MyApp", {
  auth: { groups: ["admin", "users"] },
  lambda: {
    api: { type: AppType.NODE_API, grants: [AppGrant.AUTH] },
  },
  cdn: {
    routes: {
      "/api/*": { $resource: "api" },
      "/*": { $resource: "web" },
    },
  },
});`,
    tags: ["aws-cdk", "cli", "infra-as-code"],
  },
  {
    name: "fy-tools",
    tagline: "Type-safe RPC toolkit",
    description:
      "Schema-first, RPC-style API toolkit with end-to-end types and no codegen step. Adapters for Express, NestJS, Elysia and Next.js.",
    language: "TypeScript",
    url: "https://github.com/festusyuma/fy-tools",
    snippet: `export const Schema = new App().controller(
  new Controller("users").route(
    new Route("/", HttpMethod.GET).response(Users)
  )
);

const res = await client.users.default.GET({});`,
    tags: ["rpc", "type-safety", "framework-agnostic"],
  },
  {
    name: "app-services-rs",
    tagline: "Rust building blocks for backends",
    description:
      "Versioned crates I reuse across Axum backends: Cognito auth, SES email, Secrets Manager config, S3 file storage and Paystack payments.",
    language: "Rust",
    url: "https://github.com/festusyuma/app-services-rs",
    snippet: `[workspace.dependencies]
auth    = { git = "…/app-auth-rs",    tag = "…" }
file    = { git = "…/app-file-rs",    tag = "…" }
payment = { git = "…/app-payment-rs", tag = "…" }`,
    tags: ["rust", "axum", "aws"],
  },
];

export type ClientProject = {
  name: string;
  url: string;
  host: string;
  kind: string;
  description: string;
  built: string[];
  stack: string[];
};

export const clientWork: ClientProject[] = [
  {
    name: "Lomics",
    url: "https://dev.lomics.com.ng",
    host: "lomics.ng",
    kind: "Comic publishing platform",
    description:
      "A marketplace where independent creators publish comics and readers buy them chapter by chapter or as a whole series.",
    built: [
      "Rust/Axum API with Cognito auth, S3 uploads and Paystack payments",
      "Separate reader, author and admin frontends sharing one UI library",
      "Typed RPC schema shared by backend and every client",
      "AWS infrastructure (CloudFront, S3, Secrets Manager) defined in CDK",
    ],
    stack: ["Rust", "Axum", "PostgreSQL", "React Router", "AWS CDK", "Paystack"],
  },
  {
    name: "Lowspen",
    url: "https://lowspen.com",
    host: "lowspen.com",
    kind: "AI receipt & budget tracker",
    description:
      "Budgeting around spending cycles: upload a receipt photo and its line items are extracted, categorised and filed into the active cycle.",
    built: [
      "Event-driven receipt pipeline: S3 upload → SQS → idempotent processor",
      "LLM extraction of line items, store and receipt number with duplicate detection",
      "Rust/Axum API over Postgres with cycles, cash flows and recurring payments",
      "Web app, admin dashboard and Kotlin Multiplatform mobile app",
    ],
    stack: ["Rust", "Axum", "SQS", "Gemini", "Kotlin MP", "AWS CDK"],
  },
];

export type CommunityEvent = {
  title: string;
  host: string;
  audience: string;
  description: string;
  video: { src: string; poster: string };
  photo: { mobile: string; web: string; alt: string };
};

export const community: CommunityEvent[] = [
  {
    title: "Careers panel for teenagers",
    host: "Assemblies of God Church",
    audience: "Teenagers",
    description:
      "Joined a panel at an Assemblies of God church to talk with teenagers about choosing a career: how I got into software engineering, what the work actually looks like day to day, and how to start building skills early.",
    video: {
      src: "/uploads/videos/community-careers-panel/master.m3u8",
      poster: "/uploads/images/community-careers-panel-poster.webp",
    },
    photo: {
      mobile: "/uploads/images/community-careers-panel-photo-mobile.webp",
      web: "/uploads/images/community-careers-panel-photo-web.webp",
      alt: "Festus speaking on the careers panel, microphone in hand, seated with other panelists on stage",
    },
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Rust", "TypeScript", "JavaScript", "Go", "Java", "Kotlin", "Python", "PHP"] },
  { group: "Backend", items: ["Axum", "Tokio", "NestJS", "Express", "Hono", "Spring Boot", "Hibernate", "GraphQL"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "DynamoDB", "Firestore"] },
  { group: "Cloud & Ops", items: ["AWS", "AWS CDK", "CloudFormation", "Azure", "Google Cloud", "Docker", "GitHub Actions"] },
  { group: "Messaging", items: ["Kafka", "SQS", "RabbitMQ"] },
  { group: "Frontend", items: ["React", "React Router", "Next.js", "Vue", "Nuxt"] },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  github: string;
  demo: string;
};

export type JourneyStep = {
  year: string;
  title: string;
  description: string;
};

export const siteConfig = {
  name: "Dero Savage",
  location: "Nairobi, Kenya",
  role: "Full-Stack Developer | AI Systems Builder | Automation Enthusiast",
  tagline: "I build intelligent systems, full-stack products, and automation tools.",
  intro:
    "I design software like systems infrastructure: clear flows, reliable backends, practical AI, and products built to solve real problems.",
  about:
    "My work sits at the intersection of backend engineering, AI integration, and product thinking. I enjoy turning complex workflows into usable systems, whether that means building APIs, orchestrating agents, shaping data layers, or connecting automation into everyday products.",
  vision:
    "I want to build scalable systems, intelligent products, and useful tools that create real leverage. Long term, I am focused on technology that compounds: better infrastructure, smarter automation, and financially empowering products built with discipline.",
  email: "derosavage@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-linkedin",
  cta: {
    projects: "#projects",
    contact: "#contact",
  },
  status: [
    { label: "Current Focus", value: "AI + Full Stack" },
    { label: "Building Mode", value: "Active" },
    { label: "Preferred Stack", value: "MERN + APIs + AI" },
    { label: "Mission", value: "Build meaningful tools" },
  ],
  skillGroups: [
    {
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "REST APIs", "Authentication", "System Design"],
    },
    {
      title: "Databases",
      items: ["MongoDB", "PostgreSQL", "Mongoose", "Schema Design", "Query Optimization"],
    },
    {
      title: "AI / APIs",
      items: ["LLM Integration", "AI Agents", "OpenAI APIs", "Automation Workflows", "Tool Orchestration"],
    },
    {
      title: "Tools",
      items: ["Git", "Postman", "Docker", "Vercel", "Trading Bot Workflows"],
    },
  ] as SkillGroup[],
  projects: [
    {
      title: "Hotel Management System",
      description:
        "A full-stack operations platform for bookings, room tracking, staff workflows, and reporting designed for real-world hospitality flows.",
      stack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      highlights: [
        "Structured booking and room state management",
        "Admin-facing dashboards and operational workflows",
        "Backend endpoints designed for reliability and speed",
      ],
      github: "https://github.com/your-username/hotel-management-system",
      demo: "https://example.com/hotel-management-system",
    },
    {
      title: "AI Agent / OpenClaw Setup",
      description:
        "An agent-oriented environment for running task automation and LLM-assisted workflows with a focus on orchestration, tooling, and practical execution.",
      stack: ["Python", "LLM APIs", "Automation", "CLI Tooling", "System Integration"],
      highlights: [
        "Set up repeatable AI-assisted execution flows",
        "Connected tools and prompts into usable agent pipelines",
        "Focused on operator experience, not just model output",
      ],
      github: "https://github.com/your-username/openclaw-setup",
      demo: "https://example.com/openclaw-setup",
    },
    {
      title: "Rise & Fall Trading Bot",
      description:
        "A rules-driven trading bot concept focused on signal logic, execution flow, and disciplined system behavior rather than hype.",
      stack: ["JavaScript", "APIs", "Automation", "Trading Logic", "Data Handling"],
      highlights: [
        "Built around strategy structure and controlled execution",
        "Connected external data and action pipelines",
        "Prioritized observability and repeatable logic",
      ],
      github: "https://github.com/your-username/rise-fall-bot",
      demo: "https://example.com/rise-fall-bot",
    },
    {
      title: "Smart Inventory / Backend System",
      description:
        "A backend-first inventory platform for stock visibility, product lifecycle tracking, and operational clarity across moving parts.",
      stack: ["Node.js", "PostgreSQL", "Express", "APIs", "Dashboard Integration"],
      highlights: [
        "Designed for clean data flow and inventory accuracy",
        "Supported extensible APIs for future integrations",
        "Balanced product needs with maintainable backend structure",
      ],
      github: "https://github.com/your-username/smart-inventory-system",
      demo: "https://example.com/smart-inventory-system",
    },
  ] as Project[],
  journey: [
    {
      year: "Start",
      title: "Curiosity turned technical",
      description:
        "Started by exploring how software systems work under the hood, not just how interfaces look on the surface.",
    },
    {
      year: "Build",
      title: "From features to systems",
      description:
        "Moved from isolated experiments into full-stack applications, connecting frontend flows to backend logic and persistent data.",
    },
    {
      year: "Expand",
      title: "Automation and AI integration",
      description:
        "Began working with APIs, automation tooling, and LLM-powered systems to make software more capable and adaptive.",
    },
    {
      year: "Now",
      title: "Building with operator mindset",
      description:
        "Today the focus is on practical products, resilient backends, and intelligent workflows that feel useful in the real world.",
    },
  ] as JourneyStep[],
};

// All site copy and links, kept exactly as on the previous joyrana.in build.

export const site = {
  name: "Joy Rana",
  url: "https://joyrana.in",
  title: "Joy Rana | Solutions Architect & Staff Engineer",
  description:
    "Joy Rana is a Solutions Architect and Staff Engineer publishing articles and videos on AI, Machine Learning, Distributed Systems, and Data Structures & Algorithms.",
  shareDescription:
    "Articles and videos on AI, ML, distributed systems, and data structures & algorithms.",
  keywords: [
    "Joy Rana", "Solutions Architect", "Staff Engineer", "Machine Learning",
    "Artificial Intelligence", "Distributed Systems", "Data Structures", "Algorithms",
    "System Design", "Medium", "YouTube",
  ],
  googleVerification: "5A-bdLtdOszLjRh77UK9FkiHAGuPFNa8vtd__g3YnSM",
  fallbackImage: "/joyrana-fallback.svg",
};

export const links = {
  medium: "https://joyrana-dev.medium.com/",
  youtube: "https://www.youtube.com/@MrJoyRana",
  linkedin: "https://www.linkedin.com/in/joyrana/",
  github: "https://github.com/joyrana",
};

export const nav = [
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Videos", href: "#videos" },
  { label: "About", href: "#about" },
];
export const navCta = { label: "Work With Me", href: "#contact" };

export const hero = {
  eyebrow: "Solutions Architect + Staff Engineer",
  title:
    "Systems-level thinking, practical engineering, and clear explanations of complex technology.",
  subhead:
    "I publish deep-dive articles and videos on AI, Machine Learning, Distributed Systems, and Data Structures & Algorithms. Explore the latest work below.",
  primary: { label: "Read Medium Articles", href: "#writing" },
  secondary: { label: "Watch YouTube Videos", href: "#videos" },
  stats: [
    { value: "14+ years", label: "Engineering experience" },
    { value: "Systems", label: "Cloud + distributed design" },
    { value: "AI/ML", label: "Research to production" },
  ],
};

export const featuredArticle = {
  label: "Featured Article",
  tag: "Latest",
  title: "Your Phone is a Data Center: Understanding WhatsApp’s “Local-First” Design",
  image: site.fallbackImage,
  meta: "Featured on Medium...",
  cta: "Read on Medium",
  href: "https://joyrana-dev.medium.com/your-phone-is-a-data-center-understanding-whatsapps-local-first-design-13071da14904",
};

export const projectsSection = {
  eyebrow: "Portfolio projects",
  title: "Featured projects",
  profileLabel: "Visit my GitHub profile",
  profileHref: links.github,
  cta: "View on GitHub",
};

export type Project = {
  name: string;
  icon: "api" | "fix" | "apps" | "sdlc" | "model";
  description: string;
  /** Public repository URL. Private projects have none and show `status` instead. */
  repo?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    name: "Enterprise API Copilot",
    icon: "api",
    repo: "https://github.com/joyrana/enterprise-api-copilot",
    description:
      "An open-source agentic AI platform for enterprise API discovery, execution, testing, troubleshooting and automation — with policy checks and human approval for write actions.",
  },
  {
    name: "FixAI Platform",
    icon: "fix",
    repo: "https://github.com/joyrana/fixai-platform",
    description:
      "AI-powered FIX certification platform: a deterministic engine makes the pass/fail calls while AI agents help plan and diagnose broker and venue FIX sessions.",
  },
  {
    name: "Enterprise AI Application Workspace",
    icon: "apps",
    repo: "https://github.com/joyrana/enterprise-ai-application-workspace",
    description:
      "An agentic engineering workspace that turns natural-language business requirements into specified, designed, generated, tested and validated enterprise applications.",
  },
  {
    name: "Agentic SDLC Workspace",
    icon: "sdlc",
    repo: "https://github.com/joyrana/agentic-sdlc-workspace",
    description:
      "A skill-based agentic software development lifecycle workspace to design, build, test, document and continuously improve software.",
  },
  {
    name: "Gemma SWE Agent",
    icon: "model",
    status: "Private · Research preview",
    description:
      "Post-training Gemma 4 into a repository-level software engineer — trajectory SFT, execution-ranked DPO and GRPO, measured with controlled ablations in a hardened sandbox.",
  },
];

export const writing = {
  eyebrow: "Medium articles",
  title: "Architecture, AI, and engineering",
  allLabel: "View all posts",
  allHref: links.medium,
  pill: "Medium",
  cta: "Read on Medium",
};

export type Post = { title: string; date: string; image?: string; href: string };

// Posts whose RSS entry had no cover image carry no `image` and show the fallback.
export const posts: Post[] = [
  {
    title: "Kinesis vs. Kafka: The “Buy vs. Build” Reality Check for 2026",
    date: "Jan 18, 2026",
    href: "https://joyrana-dev.medium.com/kinesis-vs-kafka-the-buy-vs-build-reality-check-for-2026-96c09ac6d9e4?source=rss-2543994375de------2",
  },
  {
    title: "Your Phone is a Data Center: Understanding WhatsApp’s “Local-First” Design",
    date: "Jan 6, 2026",
    image: "https://cdn-images-1.medium.com/max/1024/1*BVbtUFH62cTVg1oJjFA6KQ.png",
    href: "https://joyrana-dev.medium.com/your-phone-is-a-data-center-understanding-whatsapps-local-first-design-13071da14904?source=rss-2543994375de--",
  },
  {
    title: "Knowledge vs Politics: Who Really Wins in the Workplace?",
    date: "Aug 29, 2025",
    image: "https://cdn-images-1.medium.com/max/1024/1*BWfDOEXTdZRy5Xs2ZBT0SA.png",
    href: "https://joyrana-dev.medium.com/knowledge-vs-politics-who-really-wins-in-the-workplace-2e0e2473aa07?source=rss-2543994375de------2",
  },
  {
    title: "A story of a working couple",
    date: "Apr 23, 2021",
    href: "https://joyrana-dev.medium.com/a-story-of-a-working-woman-80aa425cdc72?source=rss-2543994375de------2",
  },
  {
    title: "An experience of a Covid-19 Survivor",
    date: "Apr 21, 2021",
    href: "https://joyrana-dev.medium.com/an-experience-of-a-covid-19-survivor-944438e469c1?source=rss-2543994375de------2",
  },
  {
    title: "Upgrade your Angular 6 App to Angular 8",
    date: "Nov 15, 2019",
    image: "https://cdn-images-1.medium.com/max/757/1*0CYEDqoBj1v5xb_tEtruXg.png",
    href: "https://joyrana-dev.medium.com/upgrade-your-angular-6-app-to-angular-8-95e1d67fe09b?source=rss-2543994375de------2",
  },
  {
    title: "How to read a book more than just the Introduction Chapter",
    date: "Jun 2, 2019",
    href: "https://medium.com/joy-rana/how-to-read-a-book-more-than-just-the-introduction-chapter-d989f1e8864c?source=rss-2543994375de------2",
  },
  {
    title: "Access SharePoint On-Premise List through CSOM in .Net Core",
    date: "May 31, 2019",
    image: "https://cdn-images-1.medium.com/max/1024/1*PHw4BnGeHfIPBEdZJRcU9Q.png",
    href: "https://medium.com/joy-rana/access-sharepoint-on-premise-list-through-csom-in-net-core-8c6d5bf57342?source=rss-2543994375de------2",
  },
  {
    title: "Manage your multiple client projects in Azure DevOps",
    date: "May 31, 2019",
    image: "https://cdn-images-1.medium.com/max/590/1*OZMB8GOFfre8Jy--E3TznQ.png",
    href: "https://medium.com/joy-rana/manage-your-multiple-client-projects-in-azure-devops-be2860a972a?source=rss-2543994375de------2",
  },
  {
    title: "Manage your multiple client projects in Azure DevOps",
    date: "May 31, 2019",
    image: "https://cdn-images-1.medium.com/max/676/1*U-Eagq9lJgDwEJLHX2PGbg.png",
    href: "https://joyrana-dev.medium.com/manage-your-multiple-client-projects-in-azure-devops-5caa7b91b014?source=rss-2543994375de------2",
  },
];

export const videosSection = {
  eyebrow: "YouTube videos",
  title: "AI, ML, distributed systems",
  allLabel: "Visit the channel",
  allHref: links.youtube,
  cta: "Watch on YouTube",
};

export const featuredVideo = {
  pill: "Featured video",
  title: "You Won't Believe How MCP Can FIX Your Jira and Confluence Workflow",
  meta: "From the AI + ML playlist",
  image: "https://i.ytimg.com/vi/Z69pwYk8fQQ/hqdefault.jpg",
  cta: "Watch now",
  href: "https://www.youtube.com/watch?v=Z69pwYk8fQQ&list=PLJersvBJJ-d4EaJVnHd6OrDAOiMELew5_&index=2",
};

export const videos = [
  {
    title: "You Won't Believe How MCP Can FIX Your Jira and Confluence Workflow",
    date: "Aug 9, 2025",
    image: "https://i3.ytimg.com/vi/Z69pwYk8fQQ/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=Z69pwYk8fQQ",
  },
  {
    title: "You Won't Believe How EASY it is to Run LLMs Locally with Docker",
    date: "Aug 9, 2025",
    image: "https://i1.ytimg.com/vi/PgBh6RVBTDY/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=PgBh6RVBTDY",
  },
  {
    title: "Run Your Own Private AI! Build a Local App with Ollama + React",
    date: "Aug 2, 2025",
    image: "https://i4.ytimg.com/vi/7hM03Pl2JM4/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=7hM03Pl2JM4",
  },
  {
    title: "MCP: The Secret Weapon for Next-Gen Algo Trading",
    date: "Jul 26, 2025",
    image: "https://i4.ytimg.com/vi/w-MIomdRmHQ/hqdefault.jpg",
    href: "https://www.youtube.com/watch?v=w-MIomdRmHQ",
  },
];

export const about = {
  eyebrow: "About me",
  title: "Hi, I'm Joy",
  body:
    "A continuous learner and a teacher. I like to architect solutions and give solutions to complex problems. I do blog about technology, gadgets, code, the web, where we’re going. I'm excited about machine learning, artificial intelligence and the open web.",
  roles: [
    { value: "Architect", label: "Cloud-native systems" },
    { value: "Mentor", label: "Engineering leadership" },
    { value: "Builder", label: "AI-powered products" },
  ],
  focusTitle: "Focus areas",
  focus: [
    "Distributed systems architecture + reliability",
    "AI/ML systems design + deployment",
    "Data structures, algorithms, and performance",
  ],
  cta: { label: "Collaborate", href: "#contact" },
};

export const contact = {
  eyebrow: "Connect",
  title: "Let’s build reliable systems together",
  body: "Follow my work across platforms or reach out for collaboration.",
  socials: [
    { label: "Medium", href: links.medium },
    { label: "YouTube", href: links.youtube },
    { label: "LinkedIn", href: links.linkedin },
    { label: "GitHub", href: links.github },
  ],
};

export const footer = {
  copyright: "© 2026 Joy Rana. All rights reserved.",
  tagline: "Designed with intention.",
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joy Rana",
  url: "https://joyrana.in",
  jobTitle: "Solutions Architect, Staff Engineer",
  knowsAbout: [
    "Machine Learning", "Artificial Intelligence", "Distributed Systems", "Data Structures",
    "Algorithms", "System Design", "Cloud Architecture",
  ],
  sameAs: [links.medium, links.youtube, links.linkedin, links.github],
};

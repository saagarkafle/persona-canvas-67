import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export const SECTION_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "History" },
  { href: "#blog", label: "Insights" },
  { href: "#contact", label: "Connect" },
];

export const SKILL_CATEGORIES = [
  { n: "01", title: "Frontend Engineering", desc: "React, Next.js, TypeScript, Tailwind, Framer Motion." },
  { n: "02", title: "Backend Engineering", desc: "Node, Go, PostgreSQL, edge runtimes, event-driven systems." },
  { n: "03", title: "UI / UX Design", desc: "Design systems, motion, prototyping, accessibility." },
  { n: "04", title: "Cloud & DevOps", desc: "AWS, Vercel, Cloudflare, Docker, CI/CD pipelines." },
  { n: "05", title: "Data & Analytics", desc: "Pipelines, dashboards, experimentation frameworks." },
  { n: "06", title: "AI Tooling", desc: "LLM orchestration, RAG, agentic workflows, eval loops." },
  { n: "07", title: "Business Strategy", desc: "GTM, product-market fit, monetization, brand systems." },
  { n: "08", title: "Cybersecurity", desc: "Zero-trust patterns, auth, threat modeling." },
];

export const PROJECTS = [
  {
    img: project1,
    title: "Lumina OS",
    desc: "Next-gen operating environment for distributed engineering teams.",
    tags: ["TypeScript", "AWS"],
  },
  {
    img: project2,
    title: "Vault Protocol",
    desc: "Zero-knowledge security layer for enterprise asset management.",
    tags: ["Rust", "Wasm"],
  },
  {
    img: project3,
    title: "Neural Draft",
    desc: "AI-powered architectural drafting for urban planning teams.",
    tags: ["Python", "PyTorch"],
  },
  {
    img: project4,
    title: "Flux Commerce",
    desc: "Headless commerce engine engineered for ultra-fast performance.",
    tags: ["Next.js", "Stripe"],
  },
  {
    img: project5,
    title: "Nexus Analytics",
    desc: "Real-time event tracking system with millisecond latency.",
    tags: ["Go", "Redis"],
  },
  {
    img: project6,
    title: "Aether Home",
    desc: "IoT orchestration platform for sustainable living spaces.",
    tags: ["Zigbee", "Node.js"],
  },
];

export const EXPERIENCE = [
  {
    role: "Founder & CEO",
    org: "Kafle Digital Labs",
    when: "2022 — Present",
    desc: "Leading technical strategy and execution for early-stage startups in FinTech and AI.",
    active: true,
  },
  {
    role: "Senior Software Architect",
    org: "Global Tech Solutions",
    when: "2020 — 2022",
    desc: "Spearheaded migration of legacy monoliths to modern microservices on GCP.",
  },
  {
    role: "Full-Stack Engineer",
    org: "Horizon Studio",
    when: "2018 — 2020",
    desc: "Shipped product surfaces for international SaaS clients across web and mobile.",
  },
  {
    role: "B.Sc. Computer Science",
    org: "Tribhuvan University",
    when: "2014 — 2018",
    desc: "Focus on distributed systems, algorithms, and human-computer interaction.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Marcus Thorne",
    role: "CTO, Vector Dynamics",
    quote:
      "Sagar pairs a rare technical depth with sharp product instinct. He didn't just write code — he helped us define the core value proposition.",
  },
  {
    name: "Sarah Chen",
    role: "Founder, Horizon AI",
    quote:
      "Precision is the word that comes to mind. Sagar's approach is methodical, and what we build today will scale for years.",
  },
  {
    name: "Aarav Singh",
    role: "Head of Product, Northwind",
    quote:
      "Genuinely the calmest, most thoughtful engineer I've worked with. Ships fast, communicates clearly, raises the bar for everyone around him.",
  },
];

export const POSTS = [
  {
    date: "March 12, 2025",
    cat: "AI Strategy",
    title: "Scaling Neural Interfaces: Lessons from the Edge",
    desc: "A deep dive into optimizing model inference latency for real-time human interaction systems.",
  },
  {
    date: "Feb 28, 2025",
    cat: "Product",
    title: "The Minimalist Founder's Stack",
    desc: "Why choosing boring technology is the most aggressive growth move you can make this year.",
  },
  {
    date: "Jan 14, 2025",
    cat: "Engineering",
    title: "Designing for Speed, Not Just Performance",
    desc: "Perceived latency, optimistic UI, and the architecture decisions that compound over time.",
  },
];

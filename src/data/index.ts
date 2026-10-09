import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export const SECTION_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Say hi" },
];

export const SKILL_CATEGORIES = [
  { title: "Frontend", items: "React, Next.js, TypeScript, Tailwind" },
  { title: "Backend", items: "Node.js, Go, PostgreSQL, Redis" },
  { title: "Cloud", items: "AWS, Vercel, Cloudflare, Docker" },
  { title: "Other", items: "UI/UX design, Photography, Writing" },
];

export const PROJECTS = [
  {
    img: project1,
    title: "Lumina OS",
    desc: "A workspace tool I built for remote teams to stay organized without the clutter of traditional project management apps.",
    tags: ["TypeScript", "AWS"],
  },
  {
    img: project2,
    title: "Vault Protocol",
    desc: "Security-first asset management for a fintech startup. Handled auth, encryption, and the dashboard from scratch.",
    tags: ["Rust", "Wasm"],
  },
  {
    img: project3,
    title: "Neural Draft",
    desc: "Helped an urban planning firm automate their architectural drafting using ML. Easily the most fun project I've done.",
    tags: ["Python", "PyTorch"],
  },
  {
    img: project4,
    title: "Flux Commerce",
    desc: "A headless commerce engine — focused on making checkout feel instant. Sub-second page loads, no compromises.",
    tags: ["Next.js", "Stripe"],
  },
  {
    img: project5,
    title: "Nexus Analytics",
    desc: "Real-time event tracking that actually works at scale. Built the pipeline, the dashboard, and the alerting system.",
    tags: ["Go", "Redis"],
  },
  {
    img: project6,
    title: "Aether Home",
    desc: "IoT platform for smart homes — bridging Zigbee devices with a clean web interface for everyday users.",
    tags: ["Zigbee", "Node.js"],
  },
];

export const EXPERIENCE = [
  {
    role: "Founder & CEO",
    org: "Kafle Digital Labs",
    when: "2022 — Present",
    desc: "Running my own thing — helping early-stage startups in fintech and AI figure out their tech stack and ship their first product.",
    active: true,
  },
  {
    role: "Senior Software Architect",
    org: "Global Tech Solutions",
    when: "2020 — 2022",
    desc: "Led the migration from a monolith to microservices. Lots of late nights, but the system handled 10x the traffic after.",
  },
  {
    role: "Full-Stack Engineer",
    org: "Horizon Studio",
    when: "2018 — 2020",
    desc: "Built product interfaces for SaaS clients across web and mobile. This is where I fell in love with good UI.",
  },
  {
    role: "B.Sc. Computer Science",
    org: "Tribhuvan University",
    when: "2014 — 2018",
    desc: "Studied distributed systems and algorithms. Spent most of my free time building side projects and breaking things.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Marcus Thorne",
    role: "CTO, Vector Dynamics",
    quote:
      "Sagar doesn't just write code — he thinks about the product. He helped us figure out what to build, not just how to build it.",
  },
  {
    name: "Sarah Chen",
    role: "Founder, Horizon AI",
    quote:
      "What I appreciate most is his patience. He takes the time to understand the problem before jumping to solutions.",
  },
  {
    name: "Aarav Singh",
    role: "Head of Product, Northwind",
    quote:
      "The calmest engineer I've worked with. Ships fast, communicates clearly, and somehow makes everyone around him better.",
  },
];

export const POSTS = [
  {
    date: "Mar 2025",
    cat: "AI",
    title: "What I learned building with LLMs for 6 months",
    desc: "The hype is real, but so are the rough edges. Here's what actually worked and what didn't.",
  },
  {
    date: "Feb 2025",
    cat: "Product",
    title: "The case for boring technology",
    desc: "Why choosing the unsexy stack is often the smartest move for early-stage startups.",
  },
  {
    date: "Jan 2025",
    cat: "Engineering",
    title: "Speed is a feature",
    desc: "On perceived latency, optimistic UI, and the small decisions that compound into a great user experience.",
  },
];

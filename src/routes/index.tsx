import profileImg from "@/assets/profile.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sagar Kafle — Builder, Developer, Digital Strategist" },
      {
        name: "description",
        content:
          "Personal portfolio of Sagar Kafle — software engineer, entrepreneur, and digital strategist. Selected works, experience, and writing.",
      },
      { property: "og:title", content: "Sagar Kafle — Builder, Developer, Digital Strategist" },
      {
        property: "og:description",
        content:
          "Personal portfolio of Sagar Kafle — software engineer, entrepreneur, and digital strategist.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sagar Kafle",
          jobTitle: "Builder, Developer, Digital Strategist",
          url: "https://sagar-kafle.com.np",
        }),
      },
    ],
  }),
});

const SECTION_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "History" },
  { href: "#blog", label: "Insights" },
  { href: "#contact", label: "Connect" },
];

const SKILL_CATEGORIES = [
  { n: "01", title: "Frontend Engineering", desc: "React, Next.js, TypeScript, Tailwind, Framer Motion." },
  { n: "02", title: "Backend Engineering", desc: "Node, Go, PostgreSQL, edge runtimes, event-driven systems." },
  { n: "03", title: "UI / UX Design", desc: "Design systems, motion, prototyping, accessibility." },
  { n: "04", title: "Cloud & DevOps", desc: "AWS, Vercel, Cloudflare, Docker, CI/CD pipelines." },
  { n: "05", title: "Data & Analytics", desc: "Pipelines, dashboards, experimentation frameworks." },
  { n: "06", title: "AI Tooling", desc: "LLM orchestration, RAG, agentic workflows, eval loops." },
  { n: "07", title: "Business Strategy", desc: "GTM, product-market fit, monetization, brand systems." },
  { n: "08", title: "Cybersecurity", desc: "Zero-trust patterns, auth, threat modeling." },
];

const PROJECTS = [
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

const EXPERIENCE = [
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

const TESTIMONIALS = [
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

const POSTS = [
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



function Nav() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-border glass-panel px-6 py-4">
      <a href="#top" className="flex items-center gap-2 text-mono text-xs font-bold tracking-tighter">
        <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
        SAGAR_KAFLE.SYS
      </a>
      <div className="hidden gap-8 text-mono text-[11px] uppercase tracking-widest text-muted-foreground md:flex">
        {SECTION_LINKS.map((l) => (
          <a key={l.href} href={l.href} className="transition-colors hover:text-accent">
            {l.label}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="text-mono text-[10px] uppercase tracking-widest text-accent transition-opacity hover:opacity-80 md:hidden"
      >
        Connect
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative px-6 pt-40 pb-24"
      style={{ backgroundImage: "var(--gradient-radial)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-end gap-12 md:flex-row">
          <div className="flex-1 animate-fade-up">
            <div className="mb-4 text-mono text-sm uppercase tracking-tight text-accent">
              Developer · Engineer · Photographer
            </div>
            <h1 className="mb-8 text-balance text-5xl font-extrabold leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
              Hi, I'm <span className="text-accent">Sagar Kafle</span>
              <span className="text-mono animate-blink text-accent">_</span>
            </h1>
            <p className="mb-10 max-w-[55ch] text-pretty text-lg text-muted-foreground">
              Building digital products, solving complex problems, and capturing stories through the lens. I combine technology, design, and creativity to create experiences that are intuitive, purposeful, and visually engaging.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="cursor-pointer rounded-sm bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-accent-foreground transition-all hover:brightness-110"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="cursor-pointer rounded-sm border border-border px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:bg-secondary"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="relative overflow-hidden rounded-lg border border-border outline outline-1 outline-white/5">
              <img
                src={profileImg}
                alt="Portrait of Sagar Kafle"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-md p-3">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
                  <div className="text-mono text-[10px] uppercase tracking-widest">
                    {/* <span className="text-muted-foreground">Status / </span> */}
                    <span className="text-accent">Open to work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-y border-border bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 flex items-center gap-4 text-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="h-px w-8 bg-border" /> 01. Origin
        </h2>
        <div className="space-y-6 leading-relaxed text-muted-foreground max-w-3xl">
          <p>
            I view software as a{" "}
            <span className="text-foreground">precisely machined instrument</span>. Every line of
            code should earn its place; every pixel must serve a functional purpose.
          </p>
          <p>
            As a developer and entrepreneur, I bridge the gap between technical complexity and
            business growth — translating abstract ideas into scalable digital products that real
            people use and trust.
          </p>
          <p>
            Originally from Nepal, working with teams across four continents. Always shipping,
            always learning, always asking what's actually worth building.
          </p>
        </div>
      </div>
    </section>

  );
}

function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between">
          <h2 className="text-4xl font-extrabold tracking-tighter">Technical Stack</h2>
          <div className="text-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            CAPABILITIES / 2025
          </div>
        </div>
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_CATEGORIES.map((s) => (
            <div
              key={s.n}
              className="group flex flex-col gap-3 bg-background p-6 transition-colors hover:bg-secondary"
            >
              <span className="text-mono text-xs text-accent">{s.n}</span>
              <span className="text-base font-bold group-hover:text-accent">{s.title}</span>
              <span className="text-sm text-muted-foreground">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-y border-border bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between">
          <h2 className="text-4xl font-extrabold tracking-tighter">Selected Works</h2>
          <div className="text-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            SYSTEM_OUTPUT / 2025
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-lg border border-border outline outline-1 outline-white/5 transition-transform group-hover:-translate-y-2">
                <img
                  src={p.img}
                  alt={p.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-bold transition-colors group-hover:text-accent">
                  {p.title}
                </h3>
                <span className="text-mono text-[10px] text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">{p.desc}</p>
              <div className="flex flex-wrap items-center gap-2 text-mono text-[10px] uppercase tracking-tight text-accent">
                {p.tags.map((t, j) => (
                  <span key={t} className="flex items-center gap-2">
                    {j > 0 && <span className="text-border">/</span>}
                    {t}
                  </span>
                ))}
                <span className="ml-auto flex gap-3 text-muted-foreground">
                  <a href="#" className="hover:text-accent">
                    Live ↗
                  </a>
                  <a href="#" className="hover:text-accent">
                    GitHub ↗
                  </a>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 flex items-center justify-between">
          <h2 className="text-3xl font-extrabold tracking-tighter">Career Protocol</h2>
          <a
            href="#"
            className="text-mono border border-accent/30 px-4 py-2 text-[10px] uppercase tracking-widest text-accent transition-all hover:bg-accent hover:text-accent-foreground"
          >
            Download_Resume.PDF
          </a>
        </div>
        <div className="relative space-y-12">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
          {EXPERIENCE.map((e) => (
            <div key={e.role} className="relative pl-10">
              <div
                className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 bg-background ${
                  e.active ? "border-accent shadow-[0_0_12px_var(--color-accent)]" : "border-border"
                }`}
              />
              <div className="mb-2 flex flex-col gap-1 md:flex-row md:justify-between">
                <h3 className="text-lg font-bold">{e.role}</h3>
                <span className="text-mono text-xs text-muted-foreground">{e.when}</span>
              </div>
              <div className="mb-4 text-sm text-accent">{e.org}</div>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-y border-border bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-3xl font-extrabold tracking-tighter">Trusted Signal</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-6 rounded-lg border border-border bg-background p-8 transition-colors hover:border-accent/30"
            >
              <blockquote className="text-sm leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-6">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-mono text-xs font-bold text-accent">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section id="blog" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-3xl font-extrabold tracking-tighter">Insights & Logic</h2>
          <a
            href="#"
            className="text-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent"
          >
            All writing ↗
          </a>
        </div>
        <div className="grid gap-px overflow-hidden border-y border-border bg-border md:grid-cols-3">
          {POSTS.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-secondary"
            >
              <div className="text-mono flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>{p.date}</span>
                <span className="text-accent">{p.cat}</span>
              </div>
              <h3 className="text-xl font-bold transition-colors group-hover:text-accent">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
              <span className="text-mono mt-auto text-[10px] uppercase tracking-widest text-accent">
                Read →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div
        className="mx-auto max-w-4xl rounded-lg border border-accent/20 glass-panel p-8 md:p-12"
        style={{ backgroundImage: "var(--gradient-radial)" }}
      >
        <div className="mb-10 text-center">
          <div className="text-mono mb-4 text-xs uppercase tracking-widest text-accent">
            04. Connect
          </div>
          <h2 className="mb-6 text-balance text-4xl font-extrabold tracking-tighter md:text-5xl">
            Let's build something meaningful together.
          </h2>
          <p className="mx-auto max-w-[50ch] text-muted-foreground">
            Currently open to strategic partnerships, freelance engagements, and high-impact
            engineering leadership roles.
          </p>
        </div>

        <form
          className="grid gap-4 md:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Name"
            className="text-mono rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
          />
          <input
            type="email"
            placeholder="Email"
            className="text-mono rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
          />
          <textarea
            rows={4}
            placeholder="Tell me about your project…"
            className="text-mono md:col-span-2 resize-none rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
          />
          <button
            type="submit"
            className="text-mono md:col-span-2 rounded-sm bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-accent-foreground transition-all hover:brightness-110"
          >
            Send Transmission →
          </button>
        </form>

        <div className="text-mono mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-border pt-8 text-xs uppercase tracking-widest">
          <a href="mailto:hello@sagar-kafle.com.np" className="text-accent hover:underline">
            hello@sagar-kafle.com.np
          </a>
          <a href="#" className="text-muted-foreground hover:text-accent">
            LinkedIn
          </a>
          <a href="#" className="text-muted-foreground hover:text-accent">
            GitHub
          </a>
          <a href="#" className="text-muted-foreground hover:text-accent">
            Twitter / X
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} SAGAR KAFLE // ALL SYSTEMS OPERATIONAL
        </div>
        <div className="text-mono flex gap-6 text-[10px] uppercase tracking-widest text-muted-foreground">
          <a href="#top" className="hover:text-foreground">
            Back to top ↑
          </a>
          <a href="#projects" className="hover:text-foreground">
            Projects
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

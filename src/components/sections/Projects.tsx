import { PROJECTS } from "@/data";

const TAG_COLORS: Record<string, string> = {
  TypeScript: "bg-blue-100 text-blue-700",
  AWS: "bg-amber-100 text-amber-700",
  Rust: "bg-orange-100 text-orange-700",
  Wasm: "bg-purple-100 text-purple-700",
  Python: "bg-emerald-100 text-emerald-700",
  PyTorch: "bg-red-100 text-red-700",
  "Next.js": "bg-slate-200 text-slate-700",
  Stripe: "bg-violet-100 text-violet-700",
  Go: "bg-cyan-100 text-cyan-700",
  Redis: "bg-rose-100 text-rose-700",
  Zigbee: "bg-teal-100 text-teal-700",
  "Node.js": "bg-lime-100 text-lime-700",
};

export function Projects() {
  return (
    <section id="work" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl md:text-4xl">Things I've built</h2>
        <p className="mb-12 max-w-[50ch] text-muted-foreground">
          A mix of client work and personal projects. Some shipped, some still evolving.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group">
              <div className="mb-4 overflow-hidden rounded-xl">
                <img
                  src={p.img}
                  alt={p.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3
                className="mb-2 text-lg font-semibold"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {p.title}
              </h3>
              <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className={`rounded-full px-3 py-1 text-xs font-medium ${TAG_COLORS[t] || "bg-secondary text-muted-foreground"}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

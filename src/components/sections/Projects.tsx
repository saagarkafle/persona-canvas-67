import { PROJECTS } from "@/data";

export function Projects() {
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

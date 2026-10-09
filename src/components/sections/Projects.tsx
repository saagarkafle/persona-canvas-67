import { PROJECTS } from "@/data";

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
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
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

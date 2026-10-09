import { PROJECTS } from "@/data";

const TAG_COLORS: Record<string, string> = {
  Flutter: "bg-blue-100 text-blue-700",
  BLoC: "bg-indigo-100 text-indigo-700",
  Firebase: "bg-amber-100 text-amber-700",
  Stripe: "bg-violet-100 text-violet-700",
  Python: "bg-emerald-100 text-emerald-700",
  RAG: "bg-purple-100 text-purple-700",
  LLMs: "bg-rose-100 text-rose-700",
  Pinecone: "bg-teal-100 text-teal-700",
  Streamlit: "bg-red-100 text-red-700",
  Dart: "bg-cyan-100 text-cyan-700",
  Riverpod: "bg-sky-100 text-sky-700",
  Hive: "bg-orange-100 text-orange-700",
  "REST APIs": "bg-fuchsia-100 text-fuchsia-700",
  iOS: "bg-slate-200 text-slate-700",
  Android: "bg-lime-100 text-lime-700",
  DevTools: "bg-yellow-100 text-yellow-800",
  "Push Notifications": "bg-pink-100 text-pink-700",
};

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl md:text-4xl">Featured Projects</h2>
        <p className="mb-12 max-w-[54ch] text-muted-foreground">
          Academic AI dissertation and production mobile applications engineered across Flutter, Android, and AI/ML architectures.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-4 transition-all hover:border-accent hover:shadow-md"
            >
              <div className="mb-4 overflow-hidden rounded-lg">
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
                className="mb-2 text-base font-semibold text-foreground"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {p.title}
              </h3>
              <p className="mb-4 flex-1 text-xs text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${TAG_COLORS[t] || "bg-secondary text-muted-foreground"}`}
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

import { POSTS } from "@/data";

const CAT_COLORS: Record<string, string> = {
  Performance: "bg-blue-100 text-blue-700",
  Payments: "bg-violet-100 text-violet-700",
  Flutter: "bg-teal-100 text-teal-700",
  AI: "bg-purple-100 text-purple-700",
};

export function Blog() {
  return (
    <section id="articles" className="section-padding bg-secondary/30">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl mb-2">Technical Articles</h2>
            <p className="text-muted-foreground">
              Deep dives and practical guides on mobile engineering, optimization, and payment systems.
            </p>
          </div>
          <a
            href="https://medium.com/@kafleysaagar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline shrink-0"
          >
            Read on Medium ↗
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {POSTS.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-md"
            >
              <div>
                <div className="mb-3 flex items-center justify-between text-xs">
                  <span
                    className={`rounded-full px-2.5 py-0.5 font-medium ${CAT_COLORS[p.cat] || "bg-secondary text-muted-foreground"}`}
                  >
                    {p.cat}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {p.platform}
                  </span>
                </div>
                <h3
                  className="mb-2 text-lg font-semibold text-foreground group-hover:text-accent transition-colors"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {p.title} <span className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

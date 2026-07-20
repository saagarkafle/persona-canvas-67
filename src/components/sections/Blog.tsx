import { POSTS } from "@/data";

export function Blog() {
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

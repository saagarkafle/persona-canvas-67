import { POSTS } from "@/data";

export function Blog() {
  return (
    <section id="writing" className="section-padding bg-secondary/50">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl md:text-4xl">Writing</h2>
        <p className="mb-12 text-muted-foreground">
          Thoughts on building software, running a business, and everything in between.
        </p>

        <div className="space-y-0 divide-y divide-border">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col gap-2 py-8 first:pt-0 last:pb-0 cursor-pointer transition-opacity hover:opacity-75"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{p.date}</span>
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span>{p.cat}</span>
              </div>
              <h3
                className="text-xl font-semibold text-foreground"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {p.title}
              </h3>
              <p className="max-w-[55ch] text-sm text-muted-foreground">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

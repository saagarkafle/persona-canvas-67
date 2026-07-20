import { TESTIMONIALS } from "@/data";

export function Testimonials() {
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

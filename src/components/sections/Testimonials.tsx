import { TESTIMONIALS } from "@/data";

export function Testimonials() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl md:text-4xl">Kind words</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl bg-card p-8"
            >
              <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-foreground italic">
                "{t.quote}"
              </blockquote>
              <figcaption className="border-t border-border pt-5">
                <div className="text-sm font-semibold text-foreground">
                  {t.name}
                </div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

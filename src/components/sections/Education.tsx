import { EDUCATION } from "@/data";

export function Education() {
  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-3 text-3xl md:text-4xl">Education</h2>
        <p className="mb-10 text-sm text-muted-foreground">
          Academic foundation in advanced artificial intelligence, machine learning, and data systems.
        </p>

        <div className="space-y-8">
          {EDUCATION.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm transition-all hover:border-accent/60"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3
                    className="text-xl font-semibold text-foreground"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {edu.degree}
                  </h3>
                  <div className="mt-1 text-sm font-medium text-accent">
                    {edu.institution}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 self-start rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                  <span>🎓</span> {edu.grade}
                </div>
              </div>

              {/* Dissertation Highlight Card */}
              {edu.dissertationTitle && (
                <div className="mt-6 rounded-xl border border-border/70 bg-background/60 p-4 md:p-5">
                  <div className="mb-1 text-xs font-semibold text-accent uppercase tracking-wider">
                    Dissertation Project
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {edu.dissertationTitle}
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {edu.dissertationDesc}
                  </p>
                </div>
              )}

              {/* Curriculum & Research Points */}
              <ul className="mt-5 space-y-2">
                {edu.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

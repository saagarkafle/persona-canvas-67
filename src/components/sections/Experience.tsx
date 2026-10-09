import { EXPERIENCE } from "@/data";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-3 text-3xl md:text-4xl">Work Experience</h2>
        <p className="mb-12 text-sm text-muted-foreground">
          Over two years of professional software engineering specializing in Flutter, state management, and production mobile architectures.
        </p>

        <div className="space-y-10">
          {EXPERIENCE.map((e, index) => (
            <div key={`${e.role}-${e.org}`} className="flex gap-6">
              {/* Timeline dot & connector line */}
              <div className="flex flex-col items-center pt-1.5">
                <div
                  className={`h-2.5 w-2.5 shrink-0 rounded-full ring-4 ring-background ${
                    e.active ? "bg-accent" : "bg-border"
                  }`}
                />
                {index < EXPERIENCE.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-border" />
                )}
              </div>

              {/* Content */}
              <div className="pb-2 flex-1">
                <div className="mb-1 text-xs font-medium text-muted-foreground">
                  {e.when}
                </div>
                <h3
                  className="text-base font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {e.role}
                </h3>
                <div className="mb-3 text-sm font-medium text-accent">
                  {e.org}
                </div>
                <ul className="space-y-2">
                  {e.points.map((point) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

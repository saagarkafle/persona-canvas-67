import { EXPERIENCE } from "@/data";

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-secondary/50">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-3xl md:text-4xl">Where I've been</h2>

        <div className="space-y-10">
          {EXPERIENCE.map((e) => (
            <div key={e.role} className="flex gap-6">
              {/* Timeline dot */}
              <div className="flex flex-col items-center pt-1.5">
                <div
                  className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                    e.active ? "bg-accent" : "bg-border"
                  }`}
                />
                <div className="mt-2 w-px flex-1 bg-border" />
              </div>

              {/* Content */}
              <div className="pb-2">
                <div className="mb-1 text-xs text-muted-foreground">
                  {e.when}
                </div>
                <h3
                  className="text-base font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {e.role}
                </h3>
                <div className="mb-2 text-sm font-medium text-accent">
                  {e.org}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {e.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

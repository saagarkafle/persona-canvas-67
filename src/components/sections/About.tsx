import { SKILL_CATEGORIES } from "@/data";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 md:grid-cols-5">
          {/* Story */}
          <div className="md:col-span-3">
            <h2 className="mb-8 text-3xl md:text-4xl">A bit about me</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I've been writing code since my university days in Kathmandu. What started
                as curiosity turned into a career that's taken me across four continents,
                working with startups and established companies alike.
              </p>
              <p>
                I care a lot about the details — how a button feels when you click it,
                whether an API response is 50ms or 500ms, if the error message actually
                helps someone fix the problem. The small stuff matters.
              </p>
              <p>
                When I'm not at my desk, I'm usually out with my camera or reading
                about something completely unrelated to tech. I think the best ideas
                come from being curious about everything, not just code.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="md:col-span-2">
            <h3 className="mb-6 text-lg font-semibold text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
              What I work with
            </h3>
            <div className="space-y-6">
              {SKILL_CATEGORIES.map((s) => (
                <div key={s.title}>
                  <div className="mb-1 text-sm font-medium text-foreground">
                    {s.title}
                  </div>
                  <div className="text-sm text-muted-foreground">{s.items}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

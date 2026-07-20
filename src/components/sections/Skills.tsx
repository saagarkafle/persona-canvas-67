import { SKILL_CATEGORIES } from "@/data";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-end justify-between">
          <h2 className="text-4xl font-extrabold tracking-tighter">Technical Stack</h2>
          <div className="text-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            CAPABILITIES / 2025
          </div>
        </div>
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_CATEGORIES.map((s) => (
            <div
              key={s.n}
              className="group flex flex-col gap-3 bg-background p-6 transition-colors hover:bg-secondary"
            >
              <span className="text-mono text-xs text-accent">{s.n}</span>
              <span className="text-base font-bold group-hover:text-accent">{s.title}</span>
              <span className="text-sm text-muted-foreground">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

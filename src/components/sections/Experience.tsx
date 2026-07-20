import { EXPERIENCE } from "@/data";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 flex items-center justify-between">
          <h2 className="text-3xl font-extrabold tracking-tighter">Career Protocol</h2>
          <a
            href="#"
            className="text-mono border border-accent/30 px-4 py-2 text-[10px] uppercase tracking-widest text-accent transition-all hover:bg-accent hover:text-accent-foreground"
          >
            Download_Resume.PDF
          </a>
        </div>
        <div className="relative space-y-12">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
          {EXPERIENCE.map((e) => (
            <div key={e.role} className="relative pl-10">
              <div
                className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 bg-background ${
                  e.active ? "border-accent shadow-[0_0_12px_var(--color-accent)]" : "border-border"
                }`}
              />
              <div className="mb-2 flex flex-col gap-1 md:flex-row md:justify-between">
                <h3 className="text-lg font-bold">{e.role}</h3>
                <span className="text-mono text-xs text-muted-foreground">{e.when}</span>
              </div>
              <div className="mb-4 text-sm text-accent">{e.org}</div>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

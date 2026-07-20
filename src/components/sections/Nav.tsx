import { SECTION_LINKS } from "@/data";

export function Nav() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-border glass-panel px-6 py-4">
      <a href="#top" className="flex items-center gap-2 text-mono text-xs font-bold tracking-tighter">
        <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
        SAGAR_KAFLE.SYS
      </a>
      <div className="hidden gap-8 text-mono text-[11px] uppercase tracking-widest text-muted-foreground md:flex">
        {SECTION_LINKS.map((l) => (
          <a key={l.href} href={l.href} className="transition-colors hover:text-accent">
            {l.label}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="text-mono text-[10px] uppercase tracking-widest text-accent transition-opacity hover:opacity-80 md:hidden"
      >
        Connect
      </a>
    </nav>
  );
}

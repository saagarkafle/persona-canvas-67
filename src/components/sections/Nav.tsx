import { SECTION_LINKS } from "@/data";

export function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-base font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          Sagar Kafle
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {SECTION_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground md:hidden"
        >
          Say hi
        </a>
      </div>
    </nav>
  );
}

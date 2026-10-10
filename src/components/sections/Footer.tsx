export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row text-xs md:text-sm text-muted-foreground">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
          <span>© {new Date().getFullYear()} Sagar Kafle.</span>
          <span>All rights reserved.</span>
          <span className="hidden sm:inline">•</span>
          <span>Photographs are subject to copyright.</span>
        </div>
        <a
          href="#top"
          className="transition-colors hover:text-foreground"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

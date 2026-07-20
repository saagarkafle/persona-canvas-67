export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} SAGAR KAFLE // ALL SYSTEMS OPERATIONAL
        </div>
        <div className="text-mono flex gap-6 text-[10px] uppercase tracking-widest text-muted-foreground">
          <a href="#top" className="hover:text-foreground">
            Back to top ↑
          </a>
          <a href="#projects" className="hover:text-foreground">
            Projects
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

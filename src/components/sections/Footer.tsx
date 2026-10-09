export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sagar Kafle
        </div>
        <a
          href="#top"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export function Hero() {
  return (
    <section id="top" className="section-padding pt-32 md:pt-40">
      <div className="mx-auto max-w-5xl">
        <div className="animate-fade-up">
          <div className="mb-4 inline-block rounded-full bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent">
            Open to opportunities
          </div>
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl">
            Hey, I'm Sagar.
          </h1>
          <p className="mb-8 max-w-[48ch] text-lg text-muted-foreground">
            I'm a developer and maker from Nepal. I build digital products,
            write code, and occasionally take photos. Currently running{" "}
            <span className="text-foreground font-medium">Kafle Digital Labs</span> — helping
            startups ship their ideas.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-85"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

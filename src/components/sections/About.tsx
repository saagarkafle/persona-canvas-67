export function About() {
  return (
    <section id="about" className="border-y border-border bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="mb-8 flex items-center gap-4 text-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="h-px w-8 bg-border" /> 01. Origin
        </h2>
        <div className="space-y-6 leading-relaxed text-muted-foreground">
          <p>
            I view software as a{" "}
            <span className="text-foreground">precisely machined instrument</span>. Every line of
            code should earn its place; every pixel must serve a functional purpose.
          </p>
          <p>
            As a developer and entrepreneur, I bridge the gap between technical complexity and
            business growth — translating abstract ideas into scalable digital products that real
            people use and trust.
          </p>
          <p>
            Originally from Nepal, working with teams across four continents. Always shipping,
            always learning, always asking what's actually worth building.
          </p>
        </div>
      </div>
    </section>
  );
}

import profileImg from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section id="top" className="section-padding pt-32 md:pt-40">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
          {/* Photo */}
          <div className="w-40 shrink-0 md:w-52">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={profileImg}
                alt="Photo of Sagar Kafle"
                width={400}
                height={500}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          {/* Intro */}
          <div className="animate-fade-up">
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
                className="rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

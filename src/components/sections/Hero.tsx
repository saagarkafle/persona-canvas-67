import profileImg from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative px-6 pt-40 pb-24"
      style={{ backgroundImage: "var(--gradient-radial)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-end gap-12 md:flex-row">
          <div className="flex-1 animate-fade-up">
            <div className="mb-4 text-mono text-sm uppercase tracking-tight text-accent">
              Developer · Engineer · Photographer
            </div>
            <h1 className="mb-8 text-balance text-5xl font-extrabold leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
              Hi, I'm <span className="text-accent">Sagar Kafle</span>
              <span className="text-mono animate-blink text-accent">_</span>
            </h1>
            <p className="mb-10 max-w-[55ch] text-pretty text-lg text-muted-foreground">
              Building digital products, solving complex problems, and capturing stories through the lens. I combine
              technology, design, and creativity to create experiences that are intuitive, purposeful, and visually
              engaging.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="cursor-pointer rounded-sm bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-accent-foreground transition-all hover:brightness-110"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="cursor-pointer rounded-sm border border-border px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:bg-secondary"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="relative overflow-hidden rounded-lg border border-border outline outline-1 outline-white/5">
              <img
                src={profileImg}
                alt="Portrait of Sagar Kafle"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-md p-3">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
                  <div className="text-mono text-[10px] uppercase tracking-widest">
                    <span className="text-accent">Open to work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

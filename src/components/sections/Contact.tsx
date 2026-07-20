export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div
        className="mx-auto max-w-4xl rounded-lg border border-accent/20 glass-panel p-8 md:p-12"
        style={{ backgroundImage: "var(--gradient-radial)" }}
      >
        <div className="mb-10 text-center">
          <div className="text-mono mb-4 text-xs uppercase tracking-widest text-accent">
            04. Connect
          </div>
          <h2 className="mb-6 text-balance text-4xl font-extrabold tracking-tighter md:text-5xl">
            Let's build something meaningful together.
          </h2>
          <p className="mx-auto max-w-[50ch] text-muted-foreground">
            Currently open to strategic partnerships, freelance engagements, and high-impact
            engineering leadership roles.
          </p>
        </div>

        <form
          className="grid gap-4 md:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Name"
            className="text-mono rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
          />
          <input
            type="email"
            placeholder="Email"
            className="text-mono rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
          />
          <textarea
            rows={4}
            placeholder="Tell me about your project…"
            className="text-mono md:col-span-2 resize-none rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent"
          />
          <button
            type="submit"
            className="text-mono md:col-span-2 rounded-sm bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-accent-foreground transition-all hover:brightness-110"
          >
            Send Transmission →
          </button>
        </form>

        <div className="text-mono mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-border pt-8 text-xs uppercase tracking-widest">
          <a href="mailto:hello@sagar-kafle.com.np" className="text-accent hover:underline">
            hello@sagar-kafle.com.np
          </a>
          <a href="#" className="text-muted-foreground hover:text-accent">
            LinkedIn
          </a>
          <a href="#" className="text-muted-foreground hover:text-accent">
            GitHub
          </a>
          <a href="#" className="text-muted-foreground hover:text-accent">
            Twitter / X
          </a>
        </div>
      </div>
    </section>
  );
}

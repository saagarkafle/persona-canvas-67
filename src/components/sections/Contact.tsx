export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl md:text-4xl">Let's talk</h2>
        <p className="mb-10 text-muted-foreground">
          Have a project in mind, want to collaborate, or just want to say hello?
          I'd love to hear from you.
        </p>

        <form
          className="mx-auto max-w-md space-y-4 text-left"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            autoComplete="email"
            className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="What's on your mind?"
            className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Send message
          </button>
        </form>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <a
            href="mailto:hello@sagar-kafle.com.np"
            className="transition-colors hover:text-foreground"
          >
            hello@sagar-kafle.com.np
          </a>
          <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
          <a href="#" className="transition-colors hover:text-foreground">
            LinkedIn
          </a>
          <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
          <a href="#" className="transition-colors hover:text-foreground">
            GitHub
          </a>
          <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
          <a href="#" className="transition-colors hover:text-foreground">
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
}

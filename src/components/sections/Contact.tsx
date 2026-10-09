import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl md:text-4xl">Let's connect</h2>
        <p className="mb-10 text-muted-foreground">
          I'm actively seeking opportunities in software engineering, mobile development,
          and applied AI / machine learning. Feel free to send a message or connect through my profiles below.
        </p>

        {submitted ? (
          <div className="mx-auto max-w-md rounded-xl border border-border bg-card p-8 text-center animate-fade-in">
            <div className="mb-3 text-3xl">✨</div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">Message received</h3>
            <p className="text-sm text-muted-foreground">
              Thank you for reaching out! I'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-xs text-accent hover:underline font-medium"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            className="mx-auto max-w-md space-y-4 text-left"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              autoComplete="name"
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="What's on your mind?"
              required
              className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-85 shadow-sm"
            >
              Send message
            </button>
          </form>
        )}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <a
            href="https://www.linkedin.com/in/sagar-kafle-a1b84b185/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
          <a
            href="https://github.com/saagarkafle"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
          <a
            href="https://medium.com/@kafleysaagar"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Medium
          </a>
        </div>
      </div>
    </section>
  );
}

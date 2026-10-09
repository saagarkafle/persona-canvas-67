import { SKILL_CATEGORIES } from "@/data";

export function About() {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 md:grid-cols-5">
          {/* Story */}
          <div className="md:col-span-3">
            <h2 className="mb-8 text-3xl md:text-4xl">A bit about me</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I hold an MSc in Artificial Intelligence and Data Science from{" "}
                <span className="font-medium text-foreground">Edinburgh Napier University</span>{" "}
                (Final CGPA: 3.90). For my dissertation, I built and deployed{" "}
                <span className="font-medium text-foreground">InsightPaper AI</span> — an AI research assistant
                leveraging RAG, semantic search via Pinecone, and fine-tuned Sentence Transformers achieving 100% Recall@5.
              </p>
              <p>
                I have over two years of professional software development experience. At{" "}
                <span className="font-medium text-foreground">Straw Holding</span>, I developed and maintained
                production Flutter apps with BLoC architecture, real-time chat, and integrated four payment
                gateways (eSewa, Khalti, MyPay, Stripe). Prior to that at{" "}
                <span className="font-medium text-foreground">Code Himalaya</span>, I built offline-first mobile apps
                with Riverpod, local caching, and native Android module integrations.
              </p>
              <p>
                I'm passionate about clean architecture, testable code, and high-performance applications.
                I'm currently seeking a software development, AI, machine learning, or data-focused role
                where I can combine my strong mobile engineering background with my applied AI expertise.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="md:col-span-2">
            <h3 className="mb-6 text-lg font-semibold text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
              What I work with
            </h3>
            <div className="space-y-4">
              {SKILL_CATEGORIES.map((s) => (
                <div key={s.title} className="rounded-lg border border-border/60 bg-card/60 p-3">
                  <div className="mb-1 text-xs font-semibold text-foreground uppercase tracking-wider">
                    {s.title}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{s.items}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

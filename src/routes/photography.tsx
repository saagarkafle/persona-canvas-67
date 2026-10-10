import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/sections/Nav";
import { Photography as PhotographySection } from "@/components/sections/Photography";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/photography")({
  component: PhotographyPage,
  head: () => ({
    meta: [
      { title: "Photography & Visual Stories — Sagar Kafle" },
      {
        name: "description",
        content:
          "Landscape and documentary photography by Sagar Kafle across the Scottish Highlands and the Kathmandu Valley, Nepal.",
      },
      { property: "og:title", content: "Photography & Visual Stories — Sagar Kafle" },
      {
        property: "og:description",
        content:
          "Moments and visual stories captured through the lens in Scotland and Nepal by Sagar Kafle.",
      },
    ],
    links: [{ rel: "canonical", href: "/photography" }],
  }),
});

function PhotographyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-20">
        <div className="mx-auto max-w-5xl px-6 pt-8 pb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors mb-6"
          >
            ← Back to Portfolio
          </Link>
          <div className="border-b border-border/60 pb-8">
            <div className="mb-2 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
              Photo Archive
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Stories Through The Lens
            </h1>
            <p className="max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
              A personal collection documenting light, quiet moments, and cultural heritage across Scotland and Nepal.
              Click any photograph to view technical capture details and read the full story behind the frame.
            </p>
          </div>
        </div>

        <PhotographySection />
      </main>
      <Footer />
    </div>
  );
}

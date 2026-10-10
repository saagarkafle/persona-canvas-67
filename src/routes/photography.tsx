import { createFileRoute } from "@tanstack/react-router";
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
          "Landscape and documentary photography by Sagar Kafle across Scotland and Nepal. All photographs are subject to copyright.",
      },
      { name: "copyright", content: "© Sagar Kafle. All rights reserved." },
      { property: "og:title", content: "Photography & Visual Stories — Sagar Kafle" },
      {
        property: "og:description",
        content:
          "Moments and visual stories captured through the lens in Scotland and Nepal by Sagar Kafle. All photographs subject to copyright.",
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
        <PhotographySection isFullPage={true} />
      </main>
      <Footer />
    </div>
  );
}

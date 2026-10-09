import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/sections/About";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Nav } from "@/components/sections/Nav";
import { Projects } from "@/components/sections/Projects";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sagar Kafle — Software Engineer" },
      {
        name: "description",
        content:
          "Sagar Kafle — Software Engineer. MSc Artificial Intelligence and Data Science graduate from Edinburgh Napier University with 2+ years experience in Flutter, mobile engineering, and applied AI.",
      },
      { property: "og:title", content: "Sagar Kafle — Software Engineer" },
      {
        property: "og:description",
        content:
          "Software Engineer. MSc Artificial Intelligence and Data Science graduate from Edinburgh Napier University with 2+ years experience in Flutter, mobile engineering, and applied AI.",
      },
      { property: "og:url", content: "https://sagar-kafle.com.np" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sagar Kafle",
          jobTitle: "Software Engineer",
          alumniOf: "Edinburgh Napier University",
          url: "https://sagar-kafle.com.np",
          sameAs: [
            "https://www.linkedin.com/in/sagar-kafle-a1b84b185/",
            "https://github.com/saagarkafle",
            "https://medium.com/@kafleysaagar",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

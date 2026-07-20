import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/sections/About";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Nav } from "@/components/sections/Nav";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sagar Kafle — Builder, Developer, Digital Strategist" },
      {
        name: "description",
        content:
          "Personal portfolio of Sagar Kafle — software engineer, entrepreneur, and digital strategist. Selected works, experience, and writing.",
      },
      { property: "og:title", content: "Sagar Kafle — Builder, Developer, Digital Strategist" },
      {
        property: "og:description",
        content:
          "Personal portfolio of Sagar Kafle — software engineer, entrepreneur, and digital strategist.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sagar Kafle",
          jobTitle: "Builder, Developer, Digital Strategist",
          url: "https://sagar-kafle.com.np",
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
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

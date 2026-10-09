import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/sections/About";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Nav } from "@/components/sections/Nav";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";

export const Route = createFileRoute("/")(({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sagar Kafle — Developer & Maker" },
      {
        name: "description",
        content:
          "Sagar Kafle — a developer from Nepal who builds digital products, writes code, and takes photos.",
      },
      { property: "og:title", content: "Sagar Kafle — Developer & Maker" },
      {
        property: "og:description",
        content:
          "A developer from Nepal who builds digital products, writes code, and takes photos.",
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
          jobTitle: "Software Developer",
          url: "https://sagar-kafle.com.np",
        }),
      },
    ],
  }),
}));

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
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

// @lovable.dev/vite-tanstack-config includes: tanstackStart, viteReact,
// tailwindcss, tsConfigPaths, componentTagger (dev-only), VITE_* env injection,
// @ path alias, React/TanStack dedupe, and error logger plugins.
// cloudflare: false disables @cloudflare/vite-plugin so the build produces
// a plain static bundle suitable for Cloudflare Pages.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
});


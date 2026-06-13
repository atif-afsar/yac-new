/**
 * Shared site URL for build-time SEO file generation.
 * Override with VITE_SITE_URL env var in CI/production.
 */
export const SITE_URL = (
  process.env.VITE_SITE_URL || "https://new.yasiraliclasses.in"
).replace(/\/$/, "");

export const sections = [
  "hero",
  "about",
  "courses",
  "results",
  "why-choose-us",
  "testimonials",
  "cta",
  "contact",
];

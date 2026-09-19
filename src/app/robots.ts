import type { MetadataRoute } from "next";

// Sitemap is intentionally omitted: a sitemap entry requires an absolute
// production URL, which has not been confirmed yet (see Step 13 notes).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}

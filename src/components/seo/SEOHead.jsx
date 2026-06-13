import { useEffect } from "react";
import { seoConfig, SITE_URL } from "../../data/seo";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href, extra = {}) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  Object.entries(extra).forEach(([k, v]) => el.setAttribute(k, v));
}

/**
 * Syncs document head with SEO metadata (canonical, OG, Twitter, geo).
 * Complements static tags in index.html for crawlers that execute JS.
 */
export default function SEOHead() {
  useEffect(() => {
    document.title = seoConfig.title;
    document.documentElement.lang = seoConfig.language;

    upsertMeta("name", "description", seoConfig.description);
    upsertMeta("name", "keywords", seoConfig.keywords);
    upsertMeta("name", "author", "Yasir Ali Classes");
    upsertMeta("name", "robots", "index, follow, max-image-preview:large");
    upsertMeta("name", "googlebot", "index, follow");

    upsertMeta("name", "geo.region", seoConfig.geo.region);
    upsertMeta("name", "geo.placename", seoConfig.geo.placename);
    upsertMeta("name", "geo.position", `${seoConfig.geo.latitude};${seoConfig.geo.longitude}`);
    upsertMeta("name", "ICBM", `${seoConfig.geo.latitude}, ${seoConfig.geo.longitude}`);

    upsertLink("canonical", seoConfig.canonicalUrl);
    upsertLink("alternate", seoConfig.canonicalUrl, { hreflang: seoConfig.language });

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", seoConfig.canonicalUrl);
    upsertMeta("property", "og:title", seoConfig.title);
    upsertMeta("property", "og:description", seoConfig.description);
    upsertMeta("property", "og:image", seoConfig.ogImage);
    upsertMeta("property", "og:image:alt", seoConfig.ogImageAlt);
    upsertMeta("property", "og:locale", seoConfig.locale);
    upsertMeta("property", "og:site_name", "Yasir Ali Classes");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seoConfig.title);
    upsertMeta("name", "twitter:description", seoConfig.description);
    upsertMeta("name", "twitter:image", seoConfig.ogImage);
    upsertMeta("name", "twitter:image:alt", seoConfig.ogImageAlt);

    upsertLink("sitemap", `${SITE_URL}/sitemap.xml`, { type: "application/xml", title: "Sitemap" });
  }, []);

  return null;
}

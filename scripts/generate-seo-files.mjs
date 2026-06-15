import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_URL } from "../seo.config.js";
import {
  business,
  landingPages,
  trustSignals,
  featuredTestimonials,
} from "../landing-pages.config.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const lastmod = new Date().toISOString().split("T")[0];

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */

const esc = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const abs = (path = "/") =>
  path.startsWith("http")
    ? path
    : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

const pageUrl = (slug) => `${SITE_URL}/${slug}`;

/* ------------------------------------------------------------------ */
/* Structured data (JSON-LD @graph) per landing page                  */
/* ------------------------------------------------------------------ */

function organizationNode() {
  return {
    "@type": ["Organization", "EducationalOrganization"],
    "@id": `${SITE_URL}/#organization`,
    name: business.name,
    alternateName: [
      business.shortName,
      "YAC Aligarh",
      "Yasir Ali Commerce Classes",
    ],
    url: SITE_URL,
    logo: abs("/favicon.png"),
    email: business.email,
    telephone: business.phones,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      postalCode: business.postalCode,
      addressCountry: business.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Aligarh" },
      { "@type": "State", name: "Uttar Pradesh" },
      { "@type": "Country", name: "India" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    hasMap: business.mapsUrl,
    sameAs: business.social,
    founder: {
      "@type": "Person",
      name: business.founder.name,
      jobTitle: business.founder.role,
      description: business.founder.description,
    },
  };
}

function structuredData(page) {
  const url = pageUrl(page.slug);
  const graph = [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: business.name,
      alternateName: business.shortName,
      url: SITE_URL,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    organizationNode(),
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.breadcrumb,
          item: url,
        },
      ],
    },
  ];

  if (page.course) {
    graph.push({
      "@type": "Course",
      "@id": `${url}#course`,
      name: page.course.name,
      description: page.course.description,
      provider: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        category: "Educational",
        availability: "https://schema.org/InStock",
        url,
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: ["onsite", "online"],
        location: {
          "@type": "Place",
          name: business.name,
          address: {
            "@type": "PostalAddress",
            addressLocality: business.addressLocality,
            addressRegion: business.addressRegion,
            addressCountry: business.addressCountry,
          },
        },
      },
    });
  }

  if (page.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

/* ------------------------------------------------------------------ */
/* Page template (self-contained, fast, crawlable static HTML)        */
/* ------------------------------------------------------------------ */

const STYLES = `
:root{--red:#dc2626;--red-dark:#b91c1c;--ink:#18181b;--muted:#52525b;--line:#e4e4e7;--bg:#ffffff;--soft:#fafafa}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color:var(--ink);background:var(--bg);line-height:1.6;font-size:17px}
a{color:var(--red-dark)}
.wrap{max-width:980px;margin:0 auto;padding:0 20px}
header.site{position:sticky;top:0;z-index:10;background:var(--red-dark);color:#fff;border-bottom:1px solid rgba(255,255,255,.15)}
header.site .wrap{display:flex;align-items:center;justify-content:space-between;height:60px;gap:16px}
header.site a{color:#fff;text-decoration:none}
.brand{display:flex;flex-direction:column;line-height:1.1}
.brand b{font-size:16px;font-weight:800}
.brand span{font-size:10px;letter-spacing:.12em;text-transform:uppercase;opacity:.9}
.cta-top{display:inline-flex;align-items:center;background:#fff;color:var(--red-dark);font-weight:700;font-size:14px;padding:8px 16px;border-radius:8px;white-space:nowrap}
nav.crumbs{font-size:13px;color:var(--muted);padding:14px 0}
nav.crumbs a{color:var(--muted);text-decoration:none}
main{padding-bottom:8px}
h1{font-size:clamp(1.7rem,4.5vw,2.6rem);line-height:1.18;letter-spacing:-.02em;margin:.2em 0 .4em}
h2{font-size:clamp(1.25rem,3vw,1.6rem);letter-spacing:-.01em;margin:1.8em 0 .5em}
h3{font-size:1.05rem;margin:1.2em 0 .3em}
.lead{font-size:1.12rem;color:#3f3f46}
.badges{display:flex;flex-wrap:wrap;gap:8px;margin:18px 0}
.badge{font-size:12px;font-weight:600;color:var(--red-dark);background:#fef2f2;border:1px solid rgba(220,38,38,.2);border-radius:999px;padding:5px 12px}
ul.ticks{list-style:none;padding:0;margin:.6em 0}
ul.ticks li{position:relative;padding-left:26px;margin:.45em 0;color:#3f3f46}
ul.ticks li::before{content:"";position:absolute;left:6px;top:11px;width:7px;height:7px;border-radius:50%;background:var(--red)}
.cta-box{margin:30px 0;padding:22px;border:1px solid var(--line);border-radius:14px;background:var(--soft);display:flex;flex-wrap:wrap;align-items:center;gap:14px;justify-content:space-between}
.cta-box p{margin:0;font-weight:600}
.btn{display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:15px;text-decoration:none;padding:11px 20px;border-radius:10px}
.btn-red{background:var(--red);color:#fff}
.btn-ghost{background:#fff;color:var(--ink);border:1px solid var(--line)}
.faq details{border-bottom:1px solid var(--line);padding:14px 0}
.faq summary{cursor:pointer;font-weight:700;font-size:1.02rem;list-style:none}
.faq summary::-webkit-details-marker{display:none}
.faq summary::before{content:"+ ";color:var(--red);font-weight:800}
.faq details[open] summary::before{content:"– "}
.faq p{margin:10px 0 2px;color:#3f3f46}
.quotes{display:grid;gap:14px;grid-template-columns:1fr;margin:.6em 0}
@media(min-width:720px){.quotes{grid-template-columns:repeat(3,1fr)}}
.quote{border:1px solid var(--line);border-radius:12px;padding:16px;background:#fff}
.quote p{margin:0 0 10px;font-size:.95rem;color:#3f3f46}
.quote b{font-size:.85rem}
.quote span{display:block;font-size:.78rem;color:var(--muted)}
.related{display:flex;flex-wrap:wrap;gap:8px;margin:.6em 0}
.related a{font-size:13px;text-decoration:none;color:var(--red-dark);background:#fef2f2;border:1px solid rgba(220,38,38,.2);border-radius:8px;padding:7px 12px}
footer.site{background:#0a0a0a;color:#a1a1aa;margin-top:40px;padding:34px 0;font-size:14px}
footer.site a{color:#d4d4d8;text-decoration:none}
footer.site h4{color:#fff;font-size:13px;letter-spacing:.12em;text-transform:uppercase;margin:0 0 12px}
.fcols{display:grid;gap:26px;grid-template-columns:1fr}
@media(min-width:720px){.fcols{grid-template-columns:1.4fr 1fr 1fr}}
.fcols ul{list-style:none;padding:0;margin:0}
.fcols li{margin:.4em 0}
.copy{border-top:1px solid rgba(255,255,255,.1);margin-top:24px;padding-top:18px;font-size:12px;color:#71717a}
`;

function renderRelated(currentSlug) {
  const links = landingPages
    .filter((p) => p.slug !== currentSlug)
    .map(
      (p) =>
        `<a href="/${p.slug}">${esc(p.breadcrumb)}</a>`
    )
    .join("\n        ");
  return links;
}

function renderSection(s) {
  const bodyHtml = (s.body || [])
    .map((p) => `<p>${esc(p)}</p>`)
    .join("\n        ");
  const bullets = s.bullets
    ? `<ul class="ticks">\n          ${s.bullets
        .map((b) => `<li>${esc(b)}</li>`)
        .join("\n          ")}\n        </ul>`
    : "";
  return `<h2>${esc(s.heading)}</h2>
        ${bodyHtml}
        ${bullets}`;
}

function renderPage(page) {
  const url = pageUrl(page.slug);
  const leadHtml = page.lead
    .map((p) => `<p class="lead">${esc(p)}</p>`)
    .join("\n        ");
  const sectionsHtml = page.sections.map(renderSection).join("\n        ");
  const faqHtml = page.faqs
    .map(
      (f) =>
        `<details>\n          <summary>${esc(
          f.q
        )}</summary>\n          <p>${esc(f.a)}</p>\n        </details>`
    )
    .join("\n        ");
  const trustHtml = trustSignals
    .map((t) => `<span class="badge">${esc(t)}</span>`)
    .join("\n          ");
  const quotesHtml = featuredTestimonials
    .map(
      (t) =>
        `<figure class="quote">\n            <p>“${esc(
          t.quote
        )}”</p>\n            <b>${esc(t.author)}</b><span>${esc(
          t.role
        )}</span>\n          </figure>`
    )
    .join("\n          ");

  return `<!doctype html>
<html lang="en-IN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}" />
  <meta name="keywords" content="${esc(
    [...page.keywords, "Aligarh", "Uttar Pradesh", "Yasir Ali Classes", "YAC"].join(
      ", "
    )
  )}" />
  <meta name="author" content="Yasir Ali Classes" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="googlebot" content="index, follow" />
  <meta name="geo.region" content="IN-UP" />
  <meta name="geo.placename" content="Aligarh, Uttar Pradesh, India" />
  <meta name="geo.position" content="${business.geo.latitude};${
    business.geo.longitude
  }" />
  <meta name="ICBM" content="${business.geo.latitude}, ${
    business.geo.longitude
  }" />
  <link rel="canonical" href="${url}" />
  <link rel="alternate" hreflang="en-IN" href="${url}" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="apple-touch-icon" href="/favicon.png" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="${url}" />
  <meta property="og:title" content="${esc(page.title)}" />
  <meta property="og:description" content="${esc(page.description)}" />
  <meta property="og:image" content="${abs("/favicon.png")}" />
  <meta property="og:locale" content="en_IN" />
  <meta property="og:site_name" content="Yasir Ali Classes" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(page.title)}" />
  <meta name="twitter:description" content="${esc(page.description)}" />
  <meta name="twitter:image" content="${abs("/favicon.png")}" />

  <script type="application/ld+json">
${JSON.stringify(structuredData(page), null, 2)}
  </script>
  <style>${STYLES}</style>
</head>
<body>
  <header class="site">
    <div class="wrap">
      <a href="/" class="brand">
        <b>Yasir Ali Classes</b>
        <span>YAC · Aligarh</span>
      </a>
      <a class="cta-top" href="${business.primaryPhoneHref}">Call ${esc(
    business.phones[0]
  )}</a>
    </div>
  </header>

  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb">
      <a href="/">Home</a> &rsaquo; <span>${esc(page.breadcrumb)}</span>
    </nav>

    <main>
      <h1>${esc(page.h1)}</h1>
      ${leadHtml}

      <div class="badges">
          ${trustHtml}
      </div>

      ${sectionsHtml}

      <div class="cta-box">
        <p>Admissions open at Yasir Ali Classes, Aligarh — talk to our team today.</p>
        <span>
          <a class="btn btn-red" href="${business.primaryPhoneHref}">Call Now</a>
          <a class="btn btn-ghost" href="${business.whatsappHref}" rel="noopener" target="_blank">WhatsApp</a>
        </span>
      </div>

      <h2>What students &amp; parents say</h2>
      <div class="quotes">
          ${quotesHtml}
      </div>

      <section class="faq">
        <h2>Frequently asked questions</h2>
        ${faqHtml}
      </section>

      <h2>Explore more at Yasir Ali Classes, Aligarh</h2>
      <div class="related">
        <a href="/">Home</a>
        ${renderRelated(page.slug)}
      </div>
    </main>
  </div>

  <footer class="site">
    <div class="wrap">
      <div class="fcols">
        <div>
          <h4>Yasir Ali Classes (YAC)</h4>
          <p>Aligarh's trusted commerce &amp; entrance coaching institute — Accounts, Economics, Business Studies, CUET, AMU, MBA entrance &amp; GD-PI.</p>
          <p>${esc(business.tagline)}</p>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="${business.primaryPhoneHref}">${esc(
    business.phones[0]
  )}</a></li>
            <li><a href="tel:+919412617279">${esc(business.phones[1])}</a></li>
            <li><a href="mailto:${business.email}">${esc(
    business.email
  )}</a></li>
            <li>${esc(business.hours)}</li>
            <li><a href="${business.mapsUrl}" rel="noopener" target="_blank">${esc(
    `${business.addressLocality}, ${business.addressRegion}, India`
  )}</a></li>
          </ul>
        </div>
        <div>
          <h4>Programs</h4>
          <ul>
            <li><a href="/commerce-coaching-aligarh">Commerce Coaching</a></li>
            <li><a href="/cuet-coaching-aligarh">CUET Coaching</a></li>
            <li><a href="/amu-entrance-coaching-aligarh">AMU Entrance</a></li>
            <li><a href="/mba-entrance-coaching-aligarh">MBA Entrance</a></li>
            <li><a href="/gd-pi-coaching-aligarh">GD-PI Coaching</a></li>
          </ul>
        </div>
      </div>
      <p class="copy">© ${new Date().getFullYear()} Yasir Ali Classes (YAC), Aligarh, Uttar Pradesh, India. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>
`;
}

/* ------------------------------------------------------------------ */
/* sitemap.xml + robots.txt                                           */
/* ------------------------------------------------------------------ */

const sitemapUrls = [
  { loc: `${SITE_URL}/`, priority: "1.0", changefreq: "weekly" },
  ...landingPages.map((p) => ({
    loc: pageUrl(p.slug),
    priority: "0.9",
    changefreq: "monthly",
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const robots = `# Yasir Ali Classes (YAC) — Aligarh Commerce Coaching
User-agent: *
Allow: /

# AI & search crawlers
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Host: ${SITE_URL}
Sitemap: ${SITE_URL}/sitemap.xml
`;

/* ------------------------------------------------------------------ */
/* Write everything                                                   */
/* ------------------------------------------------------------------ */

mkdirSync(publicDir, { recursive: true });
writeFileSync(join(publicDir, "sitemap.xml"), sitemap, "utf8");
writeFileSync(join(publicDir, "robots.txt"), robots, "utf8");

for (const page of landingPages) {
  const dir = join(publicDir, page.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), renderPage(page), "utf8");
}

console.log(
  `Generated sitemap.xml, robots.txt and ${landingPages.length} SEO landing pages for ${SITE_URL}`
);

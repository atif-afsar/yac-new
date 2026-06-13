import { courses } from "../data/courses";
import { siteConfig } from "../data/site";
import { faqItems, founderInfo, seoConfig, SITE_URL } from "../data/seo";

const { brand, contact, social } = siteConfig;
const { geo } = seoConfig;

function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: brand.name,
    alternateName: [brand.shortName, "YAC Aligarh", "Yasir Ali Commerce Classes"],
    url: SITE_URL,
    logo: absoluteUrl("/favicon.png"),
    description: seoConfig.description,
    email: contact.email.display,
    telephone: contact.phones.map((p) => p.display),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Aligarh",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Aligarh" },
      { "@type": "State", name: "Uttar Pradesh" },
      { "@type": "Country", name: "India" },
    ],
    sameAs: Object.values(social).map((s) => s.href),
    founder: {
      "@type": "Person",
      name: founderInfo.name,
      jobTitle: founderInfo.role,
      description: founderInfo.description,
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#localbusiness`,
    name: brand.name,
    alternateName: [brand.shortName, "YAC Aligarh"],
    url: SITE_URL,
    image: absoluteUrl("/favicon.png"),
    description: seoConfig.description,
    telephone: contact.phones[0].display,
    email: contact.email.display,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.streetAddress || contact.address,
      addressLocality: "Aligarh",
      addressRegion: "Uttar Pradesh",
      postalCode: contact.postalCode || "202001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
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
    hasMap: contact.mapsUrl,
    areaServed: {
      "@type": "City",
      name: "Aligarh",
      containedInPlace: {
        "@type": "State",
        name: "Uttar Pradesh",
        containedInPlace: { "@type": "Country", name: "India" },
      },
    },
    sameAs: Object.values(social).map((s) => s.href),
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: brand.name,
    alternateName: brand.shortName,
    url: SITE_URL,
    description: seoConfig.description,
    inLanguage: seoConfig.language,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: seoConfig.sections.map((section, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: section.name,
      item: `${SITE_URL}/#${section.id}`,
    })),
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getCourseListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Yasir Ali Classes — Coaching Programs in Aligarh",
    description:
      "Commerce, CUET, AMU, MBA entrance, and professional coaching programs at YAC Aligarh.",
    numberOfItems: courses.length,
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        "@id": `${SITE_URL}/#courses-${course.id}`,
        name: course.title,
        description: [course.description, ...(course.highlights ?? [])].join(" "),
        provider: { "@id": `${SITE_URL}/#organization` },
        offers: {
          "@type": "Offer",
          category: "Educational",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#courses`,
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["onsite", "online"],
          location: {
            "@type": "Place",
            name: brand.name,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Aligarh",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN",
            },
          },
        },
      },
    })),
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#founder`,
    name: founderInfo.name,
    jobTitle: founderInfo.role,
    description: founderInfo.description,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    knowsAbout: [
      "Commerce Coaching",
      "Accountancy",
      "Economics",
      "Business Studies",
      "CUET Preparation",
      "AMU Entrance",
      "MBA Entrance",
      "GD-PI Preparation",
    ],
  };
}

/** Combined @graph for a single JSON-LD script tag */
export function getStructuredDataGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getWebSiteSchema(),
      getOrganizationSchema(),
      getLocalBusinessSchema(),
      getPersonSchema(),
      getBreadcrumbSchema(),
      getFaqSchema(),
      getCourseListSchema(),
    ],
  };
}

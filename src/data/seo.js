/**
 * Central SEO configuration — single source for metadata, schema, and sitemap generation.
 * Set VITE_SITE_URL in production to your live domain (https://new.yasiraliclasses.in).
 */
export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ||
  "https://new.yasiraliclasses.in";

export const seoConfig = {
  siteUrl: SITE_URL,
  canonicalUrl: SITE_URL + "/",
  locale: "en_IN",
  language: "en-IN",

  title:
    "Yasir Ali Classes (YAC) Aligarh | Best Commerce Coaching in Aligarh — CUET, AMU, MBA Entrance",

  description:
    "Yasir Ali Classes (YAC) is Aligarh's leading commerce coaching institute for Class 11–12 Accounts, Economics, Business Studies, CUET Commerce, B.Com, AMU Entrance, MBA Entrance & GD-PI preparation. Trusted coaching in Aligarh, Uttar Pradesh.",

  keywords: [
    "Yasir Ali Classes",
    "YAC Aligarh",
    "Yasir Ali Classes Aligarh",
    "Yasir Ali Commerce Classes",
    "Commerce Coaching Aligarh",
    "Best Commerce Coaching in Aligarh",
    "Best Commerce Classes in Aligarh",
    "Accounts Coaching Aligarh",
    "Economics Coaching Aligarh",
    "Business Studies Coaching Aligarh",
    "CUET Commerce Coaching Aligarh",
    "B.Com Coaching Aligarh",
    "MBA Entrance Coaching Aligarh",
    "GD PI Coaching Aligarh",
    "AMU Entrance Coaching Aligarh",
    "Best Coaching in Aligarh",
    "Top Coaching Institute in Aligarh",
    "Commerce Tuition in Aligarh",
    "Coaching for Class 11 Commerce",
    "Coaching for Class 12 Commerce",
    "CUET Preparation Aligarh",
    "MBA Preparation Aligarh",
  ].join(", "),

  ogImage: `${SITE_URL}/favicon.png`,
  ogImageAlt: "Yasir Ali Classes (YAC) — Best Commerce Coaching in Aligarh",

  twitterHandle: "@yasiraliclasses",

  geo: {
    region: "IN-UP",
    placename: "Aligarh, Uttar Pradesh, India",
    latitude: 27.8974,
    longitude: 78.088,
  },

  /** Anchor sections for breadcrumbs & sitemap */
  sections: [
    { id: "hero", name: "Home" },
    { id: "about", name: "About Yasir Ali Classes" },
    { id: "courses", name: "Commerce & Entrance Courses" },
    { id: "results", name: "Results & Selections" },
    { id: "why-choose-us", name: "Why Choose YAC" },
    { id: "testimonials", name: "Student Testimonials" },
    { id: "cta", name: "Admissions" },
    { id: "contact", name: "Contact" },
  ],
};

/** FAQ content — answers must appear on-page (About + Contact sections) */
export const faqItems = [
  {
    question: "What is Yasir Ali Classes (YAC) Aligarh?",
    answer:
      "Yasir Ali Classes (YAC) is a trusted coaching institute in Aligarh, Uttar Pradesh, offering Commerce, Humanities, Science, and entrance exam preparation for Class 11–12, CUET, AMU, JMI, MBA Entrance, and GD-PI with expert faculty and proven results.",
  },
  {
    question: "Which is the best commerce coaching in Aligarh?",
    answer:
      "Yasir Ali Classes is widely regarded among students and parents as one of the best commerce coaching institutes in Aligarh, with dedicated batches for Accountancy, Economics, Business Studies, and board plus entrance exam preparation.",
  },
  {
    question: "Does YAC offer Accounts, Economics and Business Studies coaching in Aligarh?",
    answer:
      "Yes. Yasir Ali Classes provides Accounts coaching, Economics coaching, and Business Studies coaching for Class 11 and Class 12 Commerce students in Aligarh, along with test series, doubt sessions, and revision plans.",
  },
  {
    question: "Is CUET Commerce coaching available at Yasir Ali Classes Aligarh?",
    answer:
      "Yes. YAC offers CUET Commerce coaching in Aligarh covering Accountancy, Business Studies, Economics, and General Test preparation with structured batches, mock tests, and mentorship.",
  },
  {
    question: "Does Yasir Ali Classes provide AMU entrance coaching in Aligarh?",
    answer:
      "Yes. YAC provides AMU entrance coaching in Aligarh for B.Com, B.A., BBA, BA LLB, and other AMU entrance programs with focused syllabus coverage and previous-year practice.",
  },
  {
    question: "Is MBA entrance and GD-PI coaching available at YAC Aligarh?",
    answer:
      "Yes. Yasir Ali Classes offers MBA entrance coaching and GD-PI coaching in Aligarh, including aptitude preparation, interview guidance, and personality development for management aspirants.",
  },
  {
    question: "Where is Yasir Ali Classes located in Aligarh?",
    answer:
      "Yasir Ali Classes is located in Aligarh, Uttar Pradesh, India. Contact +91 90454 17079 or visit during office hours (Mon–Sat, 8:00 AM – 7:00 PM) for admission counselling and batch details.",
  },
  {
    question: "Does YAC offer online and offline commerce classes?",
    answer:
      "Yes. Yasir Ali Classes offers both online and offline commerce classes, live sessions, test series, and personal mentorship for students across Aligarh and beyond.",
  },
];

/** E-E-A-T: founder & institute authority signals */
export const founderInfo = {
  name: "Yasir Ali",
  role: "Founder & Lead Educator",
  description:
    "Yasir Ali founded Yasir Ali Classes (YAC) in Aligarh with a mission to deliver result-oriented commerce and entrance coaching. With 10+ years of trust, a 100K+ YouTube learning community, and thousands of successful students, he leads faculty focused on Accountancy, Economics, Business Studies, CUET, AMU, and MBA entrance preparation.",
};

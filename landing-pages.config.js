/**
 * SEO landing-page content + business data.
 *
 * Node-safe (no Vite / import.meta.env usage) so it can be consumed by the
 * build-time generator in scripts/generate-seo-files.mjs. These definitions
 * drive static, fully-crawlable HTML pages that target high-intent local
 * keywords WITHOUT touching the React single-page app or its UI.
 */
import { SITE_URL } from "./seo.config.js";

/** Canonical NAP — must stay identical to src/data/site.js & Google Business Profile. */
export const business = {
  name: "Yasir Ali Classes",
  shortName: "YAC",
  legalName: "Yasir Ali Classes",
  tagline: "We Debit Efforts, to Credit Your Success.",
  email: "yasirali83637@gmail.com",
  phones: ["+91 90454 17079", "+91 94126 17279"],
  primaryPhoneHref: "tel:+919045417079",
  whatsappHref: "https://wa.me/919045417079",
  addressLocality: "Aligarh",
  addressRegion: "Uttar Pradesh",
  postalCode: "202001",
  addressCountry: "IN",
  streetAddress: "Yasir Ali Classes, Aligarh",
  hours: "Mon – Sat, 8:00 AM – 7:00 PM",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Yasir+Ali+Classes+Aligarh+Uttar+Pradesh+India",
  geo: { latitude: 27.8974, longitude: 78.088 },
  social: [
    "https://youtube.com/channel/UCUlHYg9DL5LACF_fHQI7I_g",
    "https://instagram.com/yasiraliclasses/?hl=en",
    "https://www.facebook.com/yasiraliclasses/",
  ],
  founder: {
    name: "Yasir Ali",
    role: "Founder & Lead Educator",
    description:
      "Yasir Ali founded Yasir Ali Classes (YAC) in Aligarh to deliver result-oriented commerce and entrance coaching. With 10+ years of trust, a 100K+ YouTube learning community and thousands of successful students, he leads faculty across Accountancy, Economics, Business Studies, CUET, AMU and MBA entrance preparation.",
  },
};

/** Re-usable trust signals (E-E-A-T) surfaced on every landing page. */
export const trustSignals = [
  "10+ years of trusted commerce coaching in Aligarh",
  "1200+ students enrolled across regular & entrance batches",
  "100K+ YouTube learning community",
  "Consistent AMU, CUET, JMI & board exam selections",
];

/** Short proof points pulled from real on-site testimonials. */
export const featuredTestimonials = [
  {
    quote:
      "YAC's accountancy classes made complex topics crystal clear. I scored 94% in my Class 12 boards thanks to the structured revision plan.",
    author: "Priya Sharma",
    role: "Class 12 Commerce, Aligarh",
  },
  {
    quote:
      "The CUET crash course was perfectly timed and covered every important topic. I cleared my target university with ease.",
    author: "Neha Singh",
    role: "CUET Commerce Aspirant",
  },
  {
    quote:
      "Two of my children studied at YAC. Consistent results, ethical teaching and genuine care — I recommend it to every parent in Aligarh.",
    author: "Dr. Imran Ansari",
    role: "Parent, Aligarh",
  },
];

const para = (...p) => p;

/**
 * Every landing page targets one keyword cluster. Content is written to be
 * answer-first (for Google AI Overview, ChatGPT Search, Gemini, Perplexity),
 * entity-rich, and locally relevant to Aligarh, Uttar Pradesh, India.
 */
export const landingPages = [
  {
    slug: "yasir-ali-classes-aligarh",
    breadcrumb: "Yasir Ali Classes Aligarh",
    title:
      "Yasir Ali Classes (YAC) Aligarh — Best Commerce & Entrance Coaching",
    description:
      "Yasir Ali Classes (YAC) is Aligarh's trusted commerce & entrance coaching institute for Class 11–12, CUET, AMU, MBA entrance & GD-PI. 10+ years, 1200+ students.",
    keywords: [
      "Yasir Ali Classes",
      "Yasir Ali Classes Aligarh",
      "YAC Aligarh",
      "Yasir Ali Commerce Classes",
    ],
    h1: "Yasir Ali Classes (YAC) — Aligarh's Trusted Commerce & Entrance Coaching",
    lead: para(
      "Yasir Ali Classes, popularly known as YAC, is a leading commerce and entrance coaching institute in Aligarh, Uttar Pradesh. For over 10 years, YAC has guided Class 11–12 Commerce students and entrance aspirants in Accountancy, Economics, Business Studies, CUET, AMU, MBA entrance and GD-PI.",
      "“Yasir Ali Classes” and “YAC” refer to the same institute, founded and led by educator Yasir Ali in Aligarh."
    ),
    course: {
      name: "Commerce & Entrance Coaching at Yasir Ali Classes, Aligarh",
      description:
        "Integrated commerce and entrance coaching covering Class 11–12 Accountancy, Economics, Business Studies, CUET, AMU, MBA entrance and GD-PI in Aligarh.",
    },
    sections: [
      {
        heading: "Why students choose Yasir Ali Classes in Aligarh",
        body: para(
          "YAC focuses on concept clarity, disciplined practice and personal mentorship. Small batches, daily doubt sessions and regular test series help every student stay exam-ready for both board and entrance examinations."
        ),
        bullets: [
          "Expert commerce faculty led by founder Yasir Ali",
          "Regular & entrance batches for Class 11, 12, B.Com, BBA and more",
          "Test series, mock exams and previous-year practice",
          "Online and offline classes for students across Aligarh and beyond",
        ],
      },
      {
        heading: "Courses offered at YAC Aligarh",
        body: para(
          "From foundation school coaching to professional courses, Yasir Ali Classes covers the full commerce learning journey."
        ),
        bullets: [
          "Class 11 & 12 Commerce — Accounts, Economics, Business Studies",
          "CUET Commerce coaching and General Test preparation",
          "AMU & JMI entrance coaching for B.Com, BBA, B.A.",
          "MBA entrance and GD-PI coaching",
          "CA Foundation & CMA professional programs",
        ],
      },
    ],
    faqs: [
      {
        q: "What is Yasir Ali Classes (YAC)?",
        a: "Yasir Ali Classes (YAC) is a trusted commerce and entrance coaching institute in Aligarh, Uttar Pradesh, offering Class 11–12 Commerce, CUET, AMU, MBA entrance and GD-PI preparation with expert faculty and proven results.",
      },
      {
        q: "Is YAC the same as Yasir Ali Classes?",
        a: "Yes. YAC is the short name for Yasir Ali Classes. Both names refer to the same educational institute in Aligarh founded by Yasir Ali.",
      },
      {
        q: "Where is Yasir Ali Classes located?",
        a: "Yasir Ali Classes is located in Aligarh, Uttar Pradesh, India. Call +91 90454 17079 for admissions and batch details during office hours, Monday to Saturday, 8:00 AM – 7:00 PM.",
      },
    ],
  },
  {
    slug: "yac-aligarh",
    breadcrumb: "YAC Aligarh",
    title: "YAC Aligarh — Yasir Ali Classes | Commerce Coaching in Aligarh",
    description:
      "YAC (Yasir Ali Classes) Aligarh is a top commerce coaching institute for Class 11–12, CUET, AMU & MBA entrance. Trusted by 1200+ students in Aligarh, Uttar Pradesh.",
    keywords: [
      "YAC",
      "YAC Aligarh",
      "Yasir Ali Classes",
      "Yasir Ali Classes Aligarh",
    ],
    h1: "YAC Aligarh — Yasir Ali Classes for Commerce & Entrance Exams",
    lead: para(
      "YAC stands for Yasir Ali Classes — a trusted commerce coaching institute in Aligarh, Uttar Pradesh. Students and parents across Aligarh know YAC for result-oriented Class 11–12 Commerce, CUET, AMU and MBA entrance coaching.",
      "Whether you search for “YAC”, “YAC Aligarh” or “Yasir Ali Classes”, you reach the same institute led by Yasir Ali."
    ),
    course: {
      name: "YAC Aligarh — Commerce & Entrance Programs",
      description:
        "Class 11–12 Commerce, CUET, AMU, MBA entrance and GD-PI coaching at YAC (Yasir Ali Classes), Aligarh.",
    },
    sections: [
      {
        heading: "What does YAC stand for?",
        body: para(
          "YAC is the widely-used short form of Yasir Ali Classes, an Aligarh-based commerce and entrance coaching institute. The brand is also referred to as Yasir Ali Commerce Classes."
        ),
        bullets: [
          "YAC = Yasir Ali Classes",
          "Based in Aligarh, Uttar Pradesh, India",
          "Founded and led by educator Yasir Ali",
        ],
      },
      {
        heading: "Why YAC is a top choice in Aligarh",
        body: para(
          "YAC blends experienced faculty, structured test series and personal mentoring to deliver consistent board and entrance results."
        ),
        bullets: [
          "Best commerce coaching environment in Aligarh",
          "Dedicated CUET, AMU and MBA entrance batches",
          "Online & offline learning options",
        ],
      },
    ],
    faqs: [
      {
        q: "What is YAC?",
        a: "YAC stands for Yasir Ali Classes, a leading commerce and entrance coaching institute in Aligarh, Uttar Pradesh.",
      },
      {
        q: "Is YAC and Yasir Ali Classes the same brand?",
        a: "Yes. YAC is simply the short name for Yasir Ali Classes. Both names refer to the same coaching institute in Aligarh.",
      },
      {
        q: "What does YAC Aligarh offer?",
        a: "YAC Aligarh offers Class 11–12 Commerce coaching (Accounts, Economics, Business Studies), CUET Commerce, AMU entrance, MBA entrance and GD-PI preparation.",
      },
    ],
  },
  {
    slug: "best-coaching-aligarh",
    breadcrumb: "Best Coaching in Aligarh",
    title: "Best Coaching in Aligarh — Yasir Ali Classes (YAC)",
    description:
      "Looking for the best coaching in Aligarh? Yasir Ali Classes (YAC) offers top commerce, CUET, AMU & MBA entrance coaching with expert faculty and proven results.",
    keywords: [
      "Best Coaching in Aligarh",
      "Top Coaching Institute in Aligarh",
      "Best coaching institute Aligarh",
    ],
    h1: "Best Coaching in Aligarh — Yasir Ali Classes (YAC)",
    lead: para(
      "Yasir Ali Classes (YAC) is widely regarded as one of the best coaching institutes in Aligarh for commerce and entrance exam preparation. With 10+ years of experience, expert faculty and a strong record of AMU, CUET and board results, YAC is a top choice for students in Aligarh, Uttar Pradesh."
    ),
    course: {
      name: "Top Coaching Programs in Aligarh — Yasir Ali Classes",
      description:
        "Commerce, CUET, AMU, MBA entrance and professional coaching programs at one of Aligarh's best coaching institutes.",
    },
    sections: [
      {
        heading: "What makes YAC one of the best coaching institutes in Aligarh",
        body: para(
          "The right coaching institute combines great teachers, structured practice and genuine mentorship. YAC delivers all three."
        ),
        bullets: [
          "Experienced, subject-specialist faculty",
          "Small batches and personal one-to-one mentoring",
          "Regular tests, mocks and previous-year paper practice",
          "Proven entrance and board exam selections year after year",
        ],
      },
      {
        heading: "Who should join YAC Aligarh",
        bullets: [
          "Class 11 & 12 Commerce students",
          "CUET, AMU and JMI entrance aspirants",
          "MBA entrance and GD-PI candidates",
          "CA Foundation and CMA aspirants",
        ],
      },
    ],
    faqs: [
      {
        q: "Which is the best coaching in Aligarh?",
        a: "Yasir Ali Classes (YAC) is widely regarded among students and parents as one of the best coaching institutes in Aligarh, especially for commerce and entrance exam preparation.",
      },
      {
        q: "What subjects does the best coaching in Aligarh cover?",
        a: "YAC covers Class 11–12 Commerce (Accounts, Economics, Business Studies), CUET, AMU entrance, MBA entrance, GD-PI, and CA Foundation/CMA professional courses.",
      },
    ],
  },
  {
    slug: "commerce-coaching-aligarh",
    breadcrumb: "Commerce Coaching Aligarh",
    title: "Commerce Coaching in Aligarh — Yasir Ali Classes (YAC)",
    description:
      "Commerce coaching in Aligarh at Yasir Ali Classes (YAC): Class 11 & 12 Accounts, Economics & Business Studies with test series, doubt sessions and proven results.",
    keywords: [
      "Commerce Coaching Aligarh",
      "Commerce Classes Aligarh",
      "Commerce Tuition in Aligarh",
      "Class 11 Commerce coaching Aligarh",
      "Class 12 Commerce coaching Aligarh",
    ],
    h1: "Commerce Coaching in Aligarh — Class 11 & 12 at Yasir Ali Classes",
    lead: para(
      "Yasir Ali Classes (YAC) offers complete commerce coaching in Aligarh for Class 11 and Class 12 students. Our commerce classes cover Accountancy, Economics and Business Studies with board-focused teaching, regular test series and personal mentorship.",
      "YAC is a trusted name for commerce classes in Aligarh, Uttar Pradesh."
    ),
    course: {
      name: "Class 11 & 12 Commerce Coaching, Aligarh",
      description:
        "Commerce coaching in Aligarh covering Accountancy, Business Studies and Economics for Class 11 and Class 12, with board strategy, test series and mentorship.",
    },
    sections: [
      {
        heading: "Commerce subjects we teach",
        bullets: [
          "Accountancy (Accounts) — Class 11 & 12",
          "Business Studies — Class 11 & 12",
          "Economics (Micro & Macro) — Class 11 & 12",
          "Commerce CUET preparation",
        ],
      },
      {
        heading: "Why YAC for commerce classes in Aligarh",
        body: para(
          "Commerce demands conceptual clarity and consistent practice. YAC builds both through structured lessons, worksheets and frequent assessments."
        ),
        bullets: [
          "Board-oriented teaching with exam strategy",
          "Chapter tests and full-length mock exams",
          "Doubt-clearing sessions and revision plans",
          "Online and offline commerce classes",
        ],
      },
    ],
    faqs: [
      {
        q: "Which is the best commerce coaching in Aligarh?",
        a: "Yasir Ali Classes (YAC) is widely considered one of the best commerce coaching institutes in Aligarh, offering dedicated batches for Accounts, Economics and Business Studies for Class 11 and 12.",
      },
      {
        q: "Does YAC offer Class 11 and Class 12 commerce coaching?",
        a: "Yes. YAC provides commerce coaching for both Class 11 and Class 12, covering Accountancy, Business Studies and Economics with test series and mentorship.",
      },
      {
        q: "Are online commerce classes available in Aligarh?",
        a: "Yes. Yasir Ali Classes offers both online and offline commerce classes, including live sessions, test series and doubt support.",
      },
    ],
  },
  {
    slug: "best-commerce-coaching-aligarh",
    breadcrumb: "Best Commerce Coaching Aligarh",
    title: "Best Commerce Coaching in Aligarh — Yasir Ali Classes (YAC)",
    description:
      "Best commerce coaching in Aligarh — Yasir Ali Classes (YAC) for Class 11–12 Accounts, Economics, Business Studies & CUET Commerce. Expert faculty, proven results.",
    keywords: [
      "Best Commerce Coaching in Aligarh",
      "Best Commerce Classes in Aligarh",
      "Top Commerce Coaching Aligarh",
    ],
    h1: "Best Commerce Coaching in Aligarh — Yasir Ali Classes",
    lead: para(
      "Yasir Ali Classes (YAC) is recognised as one of the best commerce coaching institutes in Aligarh. We help Class 11–12 Commerce students master Accountancy, Economics and Business Studies while preparing for CUET, AMU and B.Com entrance exams.",
      "Students and parents across Aligarh trust YAC for consistent commerce results."
    ),
    course: {
      name: "Best Commerce Coaching Program, Aligarh",
      description:
        "Comprehensive commerce coaching for Class 11–12 in Aligarh with Accounts, Economics, Business Studies and CUET preparation.",
    },
    sections: [
      {
        heading: "What makes YAC the best commerce coaching in Aligarh",
        bullets: [
          "Subject-specialist commerce faculty",
          "Concept-first teaching with exam strategy",
          "Frequent tests, mocks and detailed feedback",
          "Strong CUET, AMU and board exam track record",
        ],
      },
      {
        heading: "Commerce programs at YAC",
        bullets: [
          "Class 11 & 12 Commerce (Regular)",
          "Accounts, Economics & Business Studies coaching",
          "CUET Commerce coaching",
          "B.Com & BBA entrance preparation",
        ],
      },
    ],
    faqs: [
      {
        q: "Why is Yasir Ali Classes the best commerce coaching in Aligarh?",
        a: "YAC combines experienced commerce faculty, structured test series, personal mentorship and a proven record of board and entrance results, making it a top choice for commerce students in Aligarh.",
      },
      {
        q: "Does the best commerce coaching in Aligarh cover CUET?",
        a: "Yes. Yasir Ali Classes covers CUET Commerce — Accountancy, Business Studies, Economics and General Test — alongside board preparation.",
      },
    ],
  },
  {
    slug: "accounts-coaching-aligarh",
    breadcrumb: "Accounts Coaching Aligarh",
    title: "Accounts Coaching in Aligarh — Accountancy Classes | YAC",
    description:
      "Accounts coaching in Aligarh at Yasir Ali Classes (YAC). Class 11 & 12 Accountancy with concept clarity, practice sets, test series and board exam strategy.",
    keywords: [
      "Accounts Coaching Aligarh",
      "Accountancy Coaching Aligarh",
      "Accounts classes Aligarh",
    ],
    h1: "Accounts Coaching in Aligarh — Class 11 & 12 Accountancy",
    lead: para(
      "Yasir Ali Classes (YAC) offers specialised Accounts coaching in Aligarh for Class 11 and Class 12 Commerce students. Our Accountancy classes build strong fundamentals — from journal entries and ledgers to company accounts and analysis of financial statements."
    ),
    course: {
      name: "Accountancy (Accounts) Coaching, Aligarh",
      description:
        "Class 11 & 12 Accountancy coaching in Aligarh covering fundamentals, practical problems, board strategy and test series.",
    },
    sections: [
      {
        heading: "Accountancy topics covered",
        bullets: [
          "Journal, ledger, trial balance & final accounts",
          "Partnership and company accounts",
          "Financial statements & analysis",
          "Practical problem-solving and presentation",
        ],
      },
      {
        heading: "Why YAC for Accounts coaching in Aligarh",
        bullets: [
          "Step-by-step concept building",
          "Regular practice sets and chapter tests",
          "Board-pattern answer writing practice",
          "Doubt sessions and revision before exams",
        ],
      },
    ],
    faqs: [
      {
        q: "Does Yasir Ali Classes offer Accounts coaching in Aligarh?",
        a: "Yes. YAC provides Accounts (Accountancy) coaching for Class 11 and Class 12 Commerce students in Aligarh, with practice sets, test series and board strategy.",
      },
      {
        q: "Is Accounts coaching available for both Class 11 and 12?",
        a: "Yes. Accountancy coaching at YAC is available for both Class 11 and Class 12, including CUET Commerce preparation.",
      },
    ],
  },
  {
    slug: "economics-coaching-aligarh",
    breadcrumb: "Economics Coaching Aligarh",
    title: "Economics Coaching in Aligarh — Class 11 & 12 | YAC",
    description:
      "Economics coaching in Aligarh at Yasir Ali Classes (YAC). Micro & Macro Economics for Class 11 & 12 with concept clarity, diagrams, numericals and test series.",
    keywords: [
      "Economics Coaching Aligarh",
      "Economics classes Aligarh",
      "Micro Macro Economics coaching Aligarh",
    ],
    h1: "Economics Coaching in Aligarh — Micro & Macro Economics",
    lead: para(
      "Yasir Ali Classes (YAC) provides expert Economics coaching in Aligarh for Class 11 and Class 12. We cover Microeconomics, Macroeconomics, Statistics and Indian Economic Development with clear explanations, diagrams and numerical practice."
    ),
    course: {
      name: "Economics Coaching, Aligarh",
      description:
        "Class 11 & 12 Economics coaching in Aligarh covering Micro, Macro, Statistics and Indian Economic Development with numericals and test series.",
    },
    sections: [
      {
        heading: "Economics topics covered",
        bullets: [
          "Microeconomics — demand, supply, market forms",
          "Macroeconomics — national income, money & banking",
          "Statistics for Economics",
          "Indian Economic Development",
        ],
      },
      {
        heading: "Why YAC for Economics coaching in Aligarh",
        bullets: [
          "Concept clarity with diagrams and real examples",
          "Numerical and theory practice",
          "Board-pattern test series",
          "CUET Economics preparation",
        ],
      },
    ],
    faqs: [
      {
        q: "Does YAC offer Economics coaching in Aligarh?",
        a: "Yes. Yasir Ali Classes offers Economics coaching for Class 11 and Class 12 in Aligarh, covering Microeconomics, Macroeconomics, Statistics and Indian Economic Development.",
      },
      {
        q: "Is CUET Economics covered?",
        a: "Yes. YAC includes CUET Economics preparation alongside board syllabus coaching.",
      },
    ],
  },
  {
    slug: "business-studies-coaching-aligarh",
    breadcrumb: "Business Studies Coaching Aligarh",
    title: "Business Studies Coaching in Aligarh — Class 11 & 12 | YAC",
    description:
      "Business Studies coaching in Aligarh at Yasir Ali Classes (YAC). Class 11 & 12 Business Studies with concept clarity, case studies, answer writing and test series.",
    keywords: [
      "Business Studies Coaching Aligarh",
      "Business Studies classes Aligarh",
      "BST coaching Aligarh",
    ],
    h1: "Business Studies Coaching in Aligarh — Class 11 & 12",
    lead: para(
      "Yasir Ali Classes (YAC) offers Business Studies coaching in Aligarh for Class 11 and Class 12 Commerce students. We focus on concept clarity, case studies and board-style answer writing for chapters like management, marketing, finance and business environment."
    ),
    course: {
      name: "Business Studies Coaching, Aligarh",
      description:
        "Class 11 & 12 Business Studies coaching in Aligarh with concept clarity, case studies, answer writing and test series.",
    },
    sections: [
      {
        heading: "Business Studies topics covered",
        bullets: [
          "Principles & functions of management",
          "Marketing and financial management",
          "Business environment and entrepreneurship",
          "Case studies and application questions",
        ],
      },
      {
        heading: "Why YAC for Business Studies in Aligarh",
        bullets: [
          "Board-focused answer writing practice",
          "Case-study and application training",
          "Regular tests and revision",
          "CUET Business Studies preparation",
        ],
      },
    ],
    faqs: [
      {
        q: "Does Yasir Ali Classes offer Business Studies coaching in Aligarh?",
        a: "Yes. YAC provides Business Studies coaching for Class 11 and Class 12 Commerce students in Aligarh, including case studies and board answer-writing practice.",
      },
      {
        q: "Is Business Studies coaching useful for CUET?",
        a: "Yes. YAC's Business Studies coaching also prepares students for CUET Commerce Business Studies questions.",
      },
    ],
  },
  {
    slug: "cuet-coaching-aligarh",
    breadcrumb: "CUET Coaching Aligarh",
    title: "CUET Coaching in Aligarh — CUET Commerce Prep | YAC",
    description:
      "CUET coaching in Aligarh at Yasir Ali Classes (YAC). CUET Commerce — Accountancy, Business Studies, Economics & General Test with mock tests and mentorship.",
    keywords: [
      "CUET Coaching Aligarh",
      "CUET Commerce Coaching Aligarh",
      "CUET Preparation Aligarh",
    ],
    h1: "CUET Coaching in Aligarh — CUET Commerce Preparation",
    lead: para(
      "Yasir Ali Classes (YAC) offers structured CUET coaching in Aligarh for commerce students. Our CUET Commerce program covers Accountancy, Business Studies, Economics and the General Test with focused practice, mock tests and personal mentorship."
    ),
    course: {
      name: "CUET Commerce Coaching, Aligarh",
      description:
        "CUET coaching in Aligarh covering Accountancy, Business Studies, Economics and General Test with structured batches and mock tests.",
    },
    sections: [
      {
        heading: "What our CUET program covers",
        bullets: [
          "CUET Commerce — Accountancy, Business Studies, Economics",
          "General Test (GK, reasoning, quantitative aptitude)",
          "Sectional and full-length mock tests",
          "Previous-year analysis and time management",
        ],
      },
      {
        heading: "Why YAC for CUET coaching in Aligarh",
        bullets: [
          "Aligned with the latest CUET pattern",
          "Regular MCQ practice and speed building",
          "Doubt sessions and performance tracking",
          "Online and offline CUET batches",
        ],
      },
    ],
    faqs: [
      {
        q: "Is CUET coaching available at Yasir Ali Classes Aligarh?",
        a: "Yes. YAC offers CUET coaching in Aligarh, including CUET Commerce (Accountancy, Business Studies, Economics) and General Test preparation with mock tests and mentorship.",
      },
      {
        q: "Does YAC provide CUET mock tests?",
        a: "Yes. CUET preparation at YAC includes sectional and full-length mock tests with previous-year practice and performance tracking.",
      },
    ],
  },
  {
    slug: "mba-entrance-coaching-aligarh",
    breadcrumb: "MBA Entrance Coaching Aligarh",
    title: "MBA Entrance Coaching in Aligarh — CAT, MAT & More | YAC",
    description:
      "MBA entrance coaching in Aligarh at Yasir Ali Classes (YAC). Aptitude, quantitative, verbal & reasoning prep plus GD-PI guidance for management aspirants.",
    keywords: [
      "MBA Entrance Coaching Aligarh",
      "MBA Preparation Aligarh",
      "MBA coaching Aligarh",
    ],
    h1: "MBA Entrance Coaching in Aligarh — Yasir Ali Classes",
    lead: para(
      "Yasir Ali Classes (YAC) provides MBA entrance coaching in Aligarh for management aspirants. We build strong aptitude across quantitative ability, verbal ability, logical reasoning and data interpretation, along with GD-PI guidance for the selection stage."
    ),
    course: {
      name: "MBA Entrance Coaching, Aligarh",
      description:
        "MBA entrance coaching in Aligarh covering quantitative, verbal, reasoning and data interpretation, plus GD-PI preparation.",
    },
    sections: [
      {
        heading: "What our MBA entrance program covers",
        bullets: [
          "Quantitative ability and data interpretation",
          "Verbal ability and reading comprehension",
          "Logical reasoning",
          "Group Discussion (GD) and Personal Interview (PI) training",
        ],
      },
      {
        heading: "Why YAC for MBA entrance coaching in Aligarh",
        bullets: [
          "Concept building plus speed and accuracy drills",
          "Full-length mocks and sectional tests",
          "Interview and personality development guidance",
          "Mentorship for college selection",
        ],
      },
    ],
    faqs: [
      {
        q: "Does YAC offer MBA entrance coaching in Aligarh?",
        a: "Yes. Yasir Ali Classes offers MBA entrance coaching in Aligarh, covering aptitude preparation, mock tests and GD-PI training for management aspirants.",
      },
      {
        q: "Is GD-PI preparation included with MBA coaching?",
        a: "Yes. YAC includes Group Discussion and Personal Interview (GD-PI) preparation, along with personality development, as part of MBA entrance coaching.",
      },
    ],
  },
  {
    slug: "gd-pi-coaching-aligarh",
    breadcrumb: "GD PI Coaching Aligarh",
    title: "GD PI Coaching in Aligarh — Group Discussion & Interview | YAC",
    description:
      "GD PI coaching in Aligarh at Yasir Ali Classes (YAC). Group Discussion and Personal Interview training with personality development for MBA & entrance aspirants.",
    keywords: [
      "GD PI Coaching Aligarh",
      "Group Discussion coaching Aligarh",
      "Personal Interview coaching Aligarh",
    ],
    h1: "GD PI Coaching in Aligarh — Group Discussion & Personal Interview",
    lead: para(
      "Yasir Ali Classes (YAC) offers GD-PI coaching in Aligarh to help students clear the Group Discussion and Personal Interview rounds of MBA and university entrance selections. We focus on communication, content, confidence and personality development."
    ),
    course: {
      name: "GD-PI Coaching, Aligarh",
      description:
        "Group Discussion and Personal Interview coaching in Aligarh with mock GDs, interview practice and personality development.",
    },
    sections: [
      {
        heading: "What our GD-PI program covers",
        bullets: [
          "Group Discussion structure, content and etiquette",
          "Personal Interview practice with feedback",
          "Current affairs and topic preparation",
          "Communication and personality development",
        ],
      },
      {
        heading: "Who should join GD-PI coaching at YAC",
        bullets: [
          "MBA entrance aspirants",
          "BBA and management programme applicants",
          "Students facing university interview rounds",
        ],
      },
    ],
    faqs: [
      {
        q: "Is GD-PI coaching available at YAC Aligarh?",
        a: "Yes. Yasir Ali Classes offers GD-PI coaching in Aligarh, including mock Group Discussions, Personal Interview practice and personality development.",
      },
      {
        q: "Who needs GD-PI coaching?",
        a: "GD-PI coaching is useful for MBA entrance aspirants, BBA applicants and any student facing group discussion or interview rounds in admissions.",
      },
    ],
  },
  {
    slug: "amu-entrance-coaching-aligarh",
    breadcrumb: "AMU Entrance Coaching Aligarh",
    title: "AMU Entrance Coaching in Aligarh — B.Com, BBA, B.A. | YAC",
    description:
      "AMU entrance coaching in Aligarh at Yasir Ali Classes (YAC) for B.Com, BBA, B.A. & BA LLB. Focused syllabus coverage, previous-year practice and proven selections.",
    keywords: [
      "AMU Entrance Coaching Aligarh",
      "AMU coaching Aligarh",
      "AMU B.Com entrance coaching",
    ],
    h1: "AMU Entrance Coaching in Aligarh — Yasir Ali Classes",
    lead: para(
      "Yasir Ali Classes (YAC) provides AMU entrance coaching in Aligarh for B.Com, BBA, B.A., BA LLB and other Aligarh Muslim University entrance programs. With focused syllabus coverage and previous-year practice, YAC has a strong record of AMU selections."
    ),
    course: {
      name: "AMU Entrance Coaching, Aligarh",
      description:
        "AMU entrance coaching in Aligarh for B.Com, BBA, B.A. and BA LLB with focused syllabus coverage and previous-year practice.",
    },
    sections: [
      {
        heading: "AMU entrance programs we prepare for",
        bullets: [
          "B.Com (Hons.) entrance",
          "BBA entrance",
          "B.A. and B.A. (Hons.) entrance",
          "BA LLB entrance",
        ],
      },
      {
        heading: "Why YAC for AMU entrance coaching in Aligarh",
        bullets: [
          "Focused AMU syllabus coverage",
          "Previous-year question practice",
          "Regular mock tests and analysis",
          "Proven AMU entrance selections (2026 results)",
        ],
      },
    ],
    faqs: [
      {
        q: "Does Yasir Ali Classes provide AMU entrance coaching in Aligarh?",
        a: "Yes. YAC provides AMU entrance coaching in Aligarh for B.Com, BBA, B.A., BA LLB and other AMU programs, with focused syllabus coverage and previous-year practice.",
      },
      {
        q: "Does YAC have AMU entrance results?",
        a: "Yes. Yasir Ali Classes has a strong record of AMU entrance selections across B.Com, BBA and B.A. programs, including 2026 results.",
      },
    ],
  },
];

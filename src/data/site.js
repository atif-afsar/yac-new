export const siteConfig = {
  brand: {
    name: "Yasir Ali Classes",
    shortName: "YAC",
    location: "Aligarh",
    description:
      "Aligarh's leading commerce coaching institute — Accounts, Economics, Business Studies, CUET, AMU, MBA Entrance & GD-PI preparation with structured mentoring online and offline.",
    tagline: "WE DEBIT EFFORTS, TO CREDIT YOUR SUCCESS",
  },

  contact: {
    /** NAP — keep consistent across site, schema, and Google Business Profile */
    name: "Yasir Ali Classes",
    streetAddress: "Yasir Ali Classes, Aligarh",
    address: "Aligarh, Uttar Pradesh, India",
    postalCode: "202001",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Yasir+Ali+Classes+Aligarh+Uttar+Pradesh+India",
    phones: [
      {
        display: "+91 90454 17079",
        href: "tel:+919045417079",
      },
      {
        display: "+91 94126 17279",
        href: "tel:+919412617279",
      },
    ],
    primaryPhone: "tel:+919045417079",
    email: {
      display: "yasirali83637@gmail.com",
      href: "mailto:yasirali83637@gmail.com",
    },
    hours: "Mon – Sat, 8:00 AM – 7:00 PM",
    form: {
      recipient: "yasirali83637@gmail.com",
      subject: "New Admission Enquiry — Yasir Ali Classes",
    },
  },

  social: {
    youtube: {
      label: "YouTube — Yasir Ali Classes",
      href: "https://youtube.com/channel/UCUlHYg9DL5LACF_fHQI7I_g",
    },
    instagram: {
      label: "Instagram — Yasir Ali Classes Aligarh",
      href: "https://instagram.com/yasiraliclasses/?hl=en",
    },
    facebook: {
      label: "Facebook — Yasir Ali Classes",
      href: "https://www.facebook.com/yasiraliclasses/",
    },
  },

  footer: {
    about: [
      { label: "About Us", href: "#about" },
      { label: "Courses", href: "#courses" },
      { label: "Results", href: "#results" },
      { label: "Why Choose Us", href: "#why-choose-us" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Admissions", href: "#cta" },
    ],
    programs: [
      { label: "Commerce Coaching Aligarh", href: "#courses" },
      { label: "Class 11 & 12 Commerce", href: "#courses" },
      { label: "Accounts Coaching Aligarh", href: "#courses" },
      { label: "CUET Commerce Coaching", href: "#courses" },
      { label: "AMU Entrance Coaching", href: "#courses" },
      { label: "MBA Entrance & GD-PI Coaching", href: "#courses" },
    ],
    tagline: "Built for students across India — Online & Offline Learning",
    credits: {
      by: "WEBSITE BY ATIF AFSAR",
      authorHref: "https://portfolio-rgzt.vercel.app/",
      brandPrefix: "THE BRANDS",
      brandHighlight: "WAY",
      href: "https://thebrandsway.com/",
    },
  },
};

export function getContactCards() {
  const { contact } = siteConfig;

  return [
    {
      id: "address",
      label: "Visit Us",
      value: contact.address,
      href: contact.mapsUrl,
    },
    ...contact.phones.map((phone, index) => ({
      id: `phone-${index}`,
      label: index === 0 ? "Call Us" : "Alternate",
      value: phone.display,
      href: phone.href,
    })),
    {
      id: "email",
      label: "Email",
      value: contact.email.display,
      href: contact.email.href,
    },
    {
      id: "hours",
      label: "Office Hours",
      value: contact.hours,
    },
  ];
}

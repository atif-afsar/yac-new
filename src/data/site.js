export const siteConfig = {
  brand: {
    name: "Yasir Ali Classes",
    shortName: "YAC",
    location: "Aligarh",
    description:
      "Structured mentoring for Commerce, Science, Entrance, and Regular batches with exam-ready systems online and offline.",
    tagline: "WE DEBIT EFFORTS, TO CREDIT YOUR SUCCESS",
  },

  contact: {
    address: "Aligarh, Uttar Pradesh, India",
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
      label: "YouTube",
      href: "https://www.youtube.com",
    },
    instagram: {
      label: "Instagram",
      href: "https://www.instagram.com",
    },
    facebook: {
      label: "Facebook",
      href: "https://www.facebook.com",
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
      { label: "Commerce Programs", href: "#courses" },
      { label: "Science Programs", href: "#courses" },
      { label: "Entrance Preparation", href: "#courses" },
      { label: "Regular School Batches", href: "#courses" },
      { label: "Best Coaching in Aligarh", href: "#about" },
      { label: "Best Entrance Coaching in Aligarh", href: "#courses" },
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

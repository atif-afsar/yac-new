import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Container from "../common/Container";
import { cn } from "../../lib/utils";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Results", href: "#results" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const courseLinks = [
  { label: "Classes 5–10", href: "#courses" },
  { label: "Class 11 & 12 Commerce", href: "#courses" },
  { label: "Class 11 & 12 Humanities", href: "#courses" },
  { label: "B.Com Programs", href: "#courses" },
  { label: "Entrance Preparation", href: "#courses" },
  { label: "Professional Courses", href: "#courses" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebook,
    hover: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
    hover: "hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white hover:border-transparent",
  },
  {
    label: "YouTube",
    href: "#",
    icon: FaYoutube,
    hover: "hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]",
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: FaWhatsapp,
    hover: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]",
  },
];

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-1 text-sm text-neutral-400 transition-colors hover:text-yac-red-light"
    >
      {children}
      <ArrowUpRight
        className="size-3 opacity-0 transition-all group-hover:opacity-100"
        aria-hidden
      />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-neutral-300">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-yac-red/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-yac-purple/10 blur-3xl"
      />

      <Container className="relative z-10">
        {/* Top CTA strip */}
        <div className="border-b border-white/10 py-10 md:py-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-yac-red-light">
                Admissions Open
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Ready to start your journey with{" "}
                <span className="text-yac-red-light">YAC</span>?
              </h2>
              <p className="mt-2 max-w-lg text-sm text-neutral-400">
                Join thousands of students and parents who trust Yasir Ali
                Classes for result-oriented coaching in Aligarh.
              </p>
            </div>
            <a
              href="#contact"
              className={cn(
                "inline-flex shrink-0 items-center justify-center rounded-xl px-6 py-3",
                "text-sm font-semibold text-white",
                "bg-yac-red shadow-[0_4px_14px_rgba(220,38,38,0.4)]",
                "transition-all hover:bg-yac-red-light hover:shadow-[0_4px_20px_rgba(220,38,38,0.5)]",
                "active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yac-red focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              )}
            >
              Enquire Now
            </a>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#hero" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-yac-red text-sm font-bold tracking-tight text-white">
                YAC
              </span>
              <span className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-neutral-500">
                  Yasir Ali Classes
                </span>
                <span className="text-sm font-bold leading-tight text-white">
                  Aligarh
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
              Premium coaching for school boards, university programs, and
              entrance exams — trusted by students and parents across Aligarh
              for over a decade.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={cn(
                    "inline-flex size-10 items-center justify-center rounded-xl",
                    "border border-white/10 bg-white/5 text-neutral-400",
                    "transition-all duration-300",
                    hover
                  )}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Courses
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {courseLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex rounded-lg bg-yac-red/15 p-2 text-yac-red-light">
                  <MapPin className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-medium text-neutral-500">Address</p>
                  <p className="mt-0.5 text-sm text-neutral-300">
                    Yasir Ali Classes, Aligarh, Uttar Pradesh
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex rounded-lg bg-yac-red/15 p-2 text-yac-red-light">
                  <Phone className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-medium text-neutral-500">Phone</p>
                  <a
                    href="tel:+910000000000"
                    className="mt-0.5 block text-sm text-neutral-300 transition-colors hover:text-yac-red-light"
                  >
                    +91 XXXXX XXXXX
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex rounded-lg bg-yac-red/15 p-2 text-yac-red-light">
                  <Mail className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-medium text-neutral-500">Email</p>
                  <a
                    href="mailto:contact@yasiraliclasses.com"
                    className="mt-0.5 block text-sm text-neutral-300 transition-colors hover:text-yac-red-light"
                  >
                    contact@yasiraliclasses.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex rounded-lg bg-yac-red/15 p-2 text-yac-red-light">
                  <Clock className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-medium text-neutral-500">Hours</p>
                  <p className="mt-0.5 text-sm text-neutral-300">
                    Mon – Sat, 8:00 AM – 7:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Yasir Ali Classes. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-500">
            <a
              href="#"
              className="transition-colors hover:text-neutral-300"
            >
              Privacy Policy
            </a>
            <span className="hidden text-neutral-700 sm:inline" aria-hidden>
              ·
            </span>
            <a
              href="#"
              className="transition-colors hover:text-neutral-300"
            >
              Terms of Service
            </a>
            <span className="hidden text-neutral-700 sm:inline" aria-hidden>
              ·
            </span>
            <a
              href="#contact"
              className="transition-colors hover:text-yac-red-light"
            >
              Contact Support
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

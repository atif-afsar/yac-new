import { Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Container from "../common/Container";
import Logo from "../common/Logo";
import { siteConfig } from "../../data/site";
import { cn } from "../../lib/utils";

const socialIcons = {
  youtube: FaYoutube,
  instagram: FaInstagram,
  facebook: FaFacebook,
};

function FooterLink({ href, children, external = false }) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="text-sm text-neutral-500 transition-colors hover:text-white"
    >
      {children}
    </a>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
        {title}
      </h3>
      {children}
    </div>
  );
}

function FloatingCallButton() {
  return (
    <a
      href={siteConfig.contact.primaryPhone}
      aria-label="Call Yasir Ali Classes"
      className={cn(
        "fixed bottom-5 left-5 z-50 flex size-14 items-center justify-center rounded-full",
        "bg-yac-red text-white shadow-[0_0_0_4px_rgba(255,255,255,0.15),0_0_0_8px_rgba(220,38,38,0.25)]",
        "transition-transform hover:scale-105 active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yac-red focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      )}
    >
      <Phone className="size-6" aria-hidden />
    </a>
  );
}

function FooterYacMark() {
  return (
    <a
      href="#hero"
      className="footer-yac-mark group block w-full overflow-hidden py-6 sm:py-8 md:py-10"
      aria-label={`${siteConfig.brand.name} home`}
    >
      <span
        aria-hidden
        className={cn(
          "footer-yac-text block text-center font-black uppercase leading-[0.82]",
          "tracking-[-0.04em]",
          "text-[clamp(5.5rem,24vw,16rem)]"
        )}
      >
        {siteConfig.brand.shortName}
      </span>
    </a>
  );
}

export default function Footer() {
  const { brand, contact, social, footer } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black text-neutral-400">
      <Container>
        <FooterYacMark />

        <div className="border-t border-white/10 pb-10 pt-10 md:pb-12 md:pt-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            {/* Logo + socials */}
            <div className="shrink-0">
              <a
                href="#hero"
                className="inline-flex rounded-2xl bg-white p-2.5 shadow-sm"
              >
                <Logo size="lg" />
              </a>
              <div className="mt-6 flex items-center gap-5">
                {Object.entries(social).map(([key, { label, href }]) => {
                  const Icon = socialIcons[key];
                  return (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-neutral-400 transition-colors hover:text-white"
                    >
                      <Icon className="size-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Link columns */}
            <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
              <FooterColumn title="About">
                <ul className="mt-4 flex flex-col gap-2.5">
                  {footer.about.map((link) => (
                    <li key={link.label}>
                      <FooterLink href={link.href}>{link.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </FooterColumn>

              <FooterColumn title="Programs">
                <ul className="mt-4 flex flex-col gap-2.5">
                  {footer.programs.map((link) => (
                    <li key={link.label}>
                      <FooterLink href={link.href}>{link.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </FooterColumn>

              <FooterColumn title="Contact">
                <ul className="mt-4 flex flex-col gap-3 text-sm text-neutral-500">
                  <li>
                    <span className="block text-neutral-600">Hours</span>
                    <span className="mt-0.5 block text-neutral-400">
                      {contact.hours}
                    </span>
                  </li>
                  {contact.phones.map((phone) => (
                    <li key={phone.href}>
                      <a
                        href={phone.href}
                        className="transition-colors hover:text-white"
                      >
                        {phone.display}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={contact.email.href}
                      className="break-all transition-colors hover:text-white"
                    >
                      {contact.email.display}
                    </a>
                  </li>
                  <li className="leading-relaxed">{contact.address}</li>
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-center text-xs text-neutral-600 sm:flex-row sm:text-left">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p>{footer.tagline}</p>
        </div>

        <div className="flex flex-col items-center gap-3 border-t border-white/5 pb-8 pt-5 sm:flex-row sm:justify-center">
          <a
            href={footer.credits.authorHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:text-white"
          >
            {footer.credits.by}
          </a>
          <a
            href={footer.credits.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-white/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-300 transition-colors hover:border-white/30 hover:text-white"
          >
            {footer.credits.brandPrefix}
            <span className="text-yac-red">{footer.credits.brandHighlight}</span>
          </a>
        </div>
      </Container>

      <FloatingCallButton />
    </footer>
  );
}

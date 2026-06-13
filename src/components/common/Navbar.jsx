import { memo, useEffect, useRef, useState } from "react";
import { m } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X, ChevronRight } from "lucide-react";
import Container from "./Container";
import Logo from "./Logo";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Results", href: "#results" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function NavTabs() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [activeIndex, setActiveIndex] = useState(null);

  const clearHover = () => {
    setPosition((prev) => ({ ...prev, opacity: 0 }));
    setActiveIndex(null);
  };

  return (
    <ul
      className={cx(
        "relative mx-auto hidden w-fit max-w-[calc(100vw-13rem)] rounded-full",
        "isolate border-2 border-zinc-200 bg-white p-1",
        "shadow-[3px_3px_0_0_rgba(24,24,27,0.08)]",
        "overflow-x-auto sm:max-w-[calc(100vw-16rem)] lg:max-w-[calc(100vw-22rem)]",
        "md:flex"
      )}
      onMouseLeave={clearHover}
    >
      {navLinks.map((link, index) => (
        <NavTab
          key={link.href}
          href={link.href}
          index={index}
          isActive={activeIndex === index && position.opacity > 0}
          setPosition={setPosition}
          setActiveIndex={setActiveIndex}
        >
          {link.label}
        </NavTab>
      ))}
      <NavCursor position={position} />
    </ul>
  );
}

function NavTab({
  children,
  href,
  index,
  isActive,
  setPosition,
  setActiveIndex,
}) {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setActiveIndex(index);
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 shrink-0"
    >
      <a
        href={href}
        className={cx(
          "block cursor-pointer whitespace-nowrap rounded-full px-3 py-1.5",
          "text-xs font-semibold uppercase tracking-wide transition-colors duration-200",
          "md:px-4 md:py-2 md:text-sm",
          isActive
            ? "text-white"
            : "text-zinc-700 hover:text-zinc-900"
        )}
      >
        {children}
      </a>
    </li>
  );
}

const NavCursor = memo(function NavCursor({ position }) {
  return (
    <m.li
      animate={{
        x: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{ type: "spring", bounce: 0.12, duration: 0.45 }}
      style={{ left: 0, willChange: "transform, opacity" }}
      className={cx(
        "pointer-events-none absolute top-1 z-0 h-7 rounded-full bg-zinc-900",
        "transform-gpu md:top-1.5 md:h-9"
      )}
      aria-hidden="true"
    />
  );
});

function MobileSidebar({ open, onClose }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!open) return;

    lenis?.stop();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      lenis?.start();
      document.body.style.overflow = prev;
    };
  }, [open, lenis]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <>
      <div
        className={cx(
          "fixed inset-0 z-[60] bg-zinc-900/55 transition-opacity duration-200 md:hidden",
          "motion-reduce:transition-none",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        id="mobile-nav-drawer"
        className={cx(
          "fixed right-0 top-0 z-[70] flex h-dvh w-[78vw] max-w-xs flex-col",
          "border-l border-zinc-200 bg-white shadow-2xl md:hidden",
          "transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
          "motion-reduce:transition-none",
          open ? "translate-x-0" : "pointer-events-none translate-x-full"
        )}
        data-lenis-prevent
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="Mobile navigation"
      >
        <div className="relative flex items-center justify-between overflow-hidden border-b border-white/15 bg-[#b91c1c] px-4 py-4">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-100"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(255,255,255,0.06) 10px, rgba(255,255,255,0.06) 11px),
                repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.06) 10px, rgba(255,255,255,0.06) 11px)
              `,
            }}
          />
          <div className="relative flex items-center gap-2.5">
            <span className="rounded-lg bg-white p-1">
              <Logo size="md" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-sm font-bold leading-tight text-white">
                Yasir Ali Classes
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-wider text-white/90">
                Best Commerce Coaching · Aligarh
              </span>
            </span>
          </div>
          <button
            type="button"
            className={cx(
              "relative inline-flex size-10 shrink-0 items-center justify-center rounded-xl",
              "border border-white/25 bg-white/15 text-white backdrop-blur-sm",
              "transition-colors active:bg-white/25",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            )}
            aria-label="Close menu"
            onClick={onClose}
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto overscroll-contain px-3 py-4" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cx(
                    "flex items-center justify-between rounded-xl px-3.5 py-3",
                    "text-sm font-semibold text-zinc-800",
                    "transition-colors hover:bg-zinc-50 hover:text-yac-red active:bg-zinc-100"
                  )}
                  onClick={onClose}
                >
                  {link.label}
                  <ChevronRight
                    className="h-4 w-4 text-zinc-300"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-zinc-200/80 p-4">
          <a
            href="#cta"
            className={cx(
              "flex w-full items-center justify-center rounded-xl px-5 py-3.5",
              "text-sm font-semibold text-white bg-yac-red",
              "shadow-[0_4px_14px_rgba(220,38,38,0.35)]",
              "transition-all hover:bg-yac-red/90 active:scale-[0.98]"
            )}
            onClick={onClose}
          >
            Join Now
          </a>
          <p className="mt-3 text-center text-[11px] font-medium text-zinc-400">
            Commerce &amp; Entrance Coaching, Aligarh
          </p>
        </div>
      </aside>
    </>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cx(
        "nav-mobile-red relative fixed inset-x-0 top-0 z-50 w-full max-w-[100vw]",
        "border-b border-white/15 shadow-md"
      )}
    >
      <Container className="relative z-[1] max-w-full">
        <nav
          className="flex h-[4.25rem] w-full items-center gap-3 md:h-16 md:gap-5 lg:gap-6"
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className="flex min-w-0 flex-1 items-center gap-2.5 sm:flex-initial md:gap-2.5 md:pl-16 lg:pl-24 xl:pl-28"
            onClick={() => setMobileOpen(false)}
          >
            <span className="shrink-0 rounded-lg bg-white p-1">
              <Logo size="md" />
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate text-sm font-bold text-white md:text-base">
                Yasir Ali Classes
              </span>
              <span className="truncate text-[9px] font-semibold uppercase tracking-[0.12em] text-white/90 min-[375px]:text-[10px] md:text-[11px]">
                Best Commerce Coaching · Aligarh
              </span>
            </span>
          </a>

          <div className="hidden min-w-0 flex-1 md:block">
            <NavTabs />
          </div>

          <div className="hidden shrink-0 md:ml-1 md:block">
            <a
              href="#cta"
              className={cx(
                "inline-flex items-center justify-center rounded-lg",
                "border border-white/30 bg-white px-5 py-2.5",
                "text-sm font-semibold text-[#b91c1c]",
                "shadow-[0_4px_12px_rgba(0,0,0,0.15)]",
                "transition-all hover:bg-white/90 active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#b91c1c]"
              )}
            >
              Join Now
            </a>
          </div>

          <button
            type="button"
            className={cx(
              "relative ml-auto inline-flex size-11 shrink-0 items-center justify-center md:hidden",
              "rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur-sm",
              "transition-colors active:bg-white/25",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            )}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6 shrink-0" strokeWidth={2.25} aria-hidden />
          </button>
        </nav>
      </Container>

      <MobileSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

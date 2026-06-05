import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Results", href: "#results" },
  { label: "Why Us", href: "#why-choose-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#cta" },
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

function NavCursor({ position }) {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      transition={{ type: "spring", bounce: 0.12, duration: 0.45 }}
      className={cx(
        "pointer-events-none absolute top-1 z-0 h-7 rounded-full bg-zinc-900",
        "md:top-1.5 md:h-9"
      )}
      aria-hidden="true"
    />
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cx(
        "fixed top-0 left-0 right-0 z-50",
        "border-b border-zinc-200/80 bg-white/90 backdrop-blur-md",
        "shadow-sm"
      )}
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between gap-3 md:gap-5 lg:gap-6"
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className="flex shrink-0 items-center gap-2.5"
            onClick={() => setMobileOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-yac-red text-sm font-bold tracking-tight text-white">
              YAC
            </span>
            <span className="hidden min-w-0 flex-col sm:flex">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
                Yasir Ali Classes
              </span>
              <span className="text-sm font-bold leading-tight text-zinc-900">
                Aligarh
              </span>
            </span>
          </a>

          <NavTabs />

          <div className="hidden shrink-0 md:ml-1 md:block">
            <a
              href="#cta"
              className={cx(
                "inline-flex items-center justify-center rounded-lg border border-yac-red/20",
                "px-5 py-2.5 text-sm font-semibold text-white bg-yac-red",
                "shadow-[0_4px_12px_rgba(220,38,38,0.35)]",
                "ring-2 ring-white ring-offset-0",
                "transition-all hover:bg-yac-red/90 active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yac-red focus-visible:ring-offset-2"
              )}
            >
              Join Now
            </a>
          </div>

          <button
            type="button"
            className={cx(
              "rounded-lg p-2 text-zinc-600 transition-colors md:hidden",
              "hover:bg-zinc-100 hover:text-zinc-900",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yac-red"
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-zinc-200/80 bg-white md:hidden"
          >
            <Container className="py-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={cx(
                        "block rounded-lg px-3 py-2.5 text-sm font-semibold text-zinc-800",
                        "transition-colors hover:bg-zinc-50 hover:text-yac-red"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={cx(
                  "mt-4 flex w-full items-center justify-center rounded-lg px-5 py-3",
                  "text-sm font-semibold text-white bg-yac-red",
                  "transition-all hover:bg-yac-red/90 active:scale-[0.98]"
                )}
                onClick={() => setMobileOpen(false)}
              >
                Join Now
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

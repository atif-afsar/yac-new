import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 180 },
  orange: { base: 25, spread: 160 },
};

const sizeMap = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
};

const variantMap = {
  dark: {
    "--backdrop": "hsl(0 0% 60% / 0.12)",
    "--backup-border": "hsl(0 0% 60% / 0.12)",
    "--bg-spot-opacity": "0.1",
    "--border-spot-opacity": "1",
    "--border-light-opacity": "1",
  },
  light: {
    "--backdrop": "hsl(0 0% 100% / 0.92)",
    "--backup-border": "hsl(0 0% 88% / 0.9)",
    "--bg-spot-opacity": "0.12",
    "--border-spot-opacity": "0.75",
    "--border-light-opacity": "0.85",
    "--saturation": "85",
    "--lightness": "55",
  },
};

function GlowCard({
  children,
  className = "",
  glowColor = "red",
  size = "md",
  width,
  height,
  customSize = false,
  variant = "dark",
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    const syncPointer = (e) => {
      const { clientX: x, clientY: y } = e;

      if (cardRef.current) {
        cardRef.current.style.setProperty("--x", x.toFixed(2));
        cardRef.current.style.setProperty(
          "--xp",
          (x / window.innerWidth).toFixed(2)
        );
        cardRef.current.style.setProperty("--y", y.toFixed(2));
        cardRef.current.style.setProperty(
          "--yp",
          (y / window.innerHeight).toFixed(2)
        );
      }
    };

    document.addEventListener("pointermove", syncPointer);
    return () => document.removeEventListener("pointermove", syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor] ?? glowColorMap.red;
  const themeVars = variantMap[variant] ?? variantMap.dark;

  const getSizeClasses = () => {
    if (customSize) return "";
    return sizeMap[size];
  };

  const getInlineStyles = () => {
    const baseStyles = {
      "--base": base,
      "--spread": spread,
      "--radius": "16",
      "--border": "2",
      "--size": "220",
      "--outer": "1",
      ...themeVars,
      "--border-size": "calc(var(--border, 2) * 1px)",
      "--spotlight-size": "calc(var(--size, 150) * 1px)",
      "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.1)), transparent
      )`,
      backgroundColor: "var(--backdrop, transparent)",
      backgroundSize:
        "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
      backgroundPosition: "50% 50%",
      backgroundAttachment: "fixed",
      border: "var(--border-size) solid var(--backup-border)",
      position: "relative",
      touchAction: "none",
    };

    if (width !== undefined) {
      baseStyles.width = typeof width === "number" ? `${width}px` : width;
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === "number" ? `${height}px` : height;
    }

    return baseStyles;
  };

  return (
    <div
      ref={cardRef}
      data-glow
      style={getInlineStyles()}
      className={cn(
        getSizeClasses(),
        !customSize && "aspect-[3/4]",
        "relative rounded-2xl shadow-[0_1rem_2rem_-1rem_rgba(0,0,0,0.15)] backdrop-blur-[6px]",
        customSize
          ? "flex h-full w-full flex-col p-5 sm:p-6"
          : "grid grid-rows-[1fr_auto] gap-4 p-4",
        className
      )}
    >
      <div data-glow aria-hidden />
      {children}
    </div>
  );
}

export { GlowCard };

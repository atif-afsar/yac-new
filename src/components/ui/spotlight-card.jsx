import { useCallback, useEffect, useRef, useState } from "react";
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
    "--backdrop": "hsl(0 0% 100% / 0.98)",
    "--backup-border": "hsl(0 0% 88% / 0.9)",
    "--bg-spot-opacity": "0.1",
    "--border-spot-opacity": "0.7",
    "--border-light-opacity": "0.8",
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
  const frameRef = useRef(0);
  const activeRef = useRef(false);
  const [glowEnabled, setGlowEnabled] = useState(false);

  useEffect(() => {
    const hoverMq = window.matchMedia("(hover: hover)");
    const motionMq = window.matchMedia("(prefers-reduced-motion: no-preference)");

    const update = () => setGlowEnabled(hoverMq.matches && motionMq.matches);
    update();

    hoverMq.addEventListener("change", update);
    motionMq.addEventListener("change", update);
    return () => {
      hoverMq.removeEventListener("change", update);
      motionMq.removeEventListener("change", update);
    };
  }, []);

  const syncPointer = useCallback((e) => {
    if (!activeRef.current || !cardRef.current) return;

    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const node = cardRef.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      node.style.setProperty("--x", `${x}`);
      node.style.setProperty("--y", `${y}`);
      node.style.setProperty("--xp", (x / rect.width).toFixed(3));
      node.style.setProperty(
        "--yp",
        (y / rect.height).toFixed(3)
      );
    });
  }, []);

  const handlePointerEnter = useCallback(() => {
    activeRef.current = true;
  }, []);

  const handlePointerLeave = useCallback(() => {
    activeRef.current = false;
    cancelAnimationFrame(frameRef.current);
  }, []);

  useEffect(() => {
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const { base, spread } = glowColorMap[glowColor] ?? glowColorMap.red;
  const themeVars = variantMap[variant] ?? variantMap.dark;

  const baseStyles = {
    "--base": base,
    "--spread": spread,
    "--radius": "16",
    "--border": "2",
    "--size": "200",
    "--x": "50%",
    "--y": "50%",
    "--xp": "0.5",
    "--yp": "0.5",
    ...themeVars,
    "--border-size": "calc(var(--border, 2) * 1px)",
    "--spotlight-size": "calc(var(--size, 150) * 1px)",
    "--hue": `calc(var(--base) + (var(--xp, 0.5) * var(--spread, 0)))`,
    backgroundColor: "var(--backdrop, transparent)",
    border: "var(--border-size) solid var(--backup-border)",
    ...(width !== undefined && {
      width: typeof width === "number" ? `${width}px` : width,
    }),
    ...(height !== undefined && {
      height: typeof height === "number" ? `${height}px` : height,
    }),
  };

  return (
    <div
      ref={cardRef}
      data-glow={glowEnabled ? "" : undefined}
      data-glow-static={!glowEnabled ? "" : undefined}
      style={baseStyles}
      onPointerEnter={glowEnabled ? handlePointerEnter : undefined}
      onPointerLeave={glowEnabled ? handlePointerLeave : undefined}
      onPointerMove={glowEnabled ? syncPointer : undefined}
      className={cn(
        customSize ? "" : sizeMap[size],
        !customSize && "aspect-[3/4]",
        "relative rounded-2xl shadow-sm",
        customSize
          ? "flex h-full w-full flex-col p-5 sm:p-6"
          : "grid grid-rows-[1fr_auto] gap-4 p-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export { GlowCard };

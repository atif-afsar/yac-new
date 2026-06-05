/**
 * ParticleBackground — AI / interactive particle layer (placeholder)
 *
 * Future implementation:
 * - Canvas or WebGL particle system (e.g. tsparticles, custom canvas)
 * - Mouse/touch parallax and connection lines
 * - Brand colors: purple, red, gold accents on dark bg
 * - Performance: reduced motion + mobile density caps
 */
export default function ParticleBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* TODO: Mount interactive particle canvas / 21st.dev-style background here */}
      <div className="absolute inset-0 bg-gradient-to-b from-yac-purple/5 via-transparent to-yac-red/5" />
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-yac-purple/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-yac-gold/10 blur-3xl" />
    </div>
  );
}

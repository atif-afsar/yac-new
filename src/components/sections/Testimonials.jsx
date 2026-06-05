import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import RevealAnimation from "../animations/RevealAnimation";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 md:py-28">
      <Container>
        <RevealAnimation>
          <SectionHeading
            label="Testimonials"
            title="What Students & Parents Say"
            description="Placeholder — social proof carousel coming later."
          />
        </RevealAnimation>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <li
              key={item.id}
              className="rounded-2xl border border-white/5 bg-yac-surface/50 p-6"
            >
              <p className="text-yac-muted">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-4 text-sm text-yac-white">
                — {item.name}, {item.role}
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

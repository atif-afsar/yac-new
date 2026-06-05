import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import RevealAnimation from "../animations/RevealAnimation";
import { results } from "../../data/results";

export default function Results() {
  return (
    <section id="results" className="relative py-20 md:py-28">
      <Container>
        <RevealAnimation>
          <SectionHeading
            label="Our Results"
            title="Result-Oriented Success"
            description="Placeholder — student achievements and selections."
          />
        </RevealAnimation>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((item) => (
            <li
              key={item.id}
              className="rounded-xl border border-yac-gold/20 bg-yac-surface/50 p-5"
            >
              <p className="font-medium text-yac-white">{item.achievement}</p>
              <p className="mt-1 text-sm text-yac-muted">
                {item.student} · {item.year}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

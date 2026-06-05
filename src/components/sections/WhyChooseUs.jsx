import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import RevealAnimation from "../animations/RevealAnimation";

const reasons = [
  { title: "Expert Faculty", description: "Placeholder benefit." },
  { title: "Proven Results", description: "Placeholder benefit." },
  { title: "Personal Mentoring", description: "Placeholder benefit." },
  { title: "Aligarh Location", description: "Placeholder benefit." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-20 md:py-28">
      <Container>
        <RevealAnimation>
          <SectionHeading
            label="Why YAC"
            title="Why Choose Yasir Ali Classes"
            description="Premium, trusted, and result-focused coaching."
          />
        </RevealAnimation>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-white/5 bg-yac-bg-elevated p-6"
            >
              <h3 className="font-semibold text-yac-purple-light">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-yac-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

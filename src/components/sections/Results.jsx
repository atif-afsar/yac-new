import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import RevealAnimation from "../animations/RevealAnimation";
import { results } from "../../data/results";
import { CasesWithInfiniteScroll } from "../ui/cases-with-infinite-scroll";

export default function Results() {
  return (
    <section id="results" className="relative overflow-x-clip bg-white py-20 text-neutral-900 md:py-28">
      <Container>
        <RevealAnimation>
          <SectionHeading
            variant="light"
            label="Our Results"
            title="Result-Oriented Success"
            description="A quick look at achievements and selections — auto-scrolling for an at-a-glance view."
          />
        </RevealAnimation>
        <CasesWithInfiniteScroll results={results} />
      </Container>
    </section>
  );
}

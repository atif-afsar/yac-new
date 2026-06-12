import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import RevealAnimation from "../animations/RevealAnimation";
import { results } from "../../data/results";
import { CasesWithInfiniteScroll } from "../ui/cases-with-infinite-scroll";

export default function Results() {
  return (
    <section id="results" className="relative overflow-x-clip bg-white py-10 text-neutral-900 sm:py-20 md:py-28">
      <Container>
        <RevealAnimation className="mb-0">
          <SectionHeading
            variant="light"
            label="Our Results"
            title="Result-Oriented Success"
            description="AMU Entrance 2026 selections across B.Com, B.A., B.A. Honours, B.A. FL and BBA — swipe to view our students' results."
          />
        </RevealAnimation>
        <CasesWithInfiniteScroll results={results} />
      </Container>
    </section>
  );
}

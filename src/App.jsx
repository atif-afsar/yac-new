import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import Navbar from "./components/common/Navbar";
import ParticleBackground from "./components/animations/ParticleBackground";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Courses from "./components/sections/Courses";
import Results from "./components/sections/Results";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Testimonials from "./components/sections/Testimonials";
import CTA from "./components/sections/CTA";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true, anchors: true }}>
      <div className="relative min-h-screen">
        <ParticleBackground />

        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Courses />
            <Results />
            <WhyChooseUs />
            <Testimonials />
            <CTA />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;

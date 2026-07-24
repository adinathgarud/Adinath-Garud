import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="resume">
          <Resume />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

      <Footer />
    </>
  );
}

export default App;
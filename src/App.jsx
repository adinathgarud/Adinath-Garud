import { Box } from "@mui/material";

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
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
        overflowY: "auto",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <Navbar />

      <Box
        component="main"
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          component="section"
          id="home"
          sx={{ width: "100%" }}
        >
          <Hero />
        </Box>

        <Box
          component="section"
          id="about"
          sx={{ width: "100%" }}
        >
          <About />
        </Box>

        <Box
          component="section"
          id="skills"
          sx={{ width: "100%" }}
        >
          <Skills />
        </Box>

        <Box
          component="section"
          id="experience"
          sx={{ width: "100%" }}
        >
          <Experience />
        </Box>

        <Box
          component="section"
          id="projects"
          sx={{ width: "100%" }}
        >
          <Projects />
        </Box>

        <Box
          component="section"
          id="certifications"
          sx={{ width: "100%" }}
        >
          <Certifications />
        </Box>

        <Box
          component="section"
          id="resume"
          sx={{ width: "100%" }}
        >
          <Resume />
        </Box>

        <Box
          component="section"
          id="contact"
          sx={{ width: "100%" }}
        >
          <Contact />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
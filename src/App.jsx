import Navbar from "./components/common/Navbar/Navbar";
import SocialLinks from "./components/common/SocialLinks/SocialLinks";
import Home from "./components/sections/Home/Home";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Projects";
import Experience from "./components/sections/Experience/Experience";
import Contact from "./components/sections/Contact/Contact";
import ResumeForm from "./components/sections/Resume/ResumeForm";
import { initializeEmailJS } from "./services/emailService";

// Initialize EmailJS on app load
initializeEmailJS();

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SocialLinks />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      {/* <ResumeForm /> */}
    </>
  );
}

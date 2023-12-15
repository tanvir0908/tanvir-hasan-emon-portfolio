import Banner from "../components/Banner/Banner";
import Certificates from "../components/Certificates/Certificates";
import Contact from "../components/Contact/Contact";
import Education from "../components/Education/Education";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

export default function Root() {
  return (
    <div className="text-gray">
      <Navbar />
      <Banner />
      <Skills />
      <Education />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

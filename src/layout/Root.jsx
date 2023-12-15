import Banner from "../components/Banner/Banner";
import Education from "../components/Education/Education";
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
    </div>
  );
}

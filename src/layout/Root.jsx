import Banner from "../components/Banner/Banner";
import Education from "../components/Education/Education";
import Navbar from "../components/Navbar/Navbar";
import Skills from "../components/Skills/Skills";

export default function Root() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Skills />
      <Education />
    </div>
  );
}

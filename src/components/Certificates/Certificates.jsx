import udemy from "../../assets/udemy.jpg";
import react from "../../assets/React.jpg";
import javascript from "../../assets/JavaScript.jpg";
import github from "../../assets/Version Control.jpg";
import { Link } from "react-router-dom";

export default function Certificates() {
  const certificates = [
    {
      name: "The Complete 2023 Web Development Bootcamp",
      image: udemy,
      link: "https://www.udemy.com/certificate/UC-8b710996-e671-43ff-ac49-1d6117750d99/",
    },
    {
      name: "React Basics",
      image: react,
      link: "https://coursera.org/share/fe2eb25dad1b3946fa01fc7f1b484621",
    },
    {
      name: "Programming with JavaScript",
      image: javascript,
      link: "https://coursera.org/share/818dfff7ef251fc124bdc830468cd47a",
    },
    {
      name: "Version Control",
      image: github,
      link: "https://coursera.org/share/23aa6261f7155b21cc722644c67ee249",
    },
  ];
  return (
    <div
      id="certificates"
      className="w-full px-5 xl:px-0 bg-secondary py-20 text-gray"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-20 text-center font-semibold text-primary">
          Certificates
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="border-2 hover:-translate-y-2 duration-1000 cursor-pointer flex gap-5 p-5 items-center rounded-xl border-primary shadow-md shadow-primary"
            >
              <div className="flex-1">
                <img
                  className="rounded-xl w-full h-[10rem] md:h-[14rem] lg:h-full"
                  src={certificate.image}
                  alt=""
                />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{certificate.name}</h2>
                <Link to={certificate.link} target="_blank">
                  <button className="px-5 mt-5 py-2 bg-purple-950 text-primary font-semibold rounded-xl">
                    Live Link
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

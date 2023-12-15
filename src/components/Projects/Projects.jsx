import { Link } from "react-router-dom";
import arenaContest from "../../assets/arenaContest.png";
import h4food from "../../assets/h4food.png";
import techNugget from "../../assets/techNugget.png";
import wedMan from "../../assets/wedman.png";

export default function Projects() {
  const projects = [
    {
      name: "Contest Management System",
      image: arenaContest,
      imageLink: "https://i.ibb.co/Rbkp3Gm/arena-Contest.png",
      codeLink: "https://github.com/tanvir0908/arena-contest",
      liveLink: "https://arenacontest-b4461.web.app/",
      technologies: ["React", "Express", "MongoDB"],
      description: `Engineered a robust and feature-rich Contest Management System using React, React Router, Tailwind, Express, MongoDB, and Firebase. Implemented a role-based access system with Admin, Creator, and User roles, providing distinct features for each role. Integrated Stripe for secure payment processing, efficient form handling with React Hook Form, and real-time Toast notifications, ensuring a seamless, responsive, and intuitive user experience.`,
    },
    {
      name: "Restaurant Management System",
      image: h4food,
      imageLink: "https://i.ibb.co/Gp1GVns/h4food.png",
      codeLink: "https://github.com/tanvir0908/h4Food-client-side",
      liveLink: "https://h4food-5e753.web.app/",
      technologies: ["React", "Express", "MongoDB"],
      description: `Designed and implemented a responsive Restaurant Management System using React, React Router, Tailwind, Express, and MongoDB. Utilized AOS animations, React Helmet for dynamic titles and React Toast for an interactive user experience. This system enables users to effortlessly add new food items, manage added items, and order foods with dynamic item quantities, while also implementing smart features such as tracking popular food items based on sell count and restricting purchase availability for items with no quantity.`,
    },
    {
      name: "Online Gadget Store",
      image: techNugget,
      imageLink: "https://i.ibb.co/FWRFshx/tech-Nugget.png",
      codeLink: "https://github.com/tanvir0908/react-tech-nugget",
      liveLink: "https://tech-nugget.web.app/",
      technologies: ["React", "Express", "MongoDB"],
      description: `Developed a fully responsive web platform utilizing React,
React Router, Tailwind, daisyUI, Express, and MongoDB. Implemented user-friendly features enabling users to add
new products by category, update their posted products, and
seamlessly view products categorized for a streamlined browsing experience. Elevated the shopping experience by allowing users to conveniently add products to their cart and effortlessly view and
manage the products of their cart.`,
    },
    {
      name: "Wedding Management Company",
      image: wedMan,
      imageLink: "https://i.ibb.co/6WBsQZ0/wedman.png",
      codeLink: "https://github.com/tanvir0908/react-wed-man",
      liveLink: "https://react-wed-man.web.app",
      technologies: ["React", "Firebase", "Tailwind"],
      description: `Developed a responsive website for a wedding management company using React, React Router for seamless navigation, and Tailwind for stylish design. Integrated Firebase for secure authentication. The website showcases a range of services offered by the company and provides a gallery of their previous works, offering users a comprehensive overview of the company's capabilities in a user-friendly and visually appealing manner.`,
    },
  ];
  return (
    <div
      id="projects"
      className="w-full px-5 xl:px-0 bg-secondary py-20 text-gray"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-20 text-center font-semibold text-primary">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-10">
          {projects.map((project, index) => (
            <div
              className="flex flex-col lg:flex-row gap-10 items-center border-2 border-primary p-10 rounded-xl shadow-md shadow-primary duration-1000 cursor-pointer"
              key={index}
            >
              <div className="flex-1">
                <Link to={project.imageLink} target="_blank">
                  <img
                    className="w-[50rem] lg:w-full h-[15rem] md:h-[21rem] object-cover rounded-xl"
                    src={project.image}
                    alt=""
                  />
                </Link>
              </div>
              <div className="flex-1 space-y-5 text-sm md:text-lg">
                <h2 className="text-2xl md:text-3xl font-semibold ">
                  {project.name}
                </h2>
                <div className="space-x-5">
                  <span className="text-primary bg-purple-950 font-semibold px-3 py-1 rounded-xl">
                    {project?.technologies[0]}
                  </span>
                  <span className="text-primary bg-purple-950 font-semibold px-3 py-1 rounded-xl">
                    {project?.technologies[1]}
                  </span>
                  <span className="text-primary bg-purple-950 font-semibold px-3 py-1 rounded-xl">
                    {project?.technologies[2]}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm md:text-base text-justify">
                    {project.description}
                  </p>
                </div>
                <div>
                  <Link to={project.codeLink} target="_blank">
                    <button className="mr-5 px-5 py-2 rounded-xl bg-primary font-semibold">
                      Code Link
                    </button>
                  </Link>
                  <Link to={project.liveLink} target="_blank">
                    <button className="px-5 py-2 rounded-xl bg-primary font-semibold">
                      Live Link
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

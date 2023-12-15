// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import "../Banner/Banner.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const navLinks = [
    {
      link: "skills",
      name: "Skills",
    },
    {
      link: "education",
      name: "Education",
    },
    {
      link: "projects",
      name: "Projects",
    },
    {
      link: "certificates",
      name: "Certificates",
    },
    {
      link: "contact",
      name: "Contact",
    },
  ];
  return (
    <div
      id="projects"
      className="w-full background px-5 xl:px-0 bg-secondary py-20 text-gray"
    >
      <div className="max-w-7xl mx-auto py-10">
        <h2 className="text-2xl md:text-3xl mb-10 text-center font-semibold text-primary">
          Tanvir Hasan Emon
        </h2>
        <div className="text-center">
          <ul className="list-none flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-10">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer text-center hover:text-primary duration-500 text-gray font-medium pl-2 md:pl-5 nav-item"
              >
                <Link
                  to={link.link}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="flex mt-10 gap-5 text-3xl md:text-4xl text-primary justify-center">
          <NavLink to={"https://github.com/tanvir0908"} target="_blank">
            <FaGithub />
          </NavLink>
          <NavLink
            to={"https://www.linkedin.com/in/tanvir-hasan-emon/"}
            target="_blank"
          >
            <FaLinkedin />
          </NavLink>
        </p>
      </div>
      <p className="font-semibold text-sm text-center">
        © 2023 Tanvir Hasan Emon. All rights reserved.
      </p>
    </div>
  );
}

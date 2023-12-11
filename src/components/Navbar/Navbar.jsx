import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

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
      link: "experience",
      name: "Experience",
    },
    {
      link: "projects",
      name: "Projects",
    },
    {
      link: "contact",
      name: "Contact",
    },
  ];

  return (
    <div className={`w-full py-5 fixed text-gray ${scroll && "bg-secondary"}`}>
      <nav className="px-5 xl:px-0 max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <Link
            to="banner"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className="flex gap-3 items-center cursor-pointer"
          >
            <img className="w-10 md:w-12 h-10 md:h-12" src={logo} alt="" />
            <p className="text-xl md:text-2xl font-semibold">
              Tanvir Hasan Emon
            </p>
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="list-none flex gap-5 lg:gap-10">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-primary duration-500 text-gray font-medium pl-2 md:pl-5 nav-item"
              >
                <Link
                  to={link.link}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1000}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block lg:hidden ">
          <div onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <IoClose className="text-3xl text-primary" />
            ) : (
              <IoMenu className="text-3xl text-primary" />
            )}
          </div>

          {toggle && (
            <div className="p-5 shadow-md shadow-primary absolute black-gradient top-16 right-0 min-w-[50%] mr-5 z-10 rounded-xl">
              <ul className="list-none flex flex-col gap-5">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-primary duration-500 text-gray font-medium pl-2 md:pl-5 nav-item"
                  >
                    <Link
                      onClick={() => setToggle(false)}
                      to={link.link}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={1000}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

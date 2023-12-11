import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  console.log(window.screenY);
  const navLinks = [
    {
      id: "#skills",
      title: "Skills",
    },
    {
      id: "#education",
      title: "Education",
    },
    {
      id: "#projects",
      title: "Projects",
    },
    {
      id: "#experience",
      title: "Experience",
    },
    {
      id: "#contact",
      title: "Contact",
    },
  ];

  return (
    <div className="w-full py-5 fixed text-gray">
      <div className="px-5 xl:px-0 max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <Link
            to={"/"}
            className="flex gap-3 items-center"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
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
                className={`${
                  active === link.title ? "text-primary" : ""
                } hover:text-primary font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`${link.id}`}>{link.title}</a>
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
            <div className="p-5 absolute black-gradient top-16 right-0 min-w-[50%] mr-5 z-10 rounded-xl">
              <ul className="list-none flex flex-col gap-5">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`${
                      active === link.title ? "text-primary" : ""
                    } hover:text-primary font-medium cursor-pointer pl-2 md:pl-5`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* eslint-disable react/no-unescaped-entities */
import "./Banner.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div
      className="background min-h-screen flex justify-center items-center"
      id="banner"
    >
      <div className={"px-5 xl:px-0 max-w-7xl mx-auto text-center"}>
        <div className="space-y-10">
          <h1 className="text-gray font-bold text-3xl md:text-4xl lg:text-6xl">
            Hi, I'm <span className="text-primary">Tanvir Hasan Emon</span>
          </h1>
          <p className="text-gray font-medium text-base md:text-lg lg:text-xl md:w-[40rem] mx-auto leading-relaxed">
            I am a Computer Science graduate with a passion for Full Stack Web
            Development. I am proficient in technologies like React, Tailwind,
            Express, and MongoDB.
          </p>
          <p className="flex gap-5 text-3xl md:text-4xl text-primary justify-center">
            <Link to={"https://github.com/tanvir0908"} target="_blank">
              <FaGithub />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/tanvir-hasan-emon/"}
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </p>
          <p className="">
            <Link
              to={
                "https://drive.google.com/file/d/1hWJdBEnMuZ9VmjORX0yGf9T4eeWGv5nn/view?usp=sharing"
              }
              target="_blank"
              className="bg-primary mt font-semibold text-base md:text-lg lg:text-xl px-5 py-2 rounded-xl text-secondary"
            >
              Check Resume
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

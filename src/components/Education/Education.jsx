import { IoSchool } from "react-icons/io5";
import { FaUniversity } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institute: "United International University",
      result: "CGPA 3.06 out of 4.00",
      timeline: "2018 - 2022",
    },
    {
      degree: "Higher Secondary School Certificate",
      institute: "Quadirabad Cantonment Sapper Collage",
      result: "GPA 5.00 out of 5.00",
      timeline: "2015 - 2017",
    },
    {
      degree: "Secondary School Certificate",
      institute: "Natore Sugar Mill's High School",
      result: "GPA 5.00 out of 5.00",
      timeline: "2013 - 2015",
    },
  ];
  return (
    <div
      id="education"
      className="w-full px-5 xl:px-0 bg-secondary py-20 min-h-screen text-gray"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-20 text-center font-semibold text-primary">
          Education
        </h2>
        <div className="flex gap-10">
          <div className="">
            <div className="bg-primary w-5 h-5 rounded-full" />
            <div className="violet-gradient h-[90%] w-1 ml-2" />
          </div>
          <div className="space-y-10 flex-1">
            {education.map((institute, index) => (
              <div
                key={index}
                className="shadow-xl border-2 border-primary space-y-5 cursor-pointe shadow-primary p-5 md:p-10  rounded-xl"
              >
                <div className="flex items-center gap-5">
                  <IoSchool className="text-3xl md:text-4xl text-primary" />
                  <h2 className="text-xl md:text-3xl font-semibold flex-1">
                    {institute.degree}
                  </h2>
                </div>
                <div className="flex items-center gap-5">
                  <FaUniversity className="text-3xl md:text-4xl text-primary" />
                  <p className="text-lg md:text-2xl font-bold flex-1">
                    {institute.institute}
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <FaRegCalendarAlt className="text-3xl md:text-4xl text-primary" />
                  <p className="text-base md:text-xl font-semibold flex-1">
                    {institute.timeline}
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <FaBook className="text-3xl md:text-4xl text-primary" />
                  <p className="font-semibold text-base md:text-xl flex-1">
                    {institute.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

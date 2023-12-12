export default function Skills() {
  const skills1 = [
    {
      name: "HTML",
      image:
        "https://raw.githubusercontent.com/tanvir0908/tanvir0908/8476a049e64424562434a64deb988d7da8cfa886/assets/icons/HTML.svg",
    },
    {
      name: "CSS",
      image:
        "https://raw.githubusercontent.com/tanvir0908/tanvir0908/8476a049e64424562434a64deb988d7da8cfa886/assets/icons/CSS.svg",
    },
    {
      name: "Tailwind",
      image:
        "https://raw.githubusercontent.com/tanvir0908/tanvir0908/8476a049e64424562434a64deb988d7da8cfa886/assets/icons/TailwindCSS-Dark.svg",
    },
    {
      name: "JavaScript",
      image:
        "https://raw.githubusercontent.com/tanvir0908/tanvir0908/8476a049e64424562434a64deb988d7da8cfa886/assets/icons/JavaScript.svg",
    },
    {
      name: "ReactJS",
      image:
        "https://raw.githubusercontent.com/tanvir0908/tanvir0908/8476a049e64424562434a64deb988d7da8cfa886/assets/icons/React-Dark.svg",
    },
    {
      name: "Firebase",
      image:
        "https://raw.githubusercontent.com/tanvir0908/tanvir0908/527dd6caccc62f3eba689d3a121c7a8c36d4b421/assets/icons/Firebase-Dark.svg",
    },
    {
      name: "NodeJS",
      image:
        "https://raw.githubusercontent.com/tanvir0908/tanvir0908/96a0e05d57cc257c91581a02cc5114ced47f9fcd/assets/icons/NodeJS-Dark.svg",
    },
    {
      name: "ExpressJS",
      image:
        "https://raw.githubusercontent.com/tanvir0908/tanvir0908/96a0e05d57cc257c91581a02cc5114ced47f9fcd/assets/icons/ExpressJS-Dark.svg",
    },
    {
      name: "MongoDB",
      image:
        "https://raw.githubusercontent.com/tanvir0908/tanvir0908/96a0e05d57cc257c91581a02cc5114ced47f9fcd/assets/icons/MongoDB.svg",
    },
    {
      name: "C",
      image:
        "https://raw.githubusercontent.com/tanvir0908/tanvir0908/96a0e05d57cc257c91581a02cc5114ced47f9fcd/assets/icons/C.svg",
    },
    {
      name: "Java",
      image:
        "https://raw.githubusercontent.com/tanvir0908/tanvir0908/96a0e05d57cc257c91581a02cc5114ced47f9fcd/assets/icons/Java-Dark.svg",
    },
    {
      name: "Python",
      image:
        "https://raw.githubusercontent.com/tanvir0908/tanvir0908/96a0e05d57cc257c91581a02cc5114ced47f9fcd/assets/icons/Python-Dark.svg",
    },
  ];

  return (
    <div id="skills" className="min-h-screen bg-secondary py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl text-center font-semibold text-primary">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-16">
          {skills1.map((skill, index) => (
            <div
              key={index}
              className="flex shadow-md cursor-pointer shadow-primary black-gradient gap-5 items-center border-2 p-3 border-primary rounded-xl"
            >
              <img src={skill.image} className="w-16" alt="" />
              <p className="font-semibold text-xl">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

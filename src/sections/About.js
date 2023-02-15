import Profile from "../assets/JacobLagerCompressedSquare.png";
import Bullet from "../assets/bullet.png";

const About = () => {
  const skills = [
    "React",
    "Material UI",
    "SQL",
    "JavaScript",
    "Tailwind",
    "Ada 95",
    "CSS",
    "C++",
    "Git",
    "HTML",
    "Java",
    "VS Code",
  ];

  return (
    <div className="flex justify-center items-center content-center m-auto max-w-[900px]">
      <div className="flex justify-left pt-80 flex-col">
        <div className="flex flex-row gap-2 items-center">
          <p className="font-mono text-secondary text-xl">01.</p>
          <p className="text-primary_text font-inter font-bold text-2xl">
            About Me
          </p>
          <div className="relative flex py-5 items-center pl-2 w-[250px] max-w-[250px]">
            <div className="flex-grow border-t border-secondary_text"></div>
          </div>
        </div>
        <div className="font-inter text-secondary_text mt-10 flex flex-row gap-10 max-w-3xl">
          <div>
            <p>
              Hello! I'm Jacob, and for as long as I can remember, I've been
              drawn to problem solving and the process of creating something.
              From building with LEGO as a kid, to assembling IKEA furniture and
              building computers. To scratch my itch for problem solving, I
              applied for the Bachelor's Programme in Information System
              Analysis, and after the first course in programming I was hooked.
              This led to me mayoring in Systems Development, and that sparked a
              further interest in learning new languagues and technologies.
            </p>
            <br />
            <p>
              I'm currently studying my final year as a software developer
              student, and I can't wait to enter the professional world of
              software development to keep expanding my knowledge.
            </p>
          </div>
          <div className="flex justify-right">
            <img
              src={Profile}
              alt=""
              className="object-cover overflow-hidden rounded-lg max-w-xs bg-secondary border-b-4 border-r-4 hover:border-r-2 hover:border-b-2 border-secondary hover:scale-105 ease-in-out duration-300"
            />
          </div>
        </div>
        <div className="mt-14 max-w-3xl flex justify-center flex-col items-center">
          <p className="font-inter text-secondary_text max-w-[500px]">
            Here are some tools and technologies I've learned and used
            throughout my education and in my spare time:
          </p>
          <div className="mt-6 ml-[-42px]">
            <ul className="gap-2 gap-x-16 grid grid-cols-3 mb-4 text-seconday_text font-mono text-sm">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="flex gap-2.5 items-center text-secondary_text"
                >
                  <img src={Bullet} alt="" className="w-[6px]" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

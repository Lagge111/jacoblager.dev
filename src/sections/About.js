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
    <div
      id="about"
      className="flex justify-center items-center content-center m-auto max-w-[900px]"
    >
      <div className="flex justify-left pt-80 flex-col">
        <div className="flex flex-row gap-2 items-center">
          <p className="font-mono text-secondary text-xl">01.</p>
          <p className="text-primary_text font-inter font-bold text-2xl">
            About Me
          </p>
          <div className="relative flex py-5 items-center pl-2 md:w-[250px] sm:w-[200px] w-[150px] max-w-[250px]">
            <div className="flex-grow border-t border-secondary_text/30"></div>
          </div>
        </div>
        <div className="font-inter text-secondary_text mt-10 flex flex-col md:flex-row gap-10 max-w-3xl leading-relaxed">
          <div>
            <p>
              Hello! I'm Jacob, and I have always been drawn to the process of{" "}
              <span className="text-secondary">problem solving</span> and{" "}
              <span className="text-secondary">creating</span> something new.
              From building with LEGO as a child to assembling IKEA furniture
              and building computers, I have always enjoyed the challenge of
              bringing ideas to life. To further satisfy my love for problem
              solving, I pursued a Bachelor's Programme in Information System
              Analysis. After taking my first{" "}
              <span className="text-secondary">programming</span> course, I was
              immediately hooked. This led me to major in Systems Development
              and sparked a{" "}
              <span className="text-secondary">passion for learning</span> new
              languages and technologies.
              <br />
              <br />
              <p>
                Currently, I am in my final semester as a{" "}
                <span className="text-secondary">
                  Software Developer Student
                </span>
                , and I am excited to embark on a career in the professional
                world of software development. I look forward to expanding my
                knowledge and skills as I pursue my passion for creating
                innovative solutions.
              </p>
            </p>
          </div>
          <div className="flex md:justify-right justify-center">
            <img
              src={Profile}
              alt="profile"
              className="object-cover overflow-hidden rounded-lg max-w-xs bg-secondary border-b-2 border-r-2 border-secondary"
            />
          </div>
        </div>
        <div className="relative flex py-5 items-center w-[250px] max-w-[250px] mt-10">
          <div className="flex-grow border-t border-secondary_text/30"></div>
        </div>
        <div className=" max-w-3xl flex justify-center flex-col items-center leading-relaxed">
          <p className="font-inter text-secondary_text max-w-[500px]">
            Here are some <span className="text-secondary">tools</span> and
            <span className="text-secondary"> technologies</span> I've learned
            and used throughout my education and in my spare time:
          </p>
          <div className="mt-6 ml-[-42px]">
            <ul className="gap-2 gap-x-16 grid md:grid-cols-3 grid-cols-2 mb-4 text-seconday_text font-mono text-sm">
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

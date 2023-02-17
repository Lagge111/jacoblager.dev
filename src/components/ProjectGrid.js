import React from "react";
import { Github } from "./Icons";

const ProjectGrid = () => {
  const projects = [
    {
      id: 1,
      title: "C++ Lab Series",
      description:
        "Laboratory work from a university course in C++, including dynamic memory handling, inheritance, polymorphism and much more.",
      link: "https://gitlab.liu.se/jacla554/726g77",
      skills: ["C++", "STL"],
    },
    {
      id: 2,
      title: "Java Lab Series",
      description:
        "Laboratory work from a university course in Java, where the main focus was object-oriented programming.",
      skills: ["Java", "JavaFX"],
    },
    {
      id: 3,
      title: "Continuous Integration & Continuous Delivery",
      description:
        "Laboratory work from a university course in Software Engineering, where I experimented with CI/CD.",
      link: "https://gitlab.liu.se/jacla554/lab5",
      skills: ["YAML", "Docker"],
    },
    {
      id: 4,
      title: "The Next Big Thing",
      description:
        "Do you have an exciting idea that you want to realize? I'm always up for a challenge! Contact me below.",
      skills: ["???"],
    },
  ];

  return (
    <div className="flex justify-center flex-col">
      <p className="text-primary_text font-inter text-2xl font-bold text-center">
        Other Projects
      </p>
      <ul className="grid grid-cols-fluid list-none relative gap-[15px] mt-14">
        {projects.map((item, index) => (
          <li
            key={index}
            className="relative top-0 hover:top-[-5px] ease-in-out duration-200"
          >
            <div className="flex justify-between flex-col items-start h-full p-6 bg-misc_light overflow-auto">
              <div className="mb-4">
                <a title="Github" href={item.link} target="_blank">
                  <Github />
                </a>
              </div>
              <header className="font-inter text-primary_text font-bold text-xl">
                {item.title}
              </header>
              <p className="font-inter text-secondary_text text-sm mt-2 leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4">
                <ul className="gap-2 grid grid-cols-3 mb-4 text-secondary_text font-mono text-sm">
                  {item?.skills?.map((skill, subindex) => (
                    <li
                      key={subindex}
                      className="flex gap-2.5 items-center text-secondary_text underline decoration-secondary underline-offset-8"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectGrid;

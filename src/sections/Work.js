import CMIYC from "../assets/catchmeifyoucan-portfolio.png";
import C1 from "../assets/c1-cover-dark.png";
import Leisurely from "../assets/leisurely-cover.png";
import ChatAppCover from "../assets/a3-chatify-cover.png";
import ProjectCard from "../components/ProjectCard";
import ProjectCardLeft from "../components/ProjectCardLeft";
import ProjectGrid from "../components/ProjectGrid";
import { motion } from "framer-motion";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Only C1 Solution",
      description:
        "As a part of a university course, I, together with a project team of 30 students, collaborated to develop a front-end solution for a logistics system to keep track of hospital consumables for Region Östergötland, the major healthcare provider of the region.",
      cover: C1,
      tech: ["React", "Material UI", "OpenAPI"],
      link: "https://gitlab.liu.se/tddc88-2022/c1/company-1-project",
    },
    {
      id: 2,
      title: "Chatify",
      description:
        "Collaborated with Mattias Larsson to create a multi-user chat application with a full-stack implementation in C# and .NET. The application features a GUI built using WPF and stores chat logs using JSON files.",
      cover: ChatAppCover,
      tech: ["C#", ".NET"],
      link: "https://gitlab.liu.se/jacla554/tddd49_725g66",
    },
    {
      id: 3,
      title: "Catch Me If You Can",
      description:
        "Arcade style game with a retro feel, based on the logic from Pac-Man, with multiple levels and increasing difficulty. Has different enemy types and various power-ups. Handles game saves locally to file. Co-created with Mattias Larsson.",
      cover: CMIYC,
      tech: ["Java", "JavaFX"],
      link: "https://gitlab.liu.se/jacla554/projektarbete",
    },
    {
      id: 4,
      title: "Leisurely",
      description:
        "A simple activity suggestion tool for when you're feeling indecisive. Has different categories of activities, and provides a link to learn more about each suggested activity. Built to experiment with open APIs.",
      cover: Leisurely,
      tech: ["React", "Tailwind", "daisyUI", "BoredAPI"],
      link: "https://github.com/Lagge111/leisurely",
    },
  ];

  return (
    <div
      id="projects"
      className="flex justify-center items-center content-center m-auto max-w-[900px] js-show-on-scroll"
    >
      <div className="flex justify-left pt-80 flex-col">
        <motion.div
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex sm:flex-row flex-col gap-2 items-center"
        >
          <div className="flex justify-start items-center gap-2">
            <p className="font-mono text-secondary text-xl">02.</p>
            <p className="text-primary_text font-inter font-bold text-2xl">
              Some Things I've Built
            </p>
          </div>
          <div className="relative flex py-5 items-center pl-2 md:w-[250px] sm:w-[300px] w-[300px] max-w-[250px]">
            <div className="flex-grow border-t border-secondary_text/30"></div>
          </div>
        </motion.div>
        <div className="flex flex-col gap-20">
          <motion.ul
            initial={{ opacity: 0, y: "50px" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-20"
          >
            {projects.map((project, index) => {
              if (index % 2 === 0) {
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: "50px" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <ProjectCard
                      cover={project.cover}
                      title={project.title}
                      description={project.description}
                      tech={project.tech}
                      link={project.link}
                    />
                  </motion.li>
                );
              } else {
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: "50px" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <ProjectCardLeft
                      cover={project.cover}
                      title={project.title}
                      description={project.description}
                      tech={project.tech}
                      link={project.link}
                    />
                  </motion.li>
                );
              }
            })}
            <div className="mt-40">
              <ProjectGrid />
            </div>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Work;

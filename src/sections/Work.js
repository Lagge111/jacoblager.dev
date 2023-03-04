import ProjectCard from "../components/ProjectCard";
import ProjectCardLeft from "../components/ProjectCardLeft";
import ProjectGrid from "../components/ProjectGrid";
import { projects, miscProjects } from "../data";
import { motion } from "framer-motion";

const Work = () => {
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
            {projects.map((project, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: "50px" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                {index % 2 === 0 ? (
                  <ProjectCard
                    cover={project.cover}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    link={project.link}
                  />
                ) : (
                  <ProjectCardLeft
                    cover={project.cover}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    link={project.link}
                  />
                )}
              </motion.li>
            ))}
            <div className="mt-40">
              <ProjectGrid projects={miscProjects} />
            </div>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Work;

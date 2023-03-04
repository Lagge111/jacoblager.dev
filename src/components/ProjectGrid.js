import { Github, Folder } from "./Icons";
import { motion } from "framer-motion";

const ProjectGrid = ({ projects }) => {
  return (
    <div className="flex justify-center flex-col">
      <motion.p
        initial={{ opacity: 0, y: "50px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-primary_text font-inter text-2xl font-bold text-center"
      >
        Other Projects
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: "50px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-secondary font-mono text-md text-center mt-2"
      >
        Bits and Bobs
      </motion.p>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid grid-cols-fluid list-none relative gap-[15px] mt-14"
      >
        {projects.map((item, index) => (
          <motion.li
            key={index}
            className="relative top-0 hover:top-[-5px] ease-in-out duration-200 md:mx-0 mx-8 group"
          >
            <div className="flex justify-between flex-col items-start h-full p-6 bg-misc_light overflow-auto">
              <div className="flex flex-row justify-between items-center w-full mb-4">
                <Folder />
                <a
                  title="Github"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mb-2 self-end flex items-center"
                >
                  <Github strokeColor="secondary_text" height="24" width="24" />
                </a>
              </div>
              <header className="font-inter text-primary_text font-bold text-xl group-hover:text-secondary ease-in-out duration-200">
                {item.title}
              </header>
              <p className="font-inter text-secondary_text text-sm mt-2 leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4">
                <ul className="gap-2 grid grid-cols-3 mb-4 text-secondary_text/90 font-mono text-sm">
                  {item?.skills?.map((skill, subindex) => (
                    <li
                      key={subindex}
                      className="flex items-center underline decoration-secondary underline-offset-8"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ProjectGrid;

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="section"
      className="flex justify-center items-center content-center m-auto max-w-[900px] js-show-on-scroll"
    >
      <div className="sm:pt-80 pt-36 flex justify-left md:pr-40 pr-20 flex-col max-w-[900px]">
        <motion.p
          initial={{ opacity: 0, y: "150px" }}
          whileInView={{ opacity: 1, y: 0 }}
          // transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-secondary mb-6 font-mono"
        >
          Hi, my name is
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: "150px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-primary_text md:text-6xl sm:text-5xl text-4xl font-bold mb-5 font-inter"
        >
          Jacob Lager.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: "150px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-secondary_text md:text-6xl sm:text-5xl text-4xl font-bold font-inter mb-8"
        >
          I like to build things.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: "150px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-secondary_text font-inter max-w-lg"
        >
          I'm a software developer student with a passion for problem solving
          and building things. I enjoy experimenting with new technologies and
          I'm always eager to learn.{" "}
          <span className="text-secondary">
            Welcome to my portfolio website.
          </span>{" "}
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;

import { Github } from "./Icons";

const ProjectCard = ({ cover, title, description, tech, link }) => {
  return (
    <div className="flex flex-grow justify-left mt-14 gap-4 lg:flex-row flex-col overflow-clip">
      <div className="bg-misc_dark max-w-[60%] border-b-2 border-l-2 border-secondary/30 rounded-md">
        <img
          src={cover}
          alt="cover"
          className="rounded-sm filter brightness-90 max-w-full min-w-[315px] h-auto"
        />
      </div>
      <div className="flex lg:items-end items-start flex-col z-20">
        <p className="font-mono text-secondary text-sm lg:text-end text-left">
          Featured Project
        </p>
        <p className="font-inter text-primary_text font-bold text-2xl lg:text-end text-start mt-2">
          {title}
        </p>
        <div className="lg:pl-4 mt-6 max-w-[400px] relative z-2 flex justify-right rounded-sm flex-col">
          <p className="font-inter text-secondary_text lg:text-end text-left leading-relaxed">
            {description}
          </p>
          <div className="mt-4">
            <ul className="text-secondary lg:text-end text-start justify-start ">
              {tech.map((item, index) => (
                <li
                  key={index}
                  className="lg:pl-5 pr-5 pl-0 lg:pr-0 inline font-mono text-secondary_text text-sm underline decoration-secondary underline-offset-8 leading-8"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <></>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="no-underline"
          >
            <Github strokeColor="primary_text" width="22" height="22" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

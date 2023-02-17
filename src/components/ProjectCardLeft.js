import { Github } from "./Icons";

const ProjectCardLeft = ({ cover, title, description, tech, link }) => {
  return (
    <div className="flex flex-grow justify-left mt-14 gap-4">
      <div className="flex items-start flex-col z-20">
        <p className="font-mono text-secondary text-sm text-start">
          Featured Project
        </p>
        <p className="font-inter text-primary_text font-bold text-2xl text-start mt-2">
          {title}
        </p>
        <div className="pr-4 mt-6 max-w-[400px] relative z-2 flex justify-left rounded-sm flex-col">
          <p className="font-inter text-secondary_text text-start leading-relaxed">
            {description}
          </p>
          <div className="mt-4">
            <ul className="text-secondary text-start">
              {tech.map((item, index) => (
                <li
                  key={index}
                  className="pr-5 inline font-mono text-secondary_text text-sm underline decoration-secondary underline-offset-8"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="no-underline"
          >
            <Github />
          </a>
        </div>
      </div>
      <div className="bg-misc_dark max-w-[60%] border-b-2 border-r-2 border-secondary/30 rounded-md">
        <img
          src={cover}
          alt="cover"
          className="rounded-sm filter brightness-75 max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default ProjectCardLeft;

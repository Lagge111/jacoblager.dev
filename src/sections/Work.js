import CMIYC from "../assets/catchmeifyoucan-portfolio.png";
import C1 from "../assets/c1-cover-dark.png";
import PortfolioCover from "../assets/portfolio-print.png";
import ChatAppCover from "../assets/a3-chatify-cover.png";
import ProjectCard from "../components/ProjectCard";
import ProjectCardLeft from "../components/ProjectCardLeft";
import ProjectGrid from "../components/ProjectGrid";

const Work = () => {
  const CMIYCtech = ["Java", "JavaFX"];
  const C1tech = ["React", "Material UI", "OpenAPI"];
  const ChatAppTech = ["C#", ".NET"];
  const PortfolioTech = ["React", "Tailwind CSS"];

  return (
    <div className="flex justify-center items-center content-center m-auto max-w-[900px]">
      <div className="flex justify-left pt-80 flex-col">
        <div className="flex flex-row gap-2 items-center">
          <p className="font-mono text-secondary text-xl">02.</p>
          <p className="text-primary_text font-inter font-bold text-2xl">
            Some Things I've Built
          </p>
          <div className="relative flex py-5 items-center pl-2 w-[250px] max-w-[250px]">
            <div className="flex-grow border-t border-secondary_text/30"></div>
          </div>
        </div>
        <div className="flex flex-col gap-20">
          <ProjectCard
            cover={C1}
            title="Only C1 Solution"
            description="As a part of a university course, I, together with a project team of 30 students, collaborated to develop a front-end solution for a logistics system to keep track of hospital consumables for Region Östergötland, the major healthcare provider of the region."
            tech={C1tech}
            link="https://gitlab.liu.se/tddc88-2022/c1/company-1-project"
          />
          <ProjectCardLeft
            cover={ChatAppCover}
            title="Chatify by A3 Studio"
            description="Multi-user full-stack chat app, with WPF to create the GUI. Stores new chats and fetches existing chats from JSON file. Co-created with Mattias Larsson."
            tech={ChatAppTech}
            link="https://gitlab.liu.se/jacla554/tddd49_725g66"
          />
          <ProjectCard
            cover={CMIYC}
            title="Catch Me If You Can"
            description="Arcade style game with a retro feel, based on the logic from
                          Pac-Man, with multiple levels and increasing difficulty. Has different enemy types and various power-ups. Handles game
                          saves locally to file. Co-created with Mattias Larsson."
            tech={CMIYCtech}
            link="https://gitlab.liu.se/jacla554/projektarbete"
          />
          <ProjectCardLeft
            cover={PortfolioCover}
            title="This Website You're Visiting"
            description="The website you're currently visiting - my personal portfolio website. Built to develop and solidify my knowledge about front-end development. I hope you're enjoying it so far!"
            tech={PortfolioTech}
            link="https://github.com/Lagge111/jl-portfolio"
          />
          <div className="mt-40">
            <ProjectGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

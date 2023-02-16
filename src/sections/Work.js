import CMIYC from "../assets/catchmeifyoucan-portfolio.png";
import PortfolioCover from "../assets/portfolio-print.png";
import ProjectCard from "../components/ProjectCard";

const Work = () => {
  const CMIYCtech = ["Java", "JavaFX"];
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
            <div className="flex-grow border-t border-secondary_text/50"></div>
          </div>
        </div>
        <div className="flex flex-col gap-14">
          <ProjectCard
            cover={CMIYC}
            title="Catch Me If You Can"
            description="Arcade style game with a retro feel, based on the logic from
                Pac-Man, with multiple levels and increasing difficulty. Has different enemy types and various power-ups. Handles game
                saves locally to file. Co-created with Mattias Larsson."
            tech={CMIYCtech}
            link="https://gitlab.liu.se/jacla554/projektarbete"
          />
          <ProjectCard
            cover={PortfolioCover}
            title="This Website You're Visiting"
            description="The website you're currently visiting - my personal portfolio website. Built to develop and solidify my knowledge about front-end development. I hope you're enjoying it so far!"
            tech={PortfolioTech}
            link="https://github.com/Lagge111/jl-portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;

const Hero = () => {
  return (
    <div className="flex justify-center items-center content-center m-auto max-w-[900px]">
      <div className="pt-80 flex justify-left md:pr-40 pr-20 flex-col max-w-[900px]">
        <p className="text-secondary mb-6 font-mono">Hi, my name is</p>
        <p className="text-primary_text md:text-6xl sm:text-5xl text-4xl font-bold mb-5 font-inter">
          Jacob Lager.
        </p>
        <p className="text-secondary_text md:text-6xl sm:text-5xl text-4xl font-bold font-inter mb-8">
          I like to build things.
        </p>
        <p className="text-secondary_text font-inter max-w-lg">
          I'm a software developer student with a passion for problem solving
          and building things. I enjoy experimenting with new technologies and
          I'm always eager to learn.{" "}
          <span className="text-secondary">
            Welcome to my portfolio website.
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Hero;

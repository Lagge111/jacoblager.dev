import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center content-center m-auto max-w-[900px]">
      <div className="pt-80 flex justify-left pr-40 flex-col max-w-[900px]">
        <p className="text-secondary mb-6 font-mono">Hi, my name is</p>
        <p className="text-primary_text text-6xl font-bold mb-5 font-inter">
          Jacob Lager.
        </p>
        <p className="text-secondary_text text-6xl font-bold font-inter mb-8">
          I like to build things.
        </p>
        <p className="text-secondary_text font-inter max-w-lg">
          I'm a software developer student with a passion for problem solving
          and building things.{" "}
        </p>
      </div>
    </div>
  );
};

export default Hero;

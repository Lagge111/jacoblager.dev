import React from "react";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Nav from "../sections/Nav";
import Work from "../sections/Work";

const Home = () => {
  return (
    <div className="bg-primary h-full flex justify-center flex-col">
      <Nav />
      <Hero />
      <About />
      <Work />
    </div>
  );
};

export default Home;

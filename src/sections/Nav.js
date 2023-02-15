import React from "react";
import LogoWhite from "../assets/logos/personal-logo-white.png";
import LogoPurple from "../assets/logos/personal-logo-purple.png";
import NavbarLink from "../components/NavbarLink";

const Nav = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <header className="fixed w-full z-20 mx-auto top-0 backdrop-blur-sm bg-primary/30">
      <nav className="max-w-3xl mx-auto px-4 md:px-6 flex justify-between items-center sm:py-2">
        <img
          src={LogoWhite}
          className="w-20 h-18 cursor-pointer"
          onClick={scrollToTop}
        />
        <NavbarLink target="#about" text="About" />
        <NavbarLink target="#projects" text="Projects" />
        <NavbarLink target="#contact" text="Contact" />
        <button className="font-mono border rounded border-secondary text-secondary px-4 py-2 text-sm hover:bg-secondary/20 ease-in-out duration-300">
          Resume
        </button>
      </nav>
    </header>
  );
};

export default Nav;

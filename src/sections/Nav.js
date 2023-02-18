import LogoGreen from "../assets/logos/personal-logo-green.png";
import NavbarLink from "../components/NavbarLink";
import NavMobile from "../components/NavMobile";

const Nav = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <header className="fixed w-full z-50 mx-auto pt-4 top-0 backdrop-blur-sm bg-primary/30">
      <nav className="max-w-3xl mx-auto px-4 md:px-6 flex justify-between items-center sm:py-2">
        <NavMobile />
        <img
          src={LogoGreen}
          alt="logo"
          className="w-16 h-12 cursor-pointer sm:flex hidden hover:scale-105 ease-in-out duration-300"
          onClick={scrollToTop}
        />
        <div className="sm:flex hidden">
          <NavbarLink target="#about" text="About" number="01." />
        </div>
        <div className="sm:flex hidden">
          <NavbarLink target="#projects" text="Projects" number="02." />
        </div>
        <div className="sm:flex hidden">
          <NavbarLink target="#contact" text="Contact" number="03." />
        </div>
        <a
          href="/static/CV-JacobLager.pdf"
          target="_blank"
          rel="noreferrer"
          className="font-mono border rounded border-secondary text-secondary px-4 py-2 text-sm hover:bg-secondary/20 ease-in-out duration-300 no-underline sm:flex hidden"
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Nav;

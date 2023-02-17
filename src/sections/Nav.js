import LogoGreen from "../assets/logos/personal-logo-green.png";
import NavbarLink from "../components/NavbarLink";

const Nav = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <header className="fixed w-full z-50 mx-auto pt-4 top-0 backdrop-blur-sm bg-primary/30">
      <nav className="max-w-3xl mx-auto px-4 md:px-6 flex justify-between items-center sm:py-2">
        <img
          src={LogoGreen}
          alt="logo"
          className="w-16 h-12 cursor-pointer"
          onClick={scrollToTop}
        />
        <NavbarLink target="#about" text="About" number="01." />
        <NavbarLink target="#projects" text="Projects" number="02." />
        <NavbarLink target="#contact" text="Contact" number="03." />
        <a
          href="/static/CV-JacobLager.pdf"
          target="_blank"
          rel="noreferrer"
          className="font-mono border rounded border-secondary text-secondary px-4 py-2 text-sm hover:bg-secondary/20 ease-in-out duration-300 no-underline"
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Nav;

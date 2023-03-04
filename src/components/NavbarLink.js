const NavbarLink = ({ target, text, number }) => {
  return (
    <div className="sm:flex hidden">
      <a
        href={target}
        className="no-underline font-mono relative text-sm text-primary_text hover:text-secondary ease-in-out duration-300"
      >
        <span className="text-secondary text-xs mr-1">{number}</span>
        {text}
      </a>
    </div>
  );
};

export default NavbarLink;

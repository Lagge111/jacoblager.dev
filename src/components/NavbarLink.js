import React from "react";

const NavbarLink = ({ target, text }) => {
  return (
    <a
      href={target}
      className="no-underline font-mono relative text-sm text-primary_text hover:text-secondary ease-in-out duration-300"
    >
      {text}
    </a>
  );
};

export default NavbarLink;

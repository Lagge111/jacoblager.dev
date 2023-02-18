import { AnimatePresence, motion } from "framer-motion";
import { Hamburger, Close } from "./Icons";
import { useState } from "react";
import NavbarLink from "./NavbarLink";
import LogoGreen from "../assets/logos/personal-logo-green.png";

const NavMobile = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const menuVariants = {
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
  };

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <motion.button
        type="button"
        title="toggle menu"
        className="sm:hidden z-20 ml-2 mt-2 text-secondary"
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {!open ? <Hamburger /> : <Close />}
      </motion.button>
      <img
        src={LogoGreen}
        alt="logo"
        className="sm:hidden absolute top-6 right-6 w-11 h-8 cursor-pointer hover:scale-105 ease-in-out duration-300"
        onClick={scrollToTop}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            className="flex flex-col px-6 fixed top-0 left-0 backdrop-blur-3xl bg-primary min-h-[100vh]"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100vw", opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{
              opacity: 0,
              width: 0,
              transition: { delay: 0.3, duration: 0.3 },
            }}
          >
            <motion.ul
              className="mt-48 flex flex-col w-full mb-8 ml-4 gap-8"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.li
                className="py-4 flex"
                variants={itemVariants}
                onClick={toggleMenu}
              >
                <NavbarLink text="About" target="#about" number="01." />
              </motion.li>
              <motion.li
                className="py-4 flex"
                variants={itemVariants}
                onClick={toggleMenu}
              >
                <NavbarLink text="Projects" target="#projects" number="02." />
              </motion.li>
              <motion.li
                className="py-4 flex"
                variants={itemVariants}
                onClick={toggleMenu}
              >
                <NavbarLink text="Contact" target="#contact" number="03." />
              </motion.li>
              <motion.li
                className="py-4 flex"
                variants={itemVariants}
                onClick={toggleMenu}
              >
                <a
                  href="/static/CV-JacobLager.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono border rounded border-secondary text-secondary px-4 py-2 text-sm hover:bg-secondary/20 ease-in-out duration-300 no-underline"
                >
                  Resume
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavMobile;

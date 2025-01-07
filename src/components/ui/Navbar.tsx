import { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { motion } from "motion/react";
import { assets, links } from "../../constants";
import Button from "./Button";

const Navbar = () => {
  const { logo } = assets;
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 10 },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: { type: "spring", stiffness: 70, damping: 10 },
    },
  };

  return (
    <nav>
      <div className="flex items-center justify-between mb-6">
        <img src={logo} className="h-10 lg:h-auto" alt="Positivus Logo" />
        <ul className="hidden lg:flex justify-between items-center gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative block font-medium after:content-[''] after:block after:absolute after:h-[2px] after:bg-blackDark after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button
            text="Request a quote"
            href="#Contact"
            className="border border-black"
          />
        </ul>
        <div className="lg:hidden">
          <RiMenu3Fill
            onClick={() => setShowMenu(!showMenu)}
            className="size-8 cursor-pointer"
            aria-label="Open menu"
          />
        </div>
      </div>
      {/* Mobile Menu */}
      <motion.div
        className={`w-full fixed top-0 right-0 bottom-0 bg-white z-20 ${
          showMenu ? "block" : "hidden"
        }`}
        initial="closed"
        animate={showMenu ? "open" : "closed"}
        variants={menuVariants}
      >
        <RiCloseFill
          onClick={() => setShowMenu(!showMenu)}
          className="absolute right-2 sm:right-16 top-5 size-10 cursor-pointer"
          aria-label="Close menu"
        />
        <ul className="flex flex-col items-center justify-center h-screen gap-4 text-lg font-medium">
          {links.map((link) => (
            <li key={link.name} role="menuitem">
              <a onClick={() => setShowMenu(false)} href={link.href}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;

import { assets, links } from "../constants";
import Button from "./Button";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mb-6">
      <img src={assets.logo} alt="Positivus Logo" />
      <ul className="hidden md:flex justify-between items-center gap-6">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="font-medium">
              {link.name}
            </a>
          </li>
        ))}
        <Button
          text="Request a quote"
          href="#Request"
          className="border border-black"
        />
      </ul>
    </nav>
  );
};

export default Navbar;

import { assets, links } from "../constants";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between my-6">
      <div className="logo">
        <img src={assets.logo} alt="" />
      </div>
      <div className="links">
        <ul className="flex justify-between gap-4">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="font-medium">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-black py-3 px-8 rounded-lg font-medium">
        Request a quote
      </div>
    </nav>
  );
};

export default Navbar;

import { links, footer, assets } from "../constants";
import Button from "./ui/Button";

const Footer = () => {
  const { email, phone, address, socialMediaList } = footer;
  const { lightLogo } = assets;
  return (
    <section className="relative text-white bg-blackDark rounded-3xl p-10 -bottom-5">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <img src={lightLogo} alt="Positivus Logo" className="h-5 max-w-xs" />
        <ul className="flex flex-col lg:flex-row items-center gap-4">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="underline">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-2">
          {socialMediaList.map((social, index) => (
            <li key={index}>
              <a href={social.link} aria-label={`Follow us on ${social.name}`}>
                <img src={social.image} alt={social.name} className="size-8" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8 border-b border-b-gray-400 pb-8">
        <div className="contact-info w-full sm:w-2/3 mx-auto lg:mx-0 text-center lg:text-left">
          <h5 className="text-blackDark bg-limeGreen inline-block px-4 rounded-lg">
            Contact-us:
          </h5>
          <p className="mt-4">{email}</p>
          <p className="my-4">{phone}</p>
          <p className="">{address}</p>
        </div>
        <div className="contact-form bg-shadowSlate p-4 sm:p-8 py-8 rounded-3xl flex items-center justify-between gap-4 flex-col sm:flex-row">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            className="block w-full lg:w-1/2 py-3 px-3 border border-white bg-transparent rounded-md shadow-sm focus:outline-none focus:border-limeGreen sm:text-sm"
          />
          <Button
            text="Subscribe to news"
            href="#"
            className="bg-limeGreen text-blackDark w-full lg:w-1/2"
          />
        </div>
      </div>
      <div className="flex items-center justify-between flex-col md:flex-row gap-4">
        <p className="text-center">
          ©2025 Positivus. By{" "}
          <a
            href="https://www.linkedin.com/in/marzen-alaaeddine/"
            target="_blanck"
            className="underline text-limeGreen"
          >
            MARZEN AlaaEddine
          </a>
          .
        </p>
        <a
          href="#privacy-policy"
          aria-label="Privacy Policy"
          className="underline"
        >
          Privacy Policy
        </a>
      </div>
    </section>
  );
};

export default Footer;

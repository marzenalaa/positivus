import { assets, companies } from "../constants";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <section className="h-full" id="Hero">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center my-16">
        <div className="right-side max-w-xl">
          <h1 className="text-5xl font-semibold">
            Navigating the digital lanscape for success
          </h1>
          <p className="text-lg py-8">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="bg-black text-white py-3 px-8 rounded-lg font-medium">
            Book a consultation
          </button>
        </div>
        <div className="left-side">
          <img src={assets.illustration} alt="" />
        </div>
      </div>
      <div className="company">
        <ul className="flex flex-wrap items-center justify-between gap-4">
          {companies.map((company) => (
            <li key={company.name}>
              <img src={company.logo} alt={company.name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;

import { assets } from "../constants";
import Button from "./Button";
import CompanyLogos from "./CompanyLogos";
import Navbar from "./Navbar";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <section className="h-full my-6" id="Hero">
      <Navbar />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center my-16"
      >
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Navigating the digital landscape for success
          </h1>
          <p className="text-lg py-8">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Button
            text="Book a consultation"
            href="#Book"
            className="bg-black text-white"
          />
        </div>
        <img src={assets.illustration} alt="Digital marketing illustration" />
      </motion.div>
      <CompanyLogos />
    </section>
  );
};

export default Hero;

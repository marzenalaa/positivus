import { Navbar, Companies } from ".";
import { assets, company } from "../constants";
import Button from "./ui/Button";

import { motion } from "motion/react";
const Hero = () => {
  const { illustration } = assets;
  const { title, description } = company;
  return (
    <section className="h-full my-6" id="Hero">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center my-16"
      >
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-semibold">{title}</h1>
          <p className="text-lg py-8">{description}</p>
          <Button
            text="Book a consultation"
            href="#Contact"
            className="bg-black text-white w-full sm:w-60"
          />
        </div>
        <img
          src={illustration}
          alt="Digital marketing illustration"
          className="max-w-full h-auto"
        />
      </motion.div>
      <Companies />
    </section>
  );
};

export default Hero;

import ServicesList from "./ui/ServicesList";
import Title from "./ui/Title";
import Button from "./ui/Button";
import { motion } from "motion/react";
import { services } from "../constants";

const Services = () => {
  const {
    title,
    subTitle,
    ctaTitle,
    ctaSubTitle,
    ctaButtonText,
    image,
    servicesList,
  } = services;

  return (
    <section className="h-full my-20" id="Services">
      <Title mainTitle={title} subTitle={subTitle} />
      <div className="my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ServicesList {...service} />
            </motion.div>
          ))}
        </ul>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-100 rounded-2xl p-8 h-full md:h-80">
        <div>
          <h3 className="text-xl font-bold">{ctaTitle}</h3>
          <p className="my-4 max-w-md">{ctaSubTitle}</p>
          <Button
            text={ctaButtonText}
            href="#Contact"
            className="bg-blackDark text-white"
          />
        </div>
        <img
          src={image}
          alt="Call to Action"
          className="lg:pr-32 object-contain"
        />
      </div>
    </section>
  );
};

export default Services;

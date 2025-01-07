import { studies } from "../constants";
import Title from "./ui/Title";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "motion/react";

const Studies = () => {
  const { title, subTitle, studiesList } = studies;
  return (
    <section className="h-full my-20" id="Studies">
      <Title mainTitle={title} subTitle={subTitle} />
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16 bg-blackDark rounded-2xl text-white p-8 md:p-12 my-16"
      >
        {studiesList.map((study, index) => (
          <li
            key={study.id}
            className={`w-full md:w-1/3 ${
              index !== studiesList.length - 1
                ? "border-b md:border-b-transparent md:border-r border-white pb-8 md:pb-0 md:pr-8"
                : null
            }`}
          >
            <h3 className="text-lg font-semibold mt-4">{study.title}</h3>
            <p className="text-sm">{study.subTitle}</p>
            <a
              href="#"
              aria-label={`Learn more about ${study.title}`}
              className="flex items-center justify-start text-limeGreen mt-6"
            >
              Learn More
              <FiArrowUpRight className="size-6" />
            </a>
          </li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Studies;

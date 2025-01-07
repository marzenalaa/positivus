import { useState } from "react";
import { motion } from "motion/react";

interface ProcessCardProps {
  id: number;
  title: string;
  description: string;
}

const ProcessCard = ({ id, title, description }: ProcessCardProps) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setActiveCard(activeCard === id ? null : id);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: id * 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`border border-blackDark border-b-4 border-b-blackDark rounded-2xl p-6 my-4 ${
        activeCard === id ? "bg-limeGreen" : "bg-gray-100"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <h3 className="font-semibold text-2xl md:text-4xl">0{id}</h3>
          <h2 className="font-semibold md:text-xl">{title}</h2>
        </div>
        <button
          onClick={() => toggleCard(id)}
          className="rounded-full border border-blackDark cursor-pointer bg-gray-100"
          aria-label={`Toggle details for process ${id}`}
        >
          <p className="text-3xl font-semibold size-8 sm:size-10 flex justify-center items-center">
            {activeCard === id ? "-" : "+"}
          </p>
        </button>
      </div>
      {activeCard === id && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: activeCard === id ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="my-4 border-t border-blackDark pt-4"
        >
          {description}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProcessCard;

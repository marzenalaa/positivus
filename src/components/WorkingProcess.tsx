import { workingProcess } from "../constants";
import Title from "./ui/Title";
import ProcessCard from "./ui/ProcessCard";

const WorkingProcess = () => {
  const { title, subTitle, processList } = workingProcess;

  return (
    <section className="h-full my-20" id="WorkingProcess">
      <Title mainTitle={title} subTitle={subTitle} />
      <div className="my-12">
        {processList.map((process) => (
          <ProcessCard key={process.id} {...process} />
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;

import { team } from "../constants";
import TeamMember from "./ui/TeamMember";
import Button from "./ui/Button";
import Title from "./ui/Title";

const Team = () => {
  const { title, subTitle, teamList } = team;

  return (
    <section className="h-full my-20" id="Team">
      <Title mainTitle={title} subTitle={subTitle} />
      <div className="my-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamList.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
        <div className="flex justify-center sm:justify-end">
          <Button
            text={"See all team"}
            href={"#Team"}
            className="bg-blackDark text-white mt-8 w-full sm:w-52"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;

import { assets } from "../../constants";

interface TeamMemberProps {
  name: string;
  position: string;
  description: string;
  image: string;
}

const TeamMember = ({
  name,
  position,
  description,
  image,
}: TeamMemberProps) => {
  const { linkedin } = assets;

  return (
    <div
      className={`border border-blackDark border-b-4 border-b-blackDark rounded-3xl p-6`}
    >
      <div className="relative flex items-end gap-4">
        <img src={image} alt={name} className="size-24 object-cover" />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="">{position}</p>
        </div>
        <a
          href={`https://www.linkedin.com/in/marzen-alaaeddine/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            alt="LinkedIn Icon"
            className="absolute size-8 right-0 top-0 cursor-pointer"
          />
        </a>
      </div>
      <p className="my-4 border-t border-blackDark pt-4">{description}</p>
    </div>
  );
};

export default TeamMember;

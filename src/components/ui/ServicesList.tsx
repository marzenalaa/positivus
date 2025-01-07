import { BsArrowUpRightCircleFill } from "react-icons/bs";

interface ServiceProps {
  name: string;
  image: string;
  className: string;
  titleStyle: string;
  linkStyle?: string;
}

const ServicesList = ({
  name,
  image,
  className,
  titleStyle,
  linkStyle,
}: ServiceProps) => {
  return (
    <li
      className={`flex justify-between gap-8 border border-blackDark rounded-3xl p-8 overflow-hidden h-60 border-b-4 border-b-blackDark ${className}`}
    >
      <div className="flex flex-col justify-between">
        <h4 className={`text-xl font-semibold ${titleStyle}`}>{name}</h4>
        <a
          href="#"
          className={`font-medium flex items-center gap-2 ${linkStyle}`}
        >
          <BsArrowUpRightCircleFill className="text-xl" />
          Learn more
        </a>
      </div>
      <img
        src={image}
        alt={`${name} service illustration`}
        className="size-28 md:size-40 object-contain"
      />
    </li>
  );
};

export default ServicesList;

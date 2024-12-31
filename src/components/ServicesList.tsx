import { services } from "../constants";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const ServicesList = () => {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.servicesList.map((service) => (
          <li
            key={service.name}
            className={`flex justify-between gap-8 border border-deepNavy rounded-3xl p-8 overflow-hidden h-60 ${service.className}`}
          >
            <div className="flex flex-col justify-between">
              <h4 className={`text-xl font-semibold ${service.titleStyle}`}>
                {service.name}
              </h4>
              <a
                href="#"
                className={`font-medium flex items-center gap-2 ${service.linkStyle}`}
              >
                <BsArrowUpRightCircleFill className="text-xl" />
                Learn more
              </a>
            </div>
            <img src={service.image} alt={service.image} className="w-40" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesList;

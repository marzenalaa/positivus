import { companies } from "../../constants";
const Companies = () => {
  return (
    <ul className="flex flex-wrap items-center justify-between gap-4">
      {companies.map((company) => (
        <li key={company.name} className="w-20 sm:w-24 md:w-32">
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className="w-full h-auto object-contain"
          />
        </li>
      ))}
    </ul>
  );
};

export default Companies;

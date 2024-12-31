import { companies } from "../constants";
const CompanyLogos = () => {
  return (
    <ul className="flex flex-wrap items-center justify-between gap-4">
      {companies.map((company) => (
        <li key={company.name}>
          <img src={company.logo} alt={company.name} />
        </li>
      ))}
    </ul>
  );
};

export default CompanyLogos;

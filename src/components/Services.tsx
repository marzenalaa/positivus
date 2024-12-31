import ServicesList from "./ServicesList";
import Title from "./Title";
import { services } from "../constants";
import Button from "./Button";

const Services = () => {
  return (
    <section className="h-full my-20" id="Services">
      <Title mainTitle={services.title} subTitle={services.subTitle} />
      <div className="my-20">
        <ServicesList />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-100 rounded-2xl p-8 h-full md:h-80">
        <div className="">
          <h3 className="text-xl font-bold">{services.ctaTitle}</h3>
          <p className="my-4 max-w-md">{services.ctaSubTitle}</p>
          <Button
            text={services.ctaButtonText}
            href="#"
            className="bg-blackDark text-white"
          />
        </div>
        <img src={services.image} alt="" className="md:pr-10" />
      </div>
    </section>
  );
};

export default Services;

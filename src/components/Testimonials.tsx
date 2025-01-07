import { testimonials } from "../constants";
import TestimonialCard from "./ui/TestimonialCard";
import Title from "./ui/Title";

const Testimonials = () => {
  const { title, subTitle, testimonialsList } = testimonials;
  return (
    <section className="h-full my-20" id="Testimonials">
      <Title mainTitle={title} subTitle={subTitle} />
      <div className="my-12 bg-blackDark rounded-3xl p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsList.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

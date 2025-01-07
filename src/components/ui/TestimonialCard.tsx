interface TestimonialCardProps {
  name: string;
  position: string;
  description: string;
  image: string;
}

const TestimonialCard = ({
  name,
  position,
  description,
  image,
}: TestimonialCardProps) => {
  return (
    <div
      className={`text-white border border-limeGreen border-b-4 border-b-liborder-limeGreen rounded-3xl p-6`}
    >
      <div className="relative flex items-end gap-4">
        <img src={image} alt={name} className="size-20" />
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="">{position}</p>
        </div>
      </div>
      <p className="my-4 border-t border-limeGreen pt-4">{description}</p>
    </div>
  );
};

export default TestimonialCard;

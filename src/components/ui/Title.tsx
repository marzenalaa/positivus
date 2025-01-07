interface titleProps {
  mainTitle: string;
  subTitle: string;
}
const Title = ({ mainTitle, subTitle }: titleProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-start items-center gap-8">
      <h3 className="bg-limeGreen px-2 rounded-md text-2xl font-semibold">
        {mainTitle}
      </h3>
      <p className="max-w-lg text-center sm:text-left">{subTitle}</p>
    </div>
  );
};

export default Title;

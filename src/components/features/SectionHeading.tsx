export type SectionHeadingProps = {
  heading: string;
  subHeading: string;
};

const SectionHeading = ({ heading, subHeading }: SectionHeadingProps) => {
  return (
    <div className="gap-4op mx-auto mb-16 flex w-[50%] flex-col items-center">
      <h2 className="section-heading">{heading}</h2>
      <p className="text-center text-slate-600">{subHeading}</p>
    </div>
  );
};

export default SectionHeading;

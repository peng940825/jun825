import Image from "next/image";

interface WorkExperienceItemProps {
  logo: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

const WorkExperienceItem = ({
  logo,
  company,
  period,
  description,
  highlights,
}: WorkExperienceItemProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-8">
      <div className="relative size-14 shrink-0 overflow-hidden rounded-sm bg-white">
        <Image src={logo} sizes="56px" fill alt={company} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <h3 className="text-xl font-medium">{company}</h3>
        <p className="text-muted-foreground">{period}</p>
        <p>{description}</p>
        <ul className="list-disc pl-4">
          {highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperienceItem;

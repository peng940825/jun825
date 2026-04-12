interface SkillGroupProps {
  title: string;
  items: string[];
}

const SkillGroup = ({ title, items }: SkillGroupProps) => {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-medium">{title}</h3>
      <div className="bg-border h-px w-full" />
      <ul className="list-disc pl-6">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillGroup;

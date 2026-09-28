import Button from "@/components/atoms/Button";

type Props = {
  options: string[];
  active: string;
  onChange: (option: string) => void;
};

const FilterTabs = ({ options, active, onChange }: Props) => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-2">
      {options.map((option) => (
        <Button
          key={option}
          text={option}
          small
          variant={option === active ? "primary" : "outline"}
          onClick={() => onChange(option)}
        />
      ))}
    </div>
  );
};

export default FilterTabs;

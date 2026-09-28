import ProgressBar from "@/components/atoms/ProgressBar";
import SidebarTitle from "@/components/atoms/SidebarTitle";
import { Skill } from "@/utils/types";

type Props = {
  title: string;
  icon?: string;
  items: Skill[];
};

const ProgressList = ({ title, icon, items }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <SidebarTitle title={title} icon={icon} />
      {items.map((item) => (
        <ProgressBar key={item.name} name={item.name} value={item.value} icon={item.icon} />
      ))}
    </div>
  );
};

export default ProgressList;

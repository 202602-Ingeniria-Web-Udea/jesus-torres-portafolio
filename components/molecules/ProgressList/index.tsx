import ProgressBar from "@/components/atoms/ProgressBar";
import SidebarTitle from "@/components/atoms/SidebarTitle";
import { Skill } from "@/utils/types";

type Props = {
  title: string;
  items: Skill[];
};

const ProgressList = ({ title, items }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <SidebarTitle title={title} />
      {items.map((item) => (
        <ProgressBar key={item.name} name={item.name} value={item.value} />
      ))}
    </div>
  );
};

export default ProgressList;

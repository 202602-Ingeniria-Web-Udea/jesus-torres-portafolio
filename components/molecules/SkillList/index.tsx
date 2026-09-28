import { Icon } from "@iconify/react";
import SidebarTitle from "@/components/atoms/SidebarTitle";

type Props = {
  title: string;
  icon?: string;
  items: string[];
};

const SkillList = ({ title, icon, items }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <SidebarTitle title={title} icon={icon} />
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="flex flex-row items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
            <Icon icon="mdi:check" className="w-4 h-4 text-primary dark:text-primary-light" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;

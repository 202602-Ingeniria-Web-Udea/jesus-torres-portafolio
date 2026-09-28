import { Icon } from "@iconify/react";

type Props = {
  title: string;
  icon?: string;
};

const SidebarTitle = ({ title, icon }: Props) => {
  return (
    <h3 className="flex flex-row items-center gap-2 text-sm font-semibold uppercase tracking-wider text-negro dark:text-blanco">
      {icon && <Icon icon={icon} className="w-4 h-4 text-primary dark:text-primary-light" />}
      {title}
    </h3>
  );
};

export default SidebarTitle;

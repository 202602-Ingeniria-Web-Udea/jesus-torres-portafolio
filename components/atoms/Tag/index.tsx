import { Icon } from "@iconify/react";

type Props = {
  text: string;
  icon?: string;
  dark?: boolean;
};

const Tag = ({ text, icon, dark }: Props) => {
  return (
    <span
      className={`${dark ? "bg-negro text-blanco dark:bg-blanco dark:text-negro" : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"} inline-flex flex-row items-center gap-1.5 w-fit rounded-full px-3 py-1 text-xs font-medium`}
    >
      {icon && <Icon icon={icon} className="w-3.5 h-3.5" />}
      {text}
    </span>
  );
};

export default Tag;

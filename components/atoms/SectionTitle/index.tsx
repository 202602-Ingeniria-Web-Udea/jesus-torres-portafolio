import { Icon } from "@iconify/react";

type Props = {
  title: string;
  subtitle?: string;
  icon?: string;
};

const SectionTitle = ({ title, subtitle, icon }: Props) => {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {icon && (
        <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blanco text-primary shadow-sm dark:bg-panel-oscuro dark:text-primary-light">
          <Icon icon={icon} className="w-6 h-6" />
        </div>
      )}
      <h2 className="text-3xl font-bold text-negro dark:text-blanco">{title}</h2>
      <div className="h-1 w-12 rounded-full bg-primary dark:bg-primary-light" />
      {subtitle && (
        <p className="max-w-xl text-zinc-500 dark:text-zinc-400">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;

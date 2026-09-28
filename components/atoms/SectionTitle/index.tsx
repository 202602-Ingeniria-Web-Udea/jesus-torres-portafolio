type Props = {
  title: string;
  subtitle?: string;
};

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <h2 className="text-3xl font-bold text-negro dark:text-blanco">{title}</h2>
      <div className="h-1 w-12 rounded-full bg-primary dark:bg-primary-light" />
      {subtitle && (
        <p className="max-w-xl text-zinc-500 dark:text-zinc-400">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;

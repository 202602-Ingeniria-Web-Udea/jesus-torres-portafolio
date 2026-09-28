type Props = {
  name: string;
  value: number;
};

const ProgressBar = ({ name, value }: Props) => {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex flex-row justify-between text-sm">
        <span className="text-zinc-700 dark:text-zinc-300">{name}</span>
        <span className="text-zinc-500 dark:text-zinc-400">{value}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-800">
        {/* El ancho se pasa en línea porque depende del porcentaje de cada ítem */}
        <div
          className="h-full rounded-full bg-primary dark:bg-primary-light animate-crecer"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

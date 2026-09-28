type Props = {
  text: string;
  dark?: boolean;
};

const Tag = ({ text, dark }: Props) => {
  return (
    <span
      className={`${dark ? "bg-negro text-blanco dark:bg-blanco dark:text-negro" : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"} inline-block w-fit rounded-full px-3 py-1 text-xs font-medium`}
    >
      {text}
    </span>
  );
};

export default Tag;

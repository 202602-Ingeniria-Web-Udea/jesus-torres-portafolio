import { Icon } from "@iconify/react";

type Props = {
  icon: string;
  url: string;
  label: string;
};

const IconLink = ({ icon, url, label }: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="flex justify-center items-center w-10 h-10 rounded-full text-zinc-600 hover:bg-negro hover:text-blanco dark:text-zinc-300 dark:hover:bg-blanco dark:hover:text-negro transition duration-150 ease-in-out hover:scale-110"
    >
      <Icon icon={icon} className="w-5 h-5" />
    </a>
  );
};

export default IconLink;

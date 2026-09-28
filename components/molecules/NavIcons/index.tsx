import { Icon } from "@iconify/react";
import Link from "next/link";
import { navLinks } from "@/utils/data";

type Props = {
  onNavigate?: () => void;
  showText?: boolean;
};

const NavIcons = ({ onNavigate, showText }: Props) => {
  return (
    <nav className={`flex ${showText ? "flex-row flex-wrap justify-center" : "flex-col"} gap-2`}>
      {navLinks.map((navLink) => (
        <Link
          key={navLink.title}
          href={navLink.link}
          title={navLink.title}
          onClick={onNavigate}
          className="flex flex-row justify-center items-center gap-2 h-10 min-w-10 px-2 rounded-full text-sm text-zinc-500 hover:bg-zinc-100 hover:text-negro dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-blanco transition duration-150"
        >
          <Icon icon={navLink.icon} className="w-5 h-5" />
          {showText && navLink.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavIcons;

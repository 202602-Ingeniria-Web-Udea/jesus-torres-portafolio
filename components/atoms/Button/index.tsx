import { Icon } from "@iconify/react";
import Link from "next/link";

type Props = {
  text: string;
  icon?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "outline";
  small?: boolean;
};

const Button = ({ text, icon, onClick, href, variant = "primary", small }: Props) => {
  const styles = `${variant === "primary" ? "bg-negro text-blanco hover:bg-primary dark:bg-blanco dark:text-negro dark:hover:bg-primary-light" : "border border-zinc-300 text-negro hover:border-negro dark:border-zinc-600 dark:text-blanco dark:hover:border-blanco"} ${small ? "px-4 py-2 text-sm" : "px-6 py-3"} inline-flex flex-row justify-center items-center gap-2 rounded-xl font-semibold cursor-pointer transition duration-150 ease-in-out hover:-translate-y-0.5`;

  // Si recibe href se comporta como enlace, si no como botón
  if (href) {
    return (
      <Link href={href} className={styles}>
        {text}
        {icon && <Icon icon={icon} className="w-5 h-5" />}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={styles}>
      {text}
      {icon && <Icon icon={icon} className="w-5 h-5" />}
    </button>
  );
};

export default Button;

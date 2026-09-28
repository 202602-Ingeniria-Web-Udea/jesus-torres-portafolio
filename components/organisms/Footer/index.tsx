import { Icon } from "@iconify/react";
import Link from "next/link";
import SocialList from "@/components/molecules/SocialList";
import { personalInfo } from "@/utils/data";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center gap-4 rounded-3xl bg-blanco px-8 py-6 shadow-sm dark:bg-panel-oscuro">
      <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
        <span className="font-semibold text-negro dark:text-blanco">{personalInfo.name}</span>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          © 2026 · Hecho con Next.js, Tailwind CSS y TypeScript
        </span>
      </div>
      <SocialList />
      <Link
        href="#perfil"
        className="inline-flex flex-row items-center gap-1 text-sm font-medium text-zinc-500 hover:text-negro dark:text-zinc-400 dark:hover:text-blanco"
      >
        Volver arriba
        <Icon icon="mdi:arrow-up" className="w-4 h-4" />
      </Link>
    </footer>
  );
};

export default Footer;

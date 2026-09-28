"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";
import Avatar from "@/components/atoms/Avatar";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import NavIcons from "@/components/molecules/NavIcons";
import SocialList from "@/components/molecules/SocialList";
import LeftMenu from "@/components/organisms/LeftMenu";
import { personalInfo } from "@/utils/data";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40 bg-blanco/90 backdrop-blur shadow-sm dark:bg-panel-oscuro/90">
      <div className="flex flex-row justify-between items-center px-4 py-3">
        <div className="flex flex-row items-center gap-3">
          <Avatar src={personalInfo.photo} alt={personalInfo.name} size={40} />
          <span className="font-semibold text-negro dark:text-blanco">{personalInfo.shortName}</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
            className="flex justify-center items-center w-10 h-10 rounded-full text-negro dark:text-blanco cursor-pointer focus:outline-none"
          >
            <Icon icon={open ? "mdi:close" : "mdi:menu"} className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* El panel solo se renderiza cuando el menú está abierto */}
      {open && (
        <div className="max-h-[80vh] overflow-y-auto scroll-fino border-t border-zinc-200 px-6 py-6 dark:border-zinc-800 animate-aparecer">
          <div className="flex flex-col gap-6">
            <NavIcons showText onNavigate={() => setOpen(false)} />
            <SocialList />
            <LeftMenu />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;

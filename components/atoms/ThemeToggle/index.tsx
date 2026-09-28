"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  // Agrega o quita la clase "dark" en <html>, que es la que usa Tailwind para el modo oscuro
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setDark(isDark);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      title={dark ? "Modo claro" : "Modo oscuro"}
      className="flex justify-center items-center w-10 h-10 rounded-full bg-zinc-100 text-negro hover:bg-negro hover:text-blanco dark:bg-zinc-800 dark:text-blanco dark:hover:bg-blanco dark:hover:text-negro cursor-pointer transition duration-150 ease-in-out focus:outline-none"
    >
      <Icon icon={dark ? "mdi:white-balance-sunny" : "mdi:weather-night"} className="w-5 h-5" />
    </button>
  );
};

export default ThemeToggle;

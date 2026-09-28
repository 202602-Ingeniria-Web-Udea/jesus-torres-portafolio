"use client";

import { Icon } from "@iconify/react";

const ThemeToggle = () => {
  // Agrega o quita la clase "dark" en <html> y guarda la preferencia para la próxima visita
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("tema", isDark ? "oscuro" : "claro");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      title="Cambiar tema"
      className="flex justify-center items-center w-10 h-10 rounded-full bg-zinc-100 text-negro hover:bg-negro hover:text-blanco dark:bg-zinc-800 dark:text-blanco dark:hover:bg-blanco dark:hover:text-negro cursor-pointer transition duration-150 ease-in-out focus:outline-none"
    >
      <Icon icon="mdi:weather-night" className="w-5 h-5 dark:hidden" />
      <Icon icon="mdi:white-balance-sunny" className="w-5 h-5 hidden dark:block" />
    </button>
  );
};

export default ThemeToggle;

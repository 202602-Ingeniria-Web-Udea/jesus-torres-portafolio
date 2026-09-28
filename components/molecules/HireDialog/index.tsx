"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";
import Avatar from "@/components/atoms/Avatar";
import Button from "@/components/atoms/Button";
import { personalInfo, socialLinks } from "@/utils/data";

const options = [
  {
    icon: "mdi:email-outline",
    title: "Correo",
    text: "Escríbeme y te respondo lo antes posible.",
    url: `mailto:${personalInfo.email}?subject=Contacto desde tu portafolio`,
  },
  {
    icon: "mdi:whatsapp",
    title: "WhatsApp",
    text: "Para una conversación más rápida.",
    url: personalInfo.whatsapp,
  },
  {
    icon: "mdi:linkedin",
    title: "LinkedIn",
    text: "Conoce mi perfil profesional.",
    url: socialLinks[1].url,
  },
];

const HireDialog = () => {
  const [copied, setCopied] = useState(false);

  // Copia el correo al portapapeles y muestra la confirmación por dos segundos
  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
        <Avatar src={personalInfo.photo} alt={personalInfo.name} size={88} />
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold text-negro dark:text-blanco">¿Trabajamos juntos?</h3>
          <span className="inline-flex flex-row items-center justify-center sm:justify-start gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Disponible para prácticas, proyectos y nuevas oportunidades
          </span>
        </div>
      </div>

      <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
        Si tienes un proyecto de datos o de desarrollo web, o quieres hablar sobre una vacante, elige el medio que prefieras.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {options.map((option) => (
          <a
            key={option.title}
            href={option.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 rounded-2xl border border-zinc-200 p-4 hover:border-negro hover:bg-negro dark:border-zinc-700 dark:hover:border-blanco dark:hover:bg-blanco transition duration-150 ease-in-out"
          >
            <Icon icon={option.icon} className="w-7 h-7 text-primary group-hover:text-blanco dark:text-primary-light dark:group-hover:text-negro" />
            <span className="font-semibold text-negro group-hover:text-blanco dark:text-blanco dark:group-hover:text-negro">
              {option.title}
            </span>
            <span className="text-xs text-zinc-500 group-hover:text-zinc-300 dark:group-hover:text-zinc-600">
              {option.text}
            </span>
          </a>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl bg-zinc-100 p-4 dark:bg-zinc-800">
        <span className="text-sm font-medium text-negro dark:text-blanco break-all">{personalInfo.email}</span>
        <Button
          text={copied ? "¡Copiado!" : "Copiar correo"}
          icon={copied ? "mdi:check" : "mdi:content-copy"}
          small
          onClick={copyEmail}
        />
      </div>
    </div>
  );
};

export default HireDialog;

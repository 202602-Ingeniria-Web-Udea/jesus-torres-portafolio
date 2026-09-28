"use client";

import { useState } from "react";
import Avatar from "@/components/atoms/Avatar";
import Button from "@/components/atoms/Button";
import Tag from "@/components/atoms/Tag";
import HireDialog from "@/components/molecules/HireDialog";
import Modal from "@/components/molecules/Modal";
import { personalInfo } from "@/utils/data";

const Profile = () => {
  const [openHire, setOpenHire] = useState(false);

  return (
    <section id="perfil" className="scroll-mt-24 rounded-3xl bg-blanco p-8 md:p-12 shadow-sm dark:bg-panel-oscuro animate-aparecer">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-5 max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Hola, soy
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-negro dark:text-blanco">
            {personalInfo.name}
          </h2>
          <div className="flex flex-row flex-wrap gap-2">
            {personalInfo.titles.map((title) => (
              <Tag key={title} text={title} dark />
            ))}
          </div>
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">{personalInfo.profile}</p>
          <div className="flex flex-row flex-wrap gap-3">
            <Button text="Contrátame" icon="mdi:arrow-right" onClick={() => setOpenHire(true)} />
            <Button text="Ver proyectos" variant="outline" href="#portafolio" />
          </div>
        </div>
        <div className="shrink-0">
          <Avatar src={personalInfo.photo} alt={personalInfo.name} size={260} square />
        </div>
      </div>

      <Modal open={openHire} onClose={() => setOpenHire(false)}>
        <HireDialog />
      </Modal>
    </section>
  );
};

export default Profile;

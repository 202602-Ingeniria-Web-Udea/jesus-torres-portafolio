"use client";

import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import SectionTitle from "@/components/atoms/SectionTitle";
import FilterTabs from "@/components/molecules/FilterTabs";
import Modal from "@/components/molecules/Modal";
import ProjectCard from "@/components/molecules/ProjectCard";
import ProjectDetail from "@/components/molecules/ProjectDetail";
import { projectCategories, projects } from "@/utils/data";
import { Project } from "@/utils/types";

const Portfolio = () => {
  const [filter, setFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    filter === "Todos" ? projects : projects.filter((project) => project.category === filter);

  // Desplaza el carrusel una tarjeta hacia la izquierda o la derecha
  const scroll = (direction: number) => {
    scrollRef.current?.scrollBy({ left: direction * 340, behavior: "smooth" });
  };

  return (
    <section id="portafolio" className="scroll-mt-24 flex flex-col gap-8">
      <SectionTitle
        title="Portafolio"
        subtitle="Algunos proyectos académicos y personales en los que he trabajado, desde aplicaciones web hasta modelos de datos y videojuegos."
      />

      <FilterTabs options={["Todos", ...projectCategories]} active={filter} onChange={setFilter} />

      <div className="relative">
        <div ref={scrollRef} className="scroll-fino flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
          ))}
        </div>

        <div className="hidden md:flex flex-row justify-end gap-2 mt-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Anterior"
            className="flex justify-center items-center w-10 h-10 rounded-full bg-blanco shadow-sm hover:bg-negro hover:text-blanco dark:bg-panel-oscuro dark:text-blanco dark:hover:bg-blanco dark:hover:text-negro cursor-pointer transition duration-150"
          >
            <Icon icon="mdi:chevron-left" className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Siguiente"
            className="flex justify-center items-center w-10 h-10 rounded-full bg-blanco shadow-sm hover:bg-negro hover:text-blanco dark:bg-panel-oscuro dark:text-blanco dark:hover:bg-blanco dark:hover:text-negro cursor-pointer transition duration-150"
          >
            <Icon icon="mdi:chevron-right" className="w-6 h-6" />
          </button>
        </div>
      </div>

      <Modal open={selectedProject !== null} onClose={() => setSelectedProject(null)}>
        {selectedProject && <ProjectDetail project={selectedProject} />}
      </Modal>
    </section>
  );
};

export default Portfolio;

import Image from "next/image";
import Button from "@/components/atoms/Button";
import Tag from "@/components/atoms/Tag";
import { Project } from "@/utils/types";

type Props = {
  project: Project;
  onOpen: (project: Project) => void;
};

const ProjectCard = ({ project, onOpen }: Props) => {
  return (
    <article className="flex flex-col w-72 sm:w-80 shrink-0 snap-start overflow-hidden rounded-2xl bg-blanco shadow-sm dark:bg-panel-oscuro transition duration-150 ease-in-out hover:-translate-y-1 hover:shadow-xl animate-aparecer">
      <div className="relative aspect-[2/1] w-full">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>
      <div className="flex flex-col flex-1 gap-3 p-6">
        <Tag text={project.category} />
        <h3 className="text-lg font-semibold text-negro dark:text-blanco">{project.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {project.summary}
        </p>
        <div>
          <Button
            text="Saber más"
            icon="mdi:arrow-right"
            variant="outline"
            small
            onClick={() => onOpen(project)}
          />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

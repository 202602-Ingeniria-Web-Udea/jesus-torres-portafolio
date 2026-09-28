import { Icon } from "@iconify/react";
import Image from "next/image";
import Tag from "@/components/atoms/Tag";
import { Project } from "@/utils/types";

type Props = {
  project: Project;
};

const ProjectDetail = ({ project }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>

      <div className="flex flex-col gap-2">
        <Tag text={project.category} dark />
        <h3 className="text-2xl font-bold text-negro dark:text-blanco">{project.title}</h3>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-300">{project.details}</p>
      </div>

      <ul className="flex flex-col gap-2">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex flex-row items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
            <Icon icon="mdi:check-circle-outline" className="w-5 h-5 shrink-0 text-primary dark:text-primary-light" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="flex flex-row flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <Tag key={technology} text={technology} />
        ))}
      </div>

      {project.links.length > 0 ? (
        <div className="flex flex-row flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-row items-center gap-2 rounded-xl bg-negro px-4 py-2 text-sm font-semibold text-blanco hover:bg-primary dark:bg-blanco dark:text-negro dark:hover:bg-primary-light transition duration-150"
            >
              <Icon icon={link.url.includes("github") ? "mdi:github" : "mdi:open-in-new"} className="w-5 h-5" />
              {link.label}
            </a>
          ))}
        </div>
      ) : (
        <p className="text-sm text-zinc-500">El código de este proyecto es privado.</p>
      )}
    </div>
  );
};

export default ProjectDetail;

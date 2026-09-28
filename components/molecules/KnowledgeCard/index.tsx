import { Icon } from "@iconify/react";
import { Knowledge } from "@/utils/types";

const KnowledgeCard = ({ icon, title, description }: Knowledge) => {
  return (
    <article className="group flex flex-col items-center gap-4 rounded-2xl bg-blanco p-8 text-center shadow-sm dark:bg-panel-oscuro transition duration-150 ease-in-out hover:-translate-y-1 hover:shadow-xl">
      <div className="flex justify-center items-center w-16 h-16 rounded-2xl bg-zinc-100 text-primary dark:bg-zinc-800 dark:text-primary-light transition duration-150 group-hover:bg-negro group-hover:text-blanco dark:group-hover:bg-blanco dark:group-hover:text-negro">
        <Icon icon={icon} className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold text-negro dark:text-blanco">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{description}</p>
    </article>
  );
};

export default KnowledgeCard;

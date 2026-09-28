import Tag from "@/components/atoms/Tag";
import { Education } from "@/utils/types";

const EducationCard = ({ institution, title, dates, description, type }: Education) => {
  return (
    <article className="flex flex-col md:flex-row gap-4 md:gap-8 rounded-2xl bg-blanco p-6 md:p-8 shadow-sm dark:bg-panel-oscuro transition duration-150 ease-in-out hover:shadow-xl">
      <div className="flex flex-col gap-2 md:w-56 shrink-0">
        <h3 className="font-semibold text-negro dark:text-blanco">{institution}</h3>
        <div className="flex flex-row flex-wrap gap-2">
          <Tag text={dates} dark />
          <Tag text={type} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-primary dark:text-primary-light">{title}</h4>
        <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{description}</p>
      </div>
    </article>
  );
};

export default EducationCard;

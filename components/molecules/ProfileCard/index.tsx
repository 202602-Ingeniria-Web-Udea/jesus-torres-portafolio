import Avatar from "@/components/atoms/Avatar";
import { personalInfo } from "@/utils/data";

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative">
        <Avatar src={personalInfo.photo} alt={personalInfo.name} size={120} />
        <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-blanco dark:border-panel-oscuro" />
      </div>
      <h1 className="text-lg font-bold text-negro dark:text-blanco">
        {personalInfo.name}
      </h1>
      <div className="flex flex-col gap-0.5">
        {personalInfo.titles.map((title) => (
          <p key={title} className="text-sm text-zinc-500 dark:text-zinc-400">
            {title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;

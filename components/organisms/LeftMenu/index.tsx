import ContactList from "@/components/molecules/ContactList";
import ProfileCard from "@/components/molecules/ProfileCard";
import ProgressList from "@/components/molecules/ProgressList";
import SkillList from "@/components/molecules/SkillList";
import { extraSkills, languages, programmingLanguages } from "@/utils/data";

const LeftMenu = () => {
  return (
    <div className="flex flex-col gap-8">
      <ProfileCard />
      <hr className="border-zinc-200 dark:border-zinc-800" />
      <ContactList />
      <hr className="border-zinc-200 dark:border-zinc-800" />
      <ProgressList title="Idiomas" icon="mdi:earth" items={languages} />
      <hr className="border-zinc-200 dark:border-zinc-800" />
      <ProgressList title="Lenguajes de programación" icon="mdi:code-tags" items={programmingLanguages} />
      <hr className="border-zinc-200 dark:border-zinc-800" />
      <SkillList title="Habilidades extra" icon="mdi:star-four-points-outline" items={extraSkills} />
    </div>
  );
};

export default LeftMenu;

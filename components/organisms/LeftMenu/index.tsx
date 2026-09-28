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
      <ProgressList title="Idiomas" items={languages} />
      <hr className="border-zinc-200 dark:border-zinc-800" />
      <ProgressList title="Lenguajes de programación" items={programmingLanguages} />
      <hr className="border-zinc-200 dark:border-zinc-800" />
      <SkillList title="Habilidades extra" items={extraSkills} />
    </div>
  );
};

export default LeftMenu;

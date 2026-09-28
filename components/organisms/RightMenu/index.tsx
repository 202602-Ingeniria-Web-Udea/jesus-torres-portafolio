import ThemeToggle from "@/components/atoms/ThemeToggle";
import NavIcons from "@/components/molecules/NavIcons";
import SocialList from "@/components/molecules/SocialList";

const RightMenu = () => {
  return (
    <div className="flex flex-col justify-between items-center h-full py-8">
      <ThemeToggle />
      <NavIcons />
      <SocialList vertical />
    </div>
  );
};

export default RightMenu;

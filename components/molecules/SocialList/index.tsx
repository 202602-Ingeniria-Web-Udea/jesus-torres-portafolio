import IconLink from "@/components/atoms/IconLink";
import { socialLinks } from "@/utils/data";

type Props = {
  vertical?: boolean;
};

const SocialList = ({ vertical }: Props) => {
  return (
    <div className={`flex ${vertical ? "flex-col" : "flex-row"} justify-center items-center gap-2`}>
      {socialLinks.map((social) => (
        <IconLink key={social.name} icon={social.icon} url={social.url} label={social.name} />
      ))}
    </div>
  );
};

export default SocialList;

import { Icon } from "@iconify/react";
import SidebarTitle from "@/components/atoms/SidebarTitle";
import { contactInfo } from "@/utils/data";

const ContactList = () => {
  return (
    <div className="flex flex-col gap-3">
      <SidebarTitle title="Contacto" icon="mdi:card-account-details-outline" />
      {contactInfo.map((item) => (
        <div key={item.label} className="flex flex-row items-start gap-3 text-sm">
          <Icon icon={item.icon} className="w-5 h-5 shrink-0 text-primary dark:text-primary-light" />
          <div className="flex flex-col min-w-0">
            <span className="text-xs text-zinc-500 dark:text-zinc-400">{item.label}</span>
            {item.href ? (
              <a
                href={item.href}
                className="break-all text-zinc-800 hover:text-primary dark:text-zinc-200 dark:hover:text-primary-light"
              >
                {item.value}
              </a>
            ) : (
              <span className="text-zinc-800 dark:text-zinc-200">{item.value}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;

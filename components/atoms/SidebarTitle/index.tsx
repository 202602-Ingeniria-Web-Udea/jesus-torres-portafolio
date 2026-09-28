type Props = {
  title: string;
};

const SidebarTitle = ({ title }: Props) => {
  return (
    <h3 className="text-sm font-semibold uppercase tracking-wider text-negro dark:text-blanco">
      {title}
    </h3>
  );
};

export default SidebarTitle;

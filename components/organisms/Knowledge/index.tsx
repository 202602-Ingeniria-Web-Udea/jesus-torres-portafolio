import SectionTitle from "@/components/atoms/SectionTitle";
import KnowledgeCard from "@/components/molecules/KnowledgeCard";
import { knowledge } from "@/utils/data";

const Knowledge = () => {
  return (
    <section id="conocimientos" className="scroll-mt-24 flex flex-col gap-10">
      <SectionTitle
        title="Conocimientos"
        subtitle="Las áreas en las que he trabajado tanto en la universidad como en mi experiencia laboral."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {knowledge.map((item) => (
          <KnowledgeCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
};

export default Knowledge;

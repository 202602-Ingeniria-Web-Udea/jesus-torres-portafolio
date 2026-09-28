import SectionTitle from "@/components/atoms/SectionTitle";
import EducationCard from "@/components/molecules/EducationCard";
import { education } from "@/utils/data";

const Education = () => {
  return (
    <section id="educacion" className="scroll-mt-24 flex flex-col gap-10">
      <SectionTitle
        title="Educación"
        icon="mdi:school-outline"
        subtitle="Mi formación académica, desde la técnica laboral hasta la ingeniería, junto con los programas complementarios."
      />
      <div className="flex flex-col gap-6">
        {education.map((item) => (
          <EducationCard
            key={`${item.institution}-${item.title}`}
            institution={item.institution}
            title={item.title}
            dates={item.dates}
            description={item.description}
            type={item.type}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;

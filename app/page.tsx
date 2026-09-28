import Education from "@/components/organisms/Education";
import Footer from "@/components/organisms/Footer";
import Knowledge from "@/components/organisms/Knowledge";
import Portfolio from "@/components/organisms/Portfolio";
import Profile from "@/components/organisms/Profile";
import Reveal from "@/components/atoms/Reveal";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 max-w-6xl mx-auto">
      <Profile />
      <Reveal>
        <Knowledge />
      </Reveal>
      <Reveal>
        <Education />
      </Reveal>
      <Reveal>
        <Portfolio />
      </Reveal>
      <Footer />
    </div>
  );
}

import AboutHero from "@/components/about/AboutHero";
import OriginStory from "@/components/about/OriginStory";
import MissionStatement from "@/components/about/MissionStatement";
import BridgesoftWorks from "@/components/about/BridgesoftWorks";
import LeadershipPreview from "@/components/about/LeadershipPreview";
import AboutCTA from "@/components/about/AboutCTA";

export default function About() {
  return (
    <main>
      <AboutHero />
      <OriginStory />
      <MissionStatement />
      <BridgesoftWorks />
      <LeadershipPreview />
      <AboutCTA />
    </main>
  );
}

import NewsroomHero from "@/components/newsroom/NewsroomHero";
import FeaturedStory from "@/components/newsroom/FeaturedStory";
import StoriesGrid from "@/components/newsroom/StoriesGrid";
import PressMedia from "@/components/newsroom/PressMedia";
import NewsletterStrip from "@/components/newsroom/NewsletterStrip";

export default function Newsroom() {
  return (
    <main>
      <NewsroomHero />
      <FeaturedStory />
      <StoriesGrid />
      <PressMedia />
      <NewsletterStrip />
    </main>
  );
}

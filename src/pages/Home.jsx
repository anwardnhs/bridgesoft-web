import Hero from "@/components/sections/Hero";
import ProductsGrid from "@/components/sections/ProductsGrid";
import ScaleBanner from "@/components/sections/ScaleBanner";
import ImpactScroll from "@/components/sections/ImpactScroll";
import Newsroom from "@/components/sections/Newsroom";
import Careers from "@/components/sections/Careers";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductsGrid />
      <ScaleBanner />
      <ImpactScroll />
      <Newsroom />
      <Careers />
    </main>
  );
}

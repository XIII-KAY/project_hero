import Hero from "@/components/landing/hero";
import Capabilities from "@/components/landing/capabilities";
import DetailSection from "@/components/landing/detail";
import Process from "@/components/landing/process";
import Why from "@/components/landing/why";
import Cta from "@/components/landing/cta";
import FooterStatement from "@/components/landing/footer-statement";
import SiteFooter from "@/components/landing/site-footer";
import { detailBlocks } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="app">
      <Hero />
      <Capabilities />
      {detailBlocks.map((block) => (
        <DetailSection key={block.id} block={block} />
      ))}
      <Process />
      <Why />
      <Cta />
      <FooterStatement />
      <SiteFooter />
    </div>
  );
}
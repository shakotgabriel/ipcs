import { AreasOfWork } from "@/components/home/areas-of-work";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Hero } from "@/components/home/hero";
import { ImpactIntro } from "@/components/home/impact-intro";
import { ImpactStats } from "@/components/home/impact-stats";
import { LatestNews } from "@/components/home/latest-news";
import { NewsletterCta } from "@/components/home/newsletter-cta";
import { Partners } from "@/components/home/partners";
import { VisionMission } from "@/components/home/vision-mission";

export default function Home() {
  return (
    <div className="pb-16">
      <Hero />
      <main className="site-shell space-y-10  pb-8 pt-6 sm:space-y-20 sm:pt-10">
        <ImpactIntro />
        <ImpactStats />
        <VisionMission />
        <AreasOfWork />
        <FeaturedProjects />
        <LatestNews />
        <Partners />
        <NewsletterCta />
      </main>
    </div>
  );
}

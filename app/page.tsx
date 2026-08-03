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
    <div className="bg-transparent pb-8">
      <Hero />
      <main className="w-full space-y-6 pb-4 pt-3 sm:space-y-10 sm:pt-6">
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

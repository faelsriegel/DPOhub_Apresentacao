import { FirstSection } from "@/pages/home/first-section";
import { Hero } from "@/pages/home/hero";
import { SecondSection } from "@/pages/home/second-section";
import { ThirdSection } from "@/pages/home/third-section";

export default function Home() {
  return (
    <main className="w-full items-center justify-items-center min-h-screen text-slice-text">
      <Hero />
      <FirstSection />
      <div className="w-full pt-20">
        <SecondSection />
        <ThirdSection />
      </div>
    </main>
  );
}

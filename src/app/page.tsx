import FirstSection from "@/components/pages/first-section";
import Hero from "@/components/pages/hero";
import SecondSection from "@/components/pages/second-section";
import ThirdSection from "@/components/pages/third-section";


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

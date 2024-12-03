import FirstSection from "@/components/sections/first-section";
import Hero from "@/components/sections/hero";
import SecondSection from "@/components/sections/second-section";
import ThirdSection from "@/components/sections/third-section";


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

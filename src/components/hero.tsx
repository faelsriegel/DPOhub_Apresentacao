import { Button } from "@/components/ui/button";
import { Typography } from "@/typography";
import type React from "react";

type HeroProps = {
  children: React.ReactNode;
};

export const Hero: React.FC<HeroProps> = ({ children }) => {
  return (
    <div className="w-full border-b border-slice-line h-full ">
      <section className="container mx-auto py-20 min-h-screen flex flex-col items-center justify-center">
        {children}
      </section>
    </div>
  );
};

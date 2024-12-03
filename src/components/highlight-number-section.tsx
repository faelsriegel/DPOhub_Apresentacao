import type React from "react";

import { Button } from "@/components/ui/button";
import { SliceIcon } from "@/components/ui/slice-icon";
import { Typography } from "@/typography";

type ReactNode = {
  children: React.ReactNode;
};

type HightlightNumberSection = {
  callToAction: string;
} & ReactNode;

export const HightlightNumberSectionRoot: React.FC<HightlightNumberSection> = ({
  children,
  callToAction,
}) => {
  return (
    <section className="mt-36 overflow-hidden lg:pb-[130px]">
      <div className="relative">
        <div className="absolute top-[40px] left-[-120px] md:top-[20px] md:left-[-120px] lg:left-[-10px] xl:left-[-240px] z-0 fill-slice-primary">
          <SliceIcon className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] xl:w-[500px] xl:h-[500px]" />
        </div>
        <div className="absolute right-[-120px] md:right-[-120px] lg:right-[-90px] xl:right-[-190px] z-0 fill-slice-primary">
          <SliceIcon className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] xl:w-[500px] xl:h-[500px]" />
        </div>

        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <Button className="flex-none mb-8" variant="outline">
              {callToAction}
            </Button>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
};

const Title: React.FC<ReactNode> = ({ children }) => (
  <Typography as="h2" variant="highlight" className="text-primary text-center">
    {children}
  </Typography>
);

const Description: React.FC<ReactNode> = ({ children }) => (
  <Typography as="p" variant="body" className="mt-14 text-center">
    {children}
  </Typography>
);

export const HightlightNumberSection = {
  Root: HightlightNumberSectionRoot,
  Title,
  Description,
};

import DescriptionItem from "@/components/description-item";
import { Button } from "@/components/ui/button";
import { Typography } from "@/typography";
import { Description } from "@radix-ui/react-dialog";
import { ArrowLeftRight, Check, ChevronRight, Crosshair } from "lucide-react";
import type React from "react";
import { twMerge } from "tailwind-merge";

export const FirstSection: React.FC = () => {
  const items = [
    {
      icon: <Check className="text-slice-muted" />,
      title: "Conciliate",
      subtitle: "with MoneyOS",
      description:
        "Manage complex money flows with ease. Integrate unlimited data sources in any file format and gain deep, transaction-level insights that elevate your analytical capabilities.",
    },
    {
      icon: <ArrowLeftRight className="text-slice-muted" />,
      title: "Orchestrate",
      subtitle: "with MoneyOS",
      description:
        "Automate intensive financial processes across multiple systems with unprecedented accuracy, safety, and compliance. Elevate your operations to a new standard of control and efficiency.",
    },
    {
      icon: <Crosshair className="text-slice-muted" />,
      title: "Build",
      subtitle: "with MoneyOS",
      description:
        "Create innovative financial products, connect diverse platforms, enhance legacy systems, and implement your business strategies without compromise.",
    },
  ];

  return (
    <div className="w-full border-b border-slice-line lg:py-20 py-14 lg:px-0 px-14">
      <section className="container mx-auto">
        <Typography as="h2" variant="sectionTitle" className="text-primary">
          A Seamless <br />
          Layer of Precision
        </Typography>
        <Typography as="p" variant="body" className="max-w-[500px] mt-12">
          MoneyOS integrates effortlessly with your entire software stack,
          third-party platforms, and data sources, empowering you with unmatched
          financial control.
        </Typography>

        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 flex flex-col">
          {items.map((item, index) => (
            <DescriptionItem
              key={item.title}
              index={index}
              {...item}
              action="oi"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FirstSection;

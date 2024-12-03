import { DatabaseZap, FileStack } from "lucide-react";
import type React from "react";

import { Button } from "@/components/ui/button";
import { SliceIcon } from "@/components/ui/slice-icon";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { WebsiteTable } from "@/components/website-table";
import { Typography } from "@/typography";

export const SecondSection: React.FC = () => {
  return (
    <section className="container mx-auto">
      <div className="flex items-center justify-center">
        <Button className="flex-none mb-8" variant="outlineMuted">
          A SOLID CORE
        </Button>
      </div>

      <Typography
        as="h2"
        variant="highlight"
        className="text-primary text-center"
      >
        <span className="text-slice-muted">
          Double-Entry <br />
          Accounting <br />
        </span>
        <TextGenerateEffect
          className="text-[40px] leading-[40px] sm:text-[60px] sm:leading-[60px] md:text-[80px] md:leading-[80px] lg:text-[120px] lg:leading-[120px] xl:text-[150px] xl:leading-[150px] text-primary"
          words="Reinvented."
        />
      </Typography>

      <Typography
        as="p"
        variant="body"
        className="mt-14 text-center max-w-[800px] mx-auto"
      >
        Record every financial event with precision through private ledgers
        tailored to your business needs. Experience a level of security and
        reliability that surpasses traditional accounting.
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-flow-col gap-4 mt-20 px-14 lg:px-0">
        <div className="item flex flex-col gap-4 items-center justify-center text-center">
          <DatabaseZap className="text-slice-muted" />
          <Typography
            as="h3"
            className="text-[25px] text-primary leading-[25px] "
          >
            Effortless <br />
            Data Integration
          </Typography>

          <Typography
            as="p"
            variant="body"
            className="mt-4 max-w-[450px] min-h-[100px]"
          >
            Import raw, unstructured data from unlimited sources in any format,
            seamlessly integrating it into your financial ecosystem.
          </Typography>
        </div>

        <div className="item flex flex-col gap-4 items-center justify-center text-center">
          <SliceIcon className="fill-slice-muted" />
          <Typography
            as="h3"
            className="text-[25px] text-primary leading-[25px] "
          >
            Automated <br />
            Ledger Entries
          </Typography>

          <Typography
            as="p"
            variant="body"
            className="mt-4 max-w-[450px] min-h-[100px]"
          >
            Transform all imported data into precise ledger entries, designed to
            control and reconcile every transaction with meticulous detail.
          </Typography>
        </div>

        <div className="item flex flex-col gap-4 items-center justify-center text-center lg:col-span-1 md:col-span-2">
          <FileStack className="text-slice-muted" />
          <Typography
            as="h3"
            className="text-[25px] text-primary leading-[25px] "
          >
            Real-Time Outputs <br />
            for Your Teams
          </Typography>

          <Typography
            as="p"
            variant="body"
            className="mt-4 max-w-[450px] min-h-[100px]"
          >
            Generate custom dashboards, reports, and files or API endpoints.
            MoneyOS enables unlimited, real-time outputs to meet your every
            need.
          </Typography>
        </div>
      </div>
      <WebsiteTable />
    </section>
  );
};

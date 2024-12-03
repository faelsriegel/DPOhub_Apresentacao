import type React from "react";

import { Button } from "@/components/ui/button";
import { SliceIcon } from "@/components/ui/slice-icon";
import { Typography } from "@/typography";
import {
  ChartNoAxesColumn,
  HardDriveDownload,
  HardDriveUpload,
  LandPlot,
  Layers3,
  Lock,
  Network,
  RadioTower,
  Router,
} from "lucide-react";

export const ThirdSection: React.FC = () => {
  return (
    <section className="relative">
      <div>
        <div className="absolute left-[-190px] z-0 fill-slice-muted/20">
          <SliceIcon className="w-[400px] h-[400px] md:w-[600px] md:h-[600px]" />
        </div>
        <div className="relative z-1 container mx-auto md:px-0 px-14">
          <div className="flex items-center justify-center mt-32">
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
              A New Era of <br />
            </span>
            Financial Precision
          </Typography>

          <div className="flex flex-col items-center justify-center text-center">
            <div className="max-w-[640px]">
              <Typography as="p" variant="body" className="mt-12 min-h-[100px]">
                Unlike distributed ledgers (DLT) that typically manage
                transactions between users, Private Ledgers (PLT) are designed
                to process financial data across platforms and teams within a
                company.
              </Typography>
              <Typography as="p" variant="body" className="mt-4 min-h-[100px]">
                Data is gathered from multiple sources and structured using
                double-entry accounting in a managerial ledger, empowering you
                to control your money and track every transaction's life cycle
                with precision and transparency.
              </Typography>
            </div>
          </div>

          {/*  */}

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-flow-row gap-14 mt-20">
            <div className="item flex flex-col gap-4 text-left">
              <LandPlot className="text-slice-muted" size={30} />
              <Typography
                as="h3"
                className="text-[20px] leading-[24px] lg:text-[35px] lg:leading-[35px] text-primary"
              >
                Simple Implementation, <br />
                No IT Needed
              </Typography>

              <Typography as="p" variant="body" className="mt-4 max-w-[395px]">
                Deploy MoneyOS with minimal IT effort. Financial teams map the
                data and define deliverables —we take care of the rest.
              </Typography>
            </div>
            {/*  */}
            <div className="item flex flex-col gap-4 text-left">
              <ChartNoAxesColumn className="text-slice-muted" size={30} />
              <Typography
                as="h3"
                className="text-[20px] leading-[24px] lg:text-[35px] lg:leading-[35px] text-primary"
              >
                Scale, <br />
                Effortlessly
              </Typography>

              <Typography as="p" variant="body" className="mt-4 max-w-[395px]">
                Expand your capabilities over time—add new data sources, update
                business rules, and create new outputs and integrations. MoneyOS
                is built to grow with your needs.
              </Typography>
            </div>
            {/*  */}
            <div className="item flex flex-col gap-4 text-left">
              <Lock className="text-slice-muted" size={30} />
              <Typography
                as="h3"
                className="text-[20px] leading-[24px] lg:text-[35px] lg:leading-[35px] text-primary"
              >
                Security and Privacy
                <br />
                at Its Core
              </Typography>

              <Typography as="p" variant="body" className="mt-4 max-w-[395px]">
                MoneyOS accesses only the data it needs, never compromising
                sensitive user information, and fully complies with privacy and
                financial regulations.
              </Typography>
            </div>
            {/*  */}
            <div className="item flex flex-col gap-4 text-left">
              <Network className="text-slice-muted" size={30} />
              <Typography
                as="h3"
                className="text-[20px] leading-[24px] lg:text-[35px] lg:leading-[35px] text-primary"
              >
                Keep Your
                <br />
                Current Stack
              </Typography>

              <Typography as="p" variant="body" className="mt-4 max-w-[395px]">
                Keep all your softwares and platforms intact. MoneyOS is a
                non-intrusive layer that collects and processes data seamlessly.
              </Typography>
            </div>
            {/*  */}
            <div className="item flex flex-col gap-4 text-left">
              <RadioTower className="text-slice-muted" size={30} />
              <Typography
                as="h3"
                className="text-[20px] leading-[24px] lg:text-[35px] lg:leading-[35px] text-primary"
              >
                Send Data
                <br />
                Asynchronously
              </Typography>

              <Typography as="p" variant="body" className="mt-4 max-w-[395px]">
                Don't risk any transaction. Send data to MoneyOS only after
                everything has been processed on your side. Then see the magic
                happening.
              </Typography>
            </div>
            {/*  */}
            <div className="item flex flex-col gap-4 text-left">
              <Router className="text-slice-muted" size={30} />
              <Typography
                as="h3"
                className="text-[20px] leading-[24px] lg:text-[35px] lg:leading-[35px] text-primary"
              >
                Run MoneyOS
                <br />
                On Private Cloud
              </Typography>

              <Typography as="p" variant="body" className="mt-4 max-w-[395px]">
                You choose where to host your data and run MoneyOS. Any cloud
                provider, or even on premise, our team supports your team.
              </Typography>
            </div>
            {/*  */}
            <div className="item flex flex-col gap-4 text-left">
              <HardDriveDownload className="text-slice-muted" size={30} />
              <Typography
                as="h3"
                className="text-[20px] leading-[24px] lg:text-[35px] lg:leading-[35px] text-primary"
              >
                Any Format
                <br />
                of Input Data
              </Typography>

              <Typography as="p" variant="body" className="mt-4 max-w-[395px]">
                Import any type of file format, with any layout trough any type
                of structure. No matter where the data is, MoneyOS collects it.
              </Typography>
            </div>
            {/*  */}
            <div className="item flex flex-col gap-4 text-left">
              <Layers3 className="text-slice-muted" size={30} />
              <Typography
                as="h3"
                className="text-[20px] leading-[24px] lg:text-[35px] lg:leading-[35px] text-primary"
              >
                Mirror
                <br />
                Accounts
              </Typography>

              <Typography as="p" variant="body" className="mt-4 max-w-[395px]">
                Customize multiple ledgers and accounts to mirror actual
                accounting or even financial accounts. Keep track of your money
                and automate accounting tasks with ease.
              </Typography>
            </div>
            {/*  */}
            <div className="item flex flex-col gap-4 text-left">
              <HardDriveUpload className="text-slice-muted" size={30} />
              <Typography
                as="h3"
                className="text-[20px] leading-[24px] lg:text-[35px] lg:leading-[35px] text-primary"
              >
                Limitless
                <br />
                Outputs
              </Typography>

              <Typography as="p" variant="body" className="mt-4 max-w-[395px]">
                Customize dashboards, reports, API endpoints and even files for
                every specific need your teams might have, from a single source
                of truth.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

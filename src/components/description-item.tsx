import type React from "react";

import { ChevronRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { Typography } from "@/typography";
import type { TypographyVariants } from "@/typography/variants";
import { Button } from "./ui/button";

type DescriptionItemProps = {
  title: string;
  index: number;
  icon: React.ReactNode;
  subtitle: string;
  description: string;
  action?: string;
  variant?: TypographyVariants;
};

const DescriptionItem: React.FC<DescriptionItemProps> = ({
  title,
  index,
  icon,
  subtitle,
  description,
  variant = "body",
  action = "",
}) => {
  return (
    <div
      key={title}
      className={twMerge(
        "flex flex-col gap-4",
        index === 2 && "col-span-3 lg:col-span-1",
      )}
    >
      {icon}
      <Typography
        as="h3"
        className="lg:text-[35px] text-[24px] leading-[24px] text-primary lg:leading-[35px]"
      >
        <span dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && (
          <>
            <br />
            <span className="text-slice-muted">{subtitle}</span>
          </>
        )}
      </Typography>
      <Typography
        as="p"
        variant={variant}
        className="mt-4 max-w-[450px] min-h-[100px]"
      >
        {description}
      </Typography>
      {action && (
        <Button className="w-[126px] mt-4 flex items-center">
          Learn more <ChevronRight size="14" className="ml-1" />
        </Button>
      )}
    </div>
  );
};

export default DescriptionItem;

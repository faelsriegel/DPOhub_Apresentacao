import React from "react";
import { ChevronRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { Typography } from "@/typography";

// Tipagem para variantes de tipografia
type TypographyVariant =
  | "h1"
  | "h2"
  | "body"
  | "body2"
  | "button"
  | "sectionTitle"
  | "highlight";

// Tipagem para as propriedades do componente
type DescriptionItemProps = {
  title: string; // Título do item
  index: number; // Índice do item
  icon: React.ReactNode; // Ícone do item
  subtitle: React.ReactNode; // Alterado para aceitar JSX
  description: string; // Descrição do item
  action?: string; // Ação opcional
  variant?: TypographyVariant; // Variante de tipografia
};

const DescriptionItem: React.FC<DescriptionItemProps> = ({
  title,
  index,
  icon,
  subtitle,
  description,
  variant = "body", // Valor padrão para variante
  action = "",
}) => {
  return (
    <div
      key={title}
      className={twMerge(
        "flex flex-col gap-4",
        index === 2 && "col-span-3 lg:col-span-1"
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
        variant={variant} // Valor sempre válido
        className="mt-4 max-w-[450px] min-h-[100px]"
      >
        {description}
      </Typography>
    </div>
  );
};

export default DescriptionItem;

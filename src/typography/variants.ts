import { tv, type VariantProps } from "tailwind-variants";

export const variants = tv({
  base: "scroll-m-20 text-white",
  variants: {
    variant: {
      h1: "text-9xl font-extrabold tracking-tight sm:text-7xl md:text-6xl lg:text-5xl xl:text-4xl",
      h2: "text-7xl",
      body: "text-md lg:text-xl font-thin text-slice-text",
      body2: "text-md lg:text-md font-thin text-slice-text",
      button: "text-md",
      sectionTitle:
        "text-[36px] leading-[36px] lg:text-[100px] lg:leading-[100px] md:text-[60px] md:leading-[60px]",
      highlight:
        "text-[40px] leading-[40px] sm:text-[60px] sm:leading-[60px] md:text-[80px] md:leading-[80px] lg:text-[120px] lg:leading-[120px] xl:text-[150px] xl:leading-[150px]",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

// Exporta o tipo TypographyVariants
export type TypographyVariants = VariantProps<typeof variants>;

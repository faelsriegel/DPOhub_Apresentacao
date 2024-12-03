import { tv, type VariantProps } from "tailwind-variants";

export const variants = tv({
  base: "scroll-m-20 text-white",
  variants: {
    variant: {
      h1: "text-6xl font-regular tracking-tight sm:text-5xl md:text-4xl lg:text-3xl xl:text-2xl", // Ajustado para tamanhos mais coesos
      h2: "text-5xl font-regular tracking-tight sm:text-4xl md:text-3xl lg:text-2xl xl:text-xl", // Ajustado para manter consistência com h1
      body: "text-base lg:text-lg font-thin text-slice-text", // Ajuste para o corpo do texto
      body2: "text-base lg:text-base font-thin text-slice-text", // Mantendo o tamanho base consistente
      button: "text-sm lg:text-base", // Texto do botão ajustado
      sectionTitle:
        "text-[32px] leading-[36px] lg:text-[50px] lg:leading-[50px] md:text-[40px] md:leading-[40px]", // Ajustando o tamanho do título da seção
      highlight:
        "text-[32px] leading-[36px] sm:text-[50px] sm:leading-[50px] md:text-[60px] md:leading-[60px] lg:text-[80px] lg:leading-[80px] xl:text-[100px] xl:leading-[100px]", // Ajustado para um highlight mais coeso
    },
  },
  defaultVariants: {
    variant: "h1", // Tamanho padrão h1
  },
});

// Exporta o tipo TypographyVariants
export type TypographyVariants = VariantProps<typeof variants>;

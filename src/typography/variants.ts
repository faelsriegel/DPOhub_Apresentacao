import { type VariantProps, tv } from "tailwind-variants";

// Configuração das variantes de tipografia utilizando `tailwind-variants`
export const variants = tv({
  // Classes base aplicadas a todos os elementos tipográficos
  base: "scroll-m-20 text-white",

  // Variantes definem diferentes estilos para os elementos tipográficos
  variants: {
    variant: {
      // Variante para títulos principais (h1)
      // Responsivo com tamanhos progressivamente menores em telas maiores
      h1: "text-9xl font-extrabold tracking-tight sm:text-7xl md:text-6xl lg:text-5xl xl:text-4xl",

      // Variante para títulos secundários (h2)
      h2: "text-7xl",

      // Variante para textos de corpo principal
      // Inclui responsividade com ajustes para telas grandes
      body: "text-md lg:text-xl font-thin text-slice-text",

      // Variante para textos menores ou secundários
      body2: "text-md lg:text-md font-thin text-slice-text",

      // Variante para textos em botões
      button: "text-md",

      // Variante para títulos de seção
      // Inclui tamanhos específicos para diferentes pontos de quebra
      sectionTitle:
        "text-[36px] leading-[36px] lg:text-[100px] lg:leading-[100px] md:text-[60px] md:leading-[60px]",

      // Variante para textos destacados (highlight)
      // Define tamanhos progressivamente maiores em telas grandes
      highlight:
        "text-[40px] leading-[40px] sm:text-[60px] sm:leading-[60px] md:text-[80px] md:leading-[80px] lg:text-[120px] lg:leading-[120px] xl:text-[150px] xl:leading-[150px]",
    },
  },

  // Define a variante padrão aplicada quando nenhuma outra é especificada
  defaultVariants: {
    variant: "h1", // Títulos principais são usados como padrão
  },
});

// Tipagem gerada automaticamente para as variantes
export type TypographyVariants = VariantProps<typeof variants>;

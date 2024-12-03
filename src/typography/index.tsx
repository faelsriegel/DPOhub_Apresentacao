import type { ComponentPropsWithoutRef, ElementType } from "react";
import { twMerge } from "tailwind-merge"; // Permite mesclar classes Tailwind
import type { VariantProps } from "tailwind-variants";

import { variants } from "./variants"; // Importa as variantes de estilo configuradas

/**
 * Propriedades aceitas pelo componente Typography.
 *
 * @template T - Tipo de elemento HTML ou componente React a ser usado.
 */
type TypographyProps<T extends ElementType> = VariantProps<typeof variants> & {
  as?: T; // Elemento a ser renderizado (ex: "h1", "p").
  className?: string; // Classes adicionais.
  children: React.ReactNode; // Conteúdo interno do componente.
} & ComponentPropsWithoutRef<T>;

/**
 * Componente Typography: estiliza elementos HTML com variantes configuráveis.
 *
 * @template T - Tipo de elemento HTML ou componente React a ser renderizado.
 * @param {TypographyProps<T>} props - Propriedades do componente.
 */
const Typography = <T extends ElementType = "h2">({
  as, // Tipo de elemento a ser renderizado (ex.: "h1", "p").
  variant, // Variante do estilo a ser aplicada.
  children, // Conteúdo interno.
  className = "", // Classes adicionais para personalização.
  ...props // Outras propriedades passadas ao componente.
}: TypographyProps<T>) => {
  const Component = as || "h2"; // Define o elemento base, padrão "h2".
  const data = variants({ variant }); // Obtém as classes da variante selecionada.

  return (
    <Component className={twMerge(data, className)} {...props}>
      {children}
    </Component>
  );
};

export { Typography };

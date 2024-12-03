import { Slot } from "@radix-ui/react-slot"; // Componente utilitário do Radix para renderizar um elemento customizado
import { type VariantProps, cva } from "class-variance-authority"; // `cva` para gerenciar variantes de classe
import * as React from "react";

import { cn } from "@/lib/utils"; // Função utilitária para concatenar classes CSS dinamicamente

// Configuração de variantes para o botão
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    // Variantes definem estilos diferentes para o botão
    variants: {
      // Tipos de estilos disponíveis para o botão
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90", // Botão padrão com cor primária
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90", // Botão com estilo "destrutivo" (vermelho, por exemplo)
        outline:
          "border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-100", // Botão com borda e fundo branco
        gradient:
          "bg-gradient-to-r from-[#5276a0] via-[#89adcc] to-[#909090] text-white shadow-md hover:opacity-80 hover:shadow-lg", // Botão com gradiente de cores
        outlineMuted:
          "border border-gray-200 text-gray-500 bg-transparent hover:bg-gray-50", // Botão com borda cinza clara e fundo transparente
      },
      // Tamanhos disponíveis para o botão
      size: {
        default: "h-10 px-5", // Tamanho padrão
        sm: "h-8 px-3 text-sm", // Botão menor
        lg: "h-12 px-6 text-lg", // Botão maior
        icon: "h-10 w-10", // Botão de tamanho fixo para ícones
      },
    },
    // Valores padrão caso não sejam especificados
    defaultVariants: {
      variant: "default", // Variante padrão é "default"
      size: "default", // Tamanho padrão é "default"
    },
  }
);

// Interface de propriedades do botão
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, // Inclui todas as propriedades padrão de um `<button>`
    VariantProps<typeof buttonVariants> {
  // Adiciona as variantes como propriedades opcionais
  asChild?: boolean; // Define se o botão será renderizado como um elemento filho customizado
}

// Componente de botão principal
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Define se o botão usará um elemento customizado ou será um `<button>` padrão
    const Comp = asChild ? Slot : "button";

    return (
      // Renderiza o botão com as classes combinadas (variantes e personalização via className)
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref} // Referência para o botão, útil para manipulação direta
        {...props} // Outras propriedades passadas para o botão
      />
    );
  }
);

// Define um nome para o componente (útil para debugging e ferramentas de desenvolvimento)
Button.displayName = "Button";

// Exporta o botão e suas variantes
export { Button, buttonVariants };

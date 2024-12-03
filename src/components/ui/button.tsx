import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// Define as variantes do botão, incluindo a variante modernizada `gradient`
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-100",
        gradient:
          "bg-gradient-to-r from-[#5276a0] via-[#89adcc] to-[#909090] text-white shadow-md hover:opacity-80 hover:shadow-lg",
        // Detalhes das Cores
        // from-[#4a6780]:

        // Azul acinzentado profundo, transmite seriedade e profissionalismo.
        // via-[#7d9fb8]:

        // Azul claro mais suave, simbolizando modernidade e leveza.
        // to-[#a5a5a5]:

        // Cinza médio claro para um acabamento neutro e elegante.
        // Texto Branco (text-white):

        // Funciona bem com o gradiente ajustado, mantendo alta legibilidade.
      },
      size: {
        default: "h-10 px-5",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-6 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// Propriedades do componente de botão
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// Componente de botão
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"; // Define se o botão usa um elemento personalizado ou "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };

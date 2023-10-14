import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
const colours = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};
const buttonVariants = cva(
  "inline-flex text-white bg-black  items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        normal: "bg-[#A8A77A]",
        fire: "bg-[#EE8130]",
        water: "bg-[#6390F0]",
        electric: "bg-[#F7D02C]",
        grass: "bg-[#7AC74C]",
        ice: "bg-[#96D9D6]",
        fighting: "bg-[#C22E28]",
        poison: "bg-[#A33EA1]",
        ground: "bg-[#E2BF65]",
        flying: "bg-[#A98FF3]",
        psychic: "bg-[#F95587]",
        bug: "bg-[#A6B91A]",
        rock: "bg-[#B6A136]",
        ghost: "bg-[#735797]",
        dragon: "bg-[#6F35FC]",
        dark: "bg-[#705746]",
        steel: "bg-[#B7B7CE]",
        fairy: "bg-[#D685AD]",
        null: "",
        undefined: "",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

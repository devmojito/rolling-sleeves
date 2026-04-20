import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold uppercase tracking-widest transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        primary:
          "bg-gold text-ink hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]",
        gradient:
          "gold-gradient text-ink hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]",
        outline:
          "border-2 border-gold text-gold hover:bg-gold/10",
        "outline-light":
          "border border-outline text-on-surface hover:bg-gold/10",
        ghost: "text-on-surface hover:text-gold",
        link: "text-gold underline-offset-4 hover:underline",
      },
      size: {
        default: "px-8 py-4 text-sm",
        sm: "px-6 py-3 text-xs",
        lg: "px-10 py-5 text-base",
        xl: "px-12 py-6 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
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
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

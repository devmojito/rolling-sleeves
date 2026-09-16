import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold uppercase tracking-[0.18em] transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        primary:
          "bg-cream text-espresso hover:bg-sand",
        gradient:
          "bg-cream text-espresso hover:bg-sand",
        dark:
          "bg-espresso text-cream hover:bg-ink",
        outline:
          "border border-cream/40 text-cream hover:border-cream hover:bg-cream/5",
        "outline-light":
          "border border-cream/40 text-cream hover:border-cream hover:bg-cream/5",
        "outline-dark":
          "border border-espresso/40 text-espresso hover:border-espresso hover:bg-espresso/5",
        ghost: "text-on-surface hover:text-sand",
        link: "text-gold underline-offset-4 hover:underline",
      },
      size: {
        default: "px-8 py-4 text-xs",
        sm: "px-6 py-3 text-xs",
        lg: "px-10 py-5 text-xs",
        xl: "px-12 py-6 text-sm",
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

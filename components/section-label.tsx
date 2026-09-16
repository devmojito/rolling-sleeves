import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
};

export function SectionLabel({ children, variant = "dark", className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-label font-semibold text-[0.7rem] tracking-[0.28em] uppercase",
        variant === "dark" ? "text-sand" : "text-espresso",
        className
      )}
    >
      <span
        aria-hidden
        className={cn("h-px w-8", variant === "dark" ? "bg-sand/60" : "bg-espresso/50")}
      />
      {children}
    </span>
  );
}

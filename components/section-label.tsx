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
        "inline-block px-4 py-1 rounded-full font-label font-bold text-xs tracking-[0.1em] uppercase",
        variant === "dark" ? "bg-gold text-ink" : "bg-gold text-ink",
        className
      )}
    >
      {children}
    </span>
  );
}

import { cn } from "@/lib/utils";

type Props = {
  value: string;
  label: string;
  className?: string;
};

export function Stat({ value, label, className }: Props) {
  return (
    <div className={cn("text-center", className)}>
      <div className="font-headline font-extrabold text-5xl md:text-6xl text-white mb-2 tracking-tighter">
        {value}
      </div>
      <div className="text-gold font-bold text-xs tracking-widest uppercase">
        {label}
      </div>
    </div>
  );
}

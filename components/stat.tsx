"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  value: string;
  label: string;
  className?: string;
};

function parseAnimatedStat(
  value: string
): { end: number; suffix: string } | null {
  const v = value.trim();
  const kPlus = v.match(/^(\d+)k\+$/i);
  if (kPlus) return { end: parseInt(kPlus[1], 10), suffix: "k+" };
  const percent = v.match(/^(\d+)%$/);
  if (percent) return { end: parseInt(percent[1], 10), suffix: "%" };
  const plus = v.match(/^(\d+)\+$/);
  if (plus) return { end: parseInt(plus[1], 10), suffix: "+" };
  const plain = v.match(/^(\d+)$/);
  if (plain) return { end: parseInt(plain[1], 10), suffix: "" };
  return null;
}

function usePrefersReducedMotion(): boolean {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduce;
}

function useInViewOnce(ref: React.RefObject<Element | null>): boolean {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, inView]);
  return inView;
}

function useCountUp(
  end: number,
  active: boolean,
  durationMs: number,
  instant: boolean
): number {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (instant || end === 0) {
      setCount(end);
      return;
    }
    let start: number | null = null;
    let frame = 0;
    const step = (now: number) => {
      if (start === null) start = now;
      const elapsed = now - start;
      const t = Math.min(1, elapsed / durationMs);
      const eased = 1 - (1 - t) ** 3;
      setCount(Math.round(eased * end));
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, end, durationMs, instant]);
  return count;
}

export function Stat({ value, label, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const parsed = parseAnimatedStat(value);
  const inView = useInViewOnce(ref);
  const reducedMotion = usePrefersReducedMotion();
  const count = useCountUp(
    parsed?.end ?? 0,
    inView && parsed !== null,
    1600,
    reducedMotion
  );

  const displayValue =
    parsed === null ? value : `${count}${parsed.suffix}`;

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="font-headline font-extrabold text-5xl md:text-6xl text-white mb-2 tracking-tighter tabular-nums">
        {displayValue}
      </div>
      <div className="text-gold font-bold text-xs tracking-widest uppercase">
        {label}
      </div>
    </div>
  );
}

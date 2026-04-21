"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Phase = "visible" | "hiding" | "gone";

const FADE_MS = 500;
const MIN_VISIBLE_MS = 1_400;

export function SitePreloader() {
  const [phase, setPhase] = useState<Phase>("visible");

  useEffect(() => {
    const started = Date.now();
    let dismissTimer: number | undefined;
    let dismissed = false;

    const scheduleDismiss = () => {
      if (dismissed) return;
      dismissed = true;
      const elapsed = Date.now() - started;
      const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);
      dismissTimer = window.setTimeout(() => {
        setPhase("hiding");
        window.setTimeout(() => setPhase("gone"), FADE_MS);
      }, wait);
    };

    const onLoad = () => scheduleDismiss();

    if (document.readyState === "complete") {
      scheduleDismiss();
    } else {
      window.addEventListener("load", onLoad);
    }
    const fallback = window.setTimeout(() => scheduleDismiss(), 10_000);

    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(fallback);
      if (dismissTimer !== undefined) window.clearTimeout(dismissTimer);
    };
  }, []);

  useEffect(() => {
    if (phase === "visible") {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-ink transition-opacity duration-500 ease-out motion-reduce:transition-none",
        phase === "hiding" ? "pointer-events-none opacity-0" : "opacity-100"
      )}
      aria-busy={phase === "visible"}
      aria-label="Loading site"
    >
      <img
        src="/large-light.png"
        alt=""
        width={3760}
        height={3011}
        className="h-auto max-h-[min(55vh,520px)] w-auto max-w-[min(90vw,520px)] select-none object-contain"
        draggable={false}
        fetchPriority="high"
        decoding="async"
      />
    </div>
  );
}

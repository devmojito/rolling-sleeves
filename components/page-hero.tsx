import type { ReactNode } from "react";
import { SectionLabel } from "@/components/section-label";
import { cn } from "@/lib/utils";

export type PageHeroProps = {
  imageSrc: string;
  imageAlt?: string;
  /** Gold badge text; omit (and omit labelSlot) to hide the badge. */
  label?: string;
  className?: string;
  sectionLabelClassName?: string;
  /** Replaces the default SectionLabel + label (e.g. F&amp;B breadcrumb row). */
  labelSlot?: ReactNode;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
};

export function PageHero({
  imageSrc,
  imageAlt = "",
  label,
  className,
  sectionLabelClassName,
  labelSlot,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative h-[min(1024px,100dvh)] w-full flex items-center justify-center bg-surface-container-lowest pt-24",
        className
      )}
    >
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={imageAlt}
          className="w-full h-full object-cover"
          src={imageSrc}
        />
        <div className="absolute inset-0 bg-surface/60 mix-blend-multiply" />
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-start mt-12 md:mt-20">
        {labelSlot ? (
          <div className="mb-8">{labelSlot}</div>
        ) : label ? (
          <SectionLabel
            className={cn(
              "mb-8 shadow-[0_4px_20px_rgba(232,160,32,0.2)]",
              sectionLabelClassName
            )}
          >
            {label}
          </SectionLabel>
        ) : null}
        <h1 className="font-headline font-black text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] tracking-[0.05em] text-white uppercase max-w-5xl mb-8 drop-shadow-2xl">
          {title}
        </h1>
        <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed border-l-2 border-primary-container pl-6">
          {description}
        </p>
        {children ? <div className="mt-8 w-full max-w-4xl">{children}</div> : null}
      </div>
    </section>
  );
}

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
        "relative h-hero-page w-full flex items-center justify-center bg-surface-container-lowest pt-24",
        className
      )}
    >
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={imageAlt}
          className="w-full h-full object-cover grayscale-[40%]"
          src={imageSrc}
        />
        <div className="absolute inset-0 bg-ink/70" />
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-start mt-12 md:mt-20">
        {labelSlot ? (
          <div className="mb-8">{labelSlot}</div>
        ) : label ? (
          <SectionLabel
            className={cn(
              "mb-8",
              sectionLabelClassName
            )}
          >
            {label}
          </SectionLabel>
        ) : null}
        <h1 className="font-headline font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-cream max-w-5xl mb-8">
          {title}
        </h1>
        <p className="font-body text-lg md:text-xl text-cream/80 max-w-2xl leading-relaxed border-l border-sand/50 pl-6">
          {description}
        </p>
        {children ? <div className="mt-8 w-full max-w-4xl">{children}</div> : null}
      </div>
    </section>
  );
}

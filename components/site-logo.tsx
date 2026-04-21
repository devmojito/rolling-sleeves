import Image from "next/image";
import Link from "next/link";
import type { MouseEventHandler } from "react";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/main-light.png";
const LOGO_WIDTH = 11779;
const LOGO_HEIGHT = 3371;
const LOGO_SIZES = "(max-width: 768px) 320px, 420px";
const LOGO_IMG_CLASS =
  "h-11 w-auto max-w-[min(72vw,320px)] object-contain object-left md:h-14 md:max-w-[420px]";

type SiteLogoProps = {
  priority?: boolean;
  /** Merged with default link styles */
  linkClassName?: string;
  /** Merged with default image sizing */
  imageClassName?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function SiteLogo({
  priority,
  linkClassName,
  imageClassName,
  onClick,
}: SiteLogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "inline-flex shrink-0 items-center rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
        linkClassName
      )}
    >
      <Image
        src={LOGO_SRC}
        alt="Rolling Sleeves"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority={priority}
        sizes={LOGO_SIZES}
        className={cn(LOGO_IMG_CLASS, imageClassName)}
      />
    </Link>
  );
}

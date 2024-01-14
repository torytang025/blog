import Image from "next/image";
import Link, { type LinkProps } from "next/link";

import portraitImage from "@/public/img/portrait.jpg";
import { cn } from "@/utils/cn";

type AvatarProps = Omit<LinkProps, "href"> & {
  large?: boolean;
  href?: string;
  alt?: boolean;
  className?: string;
};
export default function Avatar({
  large = false,
  href,
  className,
  ...props
}: AvatarProps) {
  return (
    <Link
      aria-label="主页"
      className={cn(className, "pointer-events-auto")}
      href={href ?? "/"}
      {...props}
    >
      <Image
        src={portraitImage}
        alt="TT"
        sizes={large ? "4rem" : "2.25rem"}
        className={cn(
          "rounded-full bg-neutral-100 object-cover dark:bg-neutral-800",
          large ? "h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20" : "h-9 w-9"
        )}
        priority
      />
    </Link>
  );
}

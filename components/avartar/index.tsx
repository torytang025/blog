import portraitImage from "@/public/img/portrait.jpg";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link, { type LinkProps } from "next/link";

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
    <div>
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
            "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
            large ? "h-16 w-16" : "h-9 w-9"
          )}
          priority
        />
      </Link>
    </div>
  );
}

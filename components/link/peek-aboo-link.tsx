"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link, { type LinkProps } from "next/link";
import React from "react";

import { cn } from "@/utils";
import { makeBlurDataURL } from "@/utils/img";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { RichLink } from "./rich-link";

// 改成 false 就可以关闭链接预览快照图了
const supportsPreview = false;

type PeekabooLinkProps = LinkProps &
  React.ComponentPropsWithoutRef<"a"> & {
    children: React.ReactNode;
  };
export function PeekabooLink({
  href,
  children,
  className,
  ...props
}: PeekabooLinkProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  // if it's a relative link, use a fallback Link
  if (!href.startsWith("http")) {
    return (
      <Link href={href} className={cn(className)} {...props}>
        {children}
      </Link>
    );
  }

  if (!supportsPreview) {
    return (
      <RichLink
        href={href}
        className={cn(
          "font-semibold text-zinc-800 hover:underline dark:text-zinc-100",
          className
        )}
        target="_blank"
        {...props}
      >
        {children}
      </RichLink>
    );
  }

  function onOpenChange(open: boolean) {
    setIsOpen(open);
  }

  return (
    <HoverCard openDelay={0} closeDelay={50} onOpenChange={onOpenChange}>
      <HoverCardTrigger asChild>
        <RichLink
          href={href}
          className={cn(
            "font-semibold text-zinc-800 hover:underline dark:text-zinc-100",
            className
          )}
          target="_blank"
          {...props}
        >
          {children}
        </RichLink>
      </HoverCardTrigger>
      <AnimatePresence mode="wait">
        {isOpen && (
          <HoverCardContent asChild collisionPadding={250}>
            <motion.div
              className="pointer-events-none relative z-50 w-[400px] origin-top overflow-hidden !p-0"
              initial={{
                opacity: 0,
                scale: 0.965,
                y: 9,
                height: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                height: 250,
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
                y: 8,
                height: 0,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <Image
                src={`/api/link-preview?url=${href}`}
                alt={`${href} 的预览图`}
                className="pointer-events-none absolute left-0 top-0 h-full w-full rounded-xl object-cover"
                placeholder="blur"
                blurDataURL={makeBlurDataURL(16, 16)}
                width={400}
                height={250}
                unoptimized
              />
            </motion.div>
          </HoverCardContent>
        )}
      </AnimatePresence>
    </HoverCard>
  );
}

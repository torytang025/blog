"use client";

import { motion } from "framer-motion";
import Link, { type LinkProps } from "next/link";
import React from "react";

import {
  BilibiliIcon,
  GitHubIcon,
  MailIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/icon";

import { IconProps } from "@/types/icon";
import { AnimatePresence } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type IconType = (props: IconProps) => JSX.Element;
type Platform =
  | "github"
  | "x"
  | "youtube"
  // | "telegram"
  | "bilibili"
  | "mail";
// | "rss";
type PlatformInfo = {
  icon: IconType;
  platform: Platform;
  label: string;
};
const iconMapper: { [key: string]: PlatformInfo } = {
  "(?:github.com)": {
    icon: GitHubIcon,
    platform: "github",
    label: "GitHub",
  },
  "((?:t.co)|(?:x.com))": {
    icon: XIcon,
    platform: "x",
    label: "x",
  },
  "((?:youtu.be)|(?:youtube.com))": {
    icon: YouTubeIcon,
    platform: "youtube",
    label: "YouTube",
  },
  "(?:bilibili.com)": {
    icon: BilibiliIcon,
    platform: "bilibili",
    label: "BiliBili",
  },
  "(?:mailto:)": {
    icon: MailIcon,
    platform: "mail",
    label: "E-mail",
  },
};

function getIconForPlatform(
  platform: Platform | undefined
): PlatformInfo | undefined {
  if (!platform) {
    return undefined;
  }

  for (const info of Object.values(iconMapper)) {
    if (info.platform === platform) {
      return info;
    }
  }

  return undefined;
}

export function SocialLink({
  platform,
  href,
  ...props
}: { platform?: Platform } & LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const [open, setOpen] = React.useState(false);
  const info = getIconForPlatform(platform);

  if (!info) {
    console.warn(`No icon found for ${href.toString()}`);

    return <Link href={href} {...props} />;
  }

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <Link
            className="group -m-1 p-1"
            href={href}
            target="_blank"
            prefetch={false}
            aria-label={info.label}
            {...props}
          >
            <info.icon className="h-5 w-5 text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200" />
          </Link>
        </TooltipTrigger>
        <AnimatePresence>
          {open && (
            <TooltipContent asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                {info.label}
              </motion.div>
            </TooltipContent>
          )}
        </AnimatePresence>
      </Tooltip>
    </TooltipProvider>
  );
}

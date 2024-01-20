"use client";

import { PortableText, PortableTextReactComponents } from "@portabletext/react";

import { PeekabooLink } from "@/components/link/peek-aboo-link";

import { PortableTextCodeBlock } from "./post-portable-code";
import { PortableTextImage } from "./post-portable-img";
import {
  PortableTextBlocksBlockquote,
  PortableTextBlocksH1,
  PortableTextBlocksH2,
  PortableTextBlocksH3,
  PortableTextBlocksH4,
  PortableTextBlocksListItem,
  PortableTextBlocksNormal,
} from "./post-portable-text-block";
import { PortableTextYouTube } from "./post-portable-youtube";

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: PortableTextBlocksNormal,
    h1: PortableTextBlocksH1,
    h2: PortableTextBlocksH2,
    h3: PortableTextBlocksH3,
    h4: PortableTextBlocksH4,
    blockquote: PortableTextBlocksBlockquote,
  },
  listItem: PortableTextBlocksListItem,
  types: {
    image: PortableTextImage,
    // tweet: PortableTextTweet,
    codeBlock: PortableTextCodeBlock,
    youtube: PortableTextYouTube,
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <PeekabooLink href={value.href} rel={rel}>
          {children}
        </PeekabooLink>
      );
    },
  },
};

export const PostPortableText: typeof PortableText = (props) => {
  return (
    <PortableText
      value={props.value}
      components={props.components ?? components}
    />
  );
};

"use client";

import { type PortableTextComponentProps } from "@portabletext/react";
import { useTheme } from "next-themes";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import { ClipboardCheckIcon, ClipboardDataIcon } from "@/components/icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function PortableTextCodeBlock({
  value,
}: PortableTextComponentProps<{
  _key: string;
  language: string;
  code: string;
  filename?: string;
}>) {
  const { resolvedTheme } = useTheme();
  const [hasCopied, setHasCopied] = React.useState(false);
  const onClickCopy = React.useCallback(() => {
    navigator.clipboard
      .writeText(value.code)
      .then(() => {
        setHasCopied(true);
        setTimeout(() => {
          setHasCopied(false);
        }, 3000);
      })
      .catch(() => {
        console.error("Failed to copy code block");
      });
  }, [value.code]);

  return (
    <div
      data-blockid={value._key}
      data-filename={value.filename}
      className="group relative mr-3 rounded-3xl border border-[--tw-prose-pre-border] dark:bg-zinc-800/80 md:mr-0"
    >
      <>
        <div className="relative flex text-xs leading-6 text-slate-400">
          {Boolean(value.filename) && (
            <>
              <div className="mt-2 flex flex-none items-center border-b border-t border-b-emerald-700 border-t-transparent px-4 py-1 font-medium text-emerald-700 dark:border-b-emerald-200 dark:text-emerald-200">
                {value.filename}
              </div>
            </>
          )}
          <div className="absolute right-0 top-2 flex h-8 items-center pr-4">
            <div className="relative -mr-0.5 flex">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <button
                      type="button"
                      className="text-zinc-400 hover:text-zinc-500 dark:text-zinc-500 dark:hover:text-zinc-400"
                      onClick={onClickCopy}
                    >
                      {hasCopied ? (
                        <ClipboardCheckIcon className="h-5 w-5" />
                      ) : (
                        <ClipboardDataIcon className="h-5 w-5" />
                      )}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        <SyntaxHighlighter
          language={value.language}
          style={resolvedTheme === "dark" ? oneDark : oneLight}
          showLineNumbers
          wrapLines
          customStyle={{
            margin: 4,
            borderRadius: "0 0 1.5rem 1.5rem",
          }}
        >
          {value.code}
        </SyntaxHighlighter>
      </>
    </div>
  );
}

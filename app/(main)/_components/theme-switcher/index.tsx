"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import React from "react";

import { LightningIcon, MoonIcon, SunIcon } from "@/components/icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const themes = [
  {
    label: "Light",
    value: "light",
    icon: SunIcon,
  },
  {
    label: "Dark",
    value: "dark",
    icon: MoonIcon,
  },
  {
    label: "System",
    value: "system",
    icon: LightningIcon,
  },
];
export function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { setTheme, theme } = useTheme();
  const ThemeIcon = React.useMemo(
    () => themes.find((t) => t.value === theme)?.icon ?? LightningIcon,
    [theme]
  );

  React.useEffect(() => setMounted(true), []);

  function toggleTheme() {
    let nextTheme;
    const themeSequence = ["light", "dark", "system"];
    const next = themeSequence.indexOf(theme || "light") + 1;
    if (next >= themeSequence.length) {
      nextTheme = themeSequence[0];
    } else {
      nextTheme = themeSequence[next];
    }
    setTheme(nextTheme);
  }

  if (!mounted) {
    return null;
  }

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <button
            type="button"
            aria-label="toggle theme"
            className="group rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-2 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
            onClick={toggleTheme}
          >
            <ThemeIcon className="h-6 w-6 stroke-zinc-500 p-0.5 transition group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-200" />
          </button>
        </TooltipTrigger>
        <AnimatePresence>
          {open && (
            <TooltipContent asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                {themes.find((t) => t.value === theme)?.label || "System"}
              </motion.div>
            </TooltipContent>
          )}
        </AnimatePresence>
      </Tooltip>
    </TooltipProvider>
  );
}

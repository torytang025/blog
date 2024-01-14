"use client";

import {
  AnimatePresence,
  clamp,
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

import Avatar from "@/components/avartar";
import { Container } from "@/components/container";
import { cn } from "@/utils";

import { NavigationBarDesktop, NavigationBarMobile } from "../navigation-bar";
import { ThemeSwitcher } from "../theme-switcher";

export default function Header() {
  const isHomePage = usePathname() === "/";
  const { scrollYProgress } = useScroll();
  const headerRef = React.useRef<HTMLDivElement>(null);
  const isInitial = React.useRef(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const downDelay = 64;
    const upDelay = 64;
    const direction = current - scrollYProgress.getPrevious();

    function setProperty(property: string, value: string | null) {
      document.documentElement.style.setProperty(property, value);
    }

    function removeProperty(property: string) {
      document.documentElement.style.removeProperty(property);
    }

    if (!headerRef.current) {
      return;
    }

    const { top, height } = headerRef.current.getBoundingClientRect();

    if (isInitial.current) {
      setProperty("--header-position", "sticky");
    }
    isInitial.current = false;

    if (isInitial.current || scrollY < downDelay) {
      setProperty("--header-height", `${downDelay + height}px`);
      setProperty("--header-mb", `${-downDelay}px`);
    } else if (top + height < -upDelay) {
      const offset = Math.max(height, scrollY - upDelay);
      setProperty("--header-height", `${offset}px`);
      setProperty("--header-mb", `${height - offset}px`);
    } else if (top === 0) {
      setProperty("--header-height", `${scrollY + height}px`);
      setProperty("--header-mb", `${-scrollY}px`);
    }

    if (top === 0 && direction < 0) {
      removeProperty("--header-top");
      setProperty("--header-inner-position", "fixed");
    } else {
      removeProperty("--header-inner-position");
      setProperty("--header-top", "0px");
    }
  });

  return (
    <>
      <motion.header
        className={cn(
          "pointer-events-none relative z-50 mb-[var(--header-mb,0px)] flex flex-col",
          isHomePage
            ? "h-[var(--header-height,180px)]"
            : "h-[var(--header-height,64px)]"
        )}
        layout
        layoutRoot
      >
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          style={{
            position:
              "var(--header-position)" as React.CSSProperties["position"],
          }}
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={{
              position:
                "var(--header-inner-position)" as React.CSSProperties["position"],
            }}
          >
            <div className="relative flex gap-4">
              {!isHomePage ? <Avatar /> : <div />}
              <motion.div
                className="flex flex-1 justify-end md:justify-center"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
              >
                <NavigationBarMobile className="pointer-events-auto relative z-50 md:hidden" />
                <NavigationBarDesktop className="pointer-events-auto relative z-50 hidden md:block" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
              >
                <div className="pointer-events-auto">
                  <ThemeSwitcher />
                </div>
              </motion.div>
            </div>
          </Container>
        </div>
      </motion.header>
    </>
  );
}

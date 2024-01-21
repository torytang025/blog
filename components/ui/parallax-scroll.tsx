"use client";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

import { Photo } from "@/sanity/schemas/photo";
import { cn } from "@/utils/cn";

import { PhotoDisplay } from "../photo-display";

export const ParallaxScroll = ({
  photos,
  className,
}: {
  photos: Photo[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // container: gridRef, // remove this if your container is not fixed height
    // offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(photos.length / 3);

  const firstPart = photos.slice(0, third);
  const secondPart = photos.slice(third, 2 * third);
  const thirdPart = photos.slice(2 * third);

  return (
    <div
      className={cn("w-full items-start overflow-y-auto pb-40", className)}
      ref={gridRef}
    >
      <div
        className="mx-auto hidden max-w-5xl grid-cols-1 items-start gap-10 px-10 md:grid md:grid-cols-2 lg:grid-cols-3"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
              className="relative h-96"
            >
              <PhotoDisplay photo={el} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              style={{ y: translateSecond }}
              key={"grid-2" + idx}
              className="relative h-96"
            >
              <PhotoDisplay photo={el} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ y: translateThird }}
              key={"grid-3" + idx}
              className="relative h-96"
            >
              <PhotoDisplay photo={el} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 px-10 sm:grid-cols-2 md:hidden">
        {photos.map((el, idx) => (
          <div className="relative h-96" key={"grid-1" + idx}>
            <PhotoDisplay photo={el} />
          </div>
        ))}
      </div>
    </div>
  );
};

"use client";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { Photo } from "@/sanity/schemas/photo";
import { cn } from "@/utils/cn";

import { LoadingCircleIcon } from "../icon/loading-circle";
import { PhotoDisplay } from "./photo-display";

export const ParallaxScroll = ({
  photos,
  className,
}: {
  photos: Photo[];
  className?: string;
}) => {
  // for scroll
  const { scrollYProgress } = useScroll();
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [photosInner, setPhotosInner] = useState(photos);
  const third = Math.ceil(photosInner.length / 3);
  const [firstPart, setFirstPart] = useState(photosInner.slice(0, third));
  const [secondPart, setSecondPart] = useState(
    photosInner.slice(third, 2 * third)
  );
  const [thirdPart, setThirdPart] = useState(photosInner.slice(2 * third));
  const [loading, setLoading] = useState(false);
  const isGotAll = useRef(false);
  const bottom = useRef(null);

  useEffect(() => {
    if (bottom.current) {
      const observer = new IntersectionObserver((entries) => {
        if (isGotAll.current) {
          observer.disconnect();
          return;
        }
        if (entries[0].isIntersecting) {
          async function fetchMorePhotos() {
            setLoading(true);
            // TODO tory react query
            const res = await fetch("/photo/api/list", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                limit: 6,
                offset: photosInner.length,
              }),
            });
            const data = await res.json();
            const photos = JSON.parse(data.body);
            if (photos.length === 0) {
              isGotAll.current = true;
            } else {
              setPhotosInner((prevPhotos) => [...prevPhotos, ...photos]);
              const third = Math.ceil(photos.length / 3);
              const firstPart = photos.slice(0, third);
              const secondPart = photos.slice(third, 2 * third);
              const thirdPart = photos.slice(2 * third);
              setFirstPart((prev) => [...prev, ...firstPart]);
              setSecondPart((prev) => [...prev, ...secondPart]);
              setThirdPart((prev) => [...prev, ...thirdPart]);
            }
            setLoading(false);
          }
          fetchMorePhotos();
        }
      });
      observer.observe(bottom.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [photosInner.length]);

  return (
    <div className={cn("w-full items-start", className)}>
      {/* for above md: */}
      <div className="mx-auto hidden max-w-5xl grid-cols-1 items-start gap-10 px-10 md:grid md:grid-cols-2 lg:grid-cols-3">
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
      {/* for under md: */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 px-10 sm:grid-cols-2 md:hidden">
        {photosInner.map((el, idx) => (
          <div className="relative h-96" key={"grid-1" + idx}>
            <PhotoDisplay photo={el} />
          </div>
        ))}
      </div>
      <div
        className={cn(
          "my-4 flex items-center justify-center md:justify-start md:px-10",
          !loading && "hidden"
        )}
      >
        <LoadingCircleIcon className="h-4 w-4 animate-spin md:h-8 md:w-8" />
      </div>
      <div ref={bottom} />
    </div>
  );
};

"use client";
import dayjs from "dayjs";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { Photo } from "@/sanity/schemas/photo";
import { cn } from "@/utils/cn";
import { decimalToFraction } from "@/utils/math";

import { CardBody, CardContainer, CardItem } from "./3d-card";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";

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
              <PhotoItem photo={el} />
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
              <PhotoItem photo={el} />
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
              <PhotoItem photo={el} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 px-10 sm:grid-cols-2 md:hidden">
        {photos.map((el, idx) => (
          <div className="relative h-96" key={"grid-1" + idx}>
            <PhotoItem photo={el} />
          </div>
        ))}
      </div>
    </div>
  );
};

function PhotoItem(props: { photo: Photo }) {
  const { photo } = props;
  const {
    image: {
      asset: { dimensions, exif, url, dominant, lqip },
    },
    title,
  } = photo;

  return (
    <Dialog>
      <DialogTrigger className="h-full w-full select-none">
        <CardContainer>
          <CardBody>
            <CardItem className="h-full w-full">
              <Image
                src={url}
                className="!m-0 h-80 w-full cursor-zoom-in gap-10 rounded-lg object-cover object-center !p-0"
                alt={title || ""}
                placeholder="blur"
                blurDataURL={lqip}
                fill
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </DialogTrigger>

      <DialogContent className="w-5/6 max-w-none overflow-hidden">
        <div>
          <div className="relative flex aspect-[3/2] items-center justify-center">
            <div className="relative flex aspect-[3/2] w-full max-w-7xl items-center">
              <div className="absolute inset-0">
                <Image
                  src={url}
                  width={dimensions.width}
                  height={dimensions.height}
                  placeholder={lqip ? "blur" : "empty"}
                  blurDataURL={lqip}
                  className="mx-auto h-full overflow-hidden object-contain"
                  alt={title || ""}
                />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-6">
            <div className="flex flex-col items-center justify-center text-sm font-light">
              {exif.ISO && <ItemDisplay label="ISO" value={exif.ISO} />}

              {exif.FNumber && (
                <ItemDisplay label="Aperture" value={"ƒ/" + exif.FNumber} />
              )}
              {exif.FocalLength && (
                <ItemDisplay
                  label="Focal Length"
                  value={exif.FocalLength + "mm"}
                />
              )}
              {exif.ExposureTime && (
                <ItemDisplay
                  label="Exposure Time"
                  value={decimalToFraction(exif.ExposureTime)}
                />
              )}
              {exif.LensModel && (
                <ItemDisplay label="Lens" value={exif.LensModel} />
              )}
              {exif.DateTimeOriginal && (
                <ItemDisplay
                  label="Date Taken"
                  value={dayjs(exif.DateTimeOriginal).format("MMM DD, YYYY")}
                />
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const ItemDisplay = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => {
  return (
    <div className="flex w-full items-center justify-between sm:w-1/2">
      <div className="text-neutral-800 dark:text-neutral-300">{label}</div>
      <div className="text-neutral-400">{value}</div>
    </div>
  );
};

"use client";
import dayjs from "dayjs";
import Image from "next/image";

import { Photo } from "@/sanity/schemas/photo";
import { decimalToFraction } from "@/utils/math";

import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export function PhotoDisplay(props: { photo: Photo }) {
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

export const ItemDisplay = ({
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

import Link from "next/link";

import { ArrowRightCircle } from "@/components/icon/arrow-right-circle";
import { PhotoDisplay } from "@/components/photo/photo-display";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { getLatestPhotoList } from "@/sanity/queries/photo";
import type { Photo } from "@/sanity/schemas/photo";
import { cn } from "@/utils";

export default async function PhotoWall(props: { className?: string }) {
  const { className } = props;
  const photos: Photo[] =
    (await getLatestPhotoList({
      limit: 24,
    })) || [];

  return (
    <div className={cn("group", className)}>
      <InfiniteMovingCards speed="slow">
        {photos.map((p) => {
          return (
            <div key={p._id} className="relative h-36 w-24 sm:h-64 sm:w-48">
              <PhotoDisplay photo={p} />
            </div>
          );
        })}
      </InfiniteMovingCards>
      <div className="invisible mt-2 hidden items-center justify-center group-hover:visible group-hover:animate-bounce sm:flex">
        <Link
          href="/photo"
          aria-label="Photo"
          className="inline-flex items-center justify-center gap-x-1 text-sm text-neutral-500"
        >
          <ArrowRightCircle className="h-5 w-5" />
          View All
        </Link>
      </div>
    </div>
  );
}

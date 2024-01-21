import { PhotoDisplay } from "@/components/photo-display";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { getLatestPhotoList } from "@/sanity/queries/photo";
import type { Photo } from "@/sanity/schemas/photo";
import { cn } from "@/utils";

export default async function PhotoWall(props: { className?: string }) {
  const { className } = props;
  const photos: Photo[] =
    (await getLatestPhotoList({
      limit: 12,
    })) || [];

  return (
    <div className={cn(className)}>
      <InfiniteMovingCards speed="slow">
        {photos.map((p) => {
          return (
            <div key={p._id} className="relative h-36 w-24 sm:h-64 sm:w-48">
              <PhotoDisplay photo={p} />
            </div>
          );
        })}
      </InfiniteMovingCards>
    </div>
  );
}

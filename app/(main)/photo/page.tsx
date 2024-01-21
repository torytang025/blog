import { Container } from "@/components/container";
import { ParallaxScroll } from "@/components/photo/parallax-scroll";
import { getLatestPhotoList } from "@/sanity/queries/photo";
import { Photo } from "@/sanity/schemas/photo";

export const revalidate = 60;

export default async function PhotoPage() {
  const photos: Photo[] =
    (await getLatestPhotoList({
      limit: 9,
    })) || [];

  return (
    <Container>
      <ParallaxScroll photos={photos} className="mt-8" />
    </Container>
  );
}

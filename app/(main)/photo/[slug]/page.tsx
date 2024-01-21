import { notFound } from "next/navigation";

import { getPhoto } from "@/sanity/queries/photo";

export default async function PhotoPage({
  params,
}: {
  params: { slug: string };
}) {
  const photo = await getPhoto(params.slug);

  if (!photo) {
    notFound();
  }

  return (
    <div>
      <div>{photo.title}</div>
    </div>
  );
}

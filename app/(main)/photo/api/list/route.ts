import { NextRequest } from "next/server";

import { getLatestPhotoList } from "@/sanity/queries/photo";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { limit, offset } = body;
  const photos = await getLatestPhotoList({ limit, offset });

  const result = {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(photos),
  };

  return Response.json(result);
}

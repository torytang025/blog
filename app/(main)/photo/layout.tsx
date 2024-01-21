import { Suspense } from "react";

import PhotoLoading from "./loading";

export default function PhotoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<PhotoLoading />}>{children}</Suspense>;
}

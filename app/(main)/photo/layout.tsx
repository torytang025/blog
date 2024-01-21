import { Metadata } from "next";
import { Suspense } from "react";

import PhotoLoading from "./loading";

export const metadata: Metadata = {
  title: "Tory's Moments",
  description: "torytang's blog",
};

export default function PhotoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<PhotoLoading />}>{children}</Suspense>;
}

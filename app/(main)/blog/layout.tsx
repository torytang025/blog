import { Metadata } from "next";
import { Suspense } from "react";

import BlogLoading from "./loading";

export const metadata: Metadata = {
  title: "Tory's Blogs",
  description: "torytang's blog",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<BlogLoading />}>{children}</Suspense>;
}

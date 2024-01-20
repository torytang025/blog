import { Suspense } from "react";

import BlogPageLoading from "./loading";

export default function BlogPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<BlogPageLoading />}>{children}</Suspense>;
}

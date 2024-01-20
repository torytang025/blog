import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";

import GridBackground from "@/components/ui/gird-background";

import Header from "./components/header";
import IndexLoading from "./loading";
export default function IndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <GridBackground />
      <div className="fixed inset-0 -z-40 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-neutral-50/90 ring-1 ring-neutral-100 dark:bg-neutral-900/80 dark:ring-neutral-400/20"></div>
        </div>
      </div>

      <Suspense fallback={<IndexLoading />}>{children}</Suspense>

      <Analytics />
      <SpeedInsights />
    </>
  );
}

import GridBackground from "@/components/ui/gird-background";

export default function IndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GridBackground />
      <div className="fixed inset-0 -z-40 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-neutral-50/90 ring-1 ring-neutral-100 dark:bg-neutral-900/80 dark:ring-neutral-400/20"></div>
        </div>
      </div>
      {children}
    </>
  );
}

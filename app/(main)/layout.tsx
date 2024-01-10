import GridBackground from "@/components/ui/gird-background";

export default function IndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GridBackground>{children}</GridBackground>
    </>
  );
}

import { Container } from "@/components/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function PhotoLoading() {
  return (
    <Container className="mt-24">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <Skeleton key={i} className="h-96 w-64" />
        ))}
      </div>
    </Container>
  );
}

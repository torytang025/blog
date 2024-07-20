import { Container } from "@/components/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function AboutLoading() {
  return (
    <Container className="mt-24">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-col gap-4">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <div className="flex flex-col gap-4">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </Container>
  );
}

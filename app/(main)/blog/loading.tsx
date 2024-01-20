import { Container } from "@/components/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogLoading() {
  return (
    <Container className="mt-24">
      <div className="flex flex-col gap-y-4">
        <Skeleton className="h-4 w-12" />
        <div className="l flex flex-col gap-y-4">
          <Skeleton className="h-4 w-72" />
          <Skeleton className="h-2 w-12" />
        </div>

        <Skeleton className="mt-8 h-4 w-12" />
        <div className="l flex flex-col gap-y-4">
          <Skeleton className="h-4 w-72" />
          <Skeleton className="h-2 w-12" />
        </div>
      </div>
    </Container>
  );
}

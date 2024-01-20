import { Container } from "@/components/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPageLoading() {
  return (
    <Container className="mt-24">
      <div className="\ flex flex-col gap-y-4 rounded-3xl">
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </Container>
  );
}

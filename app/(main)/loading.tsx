import { Container } from "@/components/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function IndexLoading() {
  return (
    <Container className="mt-24">
      <div className="flex flex-col justify-center gap-y-12 md:flex-row md:gap-x-16">
        <div className="flex flex-1 justify-start md:justify-end">
          <div className="flex flex-col gap-y-4 md:items-end">
            <Skeleton className="h-12 w-12 rounded-full md:h-24 md:w-24" />
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
        <div className="flex flex-1 justify-start">
          <Skeleton className="h-64 w-64 md:h-96 md:w-96" />
        </div>
      </div>
    </Container>
  );
}

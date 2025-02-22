import { DrawResult } from "@/types/toto";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";
import { DrawSummary } from "./DrawSummary";

export function DrawListSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i}>
          <Skeleton className="h-52 rounded-md" />
          {i < 4 && <Separator className="my-4" />}
        </div>
      ))}
    </div>
  );
}

interface DrawListProps {
  results: DrawResult[];
}

export function DrawList({ results }: DrawListProps) {
  if (results.length === 0) {
    return (
      <div className="py-8 text-center text-muted-foreground">
        No draws found matching your search.
      </div>
    );
  }

  return (
    <section
      key={results.length}
      className="flex flex-col duration-200 animate-in fade-in"
    >
      {results.map((result, index) => (
        <div key={result.drawNumber}>
          <DrawSummary drawResult={result} />
          {index < results.length - 1 && <Separator className="my-4" />}
        </div>
      ))}
    </section>
  );
}

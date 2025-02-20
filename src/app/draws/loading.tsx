import { DrawListSkeleton } from "@/components/draws/DrawList";
import { SearchIcon } from "lucide-react";

export default function Loading() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center">
      <div className="w-full p-6">
        <section className="mb-4 flex flex-col">
          <div className="mb-4 flex items-baseline justify-between">
            <h1 className="text-3xl font-medium">Draws</h1>
            <div className="h-4 w-16 animate-pulse rounded bg-muted" />
          </div>

          <div className="relative">
            <div className="flex h-10 items-center rounded-md bg-muted px-3">
              <SearchIcon className="h-4 w-4 text-muted-foreground opacity-50" />
              <div className="ml-2 h-5 flex-1 animate-pulse rounded bg-muted-foreground/15" />
            </div>
          </div>
        </section>

        <DrawListSkeleton />
      </div>
    </main>
  );
}

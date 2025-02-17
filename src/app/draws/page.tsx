import { DrawSummary } from "@/components/draws/DrawSummary";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { DrawResult } from "@/types/toto";
import { SearchIcon } from "lucide-react";

export default async function Page() {
  const fetchDraws = async () => {
    const response = await fetch("http://localhost:8000/draws");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  };

  // Fetch results
  let results: DrawResult[];
  try {
    results = await fetchDraws();
  } catch (err) {
    console.error(err);
    return <div>Failed to fetch draws</div>;
  }

  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center">
      <div className="w-full p-6">
        <section className="mb-4 flex flex-col">
          <div className="mb-4 flex items-baseline justify-between">
            <h1 className="text-3xl font-medium">Draws</h1>
            <span className="text-muted-foreground">
              {results.length} results
            </span>
          </div>

          <div className="flex h-10 items-center rounded-md bg-muted px-3 ring-offset-background">
            <SearchIcon className="h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Filter results"
              className="w-64 border-none bg-transparent p-2 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </section>

        <section className="flex flex-col">
          {results.map((result, index) => (
            <div key={result.drawNumber}>
              <DrawSummary drawResult={result} />
              {index < results.length - 1 && <Separator className="my-4" />}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

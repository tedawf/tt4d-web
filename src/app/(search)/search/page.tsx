import { LotterySummary } from "@/components/LotterySummary";
import { DrawResult } from "@/types/toto";
import { XIcon } from "lucide-react";
import { redirect } from "next/navigation";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const query = params.query;

  if (Array.isArray(query) || !query) {
    redirect("/");
  }

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
    console.log(results);
  } catch (err) {
    console.error(err);
    return <div>Failed to fetch draws</div>;
  }

  if (results.length === 0) {
    return (
      <div className="rounded-b-md bg-white py-4 text-center shadow-md">
        <XIcon className="mx-auto h-8 w-8 text-muted-foreground" />
        <h3 className="mt-2 text-sm font-semibold text-foreground">
          No results
        </h3>
        <p className="mx-auto mt-1 max-w-prose text-sm text-muted-foreground">
          Sorry, we couldn&apos;t find any matches for{"  "}
          <span className="font-medium text-green-600">{query}</span>.
        </p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {results.map((result) => (
        <LotterySummary key={result.drawNumber} drawResult={result} />
      ))}
    </section>
  );
}

import { DrawList } from "@/components/draws/DrawList";
import { DrawPagination } from "@/components/draws/DrawPagination";
import { SearchNumbers } from "@/components/draws/SearchNumbers";
import { DrawResult } from "@/types/toto";

const RESULTS_PER_PAGE = 10;

async function fetchDraws(skip = 0, limit = 0) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  const response = await fetch(`${API_URL}/draws?skip=${skip}&limit=${limit}`, {
    next: {
      revalidate: 60, // 60 seconds
      tags: ["refresh-draws"],
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return (await response.json()) as DrawResult[];
}

function filterDraws(draws: DrawResult[], searchTerm: string) {
  if (!searchTerm) return draws;

  const searchNumbers = searchTerm
    .split(" ")
    .map((num) => Number(num.trim()))
    .filter((num) => !isNaN(num));

  if (searchNumbers.length === 0) return draws;

  return draws.filter((draw) => {
    return searchNumbers.every((num) => draw.winningNumbers.includes(num));
  });
}

interface PageProps {
  searchParams: Promise<{
    search?: string;
    page?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const searchTerm = params.search || "";
  const currentPage = Number(params.page) || 1;

  // Fetch data once at the top level
  const results = await fetchDraws(0, 5000);
  const filteredResults = searchTerm
    ? filterDraws(results, searchTerm)
    : results;

  const totalPages = Math.ceil(filteredResults.length / RESULTS_PER_PAGE);
  const paginatedDraws = filteredResults.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE,
  );

  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center">
      <div className="w-full p-6">
        <section className="mb-4 flex flex-col">
          <div className="mb-4 flex items-baseline justify-between">
            <h1 className="text-3xl font-medium">Draws</h1>
            <span className="text-muted-foreground">
              {filteredResults.length} results
            </span>
          </div>

          <SearchNumbers initialValue={searchTerm} />
        </section>

        <DrawList results={paginatedDraws} />

        {totalPages > 1 && (
          <DrawPagination
            currentPage={currentPage}
            totalPages={totalPages}
            searchTerm={searchTerm}
          />
        )}
      </div>
    </main>
  );
}

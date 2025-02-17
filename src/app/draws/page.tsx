import { DrawList } from "@/components/draws/DrawList";
import { DrawListSkeleton } from "@/components/draws/DrawListSkeleton";
import { DrawPagination } from "@/components/draws/DrawPagination";
import { SearchForm } from "@/components/draws/SearchForm";
import { Suspense } from "react";
import { fetchDraws } from "./actions";

const RESULTS_PER_PAGE = 20;

export default async function Page({
  searchParams,
}: {
  searchParams: { search?: string; page?: string };
}) {
  const results = await fetchDraws(0, 5000);
  const params = await searchParams;
  const searchTerm = params.search || "";
  const currentPage = Number(params.page) || 1;

  // Split search term into individual numbers
  const searchNumbers = searchTerm
    .split(/[\s+]+/) // split "+" or " "
    .map((num) => num.trim())
    .filter((num) => num.length > 0)
    .map(Number);

  // Server-side filtering with multiple numbers
  const filteredResults = searchTerm
    ? results.filter((draw) => {
        // Check if any search number exactly matches the draw number
        const matchesDrawNumber = searchNumbers.some(
          (searchNum) => draw.drawNumber === searchNum,
        );

        if (matchesDrawNumber) return true;

        // Check if ALL search numbers exist in winning numbers
        return searchNumbers.every((searchNum) =>
          draw.winningNumbers.includes(searchNum),
        );
      })
    : results;

    console.log('Search Term:', searchTerm);

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

          <SearchForm initialValue={searchTerm} />
        </section>

        <Suspense fallback={<DrawListSkeleton />}>
          <DrawList results={paginatedDraws} />
        </Suspense>

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

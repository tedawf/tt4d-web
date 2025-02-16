import { LotterySummary } from "@/components/LotterySummary";
import { DrawResult } from "@/types/toto";

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
    console.log(results);
  } catch (err) {
    console.error(err);
    return <div>Failed to fetch draws</div>;
  }

  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {results.map((result) => (
        <LotterySummary key={result.drawNumber} drawResult={result} />
      ))}
    </section>
  );
}

import LotteryResult from "@/components/LotteryResult";
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

  async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Artificial delay
    return [
      {
        drawDate: new Date("2024-01-29"),
        drawNumber: "1234",
        winningNumbers: [1, 14, 24, 36, 42, 49],
        additionalNumber: 7,
        jackpot: "1,000,000",
      },
      {
        drawDate: new Date("2024-01-28"),
        drawNumber: "1233",
        winningNumbers: [2, 15, 25, 37, 43, 48],
        additionalNumber: 8,
        jackpot: "2,000,000",
      },
      {
        drawDate: new Date("2024-01-27"),
        drawNumber: "1232",
        winningNumbers: [3, 16, 26, 38, 44, 47],
        additionalNumber: 9,
        jackpot: "1,500,000",
      },
    ];
  }

  async function LotteryResults() {
    const results = await getData();

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
      <ul className="divide-y divide-muted rounded-b-md bg-background shadow-md">
        {results.map((result) => (
          <li key={result.drawNumber}>
            <LotteryResult
              drawDate={result.drawDate.toLocaleDateString()}
              drawNumber={result.drawNumber}
              winningNumbers={result.winningNumbers}
              additionalNumber={result.additionalNumber}
              jackpot={result.jackpot}
            />
          </li>
        ))}
      </ul>
    );
  }

  return <LotteryResults />;
}

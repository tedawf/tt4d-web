import { DrawHeader } from "@/components/draws/DrawHeader";
import { LocationGroup } from "@/components/draws/LocationGroup";
import { PrizeGroup } from "@/components/draws/PrizeGroup";
import { WinningNumbers } from "@/components/draws/WinningNumbers";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { DrawDetails } from "@/types/toto";
import { TriangleAlertIcon } from "lucide-react";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    drawNumber: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { drawNumber } = await params;

  if (!drawNumber) return notFound();

  async function fetchDrawResult() {
    const response = await fetch("http://localhost:8000/draws/" + drawNumber);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  }

  const result = (await fetchDrawResult()) as DrawDetails;

  if (!result) return notFound();

  const { drawResult, winningShares, snowballInfo, winningLocations } = result;
  const {
    drawNumber: drawNo,
    drawDate,
    winningNumbers,
    additionalNumber,
    totalWinners,
    totalPrize,
  } = drawResult;

  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center gap-8 p-6">
      <DrawHeader
        drawNumber={drawNo}
        drawDate={drawDate}
        totalWinners={totalWinners}
        totalPrize={totalPrize}
      />

      <WinningNumbers
        winningNumbers={winningNumbers}
        additionalNumber={additionalNumber}
      />

      {snowballInfo.length > 0 &&
        snowballInfo.map((info) => (
          <Alert
            key={info.groupNumber}
            className="rounded-lg border border-amber-500/50 px-4 py-3 text-amber-600"
          >
            <AlertDescription className="text-sm">
              <TriangleAlertIcon
                className="-mt-0.5 me-3 inline-flex opacity-60"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
              <strong>Group {info.groupNumber}</strong> has no winner and the
              prize amount of <strong>${info.amount.toLocaleString()}</strong>{" "}
              will be snowballed to the next draw.
            </AlertDescription>
          </Alert>
        ))}

      {winningShares.length > 0 && <PrizeGroup winningShares={winningShares} /> }

      {winningLocations.length > 0 && <LocationGroup
        snowballInfo={snowballInfo}
        winningShares={winningShares}
        winningLocations={winningLocations}
      />}
    </main>
  );
}

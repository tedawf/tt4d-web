import { DrawHeader } from "@/components/draws/DrawHeader";
import { LocationGroup } from "@/components/draws/LocationGroup";
import { PrizeGroup } from "@/components/draws/PrizeGroup";
import { WinningNumbers } from "@/components/draws/WinningNumbers";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { DrawDetails, SnowballInfo } from "@/types/toto";
import { TriangleAlertIcon } from "lucide-react";
import { notFound } from "next/navigation";

async function fetchDrawDetails(drawNumber: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  const response = await fetch(`${API_URL}/draws/${drawNumber}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return (await response.json()) as DrawDetails;
}

interface SnowballAlertsProps {
  snowballInfo: SnowballInfo[];
}

function SnowballAlerts({ snowballInfo }: SnowballAlertsProps) {
  return (
    <>
      {snowballInfo.map((info) => (
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
    </>
  );
}

interface PageProps {
  // must be params, special nextjs props
  params: {
    drawNumber: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { drawNumber } = await params;

  if (!drawNumber) return notFound();

  const result = await fetchDrawDetails(drawNumber);
  if (!result) return notFound();

  const {
    drawResult: {
      drawNumber: drawNo,
      drawDate,
      winningNumbers,
      additionalNumber,
      totalWinners,
      totalPrize,
    },
    winningShares,
    snowballInfo,
    winningLocations,
  } = result;

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

      {snowballInfo.length > 0 && (
        <SnowballAlerts snowballInfo={snowballInfo} />
      )}

      {winningShares.length > 0 && <PrizeGroup winningShares={winningShares} />}

      {winningLocations.length > 0 && (
        <LocationGroup
          snowballInfo={snowballInfo}
          winningShares={winningShares}
          winningLocations={winningLocations}
        />
      )}
    </main>
  );
}

import BackButton from "@/components/BackButton";
import { GroupDetails } from "@/components/GroupDetails";
import { LotteryNumber } from "@/components/LotteryNumber";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DrawDetails } from "@/types/toto";
import { DollarSignIcon, TriangleAlertIcon, UsersIcon } from "lucide-react";
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

  return (
    <article className="min-h-screen px-4 py-8">
      <Card className="mx-auto max-w-4xl border-none shadow-none">
        <CardHeader>
          <BackButton />

          <div className="grid grid-cols-2 gap-6">
            <div>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Draw Number
              </CardTitle>
              <p className="text-2xl font-semibold">#{drawResult.drawNumber}</p>
            </div>
            <div>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Draw Date
              </CardTitle>
              <time
                dateTime={new Date(drawResult.drawDate).toDateString()}
                className="text-2xl font-semibold"
              >
                {new Date(drawResult.drawDate).toLocaleDateString()}
              </time>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          <section>
            <h3 className="mb-4 text-lg font-semibold">Winning Numbers</h3>
            <div className="mb-4 flex flex-wrap justify-center gap-4">
              {drawResult.winningNumbers.map((num, i) => (
                <LotteryNumber key={i} digit={num} size="large" />
              ))}
            </div>
            <div className="flex justify-center">
              <LotteryNumber
                digit={drawResult.additionalNumber}
                isAdditional
                size="large"
              />
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <UsersIcon size={32} className="mb-2" />
                <span className="text-sm text-muted-foreground">
                  Total Winners
                </span>
                <span className="text-2xl font-semibold">
                  {drawResult.totalWinners.toLocaleString()}
                </span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <DollarSignIcon size={32} className="mb-2" />
                <span className="text-sm text-muted-foreground">
                  Prize Pool
                </span>
                <span className="text-2xl font-semibold">
                  ${drawResult.totalPrize.toLocaleString()}
                </span>
              </CardContent>
            </Card>
          </section>

          <section>
            <h3 className="mb-4 text-lg font-semibold">Prize Groups</h3>

            {snowballInfo.length > 0 &&
              snowballInfo.map((info) => (
                <Alert
                  key={info.groupNumber}
                  className="mb-4 rounded-lg border border-amber-500/50 px-4 py-3 text-amber-600"
                >
                  <AlertDescription className="text-sm">
                    <TriangleAlertIcon
                      className="-mt-0.5 me-3 inline-flex opacity-60"
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <strong>Group {info.groupNumber}</strong> has no winner and
                    the prize amount of{" "}
                    <strong>${info.amount.toLocaleString()}</strong> will be
                    snowballed to the next draw.
                  </AlertDescription>
                </Alert>
              ))}

            <div className="space-y-4">
              <GroupDetails
                group={1}
                amount={winningShares[0].shareAmount}
                winners={winningShares[0].winnerCount}
                locations={winningLocations.filter(
                  (loc) => loc.groupNumber === 1,
                )}
              />
              <GroupDetails
                group={2}
                amount={winningShares[1].shareAmount}
                winners={winningShares[1].winnerCount}
                locations={winningLocations.filter(
                  (loc) => loc.groupNumber === 2,
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                {result.winningShares.slice(2).map((group) => (
                  <GroupDetails
                    key={group.groupNumber}
                    group={group.groupNumber}
                    amount={group.shareAmount}
                    winners={group.winnerCount}
                  />
                ))}
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
    </article>
  );
}

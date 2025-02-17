import { DrawResult } from "@/types/toto";
import { CalendarIcon, ExternalLinkIcon, MedalIcon } from "lucide-react";
import Link from "next/link";
import { LotteryNumber } from "../LotteryNumber";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";

interface Props {
  drawResult: DrawResult;
}

export const LotterySummary = ({ drawResult }: Props) => {
  const {
    drawDate,
    drawNumber,
    winningNumbers,
    additionalNumber,
    jackpot,
    totalWinners,
    totalPrize,
  } = drawResult;

  const encodedDrawNumber = btoa(`DrawNumber=${drawNumber}`);

  return (
    <Card className="group border-none shadow-none">
      <Link href={`/draws/${drawNumber}`}>
        <CardHeader className="relative px-0">
          <div className="flex flex-row items-baseline gap-4">
            <CardTitle className="font-medium group-hover:underline">
              Draw No. {drawNumber}
            </CardTitle>
            <CardDescription className="flex items-baseline gap-1 text-muted-foreground">
              <CalendarIcon size={16} />
              <time dateTime={new Date(drawDate).toDateString()}>
                {new Date(drawDate).toLocaleDateString()}
              </time>
            </CardDescription>
          </div>

          <div className="absolute right-0 top-0 flex flex-col items-end gap-1 pt-4">
            <span className="text-xl font-medium">
              ${jackpot.toLocaleString()}
            </span>
            <Badge variant="secondary" className="flex items-center gap-1 py-1">
              <MedalIcon size={16} />
              <span>jackpot</span>
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="flex flex-wrap gap-2 px-0">
          {winningNumbers.map((num) => (
            <LotteryNumber key={num} digit={num} />
          ))}
          <LotteryNumber
            key={additionalNumber}
            digit={additionalNumber}
            isAdditional
          />
        </CardContent>
      </Link>

      <CardFooter className="flex items-center gap-2 px-0 text-sm text-muted-foreground">
        <Button
          variant="link"
          asChild
          className="text-muted-foreground hover:text-primary"
        >
          <Link
            href={
              "https://www.singaporepools.com.sg/en/product/sr/Pages/toto_results.aspx?sppl=" +
              encodedDrawNumber
            }
            className="gap-1 px-0 underline underline-offset-1"
          >
            <ExternalLinkIcon />
            <span>view source</span>
          </Link>
        </Button>
        <Separator orientation="vertical" className="h-5" />
        <p>{totalWinners.toLocaleString()} total winners</p>
        <Separator orientation="vertical" className="h-5" />
        <p>${totalPrize.toLocaleString()} total prize</p>
      </CardFooter>
    </Card>
  );
};

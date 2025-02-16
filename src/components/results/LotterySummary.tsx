import { DrawResult } from "@/types/toto";
import { CalendarIcon, ExternalLinkIcon, TrophyIcon } from "lucide-react";
import Link from "next/link";
import { LotteryNumber } from "../LotteryNumber";
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
  const { drawDate, drawNumber, winningNumbers, additionalNumber, jackpot } =
    drawResult;

  return (
    <Card className="group border-none shadow-none">
      <Link href={`/draws/${drawNumber}`}>
        <CardHeader className="flex flex-row items-baseline justify-between px-0">
          <div className="flex flex-row gap-4">
            <CardTitle className="group-hover:underline font-medium">
              Draw No. {drawNumber}
            </CardTitle>
            <CardDescription className="flex items-center gap-1 text-muted-foreground">
              <CalendarIcon size={16} />
              <time dateTime={new Date(drawDate).toDateString()}>
                {new Date(drawDate).toLocaleDateString()}
              </time>
            </CardDescription>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <TrophyIcon size={18} />
            <span className="font-medium">${jackpot.toLocaleString()}</span>
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
          <Link href="/" className="gap-1 px-0 underline underline-offset-1">
            <ExternalLinkIcon />
            <span>view source</span>
          </Link>
        </Button>
        <Separator orientation="vertical" className="h-5" />
        <p>100 total winners</p>
        <Separator orientation="vertical" className="h-5" />
        <p>10000 total prize</p>
      </CardFooter>
    </Card>
  );
};

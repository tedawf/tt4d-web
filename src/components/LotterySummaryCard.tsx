import { DrawResult } from "@/types/draw";
import { CalendarIcon, ChevronRightIcon, TrophyIcon } from "lucide-react";
import { LotteryNumber } from "./LotteryNumber";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface Props {
  drawResult: DrawResult;
}

export const LotterySummaryCard = ({ drawResult }: Props) => {
  const { drawDate, drawNumber, winningNumbers, additionalNumber, jackpot } =
    drawResult;

  return (
    <Card className="transition-shadow duration-300 hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <CalendarIcon size={16} className="text-muted-foreground" />
          <span className="font-medium">
            {new Date(drawDate).toLocaleDateString()}
          </span>
        </div>
        <Badge variant="secondary">Draw #{drawNumber}</Badge>
      </CardHeader>
      <CardContent>
        <div className="mb-2 grid grid-cols-6 gap-1 sm:gap-2">
          {winningNumbers.map((num, i) => (
            <LotteryNumber key={i} digit={num} />
          ))}
        </div>

        <div className="mb-4 flex justify-center">
          <LotteryNumber digit={additionalNumber} isAdditional />
        </div>

        {/* Jackpot */}
        <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrophyIcon size={18} />
              <span className="font-medium">Jackpot</span>
            </div>
            <Badge variant="outline">1 winner</Badge>
          </div>

          <div className="text-2xl font-bold">${jackpot.toLocaleString()}</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="flex w-full items-center justify-between">
          <span className="font-medium">View more</span>
          <ChevronRightIcon
            size={16}
            className="transform transition-transform duration-300 group-hover:translate-x-4"
          />
        </Button>
      </CardFooter>
    </Card>
  );
};

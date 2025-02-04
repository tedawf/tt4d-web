import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import WinningNumbers from "./WinningNumbers";

interface LotteryResultProps {
  drawDate: string;
  drawNumber: string;
  winningNumbers: number[];
  additionalNumber: number;
  jackpot: string;
}

export default function LotteryResult({
  drawDate,
  drawNumber,
  winningNumbers,
  additionalNumber,
  jackpot,
}: LotteryResultProps) {
  return (
    <Link href={`/draws/${drawNumber}`}>
      <Card>
        <CardHeader className="flex items-start justify-between">
          <CardDescription className="text-xl">{drawDate}</CardDescription>
          <CardTitle>Draw #{drawNumber}</CardTitle>
        </CardHeader>
        <CardContent>
          <WinningNumbers
            winningNumbers={winningNumbers}
            additionalNumber={additionalNumber}
          />
        </CardContent>
        <CardHeader className="flex flex-row justify-between">
          <div>
            <CardTitle>${jackpot}</CardTitle>
            <CardDescription className="text-xl">Jackpot</CardDescription>
          </div>
          <Button className="rounded-full text-lg font-medium">
            Details
            <ChevronRightIcon />
          </Button>
        </CardHeader>
      </Card>
    </Link>
  );
}

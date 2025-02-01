import { CalendarIcon, DollarSignIcon, HashIcon } from "lucide-react";
import Link from "next/link";

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
      <div className="mx-auto flex cursor-pointer items-center justify-between px-8 py-4 transition-colors hover:bg-muted/50">
        {/* draw info */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarIcon className="h-4 w-4" />
            <span>{drawDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <HashIcon className="h-4 w-4" />
            <span>{drawNumber}</span>
          </div>
        </div>
        {/* winning numbers */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            {winningNumbers.map((num) => (
              <div
                key={num}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground"
              >
                {num}
              </div>
            ))}
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive text-sm font-medium text-destructive-foreground">
            {additionalNumber}
          </div>
        </div>
        {/* jackpot */}
        <div className="flex items-center gap-2">
          <DollarSignIcon className="h-4 w-4 text-green-500" />
          <span className="font-medium">{jackpot}</span>
        </div>
      </div>
    </Link>
  );
}

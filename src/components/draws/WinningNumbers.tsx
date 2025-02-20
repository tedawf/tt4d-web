import { cn } from "@/lib/utils";

interface LotteryNumberProps {
  digit: number;
  isAdditional?: boolean;
  size?: "default" | "large";
}

export function LotteryNumber({
  digit,
  isAdditional,
  size = "default",
}: LotteryNumberProps) {
  return (
    <p
      className={cn(
        "flex items-center justify-center rounded-full font-semibold",
        size === "large" ? "h-16 w-16 text-2xl" : "h-12 w-12 text-lg",
        isAdditional ? "bg-foreground text-background" : "border-2",
      )}
    >
      {digit}
    </p>
  );
}

interface WinningNumbersProps {
  winningNumbers: number[];
  additionalNumber: number;
}

export function WinningNumbers({
  winningNumbers,
  additionalNumber,
}: WinningNumbersProps) {
  return (
    <div className="w-full">
      <h2 className="mb-6 text-xl">Winning Combination</h2>
      <div className="flex flex-wrap gap-4">
        {winningNumbers.map((num, i) => (
          <LotteryNumber key={i} digit={num} size="large" />
        ))}
        <LotteryNumber digit={additionalNumber} isAdditional size="large" />
      </div>
    </div>
  );
}

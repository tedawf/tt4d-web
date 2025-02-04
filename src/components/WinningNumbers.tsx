import { PlusIcon } from "lucide-react";
import { Badge } from "./ui/badge";

interface WinningNumbersProps {
  winningNumbers: number[];
  additionalNumber: number;
}

export default function WinningNumbers({
  winningNumbers,
  additionalNumber,
}: WinningNumbersProps) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {winningNumbers.map((number, index) => (
        <Badge
          key={index}
          className="size-12 justify-center rounded-full bg-primary text-2xl font-bold"
        >
          {number}
        </Badge>
      ))}
      <PlusIcon />
      <Badge className="size-12 justify-center rounded-full bg-destructive text-2xl font-bold">
        {additionalNumber}
      </Badge>
    </div>
  );
}

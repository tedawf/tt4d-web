import { LotteryNumber } from "./LotteryNumber";
import { Card, CardContent } from "../ui/card";

interface Props {
  winningNumbers: number[];
  additionalNumber: number;
}

export const WinningNumbers = ({
  winningNumbers,
  additionalNumber,
}: Props) => {
  return (
    <Card className="w-full border-none py-4 shadow-none">
      <CardContent className="flex flex-wrap gap-4 px-0">
        {winningNumbers.map((num, i) => (
          <LotteryNumber key={i} digit={num} size="large" />
        ))}
        <LotteryNumber digit={additionalNumber} isAdditional size="large" />
      </CardContent>
    </Card>
  );
};

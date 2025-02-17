import { LotteryNumber } from "./LotteryNumber";

interface Props {
  winningNumbers: number[];
  additionalNumber: number;
}

export const WinningNumbers = ({ winningNumbers, additionalNumber }: Props) => {
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
};

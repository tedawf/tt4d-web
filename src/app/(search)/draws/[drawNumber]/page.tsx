import BackButton from "@/components/BackButton";
import Jackpot from "@/components/Jackpot";
import WinningLocations from "@/components/WinningLocations";
import DrawInfo from "@/components/DrawInfo";
import WinningShares from "@/components/WinningShares";
import { notFound } from "next/navigation";

const SAMPLE_DATA = {
  drawDate: new Date("2024-01-29"),
  drawNumber: 4043,
  winningNumbers: [3, 7, 11, 13, 34, 35],
  additionalNumber: 17,
  groupOnePrize: 6088704,
  winningShares: [
    { group: 1, amount: 3044352, shares: 2 },
    { group: 2, amount: 91930, shares: 7 },
    { group: 3, amount: 1564, shares: 283 },
    { group: 4, amount: 263, shares: 918 },
    { group: 5, amount: 50, shares: 15475 },
    { group: 6, amount: 25, shares: 23902 },
    { group: 7, amount: 10, shares: 274774 },
  ],
  winningLocations: {
    groupOne: [
      "Singapore Pools Account Betting Service - - ( 1 QuickPick System 7 Entry )",
      "Singapore Pools Yishun N1 Branch - Block 101 Yishun Avenue 5 #01-37 ( 1 Ordinary Entry )",
    ],
    groupTwo: [
      "Singapore Pools Account Betting Service - - ( 1 QuickPick System 7 Entry )",
      "Singapore Pools Account Betting Service - - ( 1 QuickPick System 7 Entry )",
      "Singapore Pools Account Betting Service - - ( 1 QuickPick Ordinary Entry )",
      "Tampines Trading - 828 - Block 828 Tampines Street 81 #01-234 ( 1 QuickPick Ordinary Entry )",
      "Prime Punggol Field - Block 108 Punggol Field #01-02 ( 1 System 8 Entry )",
      "Singapore Pools Account Betting Service - - ( 1 System 8 Entry )",
      "Ng Teo Guan Self Service - Block 301 Ubi Avenue 1 #01-241 ( 1 System 7 Entry )",
    ],
  },
};

interface PageProps {
  params: {
    drawNumber: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { drawNumber } = await params;

  if (!drawNumber) return notFound();

  async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 1)); // Artificial delay
    return SAMPLE_DATA;
  }

  const result = await getData();

  if (!result) return notFound();

  return (
    <main className="mt-4 flex flex-col gap-4">
      <div className="flex">
        <BackButton />
      </div>
      <DrawInfo
      drawNumber={result.drawNumber}
      drawDate={result.drawDate}
        winningNumbers={result.winningNumbers}
        additionalNumber={result.additionalNumber}
      />
      <Jackpot prize={result.groupOnePrize}/>
      <WinningShares winningShares={result.winningShares} />
      <WinningLocations winningLocations={result.winningLocations} />
    </main>
  );
}

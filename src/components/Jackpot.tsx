import { DollarSignIcon } from "lucide-react";
import { NeonGradientCard } from "./ui/neon-gradient-card";
import { NumberTicker } from "./ui/number-ticker";

interface JackpotProps {
  prize: number;
}

export default function Jackpot({ prize }: JackpotProps) {
  return (
    <NeonGradientCard
      className="-z-10 flex h-32 items-center justify-center text-center"
      neonColors={{ firstColor: "#FF0000", secondColor: "#FFFF00" }}
    >
      <h1 className="text-2xl font-semibold">Group 1 Prize</h1>
      <div className="flex items-center justify-center">
        <DollarSignIcon className="h-8 w-8" />
        <NumberTicker
          value={prize}
          className="text-5xl font-medium tracking-tighter"
        />
      </div>
    </NeonGradientCard>
  );
}

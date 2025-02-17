import { GroupDetail } from "@/types/toto";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";

interface Props {
  winningShares: GroupDetail[];
}

interface PrizeStruct {
  prizeGroup: string;
  numbersMatched: string;
  prizeAmount: string;
}

const PRIZE_STRUCTURE: PrizeStruct[] = [
  {
    prizeGroup: "Group 1 (Jackpot)",
    numbersMatched: "6 Winning Numbers",
    prizeAmount: "38% of prize pool (min $1,000,000)",
  },
  {
    prizeGroup: "Group 2",
    numbersMatched: "5 Winning Numbers + 1",
    prizeAmount: "8% of prize pool",
  },
  {
    prizeGroup: "Group 3",
    numbersMatched: "5 Winning Numbers",
    prizeAmount: "5.5% of prize pool",
  },
  {
    prizeGroup: "Group 4",
    numbersMatched: "4 Winning Numbers + 1",
    prizeAmount: "3% of prize pool",
  },
  {
    prizeGroup: "Group 5",
    numbersMatched: "4 Winning Numbers",
    prizeAmount: "$50",
  },
  {
    prizeGroup: "Group 6",
    numbersMatched: "3 Winning Numbers + 1",
    prizeAmount: "$25",
  },
  {
    prizeGroup: "Group 7",
    numbersMatched: "3 Winning Numbers",
    prizeAmount: "$10",
  },
];

export const PrizeGroup = ({ winningShares }: Props) => {
  return (
    <Card className="w-full border-none px-0 shadow-none">
      <CardHeader className="px-0">
        <CardTitle className="text-xl font-medium">Prize Groups</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <section>chart coming soon...</section>
        <section>
          {winningShares.map((share, index) => (
            <div key={share.groupNumber}>
              <Card className="border-none shadow-none">
                <CardHeader className="flex flex-row items-baseline justify-between py-2">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-lg font-medium">
                      <h4>
                        {PRIZE_STRUCTURE[share.groupNumber - 1].prizeGroup}
                      </h4>
                      <Badge variant="secondary">
                        {share.winnerCount.toLocaleString()} winner
                        {share.winnerCount > 1 && "s"}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="flex gap-2 overflow-hidden text-ellipsis py-2">
                      <span>
                        {PRIZE_STRUCTURE[share.groupNumber - 1].numbersMatched}
                      </span>
                      <Separator orientation="vertical" className="h-5" />
                      <span>
                        {PRIZE_STRUCTURE[share.groupNumber - 1].prizeAmount}
                      </span>
                    </CardDescription>
                  </div>

                  <CardDescription className="flex flex-col items-end justify-start text-right">
                    <span className="text-lg text-foreground">
                      $
                      {(share.winnerCount * share.shareAmount).toLocaleString()}
                    </span>
                    <span>
                      ${share.shareAmount.toLocaleString()} per winner
                    </span>
                  </CardDescription>
                </CardHeader>
              </Card>
              {index < winningShares.length - 1 && <Separator />}
            </div>
          ))}
        </section>
      </CardContent>
    </Card>
  );
};

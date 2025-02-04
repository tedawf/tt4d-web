import { TrophyIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface WinningSharesProps {
  winningShares: {
    group: number;
    amount: number;
    shares: number;
  }[];
}

export default function WinningShares({ winningShares }: WinningSharesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Winning Shares</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {winningShares.map((prize) => (
          <Alert key={prize.group}>
            <TrophyIcon className="h-4 w-4" />
            <AlertTitle>Group {prize.group}</AlertTitle>
            {prize.shares === 0 ? (
              <AlertDescription className="text-muted-foreground">
                <span className="font-semibold text-foreground">
                  ${prize.amount.toLocaleString()}
                </span>
                {"  "}
                has no winners and will be snowballed to the next draw.
              </AlertDescription>
            ) : (
              <AlertDescription className="text-muted-foreground">
                <span className="font-semibold text-foreground">
                  ${prize.amount.toLocaleString()}
                </span>
                {"  "}
                shared by{"  "}
                <span className="font-semibold text-foreground">
                  {prize.shares.toLocaleString()}
                </span>
                {"  "}
                winners.
              </AlertDescription>
            )}
          </Alert>
        ))}
      </CardContent>
    </Card>
  );
}

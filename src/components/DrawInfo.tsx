import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import WinningNumbers from "./WinningNumbers";

interface DrawInfoProps {
  drawNumber: number;
  drawDate: Date;
  winningNumbers: number[];
  additionalNumber: number;
}

export default function DrawInfo({
  drawNumber,
  drawDate,
  winningNumbers,
  additionalNumber,
}: DrawInfoProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div className="space-y-2">
          <CardTitle className="flex items-center justify-between">
            Draw No. {drawNumber}
          </CardTitle>
          <CardDescription>Winning Combination</CardDescription>
        </div>
        <Badge variant="outline" className="rounded-md text-sm">
          {drawDate.toDateString()}
        </Badge>
      </CardHeader>

      <CardContent>
        <WinningNumbers
          winningNumbers={winningNumbers}
          additionalNumber={additionalNumber}
        />
      </CardContent>
    </Card>
  );
}

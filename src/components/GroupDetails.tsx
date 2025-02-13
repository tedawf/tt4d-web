import { WinningLocation } from "@/types/toto";
import { UsersIcon } from "lucide-react";
import { LocationDetails } from "./LocationDetails";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

interface Props {
  group: number;
  amount: number;
  winners: number;
  locations?: WinningLocation[];
}

export const GroupDetails = ({ group, amount, winners, locations }: Props) => {
  return (
    <Card className="w-full shadow-sm">
      <CardContent className="flex flex-col space-y-6 p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Group {group}</h3>
            <div className="flex items-center gap-2">
              <UsersIcon size={20} className="text-muted-foreground" />
              <Badge variant={group < 3 ? "default" : "secondary"}>
                {winners} winners
              </Badge>
            </div>
          </div>

          <div className="text-right">
            <p className="text-2xl font-semibold">${amount.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">per share</p>
          </div>
        </div>

        {locations && <LocationDetails locations={locations || []} />}
      </CardContent>
    </Card>
  );
};

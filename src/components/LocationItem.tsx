import { WinningLocation } from "@/types/toto";
import { Badge } from "./ui/badge";

export const LocationItem = ({
  outletName,
  address,
  entryType,
}: WinningLocation) => {
  return (
    <div className="rounded-md border p-4">
      <div className="mb-1 flex items-start justify-between">
        <h4 className="text-md font-semibold">{outletName}</h4>
        <Badge variant="secondary">{entryType}</Badge>
      </div>
      <p className="text-sm text-muted-foreground">{address}</p>
    </div>
  );
};

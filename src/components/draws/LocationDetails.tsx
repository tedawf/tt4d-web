import { WinningLocation } from "@/types/toto";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Badge } from "../ui/badge";

function LocationItem({ outletName, address, entryType }: WinningLocation) {
  return (
    <div className="rounded-md border p-4">
      <div className="mb-1 flex items-start justify-between">
        <h4 className="text-md font-semibold">{outletName}</h4>
        <Badge variant="secondary">{entryType}</Badge>
      </div>
      <p className="text-sm text-muted-foreground">{address}</p>
    </div>
  );
}

interface LocationDetailsProps {
  locations: WinningLocation[];
}

export function LocationDetails({ locations }: LocationDetailsProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="locations" className="border-0">
        <AccordionTrigger className="py-0 hover:no-underline">
          <span className="text-base font-semibold">Winning Locations</span>
        </AccordionTrigger>
        <AccordionContent className="space-y-3 pt-4">
          {locations.map((location, i) => (
            <LocationItem
              key={i}
              groupNumber={location.groupNumber}
              outletName={location.outletName}
              address={location.address}
              entryType={location.entryType}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

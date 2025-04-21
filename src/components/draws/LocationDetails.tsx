import { WinningTicket } from "@/types/toto";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Badge } from "../ui/badge";

function LocationItem({
  outletName,
  address,
  entryType,
  isItoto,
  itotoLocations,
}: WinningTicket) {
  return (
    <div className="rounded-md border p-4">
      <div className="mb-1 flex items-start justify-between">
        <h4 className="text-md font-semibold">{outletName}</h4>
        <Badge variant="secondary">{entryType}</Badge>
      </div>

      {isItoto && itotoLocations && itotoLocations.length > 0 ? (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="itoto-locations" className="border-b-0">
            <AccordionTrigger className="py-1 text-sm hover:no-underline">
              {itotoLocations.length} Participating Outlet
              {itotoLocations.length !== 1 ? "s" : ""}
            </AccordionTrigger>
            <AccordionContent className="space-y-2 pt-2 text-sm">
              {itotoLocations.map((loc, index) => (
                <div key={index} className="ml-2 border-l pl-3">
                  <p className="font-medium">{loc.outletName}</p>
                  <p className="text-muted-foreground">{loc.address}</p>
                  <p className="text-xs text-blue-600">
                    {loc.shareCount} share{loc.shareCount !== 1 ? "s" : ""} sold
                    here
                  </p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <p className="text-sm text-muted-foreground">{address}</p>
      )}
    </div>
  );
}

interface LocationDetailsProps {
  locations: WinningTicket[];
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
              isItoto={location.isItoto}
              itotoLocations={location.itotoLocations}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

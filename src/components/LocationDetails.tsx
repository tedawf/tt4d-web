import { WinningLocation } from "@/types/toto";
import { LocationItem } from "./LocationItem";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface Props {
  locations: WinningLocation[];
}

export const LocationDetails = ({ locations }: Props) => (
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="locations" className="border-0">
      <AccordionTrigger className="py-0 hover:no-underline">
        <span className="text-base font-semibold">
          Winning Locations
        </span>
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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface WinningLocationsProps {
  winningLocations: {
    groupOne: string[];
    groupTwo: string[];
  };
}

export default function WinningLocations({
  winningLocations,
}: WinningLocationsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Winning Locations</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple">
          <AccordionItem value="group-1">
            <AccordionTrigger>Group 1 Locations</AccordionTrigger>
            <AccordionContent>
              <ul className="ml-4 list-disc">
                {winningLocations.groupOne.map((loc, i) => (
                  <li key={i}>{loc}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="group-2">
            <AccordionTrigger>Group 2 Locations</AccordionTrigger>
            <AccordionContent>
              <ul className="ml-4 list-disc">
                {winningLocations.groupTwo.map((loc, i) => (
                  <li key={i}>{loc}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}

"use client";

import { DrawResult } from "@/types/toto";
import { Separator } from "../ui/separator";
import { DrawSummary } from "./DrawSummary";

interface Props {
  results: DrawResult[];
}

export const DrawList = ({ results }: Props) => {
  if (results.length === 0) {
    return (
      <div className="py-8 text-center text-muted-foreground">
        No draws found matching your search.
      </div>
    );
  }

  return (
    <section className="flex flex-col">
      {results.map((result, index) => (
        <div key={result.drawNumber}>
          <DrawSummary drawResult={result} />
          {index < results.length - 1 && <Separator className="my-4" />}
        </div>
      ))}
    </section>
  );
};

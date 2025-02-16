import { Repeat1Icon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <section className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
          HUAT number do you want?
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground md:max-w-xl">
          Generate winning combinations, view past results, and analyze lottery
          trends all in one place.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/generate">
              <span>Generate</span>
              <Repeat1Icon />
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="/results">View Results</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

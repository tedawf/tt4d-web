import { ExternalLinkIcon, Home } from "lucide-react";
import Link from "next/link";
import { CopyButton } from "../CopyButton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Button } from "../ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

interface DrawHeaderProps {
  drawNumber: number;
  drawDate: Date;
  totalWinners: number;
  totalPrize: number;
}

export function DrawHeader({
  drawNumber,
  drawDate,
  totalWinners,
  totalPrize,
}: DrawHeaderProps) {
  const encodedDrawNumber = btoa(`DrawNumber=${drawNumber}`);

  return (
    <Card className="w-full border-none shadow-none">
      <CardHeader className="px-0">
        <CardTitle className="flex items-center gap-4 text-muted-foreground">
          <Breadcrumb>
            <BreadcrumbList className="text-3xl font-medium">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <Home size={28} strokeWidth={2.5} aria-hidden="true" />
                  <span className="sr-only">Home</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator> / </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/draws">draws</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator> / </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>{drawNumber}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <CopyButton url />
        </CardTitle>
      </CardHeader>

      <CardFooter className="flex flex-col items-center gap-2 p-0 text-sm text-muted-foreground sm:flex-row">
        <div className="flex gap-2">
          <span className="flex gap-1">
            Drawn
            <time dateTime={new Date(drawDate).toDateString()}>
              {new Date(drawDate).toDateString()}
            </time>
          </span>
          <Separator orientation="vertical" className="h-5" />
          <span>{totalWinners.toLocaleString()} total winners</span>
          <Separator orientation="vertical" className="h-5" />
          <span>${totalPrize.toLocaleString()} total prize</span>
        </div>
        <Separator orientation="vertical" className="hidden h-5 sm:block" />
        <Separator orientation="horizontal" className="sm:hidden" />
        <Button
          variant="link"
          asChild
          className="px-0 text-muted-foreground hover:text-primary"
        >
          <Link
            href={
              "https://www.singaporepools.com.sg/en/product/sr/Pages/toto_results.aspx?sppl=" +
              encodedDrawNumber
            }
            className="gap-1 px-0 underline underline-offset-2"
          >
            <span>view source</span>
            <ExternalLinkIcon />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

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
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle
} from "../ui/card";
import { Separator } from "../ui/separator";

interface Props {
  drawNumber: number;
  drawDate: Date;
  totalWinners: number;
  totalPrize: number;
}

export const DrawHeader = ({
  drawNumber,
  drawDate,
  totalWinners,
  totalPrize,
}: Props) => {
  const encodedDrawNumber = btoa(`DrawNumber=${drawNumber}`);

  return (
    <Card className="w-full border-none shadow-none">
      <CardHeader className="px-0">
        <CardTitle className="flex items-center gap-4 text-muted-foreground">
          <Breadcrumb>
            <BreadcrumbList className="text-2xl font-medium">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <Home size={24} strokeWidth={2} aria-hidden="true" />
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

      <CardFooter className="flex items-center gap-2 p-0 text-sm text-muted-foreground">
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
        <Separator orientation="vertical" className="h-5" />
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
};

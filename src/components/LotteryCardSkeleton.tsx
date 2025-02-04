import { Card, CardContent, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function LotteryCardSkeleton() {
  return (
    <Card>
      <CardHeader className="flex items-start justify-between">
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-7 w-32" />
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <Skeleton key={i} className="size-12 rounded-full" />
        ))}
      </CardContent>
      <CardHeader className="flex flex-row justify-between">
        <div className="space-y-2">
          <Skeleton className="h-7 w-32" />
          <Skeleton className="h-5 w-20" />
        </div>
        <Skeleton className="h-10 w-28 rounded-full" />
      </CardHeader>
    </Card>
  );
}

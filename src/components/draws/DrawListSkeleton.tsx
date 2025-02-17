import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";

export const DrawListSkeleton = () => {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i}>
          <Skeleton className="h-52 rounded-md" />
          {i < 4 && <Separator className="my-4" />}
        </div>
      ))}
    </div>
  );
};

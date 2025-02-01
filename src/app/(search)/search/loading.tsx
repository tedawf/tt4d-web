import LotteryResultSkeleton from "@/components/LotteryResultSkeleton";

export default function Loading() {
  return (
    <ul className="divide-y divide-muted rounded-b-md bg-background shadow-md">
      {[1, 2, 3].map((i) => (
        <li key={i} className="animate-pulse">
          <LotteryResultSkeleton />
        </li>
      ))}
    </ul>
  );
}

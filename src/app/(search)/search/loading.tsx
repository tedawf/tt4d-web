import LotteryCardSkeleton from "@/components/LotteryCardSkeleton";

export default function Loading() {
  return (
    <ul className="mt-8">
      {[1, 2, 3].map((i) => (
        <li key={i} className="animate-pulse mt-4">
          <LotteryCardSkeleton />
        </li>
      ))}
    </ul>
  );
}

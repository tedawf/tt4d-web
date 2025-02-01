export default function LotteryResultSkeleton() {
  return (
    <div className="mx-auto flex items-center justify-between px-8 py-4">
      {/* Draw info */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-muted" />
          <div className="h-4 w-24 rounded bg-muted" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-muted" />
          <div className="h-4 w-20 rounded bg-muted" />
        </div>
      </div>

      {/* Numbers */}
      <div className="flex items-center gap-4">
        {/* Winning numbers */}
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="h-8 w-8 rounded-full bg-muted" />
          ))}
        </div>

        {/* Additional number */}
        <div className="h-8 w-8 rounded-full bg-muted" />
      </div>

      {/* Jackpot */}
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 rounded-full bg-muted" />
        <div className="h-4 w-20 rounded bg-muted" />
      </div>
    </div>
  );
}

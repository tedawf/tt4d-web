import { DrawsTable } from "@/components/draws-table";
import { StatsGrid } from "@/components/stats-grid";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 py-4 lg:gap-6 lg:py-6">
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold">Draws</h1>
          <p className="text-muted-foreground text-sm">
            View past lottery results
          </p>
        </div>
        <Button className="px-3">Generate</Button>
      </div>
      <StatsGrid />
      <DrawsTable />
    </div>
  );
}

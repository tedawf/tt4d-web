import { SnowballInfo, WinningTicket, WinningShare } from "@/types/toto";
import { GroupDetails } from "./GroupDetails";

interface LocationGroupProps {
  snowballInfo: SnowballInfo[];
  winningShares: WinningShare[];
  winningTickets: WinningTicket[];
}

export function LocationGroup({
  snowballInfo,
  winningShares,
  winningTickets,
}: LocationGroupProps) {
  return (
    <section className="w-full space-y-4">
      <h3 className="text-xl">Winning Locations</h3>
      {[1, 2].map((index) => {
        const snowball = snowballInfo.find(
          (info) => info.groupNumber === index,
        );
        const amount = snowball
          ? snowball.amount
          : winningShares[index - 1].shareAmount;

        return (
          <GroupDetails
            key={index}
            group={index}
            amount={amount}
            winners={winningShares[index - 1].winnerCount}
            locations={winningTickets.filter(
              (loc) => loc.groupNumber === index,
            )}
          />
        );
      })}
    </section>
  );
}

import { cn } from "@/lib/utils";

interface Props {
  digit: number;
  isAdditional?: boolean;
  size?: "default" | "large";
}

export const LotteryNumber = ({
  digit,
  isAdditional,
  size = "default",
}: Props) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full font-bold",
        size === "large" ? "h-16 w-16 text-2xl" : "h-12 w-12 text-lg",
        isAdditional
          ? "bg-gradient-to-br from-blue-400 to-blue-500 dark:from-blue-600 dark:to-blue-700 text-background"
          : "border-2",
      )}
    >
      {digit}
    </div>
  );
};

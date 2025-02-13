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
    <p
      className={cn(
        "flex items-center justify-center rounded-full font-semibold",
        size === "large" ? "h-16 w-16 text-2xl" : "h-12 w-12 text-lg",
        isAdditional ? "bg-foreground text-background" : "border-2",
      )}
    >
      {digit}
    </p>
  );
};

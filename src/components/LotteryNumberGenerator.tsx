"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RefreshCw } from "lucide-react";
import React, { useState } from "react";
import { LotteryNumber } from "./draws/WinningNumbers";

interface LotteryNumberGeneratorProps {
  triggerButton?: React.ReactNode;
  numbersCount?: number;
  minNumber?: number;
  maxNumber?: number;
}

export const LotteryNumberGenerator: React.FC<LotteryNumberGeneratorProps> = ({
  triggerButton,
}) => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [open, setOpen] = useState(false);

  // Generate random unique numbers between min-max
  const generateNumbers = (): number[] => {
    const newNumbers: number[] = [];
    while (newNumbers.length < 6) {
      const randomNum = Math.floor(Math.random() * (49 - 1 + 1)) + 1;
      if (!newNumbers.includes(randomNum)) {
        newNumbers.push(randomNum);
      }
    }
    // Sort numbers in ascending order
    return newNumbers.sort((a, b) => a - b);
  };

  // Handle dialog open state
  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setNumbers(generateNumbers());
    }
    setOpen(isOpen);
  };

  // Handle regeneration
  const handleRegenerate = () => {
    setNumbers(generateNumbers());
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {triggerButton || (
          <Button size="lg" className="gap-2">
            <span>Generate Lucky Numbers</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Huat ah!</DialogTitle>
          <DialogDescription>Here are your 6 lucky numbers between 1 - 49.</DialogDescription>
        </DialogHeader>

        <div className="my-6 flex flex-wrap justify-center gap-2">
          {numbers.map((number, index) => (
            <LotteryNumber key={index} digit={number} />
          ))}
        </div>

        <DialogFooter className="flex items-end">
          <Button onClick={handleRegenerate} className="gap-2">
            <RefreshCw size={16} />
            <span>Re-generate</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

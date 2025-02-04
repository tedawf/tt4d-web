"use client";

import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className="flex items-center gap-2 pb-2 text-sm"
      variant="outline"
    >
      <ChevronLeftIcon className="h-4 w-4" />
      <span>Back</span>
    </Button>
  );
}

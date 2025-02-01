"use client";

import { Loader2Icon, SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState, useTransition } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get("query") || "";
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearching, startTransition] = useTransition();
  const router = useRouter();
  const [query, setQuery] = useState(defaultQuery);

  const search = () => {
    startTransition(() => {
      router.push(`/search?query=${query}`);
    });
  };

  return (
    <div className="relative flex h-14 w-full flex-col bg-background">
      <div className="relative z-10 h-14 rounded-md">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              inputRef?.current?.blur();
            }
            if (e.key === "Enter") {
              search();
            }
          }}
          ref={inputRef}
          className="absolute inset-0 h-full"
        />

        <Button
          size="sm"
          onClick={search}
          className="absolute inset-y-0 right-0 h-full rounded-l-none"
        >
          {isSearching ? (
            <Loader2Icon className="h-6 w-6" />
          ) : (
            <SearchIcon className="h-6 w-6" />
          )}
        </Button>
      </div>
    </div>
  );
}

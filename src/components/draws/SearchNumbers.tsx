"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "../ui/input";

interface SearchNumbersProps {
  initialValue?: string;
  showKbd?: boolean;
}

export function SearchNumbers({
  initialValue = "",
  showKbd,
}: SearchNumbersProps) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(initialValue);

  useEffect(() => {
    setSearchValue(initialValue);
  }, [initialValue]);

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams();

    if (term) {
      // Normalize input by replacing commas with spaces and trim excess whitespace
      const normalizedTerm = term.replace(/,/g, ' ').trim();
      
      if (normalizedTerm) {
        params.set("page", "1");
        params.set("search", normalizedTerm);
      }
    }

    const newUrl = `/draws${params.toString() ? `?${params.toString()}` : ""}`;
    router.replace(newUrl);
  }, 300);

  return (
    <div className="relative">
      <div className="flex h-10 items-center rounded-md bg-muted px-3 ring-offset-background">
        <SearchIcon className="h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search Numbers"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            handleSearch(e.target.value);
          }}
          className="w-full border-none bg-transparent p-2 focus-visible:ring-0 focus-visible:ring-offset-0"
        />

        {showKbd && (
          <div className="ml-2 flex items-center border-l pl-2">
            <kbd className="pointer-events-none flex h-5 select-none items-center rounded border bg-background px-1.5">
              <span className="font-mono text-xs font-medium text-muted-foreground">
                /
              </span>
            </kbd>
          </div>
        )}
      </div>
    </div>
  );
}

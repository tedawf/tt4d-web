"use client";

import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "../ui/input";

interface Props {
  initialValue: string;
  showKbd?: boolean;
}

export const SearchForm = ({ initialValue, showKbd }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [searchValue, setSearchValue] = useState(initialValue || "");

  // Sync search state with initialValue when it changes
  useEffect(() => {
    setSearchValue(initialValue);
  }, [initialValue]);

  // Format the search term for display (convert "+" to spaces)
  const displayValue = searchValue.replace(/\+/g, " ");

  // Debounce to avoid too many URL updates
  const handleSearch = useDebouncedCallback((term: string) => {
    startTransition(() => {
      const formattedTerm = term.trim().replace(/\s+/g, "+");

      // Build URL parts manually
      let url = "/draws?";
      const parts = [];

      // Preserve all existing params except search and page
      searchParams.forEach((value, key) => {
        if (key !== "search" && key !== "page") {
          parts.push(`${key}=${value}`);
        }
      });

      // Add search term if exists
      if (formattedTerm) {
        parts.push(`search=${formattedTerm}`);
      }

      // Construct final URL
      url += parts.join("&");
      router.push(url || "/draws");
    });
  }, 300);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    handleSearch(newValue);
  };

  return (
    <div className="relative">
      <div className="flex h-10 items-center rounded-md bg-muted px-3 ring-offset-background">
        <SearchIcon className="h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Filter results (e.g., draw number or winning numbers)"
          value={displayValue}
          onChange={handleInputChange}
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

      {isPending && (
        <div className="absolute right-10 top-1/2 -translate-y-1/2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      )}
    </div>
  );
};

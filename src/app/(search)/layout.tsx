import SearchBar from "@/components/SearchBar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DicesIcon } from "lucide-react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden border-b-8 border-red-500 bg-muted">
      {/* bg pattern */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-muted-foreground [mask-image:radial-gradient(90%_80%_at_bottom,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>

      <div className="mx-auto max-w-7xl gap-16 px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-24">
        <div className="flex h-full w-full flex-col items-center gap-4">
          <DicesIcon className="h-16 w-16" />

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            TotoSearch
          </h1>

          <p className="max-w-xl text-center text-lg text-muted-foreground">
            A modern lottery results explorer built with Next.js — showcasing
            clean design, real-time search and data visualization.
          </p>

          <div className="mx-auto mt-16 flex w-full max-w-2xl flex-col">
            <SearchBar />
            {children}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

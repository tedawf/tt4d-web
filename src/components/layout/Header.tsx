import { DicesIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex h-16 items-center px-4">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <DicesIcon />
            <span className="font-semibold">HuatNumber</span>
          </Link>

          {/* Search */}
          <div className="relative hidden md:flex">
            <div className="flex h-9 items-center rounded-md border bg-muted px-3 text-sm ring-offset-background">
              <SearchIcon className="h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search results, numbers..."
                className="w-64 border-none bg-transparent p-2 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <div className="ml-2 flex items-center border-l pl-2">
                <kbd className="pointer-events-none flex h-5 select-none items-center rounded border bg-background px-1.5">
                  <span className="font-mono text-xs font-medium text-muted-foreground">
                    /
                  </span>
                </kbd>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <NavigationMenu className="ml-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/results" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Results
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/statistics" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Statistics
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          size="sm"
          variant="outline"
          className="ml-2 rounded-full px-4 font-medium shadow-sm"
        >
          Sign In
        </Button>
      </nav>
    </header>
  );
};

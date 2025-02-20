import { DicesIcon } from "lucide-react";
import Link from "next/link";
import { SearchNumbers } from "../draws/SearchNumbers";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

export function Header() {
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
            <SearchNumbers showKbd />
          </div>
        </div>

        {/* Navigation */}
        <NavigationMenu className="ml-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/draws" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Results
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/stats" legacyBehavior passHref>
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
          className="ml-2 mr-4 rounded-full px-4 font-medium shadow-sm"
        >
          Sign In
        </Button>

        <ThemeToggle />
      </nav>
    </header>
  );
}

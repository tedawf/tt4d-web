import { DicesIcon } from "lucide-react";
import Link from "next/link";
import { SearchNumbers } from "../draws/SearchNumbers";
import { ThemeToggle } from "../ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { LotteryNumberGenerator } from "../LotteryNumberGenerator";

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
        <NavigationMenu className="ml-auto mr-4">
          <NavigationMenuList>
            <NavigationMenuItem className="cursor-pointer">
              <LotteryNumberGenerator
                triggerButton={
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Generate
                  </NavigationMenuLink>
                }
              />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/draws" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Draws
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* <Button
          size="sm"
          variant="outline"
          disabled
          className="ml-2 mr-4 rounded-full px-4 font-medium shadow-sm"
        >
          Sign In
        </Button> */}

        <ThemeToggle />
      </nav>
    </header>
  );
}

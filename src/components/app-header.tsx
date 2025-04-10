import { ModeToggle } from "./mode-toggle";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";

export function AppHeader() {
  return (
    <header className="flex h-16 items-center gap-2 border-b">
      <div className="flex flex-1 items-center gap-2 px-3">
        <SidebarTrigger className="-ms-4" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <div>Home</div>
      </div>
      <div className="ml-auto flex gap-3">
        <div>Feedback</div>
        <ModeToggle />
      </div>
    </header>
  );
}

import { Separator } from "@radix-ui/react-separator";
import { ChartNoAxesCombined, Home, ListOrdered, Repeat1 } from "lucide-react";
import Link from "next/link";
import { LogoSwitcher } from "./logo-switcher";
import { SearchForm } from "./search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Draws", url: "/draws", icon: ListOrdered },
  { title: "Stats", url: "/stats", icon: ChartNoAxesCombined },
  { title: "Generate", url: "/generate", icon: Repeat1 },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <LogoSwitcher />
        <Separator className="mx-2 border-t" />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

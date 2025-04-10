import { Home, ListOrdered, ChartNoAxesCombined } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { SearchForm } from "./search-form";
import { LogoSwitcher } from "./logo-switcher";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Draws", url: "/draws", icon: ListOrdered },
  { title: "Stats", url: "/stats", icon: ChartNoAxesCombined },
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

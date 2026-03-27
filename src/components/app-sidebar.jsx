"use client";

import * as React from "react";
// import { TooltipProvider } from "@/components/ui/tooltip";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  GalleryVerticalEndIcon,
  AudioLinesIcon,
  TerminalIcon,
  TerminalSquareIcon,
  BotIcon,
  BookOpenIcon,
  Settings2Icon,
  FrameIcon,
  PieChartIcon,
  MapIcon,
} from "lucide-react";

const data = {
  user: {
    name: " sign out",
  },
  teams: [
    {
      name: "HRD SHOP",
      plan: "ADMIN V2.0",
      url: "/dashboard",
    },
  ],
  navMain: [
    {
      title: "Product",
      url: "/products",
      isActive: true,
    },
    {
      title: "Customers",
      url: "/customers",
    },
    {
      title: "Categories",
      url: "/dashboard/categories",
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

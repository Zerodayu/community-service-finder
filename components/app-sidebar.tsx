"use client"

import * as React from "react"
import {
  Mail,
  Album,
  LayoutList,
  GalleryVerticalEnd,
  Settings2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { LogoHeader } from "@/components/nav-logo"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Community Service Finder",
      logo: GalleryVerticalEnd,
      plan: "Search now",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: LayoutList,
      isActive: true,
    },
    {
      title: "Saves",
      url: "#",
      icon: Album,
    },
    {
      title: "Messages",
      url: "#",
      icon: Mail,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <LogoHeader teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

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
}

export function AppSidebar({ 
  onNavigate, 
  ...props 
}: React.ComponentProps<typeof Sidebar> & { 
  onNavigate?: (page: string) => void 
}) {
  const [activeItem, setActiveItem] = React.useState("Home")

  const navMain = [
    {
      title: "Home",
      url: "#",
      icon: LayoutList,
      isActive: activeItem === "Home",
    },
    {
      title: "Saves",
      url: "#",
      icon: Album,
      isActive: activeItem === "Saves",
    },
    {
      title: "Messages",
      url: "#",
      icon: Mail,
      isActive: activeItem === "Messages",
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      isActive: activeItem === "Settings",
    },
  ]

  const handleNavigation = (title: string) => {
    setActiveItem(title)
    onNavigate?.(title)
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <LogoHeader teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} onItemClick={handleNavigation} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

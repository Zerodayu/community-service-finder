"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { HomeContent } from "@/components/HomeContent"
import { SavesContent } from "@/components/SavesContent"
import { MsgsContent } from "@/components/MsgsContent"
import { SettingsContent } from "@/components/SettingsContent"


export default function Page() {
  const [activeContent, setActiveContent] = useState("Home")

  const renderContent = () => {
    switch (activeContent) {
      case "Home":
        return <HomeContent />
      case "Saves":
        return <SavesContent />
      case "Messages":
        return <MsgsContent />
      case "Settings":
        return <SettingsContent />
      default:
        return <HomeContent />
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar onNavigate={setActiveContent} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{activeContent}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <section>
          <div className="p-4">{renderContent()}</div>
        </section>
      </SidebarInset>
    </SidebarProvider>
  )
}

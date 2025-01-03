import React from 'react'
import { LayoutDashboard, Gauge, CircleGauge, Award, LaptopMinimal, Flame, StickyNote, Mail, Bomb, Send, Wrench } from "lucide-react"
import {
    SidebarProvider,
    SidebarTrigger,
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarHeader,
    SidebarFooter,
    SidebarGroupLabel
} from "@/components/ui/sidebar"

const PanelSidebar = () => {
    const items = [
        {
            title: "Dashboard",
            url: "#",
            icon: LayoutDashboard,
        },
        {
            title: "Seo",
            url: "#",
            icon: Gauge,
        },
        {
            title: "PPC",
            url: "#",
            icon: CircleGauge,
        },
        {
            title: "Podium",
            url: "#",
            icon: Award,
        },
        {
            title: "Website Scheduler",
            url: "#",
            icon: LaptopMinimal,
        },
        {
            title: "Social Media",
            url: "#",
            icon: Flame,
        },
        {
            title: "Postcards",
            url: "#",
            icon: StickyNote,
        },
        {
            title: "Emails",
            url: "#",
            icon: Mail,
        },
        {
            title: "Radius Bomb",
            url: "#",
            icon: Bomb,
        },
        {
            title: "Neighbor Mailer",
            url: "#",
            icon: Send,
        },
        {
            title: "Additional Tools",
            url: "#",
            icon: Wrench,
        },
    ]
    return (
        <>
            <SidebarProvider>
                <Sidebar>
                    <SidebarHeader>
                        Header goes here
                    </SidebarHeader>

                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel className='mb-2'>Platform</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {items.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                <a href={item.url}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>

                    <SidebarFooter>
                        Footer goes here
                    </SidebarFooter>
                </Sidebar>

                <SidebarTrigger />
            </SidebarProvider>
        </>
    )
}

export default PanelSidebar
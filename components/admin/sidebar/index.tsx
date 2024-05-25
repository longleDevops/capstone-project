"use client"

import Link from "next/link"
import styles from "./styles.module.css"
import { ArrowLeft, ChevronLeft, ChevronRight, Home, PieChart, Settings, Users } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useSettings } from "@/hooks/use-settings"
import { SettingsComponent } from "./settings"

export const Sidebar = () => {
  const pathName = usePathname()
  const { isClosed, setIsClosed, theme } = useSettings()

  const sidebarItems = [
    {
      href: "/admin/dashboard",
      name: "Dashboard",
      icon: Home,
      isActive: pathName === "/admin/dashboard"
    },
    {
      href: "/admin/student",
      name: "Management",
      icon: Users,
      isActive: pathName === "/admin/student"
    },
    {
      href: "/admin/statistics",
      name: "Statistics",
      icon: PieChart,
      isActive: pathName === "/admin/statistics"
    },
  ]
  return (
    <>
      <div
        className={
          isClosed ? styles.container_closed : styles.container
        }
        style={
          theme === 'Classic' ? { backgroundColor: '#f6f6f6' } : {}
        }
      >
        <div
          className={styles.title}
        >
          <Link
            className={styles.logo_link}
            href="/admin/dashboard"
          >
            CWU
          </Link>
        </div>
        {sidebarItems.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className={
              !isClosed ?
                (item.isActive ? styles.link_active : styles.link)
                : (item.isActive ? styles.link_active_closed : styles.link_closed)
            }
          >
            <item.icon size={22} />
            {!isClosed && item.name}
          </Link>
        ))}
        <SettingsComponent />
        <div className={styles.arrow_left}>
          {!isClosed ?
            <div onClick={() => setIsClosed(true)}
              className={styles.arrow_item}><ChevronRight size={18} /></div>
            :
            <div onClick={() => setIsClosed(false)}
              className={styles.arrow_item}><ChevronLeft size={18} /></div>
          }
        </div>
      </div>
    </>
  )
}
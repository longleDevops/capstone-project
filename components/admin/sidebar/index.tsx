"use client"

import Link from "next/link"
import styles from "./styles.module.css"
import { Home, PieChart, Settings, Users } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from "next/image"


export const Sidebar = () => {
  const pathName = usePathname()
  const sidebarItems = [
    {
      href: "/admin/dashboard",
      name: "Dashboard",
      icon: Home,
      isActive: pathName === "/admin/dashboard"
    },
    {
      href: "/admin/student",
      name: "Students",
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
    <div className={styles.container}>
      <div className={styles.title}>

        <p>CWU</p>
      </div>
      {sidebarItems.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          className={item.isActive ? styles.link_active : styles.link}
        >
          <item.icon size={20} />
          {item.name}
        </Link>
      ))}
      <div className={styles.setting_holder}>
        <Settings size={20} />
        <p>Settings</p>
      </div>
    </div>
  )
}
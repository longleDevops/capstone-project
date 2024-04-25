"use client"

import Link from "next/link"
import styles from "./styles.module.css"
import { Home, PieChart, Users } from "lucide-react"
import { usePathname } from "next/navigation"


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
      name: "Student",
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
        CWU
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
    </div>
  )
}
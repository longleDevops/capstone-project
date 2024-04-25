
"use client"

import Link from "next/link"
import styles from "./styles.module.css"
import { UserRound, CircleHelp, Power, Bell, CircleArrowRight } from 'lucide-react';
import { usePathname } from "next/navigation"

export const Sidebar = () => {
    const pathName = usePathname()
    const sidebarItems = [
        {
            href: "/student/info",
            name: "My Account",
            icon: UserRound,
            isActive: pathName === "/student/info"
        },
        {
            href: "/student/survey",
            name: "Take Survey",
            icon: CircleArrowRight,
            isActive: pathName === "/student/profile"
        },
        {
            href: "/student/dashboard", // NEED to add one more page for about us
            name: "Help And Support",
            icon: Bell,
            isActive: pathName === "/admin/dashboard"
        },
        {
            href: "/student/dashboard", // NEED to add one more page for about us
            name: "About Us",
            icon: CircleHelp,
            isActive: pathName === "/admin/dashboard"
        },
    ]
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                CAREER SURVEY
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
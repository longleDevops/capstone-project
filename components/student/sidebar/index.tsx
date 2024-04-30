"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import {
  LayoutDashboard,
  CircleHelp,
  Bell,
  CircleArrowRight,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

export const Sidebar = () => {
  const pathName = usePathname();
  const sidebarItems = [
    {
      href: "/student/dashboard",
      name: "Dashboard",
      icon: LayoutDashboard,
      isActive: pathName === "/student/dashboard",
    },
    {
      href: "/student/profile",
      name: "Profile",
      icon: User,
      isActive: pathName === "/student/profile",
    },
    {
      href: "/student/survey",
      name: "Take Survey",
      icon: CircleArrowRight,
      isActive: pathName === "/student/survey",
    },
    {
      href: "/student/contact", // NEED to add one more page for about us
      name: "Help And Support",
      icon: Bell,
      isActive: pathName === "/student/contact",
    },
    {
      href: "/student/about", // NEED to add one more page for about us
      name: "About Us",
      icon: CircleHelp,
      isActive: pathName === "/student/about",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.title}><p >CWU SURVEY</p></div>
      <div className={styles.link_container}>
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
      <div className={styles.user_container}>
        <UserButton afterSignOutUrl="/" />
        <p>Tu Ho</p>
      </div>
    </div>
  );
};

"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import {
  LayoutDashboard,
  CircleHelp,
  Bell,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";

export const Sidebar = () => {
  const pathName = usePathname();
  const sidebarItems = [
    {
      href: "/student/home",
      name: "Home",
      icon: LayoutDashboard,
      isActive: pathName === "/student/home",
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

  const { user } = useUser()

  return (
    <div className={styles.container}>
      <div className={styles.title}><p >CWU <span className={styles.span_title}>SURVEY</span></p></div>
      <div className={styles.link_container}>
        {sidebarItems.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className={item.isActive ? styles.link_active : styles.link}
          >
            <item.icon size={20} />
            <p className={styles.sidebar_item}>{item.name}</p>
          </Link>
        ))}
      </div>
      <div className={styles.user_container}>
        <UserButton afterSignOutUrl="/" />
        <p className={styles.username}>{user?.username}</p>
      </div>
    </div>
  );
};

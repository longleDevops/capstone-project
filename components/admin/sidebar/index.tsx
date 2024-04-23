import Link from "next/link"
import styles from "./styles.module.css"
export const Sidebar = () => {
  const sidebarItems = [
    {
      href: "/admin/dashboard",
      name: "Dashboard"
    },
    {
      href: "/admin/reports",
      name: "Reports"
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
          className={styles.link}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}
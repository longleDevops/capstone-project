"use client"
import { Sidebar } from "@/components/admin/sidebar"
import styles from "./styles.module.css"
import { useSettings } from "@/hooks/use-settings"
import { HamburgerSidebar } from "@/components/admin/hamburger-sidebar"
const layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useSettings()
  return (
    <div
      style={theme === 'Classic' ? { backgroundColor: 'white' } : {}}
      className={styles.container}
    >
      <div className={styles.sidebar}><Sidebar /></div>
      <div className={styles.hamburger}><HamburgerSidebar /></div>
      {children}
    </div>
  )
}

export default layout
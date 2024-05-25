"use client"
import { Sidebar } from "@/components/admin/sidebar"
import styles from "./styles.module.css"
import { useSettings } from "@/hooks/use-settings"
const layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useSettings()
  return (
    <div
      style={theme === 'Classic' ? { backgroundColor: 'white' } : {}}
      className={styles.container}
    >
      <Sidebar />
      {children}
    </div>
  )
}

export default layout
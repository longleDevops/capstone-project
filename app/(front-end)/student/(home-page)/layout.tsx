import { Sidebar } from "@/components/student/sidebar"
import styles from "./styles.module.css"
import { HamburgerSidebar } from "@/components/student/hamburger-sidebar"
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}><Sidebar /></div>
      <div className={styles.hamburger}><HamburgerSidebar /></div>
      {children}
    </div>
  )
}

export default layout
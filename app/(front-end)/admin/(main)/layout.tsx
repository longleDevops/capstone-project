import { Sidebar } from "@/components/admin/sidebar"
import styles from "./styles.module.css"
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      {children}
    </div>
  )
}

export default layout
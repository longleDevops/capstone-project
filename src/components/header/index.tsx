import styles from "./styles.module.css";
import Image from "next/image";
import logo from "../../../public/cwu-logo.png"
export default function AppHeader() {


    return (
        <header className={styles.header}>
            <Image src={logo} alt="logo"/>
        </header>
    )
}
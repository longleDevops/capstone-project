import Link from "next/link";
import styles from "./styles.module.css";

interface ButtonProps {
    href: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => {
    return (
        <div>
            <Link href={href}>
                <div className={styles.button}>{children}</div>
            </Link>
        </div>
    );
}

export default Button;

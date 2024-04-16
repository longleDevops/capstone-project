import Image from "next/image"
import styles from "./styles.module.css";
import { ClerkLoaded, ClerkLoading, SignInButton, UserButton } from "@clerk/nextjs";

export const LandingPage = () => {
  return (
    <div className={styles.login_container}>
      <Image
        alt="cwu logo"
        src="wildcat.svg"
        width={200}
        height={200}
        className={styles.logo}
      />
      <p className={styles.title1}>
        Post-career Evaluations
      </p>
      <p className={styles.title}>for CWU students</p>
      <ClerkLoading>
        <button className={styles.student_btn}>
          Login as Student
        </button>
      </ClerkLoading>
      <ClerkLoaded>
        <SignInButton
          mode="modal"
          afterSignInUrl="/student/dashboard"
          afterSignUpUrl="/student/dashboard"
        >
          <button className={styles.student_btn}>
            Login as Student
          </button>
        </SignInButton>
      </ClerkLoaded>

      <ClerkLoading>
        <button className={styles.student_btn}>
          Login as Advisors/Falcuty
        </button>
      </ClerkLoading>
      <ClerkLoaded>
        <SignInButton
          mode="modal"
          afterSignInUrl="/admin/dashboard"
          afterSignUpUrl="/admin/dashboard"
        >
          <button className={styles.admin_btn}>
            Login as Advisors/Falcuty
          </button>
        </SignInButton>
      </ClerkLoaded>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
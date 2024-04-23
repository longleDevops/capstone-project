import Image from "next/image"
import styles from "./styles.module.css";
import { ClerkLoaded, ClerkLoading, SignInButton, UserButton, SignUpButton } from "@clerk/nextjs";

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
        <button className={styles.signin_btn}>
          Sign In
        </button>
      </ClerkLoading>
      <ClerkLoaded>
        <SignInButton
          mode="modal"
          afterSignInUrl="/student/dashboard"
          afterSignUpUrl="/student/dashboard"
        >
          <button className={styles.signin_btn}>
            Sign In
          </button>
        </SignInButton>
      </ClerkLoaded>

      <ClerkLoading>
        <button className={styles.signup_btn}>
          Sign Up
        </button>
      </ClerkLoading>
      <ClerkLoaded>
        <SignUpButton
          mode="modal"
          afterSignInUrl="/student/dashboard"
          afterSignUpUrl="/student/dashboard"
        >
          <button className={styles.signup_btn}>
            Sign Up
          </button>
        </SignUpButton>
      </ClerkLoaded>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
import { LandingPage } from "@/components/student/landingpage"
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Page() {
  const { userId } = auth()
  if (userId) {
    redirect("/student/home")
  }
  return (
    <LandingPage />
  )
}
import { Home } from "@/components/student/home";
import db from "@/app/(back-end)/db/drizzle";
import { account } from "@/app/(back-end)/db/schema";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { currentUser } from '@clerk/nextjs/server';


const Page = () => {

  return <Home />
};

export default Page;

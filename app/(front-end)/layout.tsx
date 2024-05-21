import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { MantineProvider } from "@mantine/core"
import { Notifications } from '@mantine/notifications';
import { Toaster } from "react-hot-toast";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import 'mantine-react-table/styles.css';
import '@mantine/notifications/styles.css';

import { QueryProvider } from "@/providers/query-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CWU Career Survey",
  description: "Take CWU Survey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <main>
            <QueryProvider>
              <MantineProvider>
                <Notifications position="bottom-left" />
                <Toaster />
                {children}
              </MantineProvider>
            </QueryProvider>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

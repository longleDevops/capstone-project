import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "get started",
    description: "start the survey"
}

export default function GetStartedLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-cover bg-center min-h-screen">
            <h1>Survey</h1>
            {children}
        </div>
    )
}

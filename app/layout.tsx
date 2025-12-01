import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Stick N' Poke - Post-Punk Band from Wicklow, Ireland",
    description: "Stick N' Poke are a four piece, hard rock band from County Wicklow. Stream our latest release on Spotify.",
    keywords: ["Stick N' Poke", "post-punk", "indie", "hard rock", "Wicklow", "Ireland", "band"],
    openGraph: {
        title: "Stick N' Poke",
        description: "Post-Punk / Indie band from Wicklow, Ireland",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="overflow-x-hidden">
                {children}
            </body>
        </html>
    );
}

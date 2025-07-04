import type { Metadata } from "next";
import {  Fira_Mono  } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { CivicAuthProvider } from "@civic/auth/nextjs";

const firaMono = Fira_Mono({
    weight: ["400", "500", "700"],
  variable: "--font-fira-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaMono.variable} antialiased`}>
        <CivicAuthProvider>
          <Navbar/>
           {children}
        </CivicAuthProvider>
      </body>
    </html>
  );
}

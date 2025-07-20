// src/app/layout.tsx
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components/ui/footer";
import { cn } from "@/lib/utils";
import { Toaster as SonnerToaster } from "sonner"; // <--- Import Sonner's Toaster and alias it

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vlad Lazar - Full-Stack Developer",
  description:
    "Full-stack developer exploring new ideas through blogging and creating innovative projects like Sokrati.space",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <SonnerToaster /> {/* <--- Use Sonner's Toaster here */}
        </ThemeProvider>
      </body>
    </html>
  );
}

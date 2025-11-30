import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components/ui/footer";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner"; // Correct import of Toaster
import { Analytics } from "@vercel/analytics/next";
import { RainbowSparkles } from "@/components/ui/rainbow-sparkles";
import { NyanCats } from "@/components/ui/nyan-cats";

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
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#18181b" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={cn(inter.className, "min-h-screen")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark", "rainbow"]}
        >
          {/* Main flex container for header, content, and footer */}
          <div className="flex flex-col min-h-screen">
            <Navbar />
            {/*
              Corrected main content centering:
              - flex-grow: takes available vertical space
              - flex justify-center: horizontally centers children (the div with max-w-4xl)
              - px-4 sm:px-6 lg:px-8: adds responsive padding on the main element itself
            */}
            <main className="flex-grow flex justify-center px-4 sm:px-6 lg:px-8">
              {/*
                This div ensures your page content has a max-width and is centered.
                It's essential for readability on large screens.
              */}
              <div className="w-full max-w-4xl">{children}</div>
            </main>
            <Footer />
          </div>
          {/* Sonner Toaster: Render this as a self-closing component at the root */}
          {/* It manages its own positioning and rendering */}
          <Toaster richColors position="bottom-right" /> <Analytics />
          {/* Added richColors and position for better defaults */}
          <RainbowSparkles />
          <NyanCats />
        </ThemeProvider>
      </body>
    </html>
  );
}

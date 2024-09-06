import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideMenuClient from "@/components/side-menu-client";
import Appbar from "@/components/appbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import SideMenuServer from "@/components/side-menu-server";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning>
      <body className={cn("flex min-h-screen flex-col", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          <Appbar />
          <div className="mx-auto flex w-full max-w-screen-2xl flex-1">
            <SideMenuServer />
            <main className="w-full pl-4 pt-8">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

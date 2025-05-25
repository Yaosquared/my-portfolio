import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./(components)/navigation/page";
// import NotAvail from "@/components/na";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mario Yaoyao II | Portfolio",
  description: "Static portfolio site built with Next.js and TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {/* temporary while on renovation, comment on dev phase */}
          {/* <NotAvail /> */}

          <div className="max-w-[80%] mx-auto">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

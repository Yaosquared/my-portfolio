import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import { ThemeProvider } from "@/components/theme-provider";
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
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                className: "dark:bg-[#121212] dark:text-white",
              }}
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

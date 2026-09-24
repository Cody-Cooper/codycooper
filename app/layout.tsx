import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteDescription =
  "Author of Talking To Your Boss. Writing Default: No, a book on deliberate leadership decisions. Every yes spends something.";

export const metadata: Metadata = {
  metadataBase: new URL("https://codycooper.io"),
  title: {
    default: "Cody Cooper",
    template: "%s | Cody Cooper",
  },
  description: siteDescription,
  authors: [{ name: "Cody Cooper", url: "https://codycooper.io" }],
  creator: "Cody Cooper",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Cody Cooper",
    title: "Cody Cooper",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cody Cooper",
    description: siteDescription,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-stone-200 text-stone-800 antialiased ${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          storageKey="nightwind-mode"
          defaultTheme="light"
          enableSystem
        >
          <div className="mx-auto max-w-2xl py-10">
            <header>
              <div className="mx-4 flex items-center justify-between">
                <ModeToggle />
                <nav className="ml-auto space-x-3 text-sm font-medium sm:space-x-6">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/books">Books</Link>
                  <Link href="/newsletter">Newsletter</Link>
                </nav>
              </div>
            </header>
            <main className="mx-4">{children}</main>
          </div>

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import { StructuredData } from "@/components/structured-data";
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
    images: [
      {
        url: "/api/og?title=Cody%20Cooper",
        width: 1200,
        height: 630,
        alt: "Cody Cooper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cody Cooper",
    description: siteDescription,
    images: ["/api/og?title=Cody%20Cooper"],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-stone-200 text-stone-800 antialiased transition-colors dark:bg-stone-900 dark:text-stone-200 ${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          storageKey="nightwind-mode"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StructuredData
            data={[
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://codycooper.io/#person",
                name: "Cody Cooper",
                url: "https://codycooper.io",
                jobTitle: "Author",
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://codycooper.io/#website",
                url: "https://codycooper.io",
                name: "Cody Cooper",
                description: siteDescription,
                author: {
                  "@id": "https://codycooper.io/#person",
                },
              },
            ]}
          />

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

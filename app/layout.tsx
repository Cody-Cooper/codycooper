import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cody Cooper - Personal Website",
  description: "My personal website and blog",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-stone-200 text-stone-800 ${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          storageKey="nightwind-mode"
          defaultTheme="light"
          enableSystem
        >
          <div className="max-w-2xl mx-auto py-10">
            <header>
              <div className="flex items-center justify-between mx-4">
                <ModeToggle />
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
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

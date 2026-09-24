import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://codycooper.io"),
  title: "Cody Cooper",
  description:
    "Author of Talking To Your Boss. Writing Default: No, a book on deliberate leadership decisions. Every yes spends something.",
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
                  <Link href="/books">Books</Link>
                  <Link href="/newsletter">Newsletter</Link>
                </nav>
              </div>
            </header>
            <main className="mx-4">{children}</main>
          </div>
          <Analytics />
          <Script
            id="mailerlite-universal"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);},l=d.createElement(e),l.async=1,l.src=u,n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');ml('account', '2656375');`,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}

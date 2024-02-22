import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config/site";

const sans = DM_Sans({ subsets: ["latin"] });

const viewport: Viewport = {
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export { viewport }

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: {
    name: siteConfig.author.name,
    url: siteConfig.author.url,
  },
  creator: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  // icons: {
  //   icon: [
  //     { url: "/favicon.ico", sizes: "32x32" },
  //     { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
  //     { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
  //     { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
  //     { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
  //   ],
  //   apple: [{ url: "/apple-icon.png", type: "image/png" }],
  // },
  // metadataBase: new URL(absoluteUrl("/")),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={sans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

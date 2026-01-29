import type { Metadata } from "next"
import { Geist_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"

import { SiteIntro } from "@/components/site/SiteIntro"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "The District Tap | Indianapolis Craft Beer + Kitchen",
  description:
    "Craft beer, cocktails, and damn good food in Indianapolis. Lunch, dinner, live music, private events, and catering at Northside and Downtown.",
  icons: {
    icon: "/logo_mark.png",
    shortcut: "/logo_mark.png",
    apple: "/logo_mark.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}>
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="site-glow-layer" />
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-amber-500/15 blur-[140px]" />
          <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-orange-500/12 blur-[160px]" />
          <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-red-500/10 blur-[180px]" />
          <div className="absolute inset-0 site-noise" />
        </div>
        <SiteIntro>{children}</SiteIntro>
      </body>
    </html>
  )
}

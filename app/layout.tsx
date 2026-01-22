import type { Metadata } from "next"
import { Geist_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"

import { Footer } from "@/components/site/Footer"
import { Header } from "@/components/site/Header"

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

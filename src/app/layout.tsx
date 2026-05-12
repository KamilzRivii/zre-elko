import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "@/styles/globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { buildMetadata } from "@/lib/seo"

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
})

export const metadata: Metadata = buildMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${montserrat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-black">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

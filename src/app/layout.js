import { Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "./provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ujjawal's Portfolio",
  description: "Full-stack Developer",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

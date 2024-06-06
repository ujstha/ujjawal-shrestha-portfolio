import { Outfit } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "./provider"

const inter = Outfit({ subsets: ["latin"] })

export const metadata = {
  title: "Ujjawal's Portfolio",
  description:
    "Ujjawal Shrestha | Expert Full-stack Developer (React, Next.js). Crafting high-performance web applications. Let's build something amazing together!",
  authors: [{ name: "Ujjawal Shrestha", url: "https://github.com/ujstha" }],
  other: {
    "theme-color": "#18181b",
    "color-scheme": "dark only",
    "twitter:image": "/assets/ujjawal.png",
    "twitter:card": "summary_large_image",
    "og:url": "ujjawalshrestha.com.np",
    "og:image": "/assets/ujjawal.png",
    "og:type": "website",
  },
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

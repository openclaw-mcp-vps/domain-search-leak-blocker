import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Domain Search Leak Blocker — Stop Registrars From Stealing Your Searches',
  description: 'Browser extension that masks domain searches and alerts when registrars front-run your queries. Protect your domain ideas for $7/mo.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="41933c6e-683a-4505-a642-ffea1597a82b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

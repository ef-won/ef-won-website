import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ef-Won',
  description: 'Backend systems that scale without breaking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="m-0 font-segoe bg-radial text-white">{children}</body>
    </html>
  )
}
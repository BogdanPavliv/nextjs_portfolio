import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// components
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bogdan Pavliv — Web-developer',
  description: 'Bogdan Pavliv — Web-developer'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

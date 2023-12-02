import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar.tsx'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'May Thin Kyi | Frontend Web Developer',
  description: 'React, Javascript and Front End Everyday',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

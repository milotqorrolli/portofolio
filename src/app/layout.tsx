import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Milot Qorrolli | Portfolio',
  description: 'Personal portfolio showcasing my work and experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body className="bg-[#0f0f0f] text-white">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 
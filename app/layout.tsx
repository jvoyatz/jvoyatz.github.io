import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import Header from './components/header'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Name',
  description: 'Thoughts and Tunes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} bg-black text-white antialiased min-h-screen`}>
        <Header />
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  )
}


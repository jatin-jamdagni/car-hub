import { Footer, NavBar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Car Showcase',
  description: 'Experience the Cars.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}

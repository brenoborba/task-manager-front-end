import './globals.css'
import { Inter, Raleway } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Task Manager',
  description: 'An web app that allow you to control tasks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={raleway.className}>{children}</body>
    </html>
  )
}

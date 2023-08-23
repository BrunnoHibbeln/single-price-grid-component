import './globals.css'

import { Karla } from 'next/font/google'

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable} flex h-[120vh] items-center justify-center bg-light-gray font-karla xl:h-screen`}
      >
        {children}
      </body>
    </html>
  )
}

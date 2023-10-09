import NavBar from '@components/NavBar'
import './globals.css'
import Footer from '@components/Footer'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce',
  description: 'For Your Electronic Gadgets',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='font-manrope'>
      <body className='max-w-[1340px] mx-auto font-manrope'>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}

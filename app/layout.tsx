import type { Metadata } from 'next'
import { Montserrat,  } from 'next/font/google'
import './globals.css'
import Nabvar from './Components/nabvar'
import Footer from './Components/Footer'
import Head from 'next/head'
import Script from 'next/script'


const montserrat = Montserrat({ subsets: ['latin'],
variable: "--font-mont"})

export const metadata: Metadata = {
  title: 'Žan Grajfoner Portfolio',
  description: 'Createad by Grajfo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className={`${montserrat.className}  font-mont bg-light w-full min-h-screen  dark:bg-dark`}>
      <Script id='theme_switcher' strategy='beforeInteractive'>
        {`
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
        
        `}
      </Script>
      <Nabvar />
      <div className='pt-0 w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark 
      xl:p-24 lg-p-16 md:p12 sm:p-8'> 
      {children}
      </div>
      <Footer/>
      </body>
    </html>
  )
}

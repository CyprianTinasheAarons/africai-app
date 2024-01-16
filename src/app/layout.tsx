import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const monaSans = localFont({
  src: '../fonts/Mona-Sans.var.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
  weight: '200 900',
})

export const metadata: Metadata = {
  title:
    'Africai: Leading AI and Blockchain Innovation for a United, Prosperous Africa',
  description:
    "Discover Africai's mission to transform Africa through AI and blockchain technology. Embracing unity, innovation, and sustainable development, we're dedicated to creating inclusive, secure digital solutions for Africa's unique challenges and opportunities. Join us in building a digitally empowered African society.",

  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, monaSans.variable)}
      suppressHydrationWarning
    >
      <head>
        <title>
          Africai: Leading AI and Blockchain Innovation for a United, Prosperous
          Africa
        </title>
        <meta
          name="title"
          content="Africai: Leading AI and Blockchain Innovation for a United, Prosperous Africa"
        />
        <meta
          name="description"
          content="Discover Africai's mission to transform Africa through AI and blockchain technology. Embracing unity, innovation, and sustainable development, we're dedicated to creating inclusive, secure digital solutions for Africa's unique challenges and opportunities. Join us in building a digitally empowered African society."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.topiax.xyz/" />
        <meta
          property="og:title"
          content="Africai: Leading AI and Blockchain Innovation for a United, Prosperous Africa"
        />
        <meta
          property="og:description"
          content="Discover Africai's mission to transform Africa through AI and blockchain technology. Embracing unity, innovation, and sustainable development, we're dedicated to creating inclusive, secure digital solutions for Africa's unique challenges and opportunities. Join us in building a digitally empowered African society."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/coindraw/image/upload/v1704799927/ek9wt7cysbvbskx92vou.webp"
        />

        <meta
          property="twitter:card"
          content="https://res.cloudinary.com/coindraw/image/upload/v1704799927/ek9wt7cysbvbskx92vou.webp"
        />
        <meta property="twitter:url" content="https://www.topiax.xyz/" />
        <meta
          property="twitter:title"
          content="Africai: Leading AI and Blockchain Innovation for a United, Prosperous Africa"
        />
        <meta
          property="twitter:description"
          content="Discover Africai's mission to transform Africa through AI and blockchain technology. Embracing unity, innovation, and sustainable development, we're dedicated to creating inclusive, secure digital solutions for Africa's unique challenges and opportunities. Join us in building a digitally empowered African society."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/coindraw/image/upload/v1704799927/ek9wt7cysbvbskx92vou.webp"
        />
      </head>
      <body className="flex min-h-full flex-col bg-white dark:bg-black">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

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
    'AfricAi — AI Chatbots, Consulting & Custom Solutions for African Businesses',
  description:
    "AfricAi delivers production-ready AI solutions for Africa. Chatbot setup from $500, AI consulting from $100/hr, managed subscriptions from $50/mo. 20,000+ users served across the continent.",

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
          AfricAi — AI Chatbots, Consulting &amp; Custom Solutions for African Businesses
        </title>
        <meta
          name="title"
          content="AfricAi — AI Chatbots, Consulting & Custom Solutions for African Businesses"
        />
        <meta
          name="description"
          content="AfricAi delivers production-ready AI solutions for Africa. Chatbot setup from $500, AI consulting from $100/hr, managed subscriptions from $50/mo. 20,000+ users served across the continent."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://africai.app/" />
        <meta
          property="og:title"
          content="AfricAi — AI Chatbots, Consulting & Custom Solutions for African Businesses"
        />
        <meta
          property="og:description"
          content="AfricAi delivers production-ready AI solutions for Africa. Chatbot setup from $500, AI consulting from $100/hr, managed subscriptions from $50/mo. 20,000+ users served."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/coindraw/image/upload/v1704799927/ek9wt7cysbvbskx92vou.webp"
        />

        <meta
          property="twitter:card"
          content="summary_large_image"
        />
        <meta property="twitter:url" content="https://africai.app/" />
        <meta
          property="twitter:title"
          content="AfricAi — AI Chatbots, Consulting & Custom Solutions for African Businesses"
        />
        <meta
          property="twitter:description"
          content="AfricAi delivers production-ready AI solutions for Africa. Chatbot setup from $500, AI consulting from $100/hr, managed subscriptions from $50/mo. 20,000+ users served."
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

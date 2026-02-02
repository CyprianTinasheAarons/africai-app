import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AfricAi Blog — AI Insights for African Businesses',
  description:
    'Learn how AI chatbots, automation, and local-language technology are transforming businesses across Africa. Practical guides, case studies, and industry insights.',
  openGraph: {
    title: 'AfricAi Blog — AI Insights for African Businesses',
    description:
      'Learn how AI chatbots, automation, and local-language technology are transforming businesses across Africa.',
    url: 'https://africai.app/blog',
    type: 'website',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

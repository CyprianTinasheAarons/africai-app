'use client'

import Link from 'next/link'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const posts = [
  {
    slug: 'ai-chatbots-african-business-2026',
    title: 'Why Every African Business Needs an AI Chatbot in 2026',
    excerpt:
      'Customer expectations are rising across Africa. Learn how AI chatbots can help your business serve customers 24/7 in local languages — at a fraction of the cost of human agents.',
    date: '2026-02-01',
    readTime: '7 min read',
    tags: ['AI Chatbots', 'Africa', 'Business'],
  },
  {
    slug: 'whatsapp-ai-bot-setup-guide',
    title: 'How to Set Up a WhatsApp AI Bot for Your Business (Step-by-Step)',
    excerpt:
      'WhatsApp has 700M+ users in Africa. Here\'s how to connect an AI chatbot to WhatsApp Business and start automating customer support, sales, and bookings today.',
    date: '2026-01-28',
    readTime: '10 min read',
    tags: ['WhatsApp', 'Tutorial', 'AI'],
  },
  {
    slug: 'ai-cost-reduction-small-business',
    title: '5 Ways AI Reduces Costs by 80% for Small Businesses in Africa',
    excerpt:
      'From automated customer service to smart inventory management — real case studies of African SMEs saving thousands with simple AI tools.',
    date: '2026-01-20',
    readTime: '6 min read',
    tags: ['Cost Savings', 'SMEs', 'Case Study'],
  },
  {
    slug: 'local-language-ai-shona-swahili-zulu',
    title: 'Building AI That Speaks Shona, Swahili & Zulu: The Future of African Tech',
    excerpt:
      'English-only AI leaves 80% of Africa behind. Learn how local-language AI models are changing the game for businesses, education, and healthcare across the continent.',
    date: '2026-01-15',
    readTime: '8 min read',
    tags: ['Local Languages', 'NLP', 'Innovation'],
  },
  {
    slug: 'ai-vs-hiring-customer-support-africa',
    title: 'AI Chatbot vs. Hiring Staff: The Real Cost Comparison for African Businesses',
    excerpt:
      'We break down the numbers: hiring 3 customer support agents vs. deploying an AI chatbot. The results might surprise you — especially for businesses handling 100+ daily inquiries.',
    date: '2026-01-10',
    readTime: '9 min read',
    tags: ['ROI', 'Comparison', 'Business Strategy'],
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-20">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-gray-400 hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          AfricAi Blog
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl">
          Insights on AI, automation, and technology for African businesses.
          Learn how to leverage AI to grow your business and reduce costs.
        </p>

        <div className="mt-12 space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group rounded-xl border border-gray-800 bg-gray-900/30 p-6 transition-all hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3">
                <time>{post.date}</time>
                <span>·</span>
                <span>{post.readTime}</span>
                <span>·</span>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-amber-500/10 px-2 py-0.5 text-amber-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="text-xl font-bold group-hover:text-amber-400 transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-amber-400">
                Read more →
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center rounded-xl border border-gray-800 bg-gray-900/30 p-8">
          <h2 className="text-xl font-bold">Want AI for your business?</h2>
          <p className="mt-2 text-gray-400 text-sm">
            We build AI chatbots starting from $50/month. Book a free strategy call.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://cal.com/cyprian-aarons-topiax/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-amber-500 px-6 py-2.5 font-semibold text-black transition-colors hover:bg-amber-400"
            >
              📞 Book a Free Call
            </a>
            <a
              href="https://wa.me/263777150345"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#25D366] px-6 py-2.5 font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/10"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  )
}

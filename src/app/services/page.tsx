'use client'

import Link from 'next/link'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const services = [
  {
    emoji: '🤖',
    title: 'AI Chatbot Setup',
    price: '$500 – $2,000',
    unit: 'per project',
    description:
      'Get a fully deployed AI chatbot tailored to your business. Supports WhatsApp, web, and mobile. Trained on your data, speaking your customers\' language.',
    features: [
      'Custom training on your business data',
      'WhatsApp & web integration',
      'Local language support (Shona, Zulu, Swahili & more)',
      '30-day post-launch support',
    ],
    cta: 'Get Started',
    ctaLink: 'https://cal.com/cyprian-aarons-topiax/30min',
  },
  {
    emoji: '📋',
    title: 'AI Audit & Roadmap',
    price: '$200 – $500',
    unit: '3-day delivery',
    description:
      'Not sure where AI fits in your business? We\'ll audit your operations and deliver a clear, actionable AI roadmap in 3 business days.',
    features: [
      'Business process analysis',
      'AI opportunity identification',
      'Implementation roadmap with timelines',
      'Cost-benefit breakdown',
      '30-minute strategy call',
    ],
    cta: 'Book Your Audit',
    ctaLink: 'https://cal.com/cyprian-aarons-topiax/30min',
  },
  {
    emoji: '🔄',
    title: 'Chatbot Subscription',
    price: '$50 – $200',
    unit: '/month recurring',
    description:
      'Don\'t want to build from scratch? Subscribe to a managed AI chatbot. We handle hosting, updates, and improvements — you handle growth.',
    features: [
      'Managed hosting & uptime monitoring',
      'Monthly performance reports',
      'Ongoing training & improvements',
      'Priority support',
      'Scale as you grow',
    ],
    cta: 'Subscribe Now',
    ctaLink: 'https://cal.com/cyprian-aarons-topiax/30min',
    popular: true,
  },
  {
    emoji: '💡',
    title: 'AI Consulting',
    price: '$100 – $300',
    unit: '/hour',
    description:
      'Need expert guidance? Book our AI consultants for strategy sessions, technical reviews, or team training.',
    features: [
      'One-on-one expert sessions',
      'Technical architecture review',
      'Team AI training workshops',
      'Implementation guidance',
      'Follow-up action items',
    ],
    cta: 'Book a Session',
    ctaLink: 'https://cal.com/cyprian-aarons-topiax/30min',
  },
  {
    emoji: '🚀',
    title: 'Custom AI Solutions',
    price: 'Contact for Quote',
    unit: '',
    description:
      'Enterprise-grade AI platforms, custom ML models, and end-to-end AI product development. We\'ve built solutions serving thousands across Africa.',
    features: [
      'AI platforms (20,000+ users served)',
      'Retail POS with AI analytics',
      'Customer service AI platforms',
      'Multi-language chatbot systems',
    ],
    cta: 'Chat on WhatsApp',
    ctaLink: 'https://wa.me/263777150345',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="mx-auto max-w-5xl px-6 pt-20 pb-12 text-center">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-gray-400 hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Our Services & Pricing
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Production-ready AI solutions built for African businesses.
          We&apos;ve served <span className="text-amber-400 font-semibold">20,000+ users</span> across the continent.
        </p>

        {/* Stats bar */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { number: '20,000+', label: 'Users Served' },
            { number: '20+', label: 'Projects Delivered' },
            { number: '80%', label: 'Cost Reduction' },
            { number: '6+', label: 'Years Experience' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-gray-800 bg-gray-900/50 p-4">
              <div className="text-2xl font-bold text-amber-400">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative rounded-xl border p-6 transition-all hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 ${
                service.popular
                  ? 'border-amber-500 bg-amber-500/5'
                  : 'border-gray-800 bg-gray-900/30'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-3 py-0.5 text-xs font-semibold text-black">
                  MOST POPULAR
                </div>
              )}

              <div className="text-3xl mb-3">{service.emoji}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>

              <div className="mt-3 mb-4">
                <span className="text-2xl font-bold text-amber-400">{service.price}</span>
                {service.unit && (
                  <span className="text-sm text-gray-400 ml-1">{service.unit}</span>
                )}
              </div>

              <p className="text-sm text-gray-400 mb-4">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm">
                    <span className="text-amber-400 mr-2 mt-0.5">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={service.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-amber-500 py-3 text-center font-semibold text-black transition-colors hover:bg-amber-400"
              >
                {service.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center rounded-xl border border-gray-800 bg-gray-900/30 p-10">
          <h2 className="text-2xl font-bold">Not sure what you need?</h2>
          <p className="mt-2 text-gray-400">
            Let&apos;s talk. Book a free 30-minute strategy call and we&apos;ll figure it out together.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://cal.com/cyprian-aarons-topiax/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-amber-500 px-8 py-3 font-semibold text-black transition-colors hover:bg-amber-400"
            >
              📞 Book a Free Call
            </a>
            <a
              href="https://wa.me/263777150345"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#25D366] px-8 py-3 font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/10"
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

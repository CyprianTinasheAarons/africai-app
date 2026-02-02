'use client'

import Link from 'next/link'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-black text-white">
      <article className="mx-auto max-w-3xl px-6 pt-20 pb-20">
        <Link href="/blog" className="mb-8 inline-block text-sm text-gray-400 hover:text-white transition-colors">
          ← Back to Blog
        </Link>

        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
          <time>January 28, 2026</time>
          <span>·</span>
          <span>10 min read</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl leading-tight">
          How to Set Up a WhatsApp AI Bot for Your Business (Step-by-Step)
        </h1>

        <div className="mt-8 prose prose-invert prose-amber max-w-none text-gray-300 leading-relaxed space-y-6">
          <p className="text-lg text-gray-200">
            WhatsApp is Africa&apos;s #1 communication platform with over 700 million users. If your business 
            isn&apos;t on WhatsApp with an AI bot, you&apos;re leaving money on the table. This guide walks you 
            through everything you need to know.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10">What Is a WhatsApp AI Bot?</h2>
          <p>
            A WhatsApp AI bot is an automated assistant that lives inside your WhatsApp Business account. It can:
          </p>
          <ul className="space-y-2 list-none pl-0">
            <li className="flex items-start"><span className="text-amber-400 mr-3">✓</span>Answer customer questions instantly — in any language</li>
            <li className="flex items-start"><span className="text-amber-400 mr-3">✓</span>Process orders and bookings without human intervention</li>
            <li className="flex items-start"><span className="text-amber-400 mr-3">✓</span>Send order updates, reminders, and promotions</li>
            <li className="flex items-start"><span className="text-amber-400 mr-3">✓</span>Handle hundreds of conversations simultaneously</li>
            <li className="flex items-start"><span className="text-amber-400 mr-3">✓</span>Escalate complex issues to human agents when needed</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10">Step 1: Choose Your Approach</h2>
          <p>You have three main options:</p>

          <div className="grid gap-4 my-6 not-prose">
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-5">
              <h3 className="font-bold text-amber-400">Option A: DIY (Technical)</h3>
              <p className="text-sm text-gray-400 mt-1">Use the WhatsApp Business API directly. Requires a developer, server hosting, and Meta Business verification. Cost: $200-500/month for infrastructure + development time.</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-5">
              <h3 className="font-bold text-amber-400">Option B: No-Code Platforms</h3>
              <p className="text-sm text-gray-400 mt-1">Tools like ManyChat or Respond.io offer drag-and-drop bot builders. Limited AI capabilities. Cost: $50-200/month for the platform.</p>
            </div>
            <div className="rounded-lg border border-amber-500/50 bg-amber-500/5 p-5">
              <h3 className="font-bold text-amber-400">Option C: Done-For-You (Recommended)</h3>
              <p className="text-sm text-gray-400 mt-1">Hire an AI agency like AfricAi to build, deploy, and manage your bot. Custom-trained on your business data, local language support included. Cost: $500-2,000 setup + $50-200/month.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10">Step 2: Set Up WhatsApp Business API</h2>
          <p>Regardless of your approach, you need access to the WhatsApp Business API:</p>
          <ol className="space-y-3 list-none pl-0 counter-reset-none">
            <li className="flex items-start"><span className="text-amber-400 mr-3 font-bold">1.</span><span><strong>Register on Meta Business Suite</strong> — Create a Meta Business account at business.facebook.com if you don&apos;t have one.</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 font-bold">2.</span><span><strong>Verify your business</strong> — Upload business registration documents. This takes 1-5 business days.</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 font-bold">3.</span><span><strong>Get a dedicated phone number</strong> — You need a phone number that isn&apos;t already registered on WhatsApp.</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 font-bold">4.</span><span><strong>Choose a BSP (Business Solution Provider)</strong> — Or use Meta&apos;s Cloud API directly.</span></li>
          </ol>

          <h2 className="text-2xl font-bold text-white mt-10">Step 3: Train Your AI</h2>
          <p>This is where the magic happens. Your AI bot needs to know your business:</p>
          <ul className="space-y-2 list-none pl-0">
            <li className="flex items-start"><span className="text-amber-400 mr-3">📄</span><span><strong>Product/service catalog</strong> — Upload your full product list with descriptions and prices</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3">❓</span><span><strong>FAQ database</strong> — Compile every question customers ask (check old messages for patterns)</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3">🗣️</span><span><strong>Tone & language</strong> — Define how the bot should speak (formal? casual? mix of English and local language?)</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3">🔄</span><span><strong>Workflows</strong> — Map out common processes (order → payment → delivery → follow-up)</span></li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10">Step 4: Deploy & Test</h2>
          <p>
            Before going live, test rigorously:
          </p>
          <ul className="space-y-2 list-none pl-0">
            <li className="flex items-start"><span className="text-amber-400 mr-3">✓</span>Send test messages in every language you support</li>
            <li className="flex items-start"><span className="text-amber-400 mr-3">✓</span>Try edge cases — what happens when the bot doesn&apos;t know the answer?</li>
            <li className="flex items-start"><span className="text-amber-400 mr-3">✓</span>Test the human handoff flow — can agents take over smoothly?</li>
            <li className="flex items-start"><span className="text-amber-400 mr-3">✓</span>Verify payment integration if applicable</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10">Step 5: Launch & Optimize</h2>
          <p>
            Go live gradually. Start with a subset of customers, monitor conversations, and refine. Most bots improve 
            dramatically in the first 30 days as you feed them real conversation data.
          </p>
          <p>
            <strong>Pro tip:</strong> Add your WhatsApp number to your website, social media, Google Business profile, 
            and even physical signage. The easier it is to find, the more leads you capture.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10">What to Expect: ROI Timeline</h2>
          <div className="grid gap-4 my-6 not-prose">
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white">Week 1-2</span>
                <span className="text-amber-400 text-sm">Setup & Training</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">Bot deployed, handling basic queries. 40-60% of questions answered automatically.</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white">Month 1</span>
                <span className="text-amber-400 text-sm">Learning Phase</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">Bot accuracy improves to 80%+. Customer response time drops from hours to seconds.</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white">Month 2-3</span>
                <span className="text-amber-400 text-sm">ROI Positive</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">Support costs down 50-80%. Conversion rates up 20-40%. The bot pays for itself.</p>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 text-center">
            <h3 className="text-xl font-bold text-white">Skip the DIY headaches</h3>
            <p className="mt-2 text-gray-400">We&apos;ll build, deploy, and manage your WhatsApp AI bot. Setup starts at $500.</p>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://cal.com/cyprian-aarons-topiax/30min" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-amber-500 px-6 py-2.5 font-semibold text-black hover:bg-amber-400">
                📞 Book a Free Call
              </a>
              <a href="https://wa.me/263777150345" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-[#25D366] px-6 py-2.5 font-semibold text-[#25D366] hover:bg-[#25D366]/10">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </article>
      <WhatsAppButton />
    </div>
  )
}

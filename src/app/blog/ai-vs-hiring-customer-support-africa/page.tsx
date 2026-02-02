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
          <time>January 10, 2026</time>
          <span>·</span>
          <span>9 min read</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl leading-tight">
          AI Chatbot vs. Hiring Staff: The Real Cost Comparison for African Businesses
        </h1>

        <div className="mt-8 prose prose-invert prose-amber max-w-none text-gray-300 leading-relaxed space-y-6">
          <p className="text-lg text-gray-200">
            &quot;Should I hire more people or get an AI chatbot?&quot; — It&apos;s the question every growing 
            African business owner asks. Let&apos;s break down the real numbers, no fluff, so you can make the 
            right call for YOUR business.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10">The Scenario</h2>
          <p>
            Let&apos;s compare apples to apples. Imagine a business handling <strong>100+ customer inquiries per day</strong> — 
            a typical medium-sized e-commerce store, restaurant chain, or service provider in Africa.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10">Option A: Hire Human Agents</h2>
          <p>To cover 12 hours/day (7am-7pm), you need at minimum:</p>

          <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-5 my-6 not-prose">
            <h3 className="font-bold text-red-400 mb-3">💼 Monthly Cost: Human Team</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-400">3 Customer support agents × $300-500</span><span className="text-red-400">$900 – $1,500</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Training & onboarding (amortized)</span><span className="text-red-400">$100 – $200</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Equipment (phones, computers)</span><span className="text-red-400">$50 – $100</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Office space / utilities</span><span className="text-red-400">$100 – $300</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Management overhead</span><span className="text-red-400">$100 – $200</span></div>
              <div className="flex justify-between pt-2 border-t border-red-500/20">
                <span className="font-bold text-white">TOTAL MONTHLY</span>
                <span className="font-bold text-red-400">$1,250 – $2,300</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-white">ANNUAL COST</span>
                <span className="font-bold text-red-400">$15,000 – $27,600</span>
              </div>
            </div>
          </div>

          <p><strong>What you get:</strong></p>
          <ul className="space-y-2 list-none pl-0">
            <li className="flex items-start"><span className="text-green-400 mr-3">✓</span>Human empathy and complex problem-solving</li>
            <li className="flex items-start"><span className="text-green-400 mr-3">✓</span>12 hours coverage (not 24/7)</li>
            <li className="flex items-start"><span className="text-green-400 mr-3">✓</span>Can handle 20-30 conversations per agent per day</li>
            <li className="flex items-start"><span className="text-red-400 mr-3">✗</span>Sick days, holidays, turnover</li>
            <li className="flex items-start"><span className="text-red-400 mr-3">✗</span>Inconsistent quality across agents</li>
            <li className="flex items-start"><span className="text-red-400 mr-3">✗</span>Can&apos;t scale without hiring more</li>
            <li className="flex items-start"><span className="text-red-400 mr-3">✗</span>Zero coverage overnight</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10">Option B: AI Chatbot + 1 Human</h2>

          <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-5 my-6 not-prose">
            <h3 className="font-bold text-green-400 mb-3">🤖 Monthly Cost: AI + Human Hybrid</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-400">AI chatbot (managed subscription)</span><span className="text-green-400">$50 – $200</span></div>
              <div className="flex justify-between"><span className="text-gray-400">1 Senior support agent (escalations)</span><span className="text-green-400">$300 – $500</span></div>
              <div className="flex justify-between"><span className="text-gray-400">One-time setup (amortized over 12mo)</span><span className="text-green-400">$42 – $167</span></div>
              <div className="flex justify-between pt-2 border-t border-green-500/20">
                <span className="font-bold text-white">TOTAL MONTHLY</span>
                <span className="font-bold text-green-400">$392 – $867</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-white">ANNUAL COST</span>
                <span className="font-bold text-green-400">$4,700 – $10,400</span>
              </div>
            </div>
          </div>

          <p><strong>What you get:</strong></p>
          <ul className="space-y-2 list-none pl-0">
            <li className="flex items-start"><span className="text-green-400 mr-3">✓</span><strong>24/7/365 coverage</strong> — never miss a lead at 2am</li>
            <li className="flex items-start"><span className="text-green-400 mr-3">✓</span><strong>Unlimited simultaneous conversations</strong> — 1 or 1,000, same cost</li>
            <li className="flex items-start"><span className="text-green-400 mr-3">✓</span><strong>Instant responses</strong> — under 3 seconds, every time</li>
            <li className="flex items-start"><span className="text-green-400 mr-3">✓</span><strong>Multi-language</strong> — Shona, Swahili, Zulu, English simultaneously</li>
            <li className="flex items-start"><span className="text-green-400 mr-3">✓</span><strong>Consistent quality</strong> — same great answer every time</li>
            <li className="flex items-start"><span className="text-green-400 mr-3">✓</span><strong>Human backup</strong> — complex cases go to your senior agent</li>
            <li className="flex items-start"><span className="text-green-400 mr-3">✓</span><strong>Scales instantly</strong> — Black Friday? Holiday rush? No problem.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10">The Verdict</h2>

          <div className="grid grid-cols-2 gap-4 my-6 not-prose">
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4 text-center">
              <div className="text-sm text-gray-400">Human Team</div>
              <div className="text-2xl font-bold text-red-400 mt-1">$21K</div>
              <div className="text-xs text-gray-500">avg annual cost</div>
            </div>
            <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4 text-center">
              <div className="text-sm text-gray-400">AI + 1 Human</div>
              <div className="text-2xl font-bold text-green-400 mt-1">$7.5K</div>
              <div className="text-xs text-gray-500">avg annual cost</div>
            </div>
          </div>

          <p className="text-xl font-bold text-center text-amber-400">
            That&apos;s a 64% cost reduction with BETTER service quality.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10">When to Still Hire Humans</h2>
          <p>AI isn&apos;t always the answer. You still need humans for:</p>
          <ul className="space-y-2 list-none pl-0">
            <li className="flex items-start"><span className="text-amber-400 mr-3">•</span><strong>High-value sales:</strong> Big deals need personal relationships</li>
            <li className="flex items-start"><span className="text-amber-400 mr-3">•</span><strong>Crisis management:</strong> Angry customers need human empathy</li>
            <li className="flex items-start"><span className="text-amber-400 mr-3">•</span><strong>Complex negotiations:</strong> Contract discussions, custom solutions</li>
            <li className="flex items-start"><span className="text-amber-400 mr-3">•</span><strong>Sensitive situations:</strong> Healthcare, legal, financial advice</li>
          </ul>
          <p>
            The sweet spot? <strong>AI handles 80% of volume, humans handle 20% of complexity.</strong> 
            That&apos;s where the magic happens — your human agents are freed from repetitive questions 
            and can focus on the conversations that actually need their expertise.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10">The Bottom Line</h2>
          <p>
            If you&apos;re handling more than 50 customer inquiries per day and spending over $1,000/month 
            on support staff, an AI chatbot will save you money from month one. The math doesn&apos;t lie.
          </p>
          <p>
            And unlike hiring, there&apos;s no risk. If it doesn&apos;t work, you cancel. If it does work 
            (and for 90% of businesses it does), you&apos;ve just unlocked permanent cost savings and better 
            customer satisfaction.
          </p>

          <div className="mt-10 rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 text-center">
            <h3 className="text-xl font-bold text-white">See the numbers for YOUR business</h3>
            <p className="mt-2 text-gray-400">Book a free call and we&apos;ll calculate your exact savings. No commitment.</p>
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

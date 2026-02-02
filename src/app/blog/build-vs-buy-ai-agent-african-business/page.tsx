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
          <time>January 18, 2026</time>
          <span>·</span>
          <span>7 min read</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl leading-tight">
          Build vs Buy: Should Your African Business Build Custom AI or Use Off-the-Shelf?
        </h1>

        <div className="mt-8 prose prose-invert prose-amber max-w-none text-gray-300 leading-relaxed space-y-6">
          <p className="text-lg text-gray-200">
            You&apos;ve decided your business needs AI. Great. But now comes the real question: do you build it yourself, 
            buy an off-the-shelf solution, or hire an agency to build it for you? The answer depends on your budget, 
            timeline, and — critically — whether you&apos;re operating in Africa.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10">The Three Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose">
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-5">
              <div className="text-lg font-bold text-white mb-1">🔨 DIY Build</div>
              <div className="text-xs text-gray-500 mb-3">Build it yourself with your own dev team</div>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between"><span>Cost:</span><strong className="text-white">$5K–50K+</strong></div>
                <div className="flex justify-between"><span>Timeline:</span><strong className="text-white">3–6 months</strong></div>
                <div className="flex justify-between"><span>Control:</span><strong className="text-white">Full</strong></div>
                <div className="flex justify-between"><span>Team needed:</span><strong className="text-white">Yes (devs)</strong></div>
                <div className="flex justify-between"><span>Maintenance:</span><strong className="text-white">High</strong></div>
                <div className="flex justify-between"><span>Customization:</span><strong className="text-white">Unlimited</strong></div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-5">
              <div className="text-lg font-bold text-white mb-1">📦 Off-the-Shelf</div>
              <div className="text-xs text-gray-500 mb-3">Intercom, Drift, Tidio, etc.</div>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between"><span>Cost:</span><strong className="text-white">$50–500/mo</strong></div>
                <div className="flex justify-between"><span>Timeline:</span><strong className="text-white">1 week</strong></div>
                <div className="flex justify-between"><span>Control:</span><strong className="text-white">Limited</strong></div>
                <div className="flex justify-between"><span>Team needed:</span><strong className="text-white">No</strong></div>
                <div className="flex justify-between"><span>Maintenance:</span><strong className="text-white">Low</strong></div>
                <div className="flex justify-between"><span>Customization:</span><strong className="text-white">Limited</strong></div>
              </div>
            </div>

            <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-5">
              <div className="text-lg font-bold text-amber-400 mb-1">⚡ Agency-Built</div>
              <div className="text-xs text-gray-500 mb-3">Custom-built by AfricAi</div>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between"><span>Cost:</span><strong className="text-amber-400">$500–2K + $50–200/mo</strong></div>
                <div className="flex justify-between"><span>Timeline:</span><strong className="text-amber-400">2–4 weeks</strong></div>
                <div className="flex justify-between"><span>Control:</span><strong className="text-amber-400">High</strong></div>
                <div className="flex justify-between"><span>Team needed:</span><strong className="text-amber-400">No</strong></div>
                <div className="flex justify-between"><span>Maintenance:</span><strong className="text-amber-400">Managed</strong></div>
                <div className="flex justify-between"><span>Customization:</span><strong className="text-amber-400">Full</strong></div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10">Why Off-the-Shelf Fails in Africa</h2>
          <p>
            Solutions like Intercom and Drift are built for Western markets. Here&apos;s why they fall short in Africa:
          </p>
          <ul className="space-y-3 list-none pl-0">
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✗</span><span><strong>No local language support:</strong> They don&apos;t speak Shona, Swahili, Zulu, Yoruba, or Amharic. English-only AI excludes 80% of your potential customers.</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✗</span><span><strong>Not WhatsApp-native:</strong> They bolt WhatsApp on as an afterthought. In Africa, WhatsApp IS the internet for most users. You need WhatsApp-first, not WhatsApp-also.</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✗</span><span><strong>No mobile money integration:</strong> They support Stripe and PayPal. Your customers use EcoCash, M-Pesa, and MTN MoMo. No mobile money = no payments.</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✗</span><span><strong>Assumes Western infrastructure:</strong> Reliable broadband, desktop users, credit cards, formal business processes. That&apos;s not Africa&apos;s reality.</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">✗</span><span><strong>Pricing in USD:</strong> $300/month for Intercom is reasonable in San Francisco. It&apos;s prohibitive for an SME in Harare, Nairobi, or Lagos.</span></li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10">When to Build Custom (DIY)</h2>
          <p>Building in-house makes sense when:</p>
          <ul className="space-y-3 list-none pl-0">
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">→</span><span>You have an experienced AI/ML engineering team already on staff</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">→</span><span>Your AI is a core product differentiator (you&apos;re an AI company)</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">→</span><span>You need complete control over the model, data, and infrastructure</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">→</span><span>You have $50K+ budget and 6+ months runway before needing ROI</span></li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10">When to Go Agency-Built (AfricAi)</h2>
          <p>Agency-built is the sweet spot for most African businesses when:</p>
          <ul className="space-y-3 list-none pl-0">
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">→</span><span>You need it working in weeks, not months</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">→</span><span>You don&apos;t have an in-house dev team (or they&apos;re busy)</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">→</span><span>You need WhatsApp, local languages, and mobile money from day one</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">→</span><span>You want it fully customized to your business — not a cookie-cutter template</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">→</span><span>You want someone else to manage, monitor, and improve it over time</span></li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10">The Decision Framework</h2>
          <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-5 my-6 not-prose text-sm text-gray-300 space-y-3">
            <p><strong className="text-white">Budget under $1K?</strong> → Start with agency-built. Get ROI fast, reinvest.</p>
            <p><strong className="text-white">Budget $1K–5K?</strong> → Agency-built with premium features. Full automation suite.</p>
            <p><strong className="text-white">Budget $5K–50K?</strong> → Agency-built now, evaluate DIY migration at scale.</p>
            <p><strong className="text-white">Budget $50K+?</strong> → Consider DIY if you have the team. Otherwise, agency-built with enterprise features.</p>
            <p><strong className="text-white">No dev team?</strong> → Agency-built. Always.</p>
            <p><strong className="text-white">Need it in &lt;1 month?</strong> → Agency-built. Always.</p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10">The Hybrid Approach: Start Agency, Scale In-House</h2>
          <p>
            The smartest strategy for growing African businesses:
          </p>
          <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-5 my-6 not-prose">
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <span className="rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-bold text-amber-400">1</span>
                <span><strong className="text-white">Phase 1 (Now):</strong> Let AfricAi build your AI agent. Start generating ROI in 2–4 weeks.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-bold text-amber-400">2</span>
                <span><strong className="text-white">Phase 2 (3–6 months):</strong> Use AI-generated revenue to hire a developer. Learn from the working system.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-bold text-amber-400">3</span>
                <span><strong className="text-white">Phase 3 (6–12 months):</strong> Gradually migrate to in-house if needed. Or keep the managed service — many businesses do.</span>
              </div>
            </div>
          </div>
          <p>
            This approach gives you <strong>immediate ROI</strong> without the upfront risk of a massive build. You learn 
            what works before investing in custom infrastructure.
          </p>

          <div className="grid grid-cols-2 gap-4 my-6 not-prose">
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4 text-center">
              <div className="text-2xl font-bold text-amber-400">2–4 weeks</div>
              <div className="text-sm text-gray-400">To First AI Agent (Agency)</div>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4 text-center">
              <div className="text-2xl font-bold text-amber-400">3–6 months</div>
              <div className="text-sm text-gray-400">To First AI Agent (DIY)</div>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 text-center">
            <h3 className="text-xl font-bold text-white">Let AfricAi build your first AI agent</h3>
            <p className="mt-2 text-gray-400">Start generating ROI in weeks, not months. Book a free 30-minute call to discuss your needs.</p>
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

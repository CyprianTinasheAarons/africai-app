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
          <time>January 15, 2026</time>
          <span>·</span>
          <span>8 min read</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl leading-tight">
          Building AI That Speaks Shona, Swahili & Zulu: The Future of African Tech
        </h1>

        <div className="mt-8 prose prose-invert prose-amber max-w-none text-gray-300 leading-relaxed space-y-6">
          <p className="text-lg text-gray-200">
            There are over 2,000 languages spoken across Africa. Yet most AI tools only work properly in English. 
            That&apos;s not just a technical gap — it&apos;s a massive business opportunity. The companies building 
            AI that speaks African languages will own the next decade of African tech.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10">The Language Problem in Numbers</h2>
          <ul className="space-y-3 list-none pl-0">
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">→</span><span>Only <strong>26%</strong> of Africans speak English as a first or second language</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">→</span><span><strong>75%</strong> of customer service interactions in Africa happen in local languages</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">→</span><span>Customers are <strong>3x more likely to buy</strong> when served in their native language</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">→</span><span>English-only chatbots <strong>lose 60-80%</strong> of potential African customers</span></li>
          </ul>
          <p>
            Think about it: a farmer in rural Zimbabwe who speaks Shona, a market trader in Lagos who prefers Yoruba, 
            a student in Dar es Salaam who thinks in Swahili. If your AI can&apos;t talk to them, you&apos;ve lost them 
            before you even started.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10">How Local Language AI Works</h2>
          <p>
            Modern AI language models can be fine-tuned to understand and respond in African languages. Here&apos;s the approach:
          </p>

          <div className="grid gap-4 my-6 not-prose">
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-5">
              <h3 className="font-bold text-amber-400">Layer 1: Base Model</h3>
              <p className="text-sm text-gray-400 mt-1">Start with a powerful foundation model (GPT-4, Claude, Llama) that already has some multilingual capability. These models understand grammar and context even in low-resource languages.</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-5">
              <h3 className="font-bold text-amber-400">Layer 2: Local Language Fine-Tuning</h3>
              <p className="text-sm text-gray-400 mt-1">Feed the model thousands of examples in the target language — customer conversations, product descriptions, FAQs. This teaches it the vocabulary, idioms, and cultural nuances specific to each language.</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-5">
              <h3 className="font-bold text-amber-400">Layer 3: Business Context</h3>
              <p className="text-sm text-gray-400 mt-1">Train on YOUR specific business data — products, services, pricing, policies. Now the bot doesn&apos;t just speak Shona, it speaks Shona about YOUR business.</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-5">
              <h3 className="font-bold text-amber-400">Layer 4: Code-Switching</h3>
              <p className="text-sm text-gray-400 mt-1">In Africa, people mix languages constantly — &quot;Shonglish&quot;, &quot;Swanglish&quot;, &quot;Franglais&quot;. The best AI handles this naturally, switching between languages mid-conversation just like a real person would.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10">Languages We Support Today</h2>
          <p>At AfricAi, we&apos;ve built chatbots that work in:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 not-prose">
            {['Shona', 'Ndebele', 'Swahili', 'Zulu', 'Xhosa', 'Yoruba', 'Hausa', 'Amharic', 'French', 'Portuguese', 'Arabic', 'English'].map((lang) => (
              <div key={lang} className="rounded-lg border border-gray-800 bg-gray-900/50 p-3 text-center text-sm">
                <span className="text-amber-400 font-semibold">{lang}</span>
              </div>
            ))}
          </div>
          <p>
            And we&apos;re adding more every month. If your customers speak it, we can build an AI that speaks it too.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10">Case Study: Shona-Speaking Chatbot for Harare Retailer</h2>
          <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-5 my-6">
            <p className="text-sm text-gray-300">
              A retail chain in Harare deployed an English-only chatbot and got 30% adoption. After we rebuilt it with 
              Shona + English code-switching capability:
            </p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">78%</div>
                <div className="text-xs text-gray-400">Adoption Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">3x</div>
                <div className="text-xs text-gray-400">More Inquiries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">45%</div>
                <div className="text-xs text-gray-400">Sales Increase</div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10">The Business Case</h2>
          <p>
            Local language AI isn&apos;t about being nice or inclusive (though it is both). It&apos;s about money:
          </p>
          <ul className="space-y-3 list-none pl-0">
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">💰</span><span><strong>Higher conversion rates:</strong> Customers buy 3x more when served in their language</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">📈</span><span><strong>Wider market reach:</strong> Access the 74% of Africans who don&apos;t speak English fluently</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">🤝</span><span><strong>Trust building:</strong> Speaking someone&apos;s language builds instant rapport and credibility</span></li>
            <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">🏆</span><span><strong>Competitive moat:</strong> Most competitors won&apos;t invest in this — your advantage</span></li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10">The Future</h2>
          <p>
            Within 2 years, local language AI won&apos;t be a differentiator — it&apos;ll be a requirement. The African 
            Union&apos;s Digital Transformation Strategy explicitly calls for technology that serves all citizens in their 
            mother tongue. Governments, NGOs, and enterprises are all moving this direction.
          </p>
          <p>
            The question is: will you be the business that leads, or the one that follows?
          </p>

          <div className="mt-10 rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 text-center">
            <h3 className="text-xl font-bold text-white">Need a chatbot that speaks your customers&apos; language?</h3>
            <p className="mt-2 text-gray-400">We build multilingual AI chatbots for African businesses. Let&apos;s talk.</p>
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

import { Building2, Globe2, Rocket, Sparkles } from 'lucide-react'
import PartnerWithUs from '../components/PartnerWithUs'
import SEO from '../components/SEO'

const stats = [
  { label: 'Founded', value: 'Nov 2022', detail: 'Built by operators in Dubai' },
  { label: 'Customers', value: '5,000+', detail: 'SMBs and mid-market teams' },
  { label: 'Team', value: '140+', detail: 'Finance, product, and partnerships' },
  { label: 'Market focus', value: 'UAE & GCC', detail: 'On-ground tax and compliance ops' },
]

const milestones = [
  { year: '2022', title: 'Launched Finanshels', detail: 'Started in Dubai with operators who know founders and finance.' },
  { year: '2023', title: 'Tax + compliance rails', detail: 'Built VAT and corporate tax pods dedicated to UAE businesses.' },
  { year: '2024', title: '5,000+ customers', detail: 'Scaled delivery and reporting while keeping every client audit-ready.' },
  { year: '2025', title: '140+ expert team', detail: 'Finance leaders, product builders, and analysts working on-ground in the UAE.' },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Finanshels"
        description="Finanshels is a Dubai-founded finance, tax, and compliance partner serving 5,000+ UAE businesses with on-ground operators and clear SLAs."
        path="/about"
        structuredData={({ canonicalUrl }) => ({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'About Finanshels',
          url: canonicalUrl,
          description:
            'Finance, tax, and compliance partner built by operators in Dubai serving SMEs and mid-market teams across the UAE and GCC.',
        })}
      />
      <div className="space-y-16 pb-20">
      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 pt-12">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-10 shadow-2xl shadow-slate-900/40">
          <div className="flex items-center gap-3 text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">
            <Sparkles size={18} />
            About Finanshels
          </div>
          <div className="grid lg:grid-cols-2 gap-10 mt-2 items-start">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Finance, tax, and compliance for founders in the UAE.
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                We built Finanshels to give founders both strategic and operations-focused finance partners. Operators plus simple workflows keep clients compliant—whether they are growing, restructuring, or winding down.
              </p>
              <div className="flex flex-wrap gap-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-white">
                  <Building2 size={16} /> HQ: Dubai, UAE
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-white">
                  <Globe2 size={16} /> Serving Founders
                </span>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold">{stat.label}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-slate-300 leading-relaxed">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-white/5 to-slate-900 p-10 shadow-2xl shadow-slate-900/50">
          <div className="flex items-center gap-3 text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">
            <Rocket size={18} />
            Journey
          </div>
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            {milestones.map((item) => (
              <div key={item.year} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold">{item.year}</p>
                <p className="text-lg font-semibold text-white mt-2">{item.title}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnerWithUs />
      </div>
    </>
  )
}

import { Link } from 'react-router-dom'
import { Building2, Globe2, HeartHandshake, Rocket, Sparkles, Target, Users, ShieldCheck } from 'lucide-react'

const stats = [
  { label: 'Founded', value: '2022', detail: 'Built by operators in Dubai' },
  { label: 'Customers', value: '5,000+', detail: 'SMBs and mid-market teams' },
  { label: 'Team', value: '140+', detail: 'Finance, product, and success' },
  { label: 'Market focus', value: 'UAE', detail: 'On-ground tax and compliance ops' },
]

const pillars = [
  { title: 'Operator DNA', description: 'Partners speak to founders and finance leaders, not layers of account managers.', icon: Rocket },
  { title: 'Regulatory confidence', description: 'Tax, compliance, and payroll handled locally with auditable workflows.', icon: ShieldCheck },
  { title: 'Product + service', description: 'Automation where it matters, people where it counts. Reporting, closure, and insights in one place.', icon: Target },
  { title: 'Partner obsession', description: 'We measure ourselves on your brand lift, revenue, and NPS. Every motion has shared OKRs.', icon: HeartHandshake },
]

const milestones = [
  { year: '2022', title: 'Launched Finanshels', detail: 'Started in Dubai with operators who know founders and finance.' },
  { year: '2023', title: 'Tax + compliance rails', detail: 'Built VAT, corporate tax, and payroll pods dedicated to UAE businesses.' },
  { year: '2024', title: '5,000+ customers', detail: 'Scaled delivery and reporting while keeping every client audit-ready.' },
  { year: '2025', title: '140+ expert team', detail: 'Finance leaders, product builders, and analysts working on-ground in the UAE.' },
]

export default function About() {
  return (
    <div className="space-y-16 pb-20">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-10 shadow-2xl shadow-slate-900/40">
          <div className="flex items-center gap-3 text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">
            <Sparkles size={18} />
            About Finanshels
          </div>
          <div className="grid lg:grid-cols-2 gap-10 mt-6 items-start">
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Finance, tax, and compliance for founders in the UAE.
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                We built Finanshels to give teams a faster, clearer finance partner. Operators plus simple workflows keep clients compliant—whether they are growing, restructuring, or winding down.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-white">
                  <Building2 size={16} /> HQ: Dubai, UAE
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-white">
                  <Globe2 size={16} /> Serving UAE founders
                </span>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold">{stat.label}</p>
                  <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
                  <p className="text-sm text-slate-300">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">Operating system</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">How we deliver results that stick.</h2>
            <p className="text-slate-300 leading-relaxed">
              Product where it helps, people where it matters. Partners get the same visibility as clients—no hidden steps, no surprises on timelines or scope.
            </p>
            <div className="space-y-3">
              {pillars.map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 flex items-center justify-center text-cyan-200 flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">{title}</p>
                    <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-900/40">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-cyan-300" />
              <div>
                <p className="text-sm text-slate-400">People who make it work</p>
                <p className="text-xl font-semibold text-white">Finance leaders, product builders, analysts</p>
              </div>
            </div>
              <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="text-sm text-slate-300">Specialist teams</p>
                  <p className="text-lg font-semibold text-white">Tax + Accounting + Payroll</p>
                </div>
                <ShieldCheck className="text-cyan-300" />
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="text-sm text-slate-300">Insights & reporting</p>
                  <p className="text-lg font-semibold text-white">Monthly FP&A dashboards</p>
                </div>
                <Target className="text-indigo-300" />
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="text-sm text-slate-300">Partner care</p>
                  <p className="text-lg font-semibold text-white">Dedicated partner desk</p>
                </div>
                <HeartHandshake className="text-purple-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 shadow-2xl shadow-slate-900/40 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">Partner with us</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to bring Finanshels to your clients?</h3>
            <p className="text-slate-300">
              Share your details and we&apos;ll align on scope, revenue model, and onboarding in one business day.
            </p>
          </div>
          <Link
            to="/become-a-partner"
            className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-slate-950 font-semibold shadow-lg hover:scale-[1.01] transition-transform"
          >
            Become a partner
          </Link>
        </div>
      </section>
    </div>
  )
}

import {
  ArrowRight,
  Coins,
  Files,
  Gauge,
  HeartHandshake,
  LineChart,
  Sparkles,
  Workflow,
  Trophy,
} from 'lucide-react'
import PartnerWithUs from '../components/PartnerWithUs'

const programs = [
  {
    name: 'Referral partners',
    summary: 'Consultants, creators, and connectors who share qualified UAE intros. Earn up to AED 1,500 or 40% (tiered) per successful referral with transparent tracking.',
    incentives: [
      'Up to AED 1,500 or up to 40% commission per closed referral (tier-based)',
      'Live tracker with stage-by-stage updates',
      'Partner rewards for top performing partners (safari, yacht trips, etc.)',
    ],
    terms: ['For individuals with warm intros', 'Bookkeeping, VAT, tax, and audits in scope', 'Payouts on closed and retained deals'],
    accent: 'from-cyan-400/30 via-indigo-500/20 to-purple-500/25',
  },
  {
    name: 'Channel partners',
    summary: 'Companies that bundle Finanshels or co-sell 10–50 qualified leads per quarter with shared governance.',
    incentives: ['Revenue share or wholesale pricing', 'Co-branded onboarding and playbooks', 'Named owners with escalation paths'],
    terms: ['For companies', '10–50 qualified leads per quarter', 'Shared pipeline and SLA tracking'],
    accent: 'from-emerald-400/30 via-cyan-400/20 to-indigo-500/25',
  },
]

const guardrails = [
  { title: 'Speed to value', detail: 'First call to a live finance lead in under 10 days; SLAs visible to partners.', icon: Gauge },
  { title: 'Attribution clarity', detail: 'Every deal is trackable. No opaque spreadsheets or delayed updates.', icon: LineChart },
  { title: 'Enablement that ships', detail: 'Scripts, one-pagers, and demo environments tailored to your motion.', icon: Files },
  { title: 'Human + product', detail: 'Automation where it helps, operators where it counts. You get both.', icon: Workflow },
]

const formats = [
  'Webinars and workshops tailored to your audience',
  'Events and roundtables with Finanshels leadership',
  'Newsletter and content swaps with simple approval paths',
  'Product or API hooks for embedded finance ops',
]

const referralSteps = [
  { title: 'Join', detail: 'Apply to the Finanshels referral program and get mapped to a partner lead.', icon: Sparkles },
  { title: 'Refer', detail: 'Share UAE businesses that need bookkeeping, VAT filing, corporate tax, or audits.', icon: ArrowRight },
  { title: 'Earn & celebrate', detail: 'Earn up to AED 1,500 or 40% commission (tier-based) and unlock milestone perks.', icon: Trophy },
]

const referralPerks = [
  '4.9★ on Trustpilot with 5,000+ clients across the UAE—easy social proof for your intros',
  'Partner rewards for top performing partners (safari, yacht trips, etc.)',
  'Visibility perks like investor dinners and podcast/radio features',
]

export default function Partnerships() {
  return (
    <div className="space-y-16 pb-20">
      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 pt-12">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 sm:p-8 shadow-2xl shadow-slate-900/40">
          <div className="flex items-center gap-3 text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">
            <HeartHandshake size={18} />
            Partnership programs
          </div>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 mt-6 items-start">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Two structured programs. Decisions in days, not quarters.
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Choose referral or channel programs. We document goals, owners, and timelines so both teams know exactly how we operate.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-white">
                  <Sparkles size={16} /> Zero bureaucracy
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-white">
                  <Coins size={16} /> Clear commercial models
                </span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 shadow-inner shadow-slate-900/50">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-slate-300">What you can expect</p>
                <Trophy className="text-cyan-300" size={20} />
              </div>
              <ul className="space-y-3">
                {[
                  'Dedicated partner lead + AE for every program.',
                  'Live attribution dashboards and payout visibility.',
                  'Co-branded assets delivered inside your channels.',
                  'Quarterly business reviews with joint OKRs.',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-slate-200">
                    <ArrowRight size={16} className="text-cyan-300 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-white/5 to-slate-900 p-6 sm:p-8 shadow-2xl shadow-slate-900/40">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div>
              <p className="text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">Referral program</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Start earning up to AED 1,500 or 40% commissions (tiered).</h2>
              <p className="text-slate-300 leading-relaxed mt-2">
                We partner with consultants, creators, accountants, lawyers, B2B technology platforms among others. Bring qualified intros for bookkeeping, VAT, Corporate tax, or audits - we handle delivery and updates.
              </p>
            </div>
            <a
              href="/become-a-partner"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 font-semibold shadow-lg hover:scale-[1.01] transition-transform"
            >
              Become a partner <ArrowRight size={16} />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {referralSteps.map(({ title, detail, icon: Icon }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 sm:p-5 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 flex items-center justify-center text-cyan-200">
                  <Icon size={18} />
                </div>
                <p className="text-lg font-semibold text-white">{title}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-3 mt-6">
            {referralPerks.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 text-sm text-slate-200 leading-relaxed flex gap-3">
                <ArrowRight size={16} className="text-cyan-300 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 space-y-6">
        {programs.map((program) => (
          <div
            key={program.name}
            className={`rounded-3xl border border-white/10 bg-gradient-to-br ${program.accent} p-6 sm:p-7 shadow-2xl shadow-slate-900/40`}
          >
            <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
              <div>
                <p className="text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">Program</p>
                <h2 className="text-3xl font-bold text-white mt-2">{program.name}</h2>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/become-a-partner"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-slate-950 font-semibold shadow-lg shadow-indigo-500/20 hover:scale-[1.02] transition-transform"
                >
                  Become a partner <ArrowRight size={14} />
                </a>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/15 text-white">
                  <LineChart size={16} />
                  <span>Scale-ready</span>
                </div>
              </div>
            </div>
            <p className="text-slate-200 leading-relaxed mb-6 max-w-3xl">{program.summary}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 sm:p-6">
                <p className="text-sm text-slate-300 font-semibold mb-3">Incentives</p>
                <ul className="space-y-3">
                  {program.incentives.map((item) => (
                    <li key={item} className="flex gap-3 text-slate-200">
                      <ArrowRight size={16} className="text-cyan-300 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 sm:p-6">
                <p className="text-sm text-slate-300 font-semibold mb-3">Terms</p>
                <ul className="space-y-3">
                  {program.terms.map((item) => (
                    <li key={item} className="flex gap-3 text-slate-200">
                      <ArrowRight size={16} className="text-cyan-300 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-2xl shadow-slate-900/40">
          <div className="flex items-center gap-3 text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">
            <Gauge size={18} />
            Partner guardrails
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {guardrails.map(({ title, detail, icon: Icon }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 sm:p-5 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 flex items-center justify-center text-cyan-200">
                  <Icon size={18} />
                </div>
                <p className="text-lg font-semibold text-white">{title}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 pb-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-white/5 to-slate-900 p-6 sm:p-7 lg:p-8 shadow-2xl shadow-slate-900/50">
          <div className="flex items-center gap-3 text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">
            <Sparkles size={18} />
            Collaboration formats
          </div>
          <p className="text-lg text-slate-300 leading-relaxed mt-3">
            Simple playbook we can spin up together—no heavy approvals.
          </p>
          <ul className="grid md:grid-cols-2 gap-3 mt-5">
            {formats.map((item) => (
              <li key={item} className="flex gap-3 text-slate-200 leading-relaxed rounded-2xl border border-white/10 bg-slate-950/60 p-3 sm:p-4">
                <ArrowRight size={16} className="text-cyan-300 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PartnerWithUs />
    </div>
  )
}

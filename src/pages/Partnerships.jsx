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
  Mail,
  MapPin,
  Clock,
  Send,
} from 'lucide-react'

const programs = [
  {
    name: 'Referral partners',
    summary: 'Consultants, creators, and connectors who share qualified UAE intros. Earn up to AED 1,500 or 40% per successful referral with transparent tracking.',
    incentives: [
      'Up to AED 1,500 or 40% commission per closed referral',
      'Live tracker with stage-by-stage updates',
      'Exclusive experiences on annual/quarterly wins (safari, Burj Khalifa, yacht)',
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
  {
    name: 'Strategic partners',
    summary: 'Tech or marketing alliances that bring 50+ qualified leads a quarter and want joint GTM and product hooks.',
    incentives: ['Executive sponsorship from Finanshels founders', 'Co-hosted events, webinars, and content', 'Layered commercial models with governance'],
    terms: ['For tech/marketing alliances', '50+ qualified leads per quarter', 'Co-marketing, events, or product collaboration'],
    accent: 'from-amber-400/30 via-rose-400/20 to-purple-500/25',
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

const partnerTypes = ['Referral partner', 'Channel partner', 'Strategic partner', 'Other']

const referralSteps = [
  { title: 'Join', detail: 'Apply to the Finanshels referral program and get mapped to a partner lead.', icon: Sparkles },
  { title: 'Refer', detail: 'Share UAE businesses that need bookkeeping, VAT filing, corporate tax, or audits.', icon: ArrowRight },
  { title: 'Earn & celebrate', detail: 'Earn up to AED 1,500 or 40% commission and unlock milestone perks.', icon: Trophy },
]

const referralPerks = [
  '4.9★ on Trustpilot with 700+ satisfied clients—easy social proof for your intros',
  'Experiences for annual/quarterly wins: desert safaris, Burj Khalifa, or yacht trips',
  'Visibility perks like investor dinners and podcast/radio features',
]

export default function Partnerships() {
  return (
    <div className="space-y-16 pb-20">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-10 shadow-2xl shadow-slate-900/40">
          <div className="flex items-center gap-3 text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">
            <HeartHandshake size={18} />
            Partnership programs
          </div>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 mt-6 items-start">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Three structured programs. Decisions in days, not quarters.
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Choose referral, channel, or strategic. We document goals, owners, and timelines so both teams know exactly how we operate.
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
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 shadow-inner shadow-slate-900/50">
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

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-white/5 to-slate-900 p-10 shadow-2xl shadow-slate-900/40">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div>
              <p className="text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">Referral program</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Start earning up to AED 1,500 or 40%.</h2>
              <p className="text-slate-300 leading-relaxed mt-2">
                We partner with consultants, creators, accountants, and UAE connectors. Bring qualified intros for bookkeeping, VAT, corporate tax, or audits—we handle delivery and updates.
              </p>
            </div>
            <a
              href="mailto:partnerships@finanshels.com?subject=Referral%20program%20application"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 font-semibold shadow-lg hover:scale-[1.01] transition-transform"
            >
              Apply now <ArrowRight size={16} />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {referralSteps.map(({ title, detail, icon: Icon }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 space-y-2">
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
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 leading-relaxed flex gap-3">
                <ArrowRight size={16} className="text-cyan-300 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-10 shadow-2xl shadow-slate-900/50">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">
              <HeartHandshake size={18} />
              Contact partnerships
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Share the partner motion.</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">Expect a response within one business day.</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Referral, channel, or strategic—give us the context and we&apos;ll route you to the right owner with next steps.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-cyan-200 font-semibold text-sm uppercase tracking-[0.16em]">
                  <Mail size={16} /> Email
                </div>
                <p className="text-white font-semibold mt-2">partnerships@finanshels.com</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-cyan-200 font-semibold text-sm uppercase tracking-[0.16em]">
                  <MapPin size={16} /> HQ
                </div>
                <p className="text-white font-semibold mt-2">Dubai, UAE (Global Hub)</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-200 text-sm">
              <Clock size={16} className="text-cyan-300" />
              Prefer a call? Suggest a slot and we&apos;ll send a calendar invite.
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 sm:p-7 shadow-inner shadow-slate-900/60">
            <PartnershipForm />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
        {programs.map((program) => (
          <div
            key={program.name}
            className={`rounded-3xl border border-white/10 bg-gradient-to-br ${program.accent} p-8 shadow-2xl shadow-slate-900/40`}
          >
            <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
              <div>
                <p className="text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">Program</p>
                <h2 className="text-3xl font-bold text-white mt-2">{program.name}</h2>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/15 text-white">
                <LineChart size={16} />
                <span>Scale-ready</span>
              </div>
            </div>
            <p className="text-slate-200 leading-relaxed mb-6 max-w-3xl">{program.summary}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
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
              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
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

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-900/40">
          <div className="flex items-center gap-3 text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">
            <Gauge size={18} />
            Partner guardrails
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {guardrails.map(({ title, detail, icon: Icon }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 space-y-2">
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

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-white/5 to-slate-900 p-10 shadow-2xl shadow-slate-900/50">
          <div className="flex items-center gap-3 text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">
            <Sparkles size={18} />
            Collaboration formats
          </div>
          <p className="text-lg text-slate-300 leading-relaxed mt-3">
            Simple playbook we can spin up together—no heavy approvals.
          </p>
          <ul className="grid md:grid-cols-2 gap-3 mt-6">
            {formats.map((item) => (
              <li key={item} className="flex gap-3 text-slate-200 leading-relaxed rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <ArrowRight size={16} className="text-cyan-300 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

function PartnershipForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') || ''
    const email = formData.get('email') || ''
    const company = formData.get('company') || ''
    const partnerType = formData.get('partnerType') || ''
    const context = formData.get('context') || ''

    const subject = encodeURIComponent(`Partnership inquiry — ${partnerType || 'Partner motion'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPartner type: ${partnerType}\n\nContext:\n${context}`
    )

    window.location.href = `mailto:partnerships@finanshels.com?subject=${subject}&body=${body}`
  }

  const baseInput =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:border-transparent transition'

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-sm text-slate-300 mb-1 block">Name</label>
          <input name="name" type="text" placeholder="Your name" className={baseInput} required />
        </div>
        <div>
          <label className="text-sm text-slate-300 mb-1 block">Work email</label>
          <input name="email" type="email" placeholder="you@company.com" className={baseInput} required />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-sm text-slate-300 mb-1 block">Company</label>
          <input name="company" type="text" placeholder="Company name" className={baseInput} required />
        </div>
        <div>
          <label className="text-sm text-slate-300 mb-1 block">Partner type</label>
          <select name="partnerType" className={baseInput} defaultValue={partnerTypes[0]}>
            {partnerTypes.map((type) => (
              <option key={type} value={type} className="bg-slate-900">
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="text-sm text-slate-300 mb-1 block">What should we know?</label>
        <textarea
          name="context"
          rows={4}
          placeholder="Goals, target segment, timelines, or the play you want to run"
          className={baseInput}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-indigo-500/20 hover:scale-[1.01] transition-transform"
      >
        Send to partnerships <Send size={16} />
      </button>
      <p className="text-xs text-slate-400 text-center">
        This opens your email client pre-filled with details. We&apos;ll reply within one business day.
      </p>
    </form>
  )
}

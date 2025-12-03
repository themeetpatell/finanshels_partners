import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Globe2, HeartHandshake, LineChart, Rocket, ShieldCheck, Sparkles } from 'lucide-react'

const stats = [
  { label: 'NPS', value: '9.4', detail: 'Partners and clients across MENA' },
  { label: 'Response time', value: '<24h', detail: 'Partner desk updates and decisions' },
  { label: 'Clients', value: '5,000+', detail: 'SMBs and venture-backed teams' },
  { label: 'Retention', value: '97%', detail: 'We keep the intros you send' },
]

const services = [
  {
    title: 'Finance & accounting',
    description: 'Bookkeeping, reporting, and board-ready numbers that hold up to audits.',
    points: ['Monthly close and reporting', 'FP&A for leadership', 'Audit-ready statements'],
    icon: LineChart,
  },
  {
    title: 'Tax & compliance',
    description: 'VAT, corporate tax, ESR, AML, and governance handled locally in the UAE.',
    points: ['VAT and corporate tax filings', 'Compliance playbooks and reviews', 'Entity setup and governance'],
    icon: ShieldCheck,
  },
  {
    title: 'Advisory & outcomes',
    description: 'Projects that need operator attention—expansion, clean-up, or winding down.',
    points: ['Restructuring and strike-off', 'Funding and diligence support', 'Leadership access for blockers'],
    icon: Globe2,
  },
]

const partnerPrograms = [
  {
    title: 'Referral partners',
    badge: 'Earn up to AED 1,500 or 40%',
    description: 'Consultants, creators, and connectors who introduce qualified UAE businesses.',
    highlights: ['Shared OKRs in week one', 'Live attribution + payouts', 'Scripts and follow-ups ready'],
  },
  {
    title: 'Channel partners',
    badge: 'Co-sell & resale',
    description: 'Companies that bundle or co-sell Finanshels with 10–50 qualified leads per quarter.',
    highlights: ['Revenue share or wholesale', 'Named owners and SLA visibility', 'Quarterly business reviews'],
  },
  {
    title: 'Strategic alliances',
    badge: 'Founder backed',
    description: 'Product or marketing alliances that activate 50+ qualified leads with joint GTM.',
    highlights: ['Founder sponsor', 'Co-built offers and roadmaps', 'Joint campaigns that scale'],
  },
]

const operatingSteps = [
  {
    title: 'Alignment',
    detail: 'ICP, messaging, and approval paths locked in so every intro is qualified.',
    icon: Sparkles,
  },
  {
    title: 'Activation',
    detail: 'Co-branded scripts, offers, and follow-ups tailored to your channels.',
    icon: HeartHandshake,
  },
  {
    title: 'Visibility',
    detail: 'Live attribution, payout dates, and SLA tracking—no opaque spreadsheets.',
    icon: LineChart,
  },
  {
    title: 'Review & grow',
    detail: 'Monthly and quarterly reviews with ARR, NPS, and roadmap actions.',
    icon: Rocket,
  },
]

const referralSteps = [
  { title: 'Apply', detail: 'Join the referral desk and get paired with your partnerships lead.', icon: Sparkles },
  { title: 'Share intros', detail: 'Send UAE businesses needing bookkeeping, tax, or compliance help.', icon: HeartHandshake },
  { title: 'Track & earn', detail: 'Stage-by-stage attribution with payouts up to AED 1,500 or 40%.', icon: ShieldCheck },
]

const referralExtras = [
  'Live tracker with payout dates—no spreadsheets',
  '4.9★ on Trustpilot with 700+ happy clients',
  'Experiences for quarterly wins (safari, Burj Khalifa, yacht)',
  'Visibility perks like investor dinners and media features',
]

export default function Home() {
  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.14),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(167,139,250,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.08),transparent_35%)]" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur text-sm font-semibold text-cyan-200">
                Finance, tax, and compliance for UAE companies
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight">
                Send the intro. Finanshels delivers compliant books, clean tax, and confident leadership updates.
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Partners get documented goals, named owners, and transparent attribution. Your clients get operator-grade finance, tax, and compliance without surprises.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-slate-950 font-semibold shadow-lg shadow-indigo-500/20 hover:scale-[1.02] transition-transform"
                >
                  Talk to partnerships <ArrowRight size={18} />
                </Link>
                <Link
                  to="/partnerships"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
                >
                  Explore programs
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-cyan-400" />
                  <span>Compliance-grade delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake size={18} className="text-indigo-400" />
                  <span>Partner-first governance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 size={18} className="text-purple-400" />
                  <span>MENA-first with global rigor</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-cyan-500/12 via-indigo-500/12 to-purple-600/12" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl shadow-indigo-900/30 space-y-6">
                <div>
                  <p className="text-sm text-slate-400 font-semibold uppercase tracking-[0.2em]">Trust signals</p>
                  <p className="text-lg font-semibold text-white">Proof you can share with leadership and clients</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold">{item.label}</p>
                      <p className="text-2xl font-bold text-white mt-2">{item.value}</p>
                      <p className="text-sm text-slate-300">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <CheckCircle className="text-cyan-300 mt-0.5" size={18} />
                  <p className="text-sm text-slate-200 leading-relaxed">
                    Every partnership starts with a week-one plan: ICP, owners, approvals, and reporting cadence. No vague promises—just the steps, timelines, and accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-10 shadow-2xl shadow-slate-900/40 space-y-8">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div>
              <p className="text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">What we run</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Finance, tax, compliance, and advisory in one partner.</h2>
              <p className="text-slate-300 leading-relaxed mt-2">
                Clients stay compliant and confident. Partners get visibility, faster closes, and fewer escalations.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white hover:bg-white/5 transition-all"
            >
              See delivery approach <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map(({ title, description, points, icon: Icon }) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-900/30 space-y-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 flex items-center justify-center text-cyan-200">
                  <Icon size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="text-slate-300 leading-relaxed">{description}</p>
                <div className="space-y-2 pt-2">
                  {points.map((point) => (
                    <div key={point} className="flex items-start gap-2 text-sm text-slate-200">
                      <CheckCircle size={14} className="text-cyan-300 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-6 flex-wrap mb-10">
          <div>
            <p className="text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">Partner motions</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Choose how we work together.</h2>
            <p className="text-slate-300 leading-relaxed mt-2">
              Referral, channel, or strategic. Each motion comes with owners, attribution, and ready-to-send assets.
            </p>
          </div>
          <Link
            to="/partnerships"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-semibold border border-white/15 hover:bg-white/20 transition-all"
          >
            View programs <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {partnerPrograms.map((program) => (
            <div key={program.title} className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-900/30 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(129,140,248,0.14),transparent_35%)]" />
              <div className="relative space-y-3">
                <span className="inline-flex px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-cyan-100 border border-white/15">
                  {program.badge}
                </span>
                <h3 className="text-2xl font-semibold text-white">{program.title}</h3>
                <p className="text-slate-300 leading-relaxed">{program.description}</p>
                <div className="mt-5 space-y-2">
                  {program.highlights.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-sm text-slate-200">
                      <ArrowRight size={14} className="text-cyan-300" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 text-cyan-200 font-semibold mt-6">
                  Start a pilot <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-10 shadow-2xl shadow-slate-900/40">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div>
              <p className="text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">Operating rhythm</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">We co-design the play and show the receipts.</h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-semibold border border-white/15 hover:bg-white/20 transition-all"
            >
              See how we deliver <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            {operatingSteps.map(({ title, detail, icon: Icon }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 flex items-center justify-center text-cyan-200">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-900/40">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="text-cyan-300" size={22} />
              <div>
                <p className="text-sm text-slate-300">Referral program</p>
                <p className="text-xl font-semibold text-white">Earn up to AED 1,500 or 40% per client.</p>
              </div>
            </div>
            <ul className="space-y-4">
              {referralSteps.map(({ title, detail, icon: Icon }) => (
                <li key={title} className="flex gap-3 text-slate-200 leading-relaxed rounded-2xl border border-white/10 bg-slate-950/60 p-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 flex items-center justify-center text-cyan-200 flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="text-sm text-slate-300 leading-relaxed">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-cyan-500/15 via-indigo-500/10 to-purple-600/10 p-8 shadow-xl shadow-indigo-900/40">
            <p className="text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em] mb-3">Let&apos;s build</p>
            <h3 className="text-2xl font-bold text-white mb-4">We respond in under 24 hours with a tailored plan.</h3>
            <p className="text-slate-200 leading-relaxed mb-6">
              Expect the goals, owners, playbook, and reporting cadence you need to brief leadership. No PDFs—just a plan you can approve.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white text-slate-900 font-semibold shadow-lg hover:scale-[1.01] transition-transform"
              >
                Book the intro <ArrowRight size={16} />
              </Link>
              <a
                href="mailto:partners@finanshels.com"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
              >
                Email partners@finanshels.com
              </a>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              {referralExtras.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200 leading-relaxed flex gap-3">
                  <ArrowRight size={16} className="text-cyan-300 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

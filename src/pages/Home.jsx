import { Link } from 'react-router-dom'
import { ArrowRight, Globe2, HeartHandshake, LineChart, Rocket, ShieldCheck, Sparkles, Users, Gauge } from 'lucide-react'

const partnerTypes = [
  {
    title: 'Referral partners',
    description: 'Consultants, creators, and connectors who introduce UAE businesses that need finance, tax, or audit help.',
    badge: 'Earn up to AED 1500 / 40%',
    highlights: ['Shared OKRs in week 1', 'Live attribution + payouts', 'Scripts and follow-ups ready'],
  },
  {
    title: 'Channel partners',
    description: 'Companies that bundle Finanshels or co-sell 10–50 qualified leads per quarter with agreed governance.',
    badge: 'Co-sell & resale',
    highlights: ['Revenue share or wholesale', 'Named pod and SLA visibility', 'Quarterly business reviews'],
  },
  {
    title: 'Strategic alliances',
    description: 'Tech or marketing alliances that activate 50+ qualified leads a quarter and want co-marketing + product hooks.',
    badge: 'Founder backed',
    highlights: ['Founder sponsor', 'Co-built offers and roadmaps', 'Joint campaigns that can scale'],
  },
]

const proofPoints = [
  { label: 'Clients supported', value: '5,000+', detail: 'SMBs and venture-backed across MENA' },
  { label: 'Response time', value: '<24h', detail: 'Partner desk updates and decisions' },
  { label: 'Go-live speed', value: '<10 days', detail: 'From intro to live finance pod' },
  { label: 'Retention', value: '97%', detail: 'We keep the clients you send' },
]

const motions = [
  { title: 'Alignment', detail: 'ICP, messaging, and approval paths locked in. No vague intros.', icon: Sparkles },
  { title: 'Offer & enablement', detail: 'Referral, co-sell, or embedded pricing + scripts tailored to your audience.', icon: HeartHandshake },
  { title: 'Launch', detail: 'Campaigns, events, and sales motions go live with named owners.', icon: Rocket },
  { title: 'Review & evolve', detail: 'Pipeline, ARR, and NPS tracked with a QBR cadence.', icon: Gauge },
]

const valueProps = [
  { title: 'Week 1: shared plan', description: 'OKRs, ICP, and owners documented so every intro is qualified and trackable.', icon: Gauge },
  { title: 'Enablement that ships', description: 'Approved scripts, one-pagers, and email flows ready for your channels.', icon: LineChart },
  { title: 'Compliance-grade delivery', description: 'Finance, tax, audit, AML, and strike-off handled locally in the UAE.', icon: Globe2 },
  { title: 'Leadership access', description: 'Founders join strategic reviews to unblock decisions fast.', icon: ShieldCheck },
]

const referralSteps = [
  { title: 'Apply', detail: 'Join the referral desk and get paired with your partnership lead.', icon: Sparkles },
  { title: 'Share intros', detail: 'Pass UAE businesses that need bookkeeping, VAT, corporate tax, or audits.', icon: HeartHandshake },
  { title: 'Track & earn', detail: 'See stage-by-stage attribution and earn up to AED 1,500 or 40% per deal.', icon: Rocket },
]

const referralExtras = [
  'Live tracker with payout dates, not spreadsheets',
  '4.9★ on Trustpilot with 700+ happy clients—easy social proof',
  'Experiences for annual/quarterly milestones (safari, Burj Khalifa, yacht)',
  'Visibility perks like investor dinners and podcast features',
]

const commitments = [
  'Shared OKRs and ICP alignment in week one.',
  'Partner-branded playbook for your motion: referral, co-sell, or embedded.',
  'Live attribution plus payout schedule—no opaque spreadsheets.',
  'Executive sponsorship for strategic partners and QBRs with ARR + NPS.',
]

export default function Home() {
  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(167,139,250,0.1),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.08),transparent_35%)]" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur text-sm font-semibold text-cyan-200">
                Partnership desk — decisions in under a week
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight">
                Send the intro. We deliver revenue, compliance confidence, and happy clients.
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                We run finance, tax, audit, and compliance for UAE companies. Partners get a documented plan, transparent attribution, and the confidence that every client you send is handled by operators who move fast.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/partnerships"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-slate-950 font-semibold shadow-lg shadow-indigo-500/20 hover:scale-[1.02] transition-transform"
                >
                  Explore programs <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
                >
                  Talk to partnerships
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-slate-300">
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
                  <span>Built for MENA, globally aligned</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-purple-600/10" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl shadow-indigo-900/30">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-slate-950 font-bold">
                    FP
                  </div>
                  <div>
                    <p className="text-sm text-slate-300">Outcome commitments</p>
                    <p className="text-lg font-semibold text-white">What partners can hold us to</p>
                  </div>
                </div>
                <ul className="space-y-3 pt-4">
                  {commitments.map((item) => (
                    <li key={item} className="flex gap-3 text-slate-200">
                      <ArrowRight size={16} className="text-cyan-300 mt-1 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  {proofPoints.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-wide text-slate-400 font-semibold">{item.label}</p>
                      <p className="text-2xl font-bold text-white mt-2">{item.value}</p>
                      <p className="text-sm text-slate-300">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-8 shadow-2xl shadow-slate-900/40">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div>
              <p className="text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">Signals we won&apos;t drop your intro</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Proof you can share with clients and leadership.</h2>
              <p className="text-slate-300 leading-relaxed mt-2">
                Give your client confidence. We already run finance, tax, audit, AML, and strike-off for thousands across MENA. You get transparent numbers and fast answers.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            {proofPoints.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400 font-semibold">{item.label}</p>
                <p className="text-2xl font-bold text-white mt-2">{item.value}</p>
                <p className="text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-6 flex-wrap mb-10">
          <div>
            <p className="text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">Programs</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Pick the motion that fits. We make it easy to start.</h2>
          </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white hover:bg-white/5 transition-all"
                >
                  See how we work <ArrowRight size={16} />
                </Link>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {partnerTypes.map((type) => (
            <div key={type.title} className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-900/30 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.1),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(129,140,248,0.12),transparent_35%)]" />
              <div className="relative">
                <span className="inline-flex px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-cyan-100 border border-white/15">{type.badge}</span>
                <h3 className="text-2xl font-semibold text-white mt-4 mb-2">{type.title}</h3>
                <p className="text-slate-300 leading-relaxed">{type.description}</p>
                <div className="mt-6 space-y-2">
                  {type.highlights.map((point) => (
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
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">Why Finanshels</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">What you get in week one.</h2>
                <p className="text-slate-300 leading-relaxed">
                  A clear plan, enablement that ships, and named owners. Everything is documented so your leadership and your clients know exactly how we&apos;ll operate.
                </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {valueProps.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 flex items-center justify-center text-cyan-200">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900 p-8 shadow-2xl shadow-slate-900/50">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-cyan-300" size={22} />
              <div>
                <p className="text-sm text-slate-400">Partner success pod</p>
                <p className="text-xl font-semibold text-white">Operators who own outcomes</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="text-sm text-slate-300">Activation to first revenue</p>
                  <p className="text-lg font-semibold text-white">Under 30 days</p>
                </div>
                <ShieldCheck className="text-cyan-300" />
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="text-sm text-slate-300">Dedicated partner desk</p>
                  <p className="text-lg font-semibold text-white">One channel lead + AE</p>
                </div>
                <HeartHandshake className="text-indigo-300" />
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="text-sm text-slate-300">Visibility</p>
                  <p className="text-lg font-semibold text-white">Live attribution & SLAs</p>
                </div>
                <LineChart className="text-purple-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-10 shadow-2xl shadow-slate-900/40">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div>
              <p className="text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">Operating rhythm</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">No generic PDFs. We co-design and run the play.</h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-semibold border border-white/15 hover:bg-white/20 transition-all"
            >
              View services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            {motions.map(({ title, detail, icon: Icon }) => (
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
            <h3 className="text-2xl font-bold text-white mb-4">Ready to design the next partner motion?</h3>
            <p className="text-slate-200 leading-relaxed mb-6">
              We respond in under 24 hours with a tailored plan, not a brochure. You&apos;ll see the OKRs, owners, and enablement you can expect in week one.
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

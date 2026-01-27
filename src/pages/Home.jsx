import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Globe2, HeartHandshake, LineChart, LogIn, Rocket, ShieldCheck, Sparkles, Users } from 'lucide-react'
import SEO from '../components/SEO'

const stats = [
  { label: 'NPS', value: '9.4', detail: 'Partners and clients across MENA' },
  { label: 'Clients', value: '5,000+', detail: 'Clients across the UAE' },
  { label: 'Partners', value: '100+', detail: 'Partners across the UAE' },
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
    badge: 'Earn up to AED 1,500 or up to 40% (tiered)',
    description: 'Consultants, creators, and connectors who introduce qualified UAE businesses.',
    highlights: ['Shared OKRs in week one', 'Live attribution + payouts', 'Scripts and follow-ups ready'],
  },
  {
    title: 'Channel partners',
    badge: 'Co-sell & resale',
    description: 'Companies that bundle or co-sell Finanshels with 10–50 qualified leads per quarter.',
    highlights: ['Revenue share or wholesale', 'Named owners and SLA visibility', 'Quarterly business reviews'],
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
  { title: 'Track & earn', detail: 'Stage-by-stage attribution with payouts up to AED 1,500 or up to 40% (tier-based).', icon: ShieldCheck },
]

const referralExtras = [
  'Live tracker with payout dates—no spreadsheets',
  '4.9★ on Trustpilot with 5,000+ happy clients across the UAE',
  'Partner rewards for top performing partners (safaris, trips, and more)',
  'Visibility perks like investor dinners and media features',
]

const testimonials = [
  {
    name: 'Pranav Shah, Founder',
    review: 'Finanshels gave us the structure, reporting, and compliance we needed to close a round and scale without finance drama.',
  },
  {
    name: 'Aisha Al Mazrouei, Partner',
    review: 'Their team is fast, clear, and keeps every intro updated. Zero surprises and the payouts land when promised.',
  },
  {
    name: 'Rahul Mehta, Advisor',
    review: 'The partnership playbooks are plug-and-play. My clients stay compliant and I get line of sight on every SLA.',
  },
]

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 7000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <SEO
        title="Finance, tax & compliance for UAE businesses"
        description="Bookkeeping, VAT, corporate tax, AML, and advisory for 5,000+ UAE clients plus referral and channel partnerships with transparent attribution."
        path="/"
        structuredData={({ canonicalUrl }) => ({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Finanshels',
          url: canonicalUrl,
          areaServed: 'AE',
          contactPoint: [
            {
              '@type': 'ContactPoint',
              contactType: 'Partnerships',
              email: 'partnership@finanshels.com',
            },
          ],
        })}
      />
      <div className="space-y-12 sm:space-y-16 lg:space-y-20 pb-16 sm:pb-20 lg:pb-24">
        <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.14),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(167,139,250,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.08),transparent_35%)]" />
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 pt-16 sm:pt-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
            <div className="space-y-5 sm:space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur text-xs sm:text-sm font-semibold text-orange-200">
                Finance, tax & compliance for UAE
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white tracking-tight">
                Accelarate your growth and revenues partnering with Finanshels
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Earn industry leading commissions and offer more value to your clients by referring them to Finanshels for Accounting, Compliance, Payroll and Tax Related services.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Link
                  to="/become-a-partner"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-full text-white font-semibold shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition-transform w-full sm:w-auto"
                  style={{background: '#F16610'}}
                >
                  Become a Partner <ArrowRight size={18} />
                </Link>
                <Link
                  to="/partnerships"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all w-full sm:w-auto"
                >
                  Explore programs
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-orange-500/12 via-orange-600/12 to-orange-700/12" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 lg:p-8 shadow-2xl shadow-indigo-900/30 space-y-4 sm:space-y-6">
                <div>
                  <p className="text-sm text-slate-400 font-semibold uppercase tracking-[0.2em]">Trust signals</p>
                  <p className="text-lg font-semibold text-white">Why Partner with Finanshels?</p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold">{item.label}</p>
                      <p className="text-2xl font-bold text-white mt-2">{item.value}</p>
                      <p className="text-sm text-slate-300">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-3 sm:p-4">
                  <CheckCircle className="text-orange-400 mt-0.5" size={18} />
                  <p className="text-sm text-slate-200 leading-relaxed">
                   Every partner receives personalized guidance and is mapped to a partnership manager, managing the relationship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-4 sm:p-6 lg:p-10 shadow-2xl shadow-slate-900/40 space-y-6 sm:space-y-8">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div>
              <p className="text-sm font-semibold text-orange-200 uppercase tracking-[0.2em]">What we manage</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Finance, tax, compliance, and advisory in one place.</h2>
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
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5 lg:p-6 shadow-xl shadow-slate-900/30 space-y-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500/30 to-orange-600/30 flex items-center justify-center text-orange-200">
                  <Icon size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="text-slate-300 leading-relaxed">{description}</p>
                <div className="space-y-2 pt-2">
                  {points.map((point) => (
                    <div key={point} className="flex items-start gap-2 text-sm text-slate-200">
                      <CheckCircle size={14} className="text-orange-400 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between gap-4 sm:gap-6 flex-wrap mb-6 sm:mb-8 lg:mb-10">
          <div>
            <p className="text-sm font-semibold text-orange-200 uppercase tracking-[0.2em]">Partner motions</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Choose how we work together.</h2>
            <p className="text-slate-300 leading-relaxed mt-2">
              Referral or channel programs. Each motion comes with owners, attribution, and ready-to-send assets.
            </p>
          </div>
          <Link
            to="/partnerships"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-semibold border border-white/15 hover:bg-white/20 transition-all"
          >
            View programs <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 max-w-5xl mx-auto">
          {partnerPrograms.map((program) => (
            <div key={program.title} className="relative rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 lg:p-7 shadow-xl shadow-slate-900/30 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(129,140,248,0.14),transparent_35%)]" />
              <div className="relative space-y-3">
                <span className="inline-flex px-3 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-orange-100 border border-white/15">
                  {program.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">{program.title}</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{program.description}</p>
                <div className="mt-4 space-y-2">
                  {program.highlights.map((point) => (
                    <div key={point} className="flex items-start gap-2 text-sm text-slate-200">
                      <ArrowRight size={14} className="text-orange-400 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 text-orange-300 font-semibold text-sm sm:text-base mt-4 pt-2">
                  Start a pilot <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-4 sm:p-6 lg:p-10 shadow-2xl shadow-slate-900/40">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div>
              <p className="text-sm font-semibold text-orange-200 uppercase tracking-[0.2em]">Operating rhythm</p>
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
              <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-3 sm:p-4 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/30 to-orange-600/30 flex items-center justify-center text-orange-200">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-white/5 to-slate-900 p-6 sm:p-8 shadow-2xl shadow-slate-900/50">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-6 sm:mb-8">
            <div>
              <p className="text-sm font-semibold text-orange-200 uppercase tracking-[0.2em]">Partner stories</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">What partners say about working with us.</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white hover:bg-white/10 transition"
                aria-label="Previous testimonial"
              >
                <ArrowRight className="rotate-180" size={16} />
              </button>
              <button
                type="button"
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white hover:bg-white/10 transition"
                aria-label="Next testimonial"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-xl shadow-slate-900/40 min-h-[220px] flex flex-col justify-between gap-4">
              <blockquote className="text-xl sm:text-2xl text-white leading-relaxed">
                “{testimonials[activeTestimonial].review}”
              </blockquote>
              <p className="text-sm sm:text-base font-semibold text-orange-300">— {testimonials[activeTestimonial].name}</p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2.5 rounded-full transition-all ${idx === activeTestimonial ? 'w-6 bg-orange-400' : 'w-2.5 bg-white/30'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 sm:gap-8 lg:gap-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 lg:p-8 shadow-2xl shadow-slate-900/40">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="text-orange-400" size={22} />
              <div>
                <p className="text-sm text-slate-300">Referral program</p>
                <p className="text-xl font-semibold text-white">Earn up to AED 1,500 or <span className='font-bold text-orange-400'>up to 40%</span> per client (tier-based)</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/10 text-orange-300 text-xs font-semibold border border-orange-400/20">
                5,000+ hapy clients across UAE
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-400/20">
                Fast payouts
              </span>
            </div>
            <ul className="space-y-4 mt-2">
              {referralSteps.map(({ title, detail, icon: Icon }) => (
                <li key={title} className="flex gap-3 text-slate-200 leading-relaxed rounded-2xl border border-white/10 bg-slate-950/60 p-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/30 to-orange-600/30 flex items-center justify-center text-orange-200 flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="text-sm text-slate-300 leading-relaxed">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-xs font-semibold shadow" style={{background: '#F16610'}}>
                Trusted by 5,000+ happy clients across UAE
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-orange-500/15 via-orange-600/10 to-orange-700/10 p-4 sm:p-6 lg:p-8 shadow-xl shadow-orange-900/40">
            <p className="text-sm font-semibold text-orange-200 uppercase tracking-[0.2em] mb-3">Let&apos;s build</p>
            <h3 className="text-2xl font-bold text-white mb-4">We respond in under 24 hours with a tailored plan.</h3>
            <p className="text-slate-200 leading-relaxed mb-6">
              Expect the goals, owners, playbook, and reporting cadence you need to brief leadership. No PDFs—just a plan you can approve.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                to="/become-a-partner"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white text-slate-900 font-semibold shadow-lg hover:scale-[1.01] transition-transform"
              >
                Book the intro <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/971504954698?text=Hey%20I%20want%20to%20be%20a%20referral/channel%20partner%20of%20Finanshels"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 text-white font-semibold shadow-lg hover:scale-[1.01] transition-transform"
              >
                WhatsApp us now
              </a>
            </div>
            <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 mt-4 sm:mt-6">
              {referralExtras.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-2.5 sm:p-3 text-sm text-slate-200 leading-relaxed flex gap-2 sm:gap-3">
                  <ArrowRight size={16} className="text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

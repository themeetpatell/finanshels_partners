import { ArrowRight, BadgeCheck, Building2, ClipboardList, Coins, FileCheck2, FileWarning, Library, Sparkles, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import PartnerWithUs from '../components/PartnerWithUs'
import SEO from '../components/SEO'

const services = [
  {
    title: 'Corporate Tax',
    items: [
      'Registration, impact assessments, and structuring',
      'Quarterly/annual return preparation with audit-ready working papers',
      'FTA amendments, notices, and clarifications handled end-to-end',
    ],
    icon: FileCheck2,
  },
  {
    title: 'VAT',
    items: [
      'Registration or deregistration, including VAT groups',
      'Quarterly filing with reconciliations to books and bank',
      'Voluntary disclosures and compliance reviews before audits',
    ],
    icon: ClipboardList,
  },
  {
    title: 'Accounting',
    items: [
      'Monthly bookkeeping and close with supporting schedules',
      'Quarterly reviews, variance analysis, and management packs',
      'IFRS-compliant annual financial statements preparation',
    ],
    icon: Library,
  },
  {
    title: 'AML compliance',
    items: [
      'Risk assessments, policy drafting, and governance templates',
      'KYC/AML workflow setup with clear R&R and audit trails',
      'Ongoing monitoring and regulator responses',
    ],
    icon: BadgeCheck,
  },
  {
    title: 'Auditing support',
    items: [
      'Audit-ready books, lead schedules, and evidence packs',
      'Single coordinator for external auditor queries',
      'Issue resolution, adjustments, and follow-ups to closure',
    ],
    icon: FileWarning,
  },
  {
    title: 'Liquidation',
    items: [
      'Close books, settle dues, obtain tax/VAT clearances, and file liquidation reports',
      'Chase approvals with authorities and keep you informed on milestones',
    ],
    icon: Building2,
  },
]

const extras = [
  'Board packs and investor-grade financial statements',
  'Budgets, forecasts, and cash-flow models tied to reality',
  'Ad-hoc FTA clarifications, amendments, and responses',
  'Teach-ins for your team or clients on new regulations',
]

export default function Strategize() {
  return (
    <>
      <SEO
        title="Finance, tax, and compliance services"
        description="Corporate tax, VAT, accounting, AML, audit support, and liquidation services for UAE businesses with clear SLAs and single points of contact."
        path="/services"
        structuredData={({ canonicalUrl }) => ({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Finanshels services',
          url: canonicalUrl,
          description:
            'Finance, tax, compliance, and closure services with documented scopes, SLAs, and dedicated delivery leads for UAE clients and partners.',
        })}
      />
      <div className="space-y-16 pb-20">
      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 pt-12">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 sm:p-7 lg:p-8 shadow-2xl shadow-slate-900/40">
          <div className="flex items-center gap-3 text-sm font-semibold text-orange-200 uppercase tracking-[0.2em]">
            <Sparkles size={18} />
            Services we deliver
          </div>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 mt-6 items-start">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Finance, tax, and closure work with clear owners.
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Corporate tax, VAT, accounting, AML, audit support, and entity closures built for MENA. Every workstream has a documented scope, SLA, and single point of contact.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 shadow-inner shadow-slate-900/50">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-slate-300">How we work</p>
                <TrendingUp className="text-orange-400" size={18} />
              </div>
              <ul className="space-y-3">
                {[
                  'Single point of contact plus specialists per service.',
                  'Clear SLAs on filings, reconciliations, and responses.',
                  'Templates and checklists to keep clients audit-ready.',
                  'Workshops, webinars, and refreshers on new rules.',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-slate-200">
                    <ArrowRight size={16} className="text-orange-400 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, items, icon: Icon }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-slate-900/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/30 to-orange-600/30 flex items-center justify-center text-orange-200">
                  <Icon size={18} />
                </div>
                <p className="text-lg font-semibold text-white">{title}</p>
              </div>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-200 leading-relaxed">
                    <ArrowRight size={16} className="text-orange-400 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-white/5 to-slate-900 p-6 sm:p-8 shadow-2xl shadow-slate-900/50">
          <div className="flex items-center justify-between gap-6 flex-wrap mb-8">
            <div>
              <p className="text-sm font-semibold text-orange-200 uppercase tracking-[0.2em]">More we cover</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Extras partners can tap into.</h2>
            </div>
            <Link
              to="/become-a-partner"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 font-semibold shadow-lg hover:scale-[1.01] transition-transform"
            >
              Book a walkthrough <ArrowRight size={16} />
            </Link>
          </div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {extras.map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 sm:p-5 flex gap-3 text-slate-200 leading-relaxed">
                <Coins size={16} className="text-orange-400 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PartnerWithUs />
      </div>
    </>
  )
}

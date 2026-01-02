import { HeartHandshake, Mail, MapPin, Sparkles } from 'lucide-react'
import SEO from '../components/SEO'

export default function BecomePartner() {
  return (
    <>
      <SEO
        title="Become a Finanshels partner"
        description="Apply to join Finanshels as a referral or channel partner. Expect a response within one business day and access to mapped partner owners."
        path="/become-a-partner"
        structuredData={({ canonicalUrl }) => ({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Become a Finanshels partner',
          url: canonicalUrl,
          description:
            'Apply to the Finanshels referral or channel partner program and get routed to the right owner with next steps.',
        })}
      />
      <div className="space-y-16 pb-20">
      <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 pt-12">
        <div className="grid grid-cols-1 gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 shadow-2xl shadow-slate-900/50">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">
              <HeartHandshake size={18} />
              Become a partner
            </div>
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">Share the partner motion.</h1>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">Expect a response within one business day.</h3>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Referral or channel—give us the context and we&apos;ll route you to the right owner with next steps.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-4.5">
                <div className="flex items-center gap-2 text-cyan-200 font-semibold text-sm uppercase tracking-[0.16em]">
                  <Mail size={16} /> Email
                </div>
                <p className="text-white font-semibold mt-2">partnership@finanshels.com</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-4.5">
                <div className="flex items-center gap-2 text-cyan-200 font-semibold text-sm uppercase tracking-[0.16em]">
                  <MapPin size={16} /> HQ
                </div>
                <p className="text-white font-semibold mt-2">Dubai, UAE (Global Hub)</p>
              </div>
            </div>
          </div>

          <PartnerFormEmbed />
        </div>
      </section>
      </div>
    </>
  )
}

function PartnerFormEmbed() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-2xl shadow-slate-900/40 space-y-4">
      <div className="flex items-center gap-2">
        <Sparkles size={16} className="text-cyan-300" />
        <p className="text-sm font-semibold text-white">Apply to become a Finanshels partner</p>
      </div>
      <form
        action="https://forms.zohopublic.com/finanshelsllc/form/BecomeFinanshelsPartner/formperma/jQvIbEZGWGnBBJUeK-did5uUNvQG8SY0NDdQseSJCcA/htmlRecords/submit"
        name="form"
        id="form"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        className="space-y-4"
      >
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col gap-2 text-sm font-semibold text-white">
            <span className="flex items-center gap-1">
              Your Name <span className="text-pink-300">*</span>
            </span>
            <input
              type="text"
              name="SingleLine"
              fieldType="1"
              maxLength="255"
              placeholder="i.e. Meet Patel"
              required
              className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-semibold text-white">
            <span className="flex items-center gap-1">
              Your Email <span className="text-pink-300">*</span>
            </span>
            <input
              type="text"
              name="Email"
              fieldType="9"
              maxLength="255"
              placeholder="i.e. meet@finanshels.com"
              required
              className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <label className="flex flex-col gap-2 text-sm font-semibold text-white">
            <span>Country Code</span>
            <input
              type="text"
              compname="PhoneNumber"
              name="PhoneNumber_countrycode"
              phoneFormat="1"
              isCountryCodeEnabled="true"
              maxLength="20"
              fieldType="11"
              id="international_PhoneNumber_countrycode"
              placeholder="+971"
              className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-semibold text-white md:col-span-2">
            <span className="flex items-center gap-1">
              Your WhatsApp Number <span className="text-pink-300">*</span>
            </span>
            <input
              type="text"
              compname="PhoneNumber_countrycodeval"
              name="PhoneNumber_countrycodeval"
              phoneFormat="1"
              maxLength="10"
              id="international_PhoneNumber_countrycodeval"
              placeholder="XX XXX XXXX"
              required
              className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm font-semibold text-white">
          <span>Your Organization</span>
          <input
            type="text"
            name="SingleLine1"
            fieldType="1"
            maxLength="255"
            placeholder="i.e. Finanshels LLC"
            className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-semibold text-white">
          <span className="flex items-center gap-1">
            Partner Type <span className="text-pink-300">*</span>
          </span>
          <select
            name="Dropdown"
            required
            className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
            defaultValue="-Select-"
          >
            <option value="-Select-">-Select-</option>
            <option value="Referral Partner">Referral Partner</option>
            <option value="Channel Partner">Channel Partner</option>
          </select>
        </label>

        <button
          type="submit"
          className="w-full md:w-48 inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-slate-950 font-semibold shadow-lg hover:scale-[1.01] transition-transform mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

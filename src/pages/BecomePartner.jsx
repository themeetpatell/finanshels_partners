import { HeartHandshake, Mail, MapPin, Sparkles } from 'lucide-react'

export default function BecomePartner() {
  return (
    <div className="space-y-16 pb-20">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12">
        <div className="grid grid-cols-1 gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-10 shadow-2xl shadow-slate-900/50">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">
              <HeartHandshake size={18} />
              Become a partner
            </div>
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">Share the partner motion.</h1>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">Expect a response within one business day.</h3>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Referral, channel, or strategic—give us the context and we&apos;ll route you to the right owner with next steps.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-cyan-200 font-semibold text-sm uppercase tracking-[0.16em]">
                  <Mail size={16} /> Email
                </div>
                <p className="text-white font-semibold mt-2">partnerships@finanshels.com</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
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
  )
}

function PartnerFormEmbed() {
  const baseInput =
    'w-full rounded-xl border border-white/10 bg-slate-900/80 px-3.5 sm:px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:border-transparent transition'

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 sm:p-7 shadow-inner shadow-slate-900/60 space-y-4">
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

        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className="text-sm text-slate-300 mb-1 block">
              Your Name <span className="text-cyan-300">*</span>
            </label>
            <input type="text" name="SingleLine" maxLength="255" className={baseInput} required />
          </div>
          <div>
            <label className="text-sm text-slate-300 mb-1 block">
              Email <span className="text-cyan-300">*</span>
            </label>
            <input type="email" name="Email" maxLength="255" className={baseInput} required />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="space-y-2">
            <label className="text-sm text-slate-300 mb-1 block">
              Phone <span className="text-cyan-300">*</span>
            </label>
            <div className="grid grid-cols-[0.5fr_1fr] gap-2">
              <input
                type="text"
                name="PhoneNumber_countrycode"
                id="international_PhoneNumber_countrycode"
                maxLength="20"
                className={baseInput}
                placeholder="+971"
                required
              />
              <input
                type="text"
                name="PhoneNumber_countrycodeval"
                id="international_PhoneNumber_countrycodeval"
                maxLength="10"
                className={baseInput}
                placeholder="501234567"
                required
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-slate-300 mb-1 block">Your Organization</label>
            <input type="text" name="SingleLine1" maxLength="255" className={baseInput} />
          </div>
        </div>

        <div>
          <label className="text-sm text-slate-300 mb-1 block">
            Partner Type <span className="text-cyan-300">*</span>
          </label>
          <select name="Dropdown" className={baseInput} defaultValue="-Select-" required>
            <option value="-Select-" className="bg-slate-900">
              -Select-
            </option>
            <option value="Referral Partner" className="bg-slate-900">
              Referral Partner
            </option>
            <option value="Channel Partner" className="bg-slate-900">
              Channel Partner
            </option>
            <option value="Strategic Partner" className="bg-slate-900">
              Strategic Partner
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-indigo-500/20 hover:scale-[1.01] transition-transform"
        >
          Submit application
        </button>
        <p className="text-xs text-slate-400 text-center">
          Powered by Zoho. You&apos;ll get a confirmation and a link to book time with the partnerships team.
        </p>
      </form>
    </div>
  )
}

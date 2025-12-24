export default function PartnerWithUs() {
  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 shadow-2xl shadow-slate-900/40">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">Partner with us</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to bring Finanshels to your clients?</h3>
            <p className="text-slate-300">
              Share your details and we&apos;ll align on scope, revenue model, and onboarding in one business day.
            </p>
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
      </div>
    </section>
  )
}

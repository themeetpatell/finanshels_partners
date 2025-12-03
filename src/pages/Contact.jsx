import { useState } from 'react'
import { CalendarClock, Mail, MapPin, Send, Sparkles } from 'lucide-react'

const touchpoints = [
  { title: 'Email', value: 'partners@finanshels.com', icon: Mail, href: 'mailto:partners@finanshels.com' },
  { title: 'HQ', value: 'Dubai, UAE (Global Hub)', icon: MapPin },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    partnerType: 'Referral',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nPartner Type: ${form.partnerType}\n\nContext:\n${form.message}`,
    )
    window.location.href = `mailto:partners@finanshels.com?subject=Partner Inquiry - ${encodeURIComponent(
      form.company || 'New partner',
    )}&body=${body}`
  }

  return (
    <div className="space-y-16 pb-20">
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-10 shadow-2xl shadow-slate-900/40">
          <div className="flex items-center gap-3 text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">
            <Sparkles size={18} />
            Contact partnerships
          </div>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 mt-6 items-start">
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Share the partner motion. Expect a response within one business day.
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Referral, channel, or strategic—give us the context and we&apos;ll connect you to the right owner with next steps.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {touchpoints.map(({ title, value, icon: Icon, href }) => {
                  const Component = href ? 'a' : 'div'
                  return (
                    <Component
                      key={title}
                      href={href}
                      className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-slate-900/30 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-sm text-cyan-200">
                        <Icon size={16} />
                        <span className="uppercase tracking-[0.2em] font-semibold">{title}</span>
                      </div>
                      <p className="text-white font-semibold">{value}</p>
                    </Component>
                  )
                })}
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CalendarClock size={18} className="text-cyan-300" />
                <span>Prefer a call? Suggest a slot and we&apos;ll send a calendar invite.</span>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-inner shadow-slate-900/50 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-300">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full mt-1 px-3 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm text-slate-300">Work email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full mt-1 px-3 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 outline-none"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-300">Company</label>
                  <input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full mt-1 px-3 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 outline-none"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="text-sm text-slate-300">Partner type</label>
                  <select
                    value={form.partnerType}
                    onChange={(e) => setForm({ ...form, partnerType: e.target.value })}
                    className="w-full mt-1 px-3 py-3 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-cyan-400 outline-none"
                  >
                    <option className="bg-slate-900 text-white" value="Referral">Referral partner</option>
                    <option className="bg-slate-900 text-white" value="Channel">Channel partner</option>
                    <option className="bg-slate-900 text-white" value="Strategic">Strategic partner</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-300">What should we know?</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full mt-1 px-3 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-cyan-400 outline-none resize-none"
                  placeholder="Goals, target segment, timelines, or the play you want to run"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-slate-950 font-semibold shadow-lg shadow-indigo-500/20 hover:scale-[1.01] transition-transform"
              >
                Send to partnerships <Send size={16} />
              </button>
              <p className="text-xs text-slate-400 text-center">
                This opens your email client with the details pre-filled. We&apos;ll also share a quick link to book time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

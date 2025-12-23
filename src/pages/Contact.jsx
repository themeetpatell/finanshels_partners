import { CalendarClock, Mail, MapPin, Sparkles, ArrowRight, MessageCircle } from 'lucide-react'

const touchpoints = [
  { title: 'Email', value: 'partnership@finanshels.com', icon: Mail, href: 'mailto:partnership@finanshels.com' },
  { title: 'HQ', value: 'Dubai, UAE (Global Hub)', icon: MapPin },
  {
    title: 'WhatsApp',
    value: '+971 50 495 4698',
    icon: MessageCircle,
    href: 'https://wa.me/971504954698?text=Hey%20Finanshels%2C%20I%27d%20like%20to%20discuss%20a%20partnership.',
  },
]

export default function Contact() {
  return (
    <div className="space-y-12 pb-16">
      <section className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6 pt-12">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 sm:p-10 shadow-2xl shadow-slate-900/40 space-y-6">
          <div className="flex items-center gap-3 text-sm font-semibold text-cyan-200 uppercase tracking-[0.2em]">
            <Sparkles size={18} />
            Contact
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">Talk to Finanshels.</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              For partnerships, please use the &quot;Become a partner&quot; page. For everything else, reach us using the touchpoints
              below.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
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
          <a
            href="/partnerships"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-slate-950 font-semibold shadow-lg shadow-indigo-500/20 hover:scale-[1.01] transition-transform"
          >
            Go to Become a partner <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  )
}

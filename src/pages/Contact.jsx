import { CalendarClock, Mail, MapPin, Sparkles, ArrowRight, MessageCircle } from 'lucide-react'
import SEO from '../components/SEO'

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
    <>
      <SEO
        title="Contact Finanshels"
        description="Talk to Finanshels about partnerships or services. Email partnership@finanshels.com or message us on WhatsApp at +971 50 495 4698."
        path="/contact"
        structuredData={({ canonicalUrl }) => ({
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Finanshels',
          url: canonicalUrl,
          contactPoint: [
            {
              '@type': 'ContactPoint',
              contactType: 'sales',
              email: 'partnership@finanshels.com',
              telephone: '+971504954698',
              areaServed: 'AE',
            },
          ],
        })}
      />
      <div className="space-y-12 pb-16">
      <section className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6 pt-12">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 sm:p-10 shadow-2xl shadow-slate-900/40 space-y-6">
          <div className="flex items-center gap-3 text-sm font-semibold text-orange-200 uppercase tracking-[0.2em]">
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
                  <div className="flex items-center gap-2 text-sm text-orange-200">
                    <Icon size={16} />
                    <span className="uppercase tracking-[0.2em] font-semibold">{title}</span>
                  </div>
                  <p className="text-white font-semibold">{value}</p>
                </Component>
              )
            })}
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <CalendarClock size={18} className="text-orange-400" />
            <span>Prefer a call? Suggest a slot and we&apos;ll send a calendar invite.</span>
          </div>
          <a
            href="/partnerships"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-white font-semibold shadow-lg shadow-orange-500/20 hover:scale-[1.01] transition-transform"
            style={{background: '#F16610'}}
          >
            Go to Become a partner <ArrowRight size={16} />
          </a>
        </div>
      </section>
      </div>
    </>
  )
}

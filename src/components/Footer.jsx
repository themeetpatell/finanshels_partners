import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Mail, Instagram, Youtube, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-14 px-3 sm:px-4 lg:px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <img 
              src="/whitefinanshelslogo.png" 
              alt="Finanshels" 
              className="h-10 w-auto"
            />
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl font-medium">
              Finanshels partners with founders across MENA to deliver finance, tax, and compliance with speed and rigor. When you partner with us, you get operators who move as fast as you do.
            </p>
            <div className="flex items-center gap-3">
              {[ 
                { Icon: Linkedin, href: 'https://linkedin.com/company/finanshels' },
                { Icon: Twitter, href: 'https://twitter.com/finanshels' },
                { Icon: Instagram, href: 'https://www.instagram.com/finanshels' },
                { Icon: Youtube, href: 'https://www.youtube.com/@finanshelshq' },
                { Icon: Mail, href: 'mailto:partners@finanshels.com' },
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4 text-white">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/partnerships" className="text-slate-300 hover:text-white transition-colors font-medium text-base">
                  Referral partners
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="text-slate-300 hover:text-white transition-colors font-medium text-base">
                  Channel partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors font-medium text-base">
                  About Finanshels
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition-colors font-medium text-base">
                  Services
                </Link>
              </li>
              <li>
                <a
                  href="https://finanshels.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors font-medium text-base"
                >
                  Main website
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 font-medium">
          <p>© 2025 Finanshels. All rights reserved.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-white font-semibold hover:text-orange-300 transition-colors">
            Talk to partnerships <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

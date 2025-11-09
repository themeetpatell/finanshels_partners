import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-20 px-6 sm:px-8 lg:px-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img 
                src="/finanshels_logo.png" 
                alt="Finanshels" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-slate-300 text-lg leading-relaxed max-w-md font-medium mb-8">
              Empowering startups across MENA with world-class financial operations, 
              accounting, and tax services. Founded in 2022, trusted by 5000+ SMBs.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/finanshels"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://twitter.com/finanshels"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Twitter size={22} />
              </a>
              <a
                href="mailto:careers@finanshels.com"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors font-medium text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-slate-300 hover:text-white transition-colors font-medium text-base">
                  Open Roles
                </Link>
              </li>
              <li>
                <Link to="/life" className="text-slate-300 hover:text-white transition-colors font-medium text-base">
                  Life at Finanshels
                </Link>
              </li>
              <li>
                <a
                  href="https://finanshels.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors font-medium text-base"
                >
                  Main Website
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Get in Touch</h3>
            <ul className="space-y-4 text-slate-300 font-medium text-base">
              <li>
                <a href="mailto:careers@finanshels.com" className="hover:text-white transition-colors">
                  careers@finanshels.com
                </a>
              </li>
              <li>Dubai, UAE (HQ)</li>
              <li>Ahmedabad, India (Upcoming)</li>
              <li>Kerala, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-10 text-center text-slate-400 text-base font-medium">
          <p>© 2025 Finanshels. All rights reserved. Backed by MBRIF, in5 Tech, Kube VC.</p>
        </div>
      </div>
    </footer>
  )
}

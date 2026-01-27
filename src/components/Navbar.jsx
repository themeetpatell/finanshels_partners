import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '../lib/utils'

export default function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'Services', path: '/services' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-slate-900/50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group">
            <img 
              src="/whitefinanshelslogo.png" 
              alt="Finanshels" 
              className="h-9 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-4 py-2 rounded-full font-semibold transition-all duration-300',
                  isActive(link.path)
                    ? 'text-slate-900 bg-white shadow-lg shadow-indigo-500/20'
                    : 'text-slate-100 hover:bg-white/10'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/become-a-partner"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-semibold shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition-transform"
              style={{background: '#F16610'}}
            >
              Become a partner
            </Link>
          </div>

          <button
            className="md:hidden p-3 rounded-xl hover:bg-white/10 transition-all duration-300 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block px-5 py-3.5 rounded-xl font-semibold transition-all duration-300 text-center',
                  isActive(link.path)
                    ? 'text-slate-900 bg-white shadow-sm'
                    : 'text-slate-100 hover:bg-white/10'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/become-a-partner"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white shadow-lg shadow-orange-500/20 w-full"
                style={{background: '#F16610'}}
              >
                Become a partner
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

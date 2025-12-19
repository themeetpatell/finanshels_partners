import { Link, useLocation } from 'react-router-dom'
import { Menu, X, LogIn, Users } from 'lucide-react'
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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
              to="/login"
              className="ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 text-cyan-300 font-semibold hover:bg-cyan-400/10 transition-all"
            >
              <LogIn size={16} />
              Partner Login
            </Link>
            <Link
              to="/team/login"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/30 text-purple-300 font-semibold hover:bg-purple-400/10 transition-all"
            >
              <Users size={16} />
              Team Login
            </Link>
            <Link
              to="/become-a-partner"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-slate-950 font-semibold shadow-lg shadow-indigo-500/20 hover:scale-[1.02] transition-transform"
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
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block px-5 py-3.5 rounded-xl font-semibold transition-all duration-300',
                  isActive(link.path)
                    ? 'text-slate-900 bg-white shadow-sm'
                    : 'text-slate-100 hover:bg-white/10'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-cyan-400/30 text-cyan-300 font-semibold hover:bg-cyan-400/10 transition-all"
              >
                <LogIn size={16} />
                Partner Login
              </Link>
              <Link
                to="/team/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-purple-400/30 text-purple-300 font-semibold hover:bg-purple-400/10 transition-all"
              >
                <Users size={16} />
                Team Login
              </Link>
            </div>
            <Link
              to="/become-a-partner"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center px-5 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-slate-950 shadow-lg shadow-indigo-500/20"
            >
              Become a partner
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

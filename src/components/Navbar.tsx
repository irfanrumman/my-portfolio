import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { profile } from '../data/portfolio'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const navigate = useNavigate()

  const goTo = (href: string) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 50)
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-panel/90 backdrop-blur border-b border-line/10">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold text-paper">
          {profile.name}
        </Link>

        <ul className="hidden lg:flex items-center gap-7 text-sm text-slate">
          {links.map((l) => (
            <li key={l.href}>
              <button onClick={() => goTo(l.href)} className="hover:text-accent transition-colors">
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark / light theme"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-line/15 text-slate hover:text-accent hover:border-accent/50 transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="lg:hidden text-paper"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="lg:hidden bg-panel border-t border-line/10 px-6 py-4 flex flex-col gap-4 text-sm text-slate">
          {links.map((l) => (
            <li key={l.href}>
              <button onClick={() => goTo(l.href)} className="hover:text-accent transition-colors">
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}





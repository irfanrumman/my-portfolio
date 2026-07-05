import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

export default function Footer() {
  const goTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="border-t border-line/10 py-12 px-6">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <p className="text-paper font-semibold mb-2">{profile.name}</p>
          <p className="text-slate text-sm max-w-xs">{profile.footer_tagline}</p>
        </div>
        <div>
          <p className="text-paper font-semibold mb-3">Links</p>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <button onClick={() => goTo(l.href)} className="text-slate text-sm hover:text-accent transition-colors">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-paper font-semibold mb-3">Connect</p>
          <div className="flex gap-3">
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate hover:text-accent transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-slate hover:text-accent transition-colors">
              <Github size={18} />
            </a>
            <a href={`mailto:${profile.email}`} className="text-slate hover:text-accent transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-line/10 pt-6 text-center text-slate text-xs">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  )
}

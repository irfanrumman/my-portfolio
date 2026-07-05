import { Github, Linkedin, Twitter, Facebook, Mail, Download } from 'lucide-react'
import { profile } from '../data/portfolio'
import Typewriter from './Typewriter'

const socialIcons = [
  { key: 'email', href: `mailto:${profile.email}`, Icon: Mail, label: 'Email' },
  { key: 'linkedin', href: profile.socials.linkedin, Icon: Linkedin, label: 'LinkedIn' },
  { key: 'github', href: profile.socials.github, Icon: Github, label: 'GitHub' },
  { key: 'twitter', href: profile.socials.twitter, Icon: Twitter, label: 'Twitter' },
  { key: 'facebook', href: profile.socials.facebook, Icon: Facebook, label: 'Facebook' },
]

export default function Hero() {
  return (
    <section className="pt-16 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center pt-10">
        {/* Left: name, animated designation, tagline, resume */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3 gradient-text">
            {profile.name}
          </h1>

          <p className="text-accent font-semibold text-lg mb-4">
            <Typewriter words={profile.roles} />
          </p>

          <p className="text-slate leading-relaxed max-w-md mb-8">{profile.tagline}</p>

          <a
            href={profile.resumeUrl}
            download
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-ink font-semibold px-5 py-3 rounded hover:opacity-90 transition-opacity"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        {/* Right: photo card, with social + GitHub links below it */}
        <div className="justify-self-center flex flex-col items-center gap-6">
          <div className="relative">
            <span className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-accent2" />
            <span className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-accent" />
            <div className="w-72 md:w-80 aspect-square rounded-2xl overflow-hidden border border-line/15 bg-panel">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src =
                    'https://api.dicebear.com/7.x/initials/svg?seed=' + encodeURIComponent(profile.name)
                }}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialIcons
              .filter((s) => s.href && s.href !== 'mailto:')
              .map(({ key, href, Icon, label }) => (
                <a
                  key={key}
                  href={href}
                  target={key === 'email' ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-line/15 text-slate hover:text-accent hover:border-accent/50 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

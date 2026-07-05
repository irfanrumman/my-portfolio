import { useState, type FormEvent } from 'react'
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 px-6 border-t border-line/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-paper mb-14">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-paper font-semibold text-lg mb-2">Get In Touch</h3>
            <p className="text-slate text-sm mb-6">
              Feel free to contact me for any work or suggestions below.
            </p>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-slate hover:text-accent transition-colors">
                  <Mail size={18} /> {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate hover:text-accent transition-colors">
                  <Linkedin size={18} /> {profile.socials.linkedin.replace('https://', '')}
                </a>
              </li>
              <li>
                <a href={profile.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate hover:text-accent transition-colors">
                  <Github size={18} /> {profile.socials.github.replace('https://', '')}
                </a>
              </li>
              {profile.whatsapp && (
                <li>
                  <a
                    href={`https://wa.me/${profile.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-slate hover:text-accent transition-colors"
                  >
                    <MessageCircle size={18} /> WhatsApp: {profile.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-slate mb-1.5">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full bg-ink/40 border border-line/15 rounded px-3 py-2.5 text-sm text-paper placeholder:text-slate/60 focus:border-accent outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-slate mb-1.5">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your.email@example.com"
                className="w-full bg-ink/40 border border-line/15 rounded px-3 py-2.5 text-sm text-paper placeholder:text-slate/60 focus:border-accent outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-slate mb-1.5">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message"
                className="w-full bg-ink/40 border border-line/15 rounded px-3 py-2.5 text-sm text-paper placeholder:text-slate/60 focus:border-accent outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-ink font-semibold rounded px-5 py-3 hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 border-t border-line/10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-paper mb-10">About Me</h2>
        <div className="space-y-4 text-slate leading-relaxed whitespace-pre-line">
          {profile.about}
        </div>
      </div>
    </section>
  )
}

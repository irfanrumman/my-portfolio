import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 border-t border-line/10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-paper mb-14">Education</h2>

        <div className="border border-line/10 rounded-md bg-panel divide-y divide-line/10">
          {education.map((item) => (
            <div key={item.degree} className="p-5">
              <p className="text-paper font-semibold">{item.degree}</p>
              <p className="text-slate text-sm">{item.institute}</p>
              <p className="text-slate text-xs mt-1">{item.duration}</p>
              {item.details && <p className="text-slate text-sm mt-2">{item.details}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

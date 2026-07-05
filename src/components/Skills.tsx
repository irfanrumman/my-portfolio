import { useState } from 'react'
import { skills } from '../data/portfolio'
import { skillIconMap } from '../data/skillIcons'

function SkillIcon({ name }: { name: string }) {
  const [broken, setBroken] = useState(false)
  const src = skillIconMap[name]

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="w-14 h-14 rounded-lg bg-white border border-line/10 flex items-center justify-center p-2.5">
        {src && !broken ? (
          <img src={src} alt={name} className="w-full h-full object-contain" onError={() => setBroken(true)} />
        ) : (
          <span className="text-slate-700 font-semibold text-xs">{name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <span className="text-xs text-slate max-w-[5.5rem]">{name}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 border-t border-line/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-paper mb-14">Technical Skills</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <div key={group.category} className="border border-line/10 rounded-md bg-panel p-6">
              <h3 className={`font-semibold mb-1 ${i % 2 === 0 ? 'text-accent' : 'text-accent2'}`}>
                {group.category}
              </h3>
              <div className={`h-0.5 w-10 rounded mb-5 ${i % 2 === 0 ? 'bg-accent' : 'bg-accent2'}`} />
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-5 gap-x-2">
                {group.items.map((item) => (
                  <SkillIcon key={item} name={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
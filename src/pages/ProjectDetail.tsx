import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/portfolio'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="pt-20 pb-24 px-6 max-w-3xl mx-auto text-center">
        <p className="text-paper text-xl mb-4">Project not found.</p>
        <Link to="/" className="text-accent">← back home</Link>
      </div>
    )
  }

  return (
    <article className="pt-14 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-accent text-sm mb-8 hover:opacity-80 transition-opacity">
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <div className="rounded-md overflow-hidden mb-8 border border-line/10">
          <img src={project.image} alt={project.name} className="w-full object-cover max-h-80" />
        </div>

        <h1 className="text-3xl font-bold text-paper mb-4">{project.name}</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((t) => (
            <span key={t} className="text-xs border border-line/15 text-slate rounded px-2.5 py-1">
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-10">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-ink font-semibold px-4 py-2.5 rounded hover:opacity-90 transition-opacity text-sm"
            >
              <ExternalLink size={16} /> Live Project
            </a>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-line/20 text-paper font-semibold px-4 py-2.5 rounded hover:border-accent hover:text-accent transition-colors text-sm"
          >
            <Github size={16} /> GitHub
          </a>
        </div>

        <section className="space-y-8 text-slate leading-relaxed">
          <div>
            <h2 className="text-paper font-semibold text-lg mb-2">Description</h2>
            <p className="whitespace-pre-line">{project.description}</p>
          </div>
          <div>
            <h2 className="text-paper font-semibold text-lg mb-2">Challenges</h2>
            <p>{project.challenges}</p>
          </div>
          <div>
            <h2 className="text-paper font-semibold text-lg mb-2">Future Improvements</h2>
            <p>{project.improvements}</p>
          </div>
        </section>
      </div>
    </article>
  )
}

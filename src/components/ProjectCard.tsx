import { Link } from 'react-router-dom'
import { Github, ExternalLink } from 'lucide-react'
import type { Project } from '../data/portfolio'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-line/10 rounded-md bg-panel overflow-hidden flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <p className="text-paper font-semibold">{project.name}</p>
          <Link
            to={`/projects/${project.slug}`}
            className="shrink-0 text-xs border border-line/15 rounded px-2.5 py-1 text-slate hover:text-accent hover:border-accent/50 transition-colors"
          >
            Details
          </Link>
        </div>
        <p className="text-slate text-sm mb-4 flex-1">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((t) => (
            <span key={t} className="text-[11px] border border-line/15 rounded px-2 py-0.5 text-slate">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-accent hover:gap-2 transition-all"
          >
            <Github size={15} /> View Code
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-accent2 hover:gap-2 transition-all"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

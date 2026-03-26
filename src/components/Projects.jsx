import { projects } from '../data/portfolioData';
import { GithubIcon, ExternalLinkIcon, ArrowRightIcon } from './Icons';

/**
 * ProjectCard — Individual project display card with hover effects.
 */
function ProjectCard({ project, index }) {
  return (
    <article
      className={`glass-hover rounded-2xl p-6 flex flex-col gap-5 reveal reveal-delay-${index + 1} group`}
    >
      {/* Top row: icon + category badge */}
      <div className="flex items-start justify-between">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{
            background: `linear-gradient(135deg, ${project.accentColor}25, ${project.accentColor}08)`,
            border: `1px solid ${project.accentColor}30`,
          }}
        >
          {project.icon}
        </div>
        <span
          className="text-xs font-mono px-2.5 py-1 rounded-md"
          style={{
            background: `${project.accentColor}12`,
            border: `1px solid ${project.accentColor}25`,
            color: project.accentColor,
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Title */}
      <div>
        <h3
          className="font-display font-bold text-lg text-text-primary mb-2 group-hover:text-accent-primary transition-colors duration-200"
        >
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t) => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
      </div>

      {/* Links */}
      <div
        className="flex items-center gap-3 pt-4 border-t"
        style={{ borderColor: 'rgba(56,189,248,0.08)' }}
      >
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-accent-primary transition-colors duration-200"
            aria-label={`${project.title} GitHub`}
          >
            <GithubIcon size={15} /> Source
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-accent-primary transition-colors duration-200"
            aria-label={`${project.title} live demo`}
          >
            <ExternalLinkIcon size={13} /> Live Demo
          </a>
        )}
        {/* View detail arrow (decorative) */}
        <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ArrowRightIcon size={14} className="text-accent-primary" />
        </span>
      </div>
    </article>
  );
}

/**
 * Projects — Grid of project cards with section header.
 */
export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      {/* Section bg accent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(129,140,248,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="mb-16 reveal">
          <span className="flex justify-center text-3xl mb-3 text-blue-400   pb-2"> Projects</span>
          <h2 className="font-display text-5xl sm:text-4xl md:text-5xl font-black text-text-primary mt-2 leading-tight pb-2 overflow-visible">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="text-text-secondary text-sm  max-w-md">
            A selection of projects I've worked on — ranging from full-stack apps to ML-powered browser extensions.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-14 text-center reveal">
          <p className="text-text-secondary text-sm mb-4">
            More projects are in development — check back soon!
          </p>
          <a
            href="https://github.com/newsunneupane"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex"
          >
            <GithubIcon size={16} /> View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

import { useTypingEffect } from '../hooks/useTypingEffect';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, ArrowRightIcon, DownloadIcon } from './Icons';

const TYPED_STRINGS = [
  'Frontend Developer.',
  'React Enthusiast.',
  'BCA Student.',
  'Problem Solver.',
  'Open Source Fan.',
];

/**
 * Hero — Full-viewport landing section with animated gradient
 * background blobs, typing effect, and CTA buttons.
 */
export default function Hero() {
  const { displayText } = useTypingEffect(TYPED_STRINGS, 75, 1800);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Animated Background Blobs ── */}
      <div aria-hidden="true">
        {/* Blob 1 — cyan top-left */}
        <div
          className="hero-blob w-[500px] h-[500px] opacity-20"
          style={{
            top: '-100px',
            left: '-150px',
            background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)',
            animationDuration: '9s',
          }}
        />
        {/* Blob 2 — purple bottom-right */}
        <div
          className="hero-blob w-[400px] h-[400px] opacity-15"
          style={{
            bottom: '-80px',
            right: '-100px',
            background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)',
            animationDuration: '12s',
            animationDelay: '3s',
          }}
        />
        {/* Blob 3 — subtle center glow */}
        <div
          className="hero-blob w-[300px] h-[300px] opacity-10"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)',
            animationDuration: '15s',
            animationDelay: '1s',
          }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 mt-20 font-mono text-xs"
          style={{
            background: 'rgba(56,189,248,0.08)',
            border: '1px solid rgba(56,189,248,0.2)',
            color: '#7dd3fc',
            animation: 'fadeInUp 0.6s ease forwards',
          }}>
          <span className="glow-dot " />
          Open to Internship Opportunities
        </div>

        {/* Name */}
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-4"
          style={{ animation: 'fadeInUp 0.7s 0.1s ease forwards', opacity: 0 }}
        >
          <span className="text-text-primary">Newsun </span>
          <span className="gradient-text">Neupane</span>
        </h1>

        {/* Typing subtitle */}
        <div
          className="flex items-center justify-center gap-0 font-display text-xl sm:text-2xl md:text-3xl font-semibold text-text-secondary mb-6 h-10"
          style={{ animation: 'fadeInUp 0.7s 0.2s ease forwards', opacity: 0 }}
        >
          <span className="mr-2">I'm a </span>
          <span className="text-accent-primary">{displayText}</span>
          <span className="typing-cursor" />
        </div>

        {/* Tagline */}
        <p
          className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animation: 'fadeInUp 0.7s 0.3s ease forwards', opacity: 0 }}
        >
          {personalInfo.tagline} Building with{' '}
          <span className="text-accent-primary font-medium">React</span>,{' '}
          <span className="text-accent-secondary font-medium">Tailwind</span>, and passion
          — one component at a time.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'fadeInUp 0.7s 0.4s ease forwards', opacity: 0 }}
        >
          <a
            href="#projects"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work <ArrowRightIcon size={16} />
          </a>
          <a
            href={personalInfo.resumeLink}
            className="btn-ghost"
            download
          >
            <DownloadIcon size={16} /> Download CV
          </a>
        </div>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-4 mt-10"
          style={{ animation: 'fadeInUp 0.7s 0.5s ease forwards', opacity: 0 }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          {/* Divider */}
          <div className="h-px w-10" style={{ background: 'rgba(56,189,248,0.2)' }} />
          <a
            href={`mailto:${personalInfo.email}`}
            className="font-mono text-xs text-text-muted hover:text-accent-primary transition-colors duration-200"
          >
            {personalInfo.email}
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: 'fadeIn 1s 1s ease forwards', opacity: 0 }}
        aria-hidden="true"
      >
        <span className="font-mono text-xs text-text-muted tracking-widest">SCROLL</span>
        <div
          className="w-px h-12"
          style={{
            background: 'linear-gradient(to bottom, rgba(56,189,248,0.6), transparent)',
            animation: 'float 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}

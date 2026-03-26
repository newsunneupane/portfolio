import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, MailIcon, ArrowRightIcon } from './Icons';

const QUICK_LINKS = [
  { label: 'About',      id: 'about' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact',    id: 'contact' },
];

/**
 * Footer — Social links, quick nav, copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t" style={{ borderColor: 'rgba(56,189,248,0.08)' }}>
      {/* Top glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-60 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main footer grid */}
        <div className="grid sm:grid-cols-3 gap-10 pb-10 border-b" style={{ borderColor: 'rgba(56,189,248,0.06)' }}>
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-black text-lg"
                style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)' }}
              >
                <span style={{ color: '#06080f' }}>N</span>
              </div>
              <span className="font-display font-bold text-text-primary">
                Newsun<span className="text-accent-primary">.</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              BCA Student &amp; Frontend Developer building clean,
              fast &amp; delightful web experiences from Nepal 🇳🇵.
            </p>
            {/* Social row */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-9 h-9"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-9 h-9"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-icon w-9 h-9"
                aria-label="Send email"
              >
                <MailIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-primary transition-colors duration-200 group"
                  >
                    <ArrowRightIcon
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-1 group-hover:translate-x-0 transition-transform"
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">
              Get in Touch
            </p>
            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
              Open to internship and freelance opportunities. Let's build something great together.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-ghost text-xs px-4 py-2 inline-flex"
            >
              <MailIcon size={13} /> {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p className="font-mono text-xs text-text-muted">
            © {year}{' '}
            <span className="text-accent-primary">Newsun Neupane</span>. All rights reserved.
          </p>
          <p className="font-mono text-xs text-text-muted">
            Built with{' '}
            <span className="text-sky-400">React</span> &amp;{' '}
            <span className="text-sky-500">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

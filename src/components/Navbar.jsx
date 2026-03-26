import { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon, SunIcon, MoonIcon } from './Icons';

const NAV_LINKS = [
  { id: 'hero',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact' },
];

/**
 * Navbar — sticky top nav with active section tracking,
 * mobile hamburger menu, and dark/light mode toggle.
 */
export default function Navbar({ activeSection, isDark, onToggleDark }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Show glass background after scrolling 60px
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass border-b border-slate-800/60 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2 group"
            aria-label="Home"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-black text-lg"
              style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)' }}>
              <span style={{ color: '#06080f' }}>N</span>
            </div>
            <span className="font-display font-bold text-text-primary hidden sm:block">
              Newsun<span className="text-accent-primary">.</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`nav-link font-display ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={onToggleDark}
              className="social-icon w-9 h-9"
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="social-icon w-9 h-9 md:hidden"
              aria-label="Menu"
            >
              {menuOpen ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(6,8,15,0.97)', backdropFilter: 'blur(20px)' }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`font-display text-2xl font-bold transition-all duration-200 ${
                activeSection === link.id ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
              }`}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}

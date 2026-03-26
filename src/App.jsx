import { useState } from 'react';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Projects   from './components/Projects';
import Experience from './components/Experience';
import Contact    from './components/Contact';
import Footer     from './components/Footer';
import { useScrollReveal, useActiveSection } from './hooks/useScrollReveal';
import { useDarkMode } from './hooks/useDarkMode';

// All navigable section IDs (must match id="" on each section element)
const SECTIONS = ['hero', 'about', 'projects', 'experience', 'contact'];

/**
 * App — Root component.
 * Wires up global hooks (dark mode, scroll reveal, active section)
 * and renders the full page layout.
 */
export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Dark / light mode (persisted in localStorage)
  const { isDark, toggle: toggleDark } = useDarkMode();

  // Trigger CSS scroll-reveal animation on .reveal elements
  useScrollReveal();

  // Track which section is in the viewport for nav highlighting
  useActiveSection(SECTIONS, setActiveSection);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#06080f' }}>
      {/* ── Sticky Navigation ── */}
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        onToggleDark={toggleDark}
      />

      {/* ── Main Page Content ── */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}

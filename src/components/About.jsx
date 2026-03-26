import { skills, personalInfo } from '../data/portfolioData';

const CATEGORIES = ['frontend', 'backend', 'tools'];
const CATEGORY_LABELS = {
  frontend: '🎨 Frontend',
  backend: '⚙️ Backend',
  tools: '🛠 Tools & Others',
};

/**
 * About — Bio, skills grid, and a personal touch.
 */
export default function About() {
  return (
    <section id="about" className="py-28 relative">
      {/* Subtle section divider glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(56,189,248,0.3), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 reveal">
          <span className="flex justify-center text-3xl mb-3 text-blue-400   pb-2"> About</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-text-primary mt-2">
            A little about <span className="gradient-text">me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ── Bio Column ── */}
          <div className="space-y-6">
            {/* Avatar / initials card */}
            <div className="reveal">
              <div className="relative w-28 h-28 mb-6">
                <div
                  className="w-28 h-28 rounded-2xl flex items-center justify-center font-display font-black text-5xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(129,140,248,0.2))',
                    border: '1px solid rgba(56,189,248,0.2)',
                  }}
                >
                  NN
                </div>
                {/* Glow ring */}
                <div
                  className="absolute -inset-1 rounded-2xl -z-10 blur-sm opacity-30"
                  style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)' }}
                />
              </div>
            </div>

            <div className="reveal reveal-delay-1">
              <p className="text-text-secondary leading-relaxed text-[15px]">
                Hi! I'm <span className="text-text-primary font-semibold">Newsun Neupane</span>, a
                passionate BCA student from Nepal 🇳🇵 with a deep love for building clean,
                performant web applications that people enjoy using.
              </p>
            </div>

            <div className="reveal reveal-delay-2">
              <p className="text-text-secondary leading-relaxed text-[15px]">
                I specialize in <span className="text-accent-primary font-medium">React</span> and{' '}
                <span className="text-accent-secondary font-medium">Tailwind CSS</span> on the
                frontend, with solid experience in PHP and MySQL for backend development. I also
                enjoy diving into machine learning projects — my Phishing URL Detector Chrome
                extension being a prime example.
              </p>
            </div>

            <div className="reveal reveal-delay-3">
              <p className="text-text-secondary leading-relaxed text-[15px]">
                When I'm not coding, you'll find me contributing to open source, exploring UI
                design trends, or sharpening my DSA skills. I'm actively seeking{' '}
                <span className="text-text-primary font-medium">internship opportunities</span> to
                grow alongside experienced teams and make meaningful contributions.
              </p>
            </div>

            {/* Quick stats */}
            <div className="reveal reveal-delay-4 grid grid-cols-3 gap-4 mt-8">
              {[
                { value: '3+', label: 'Projects' },
                { value: '2+', label: 'Years Coding' },
                { value: '∞', label: 'Curiosity' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-4 text-center"
                >
                  <p className="font-display font-black text-2xl gradient-text">{stat.value}</p>
                  <p className="text-text-muted text-xs font-mono mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Skills Column ── */}
          <div className="space-y-8">
            {CATEGORIES.map((cat, ci) => (
              <div key={cat} className={`reveal reveal-delay-${ci + 1}`}>
                <h3 className="font-mono text-xs text-text-muted tracking-widest uppercase mb-4">
                  {CATEGORY_LABELS[cat]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === cat)
                    .map((skill) => (
                      <span key={skill.name} className="skill-tag">
                        {skill.name}
                      </span>
                    ))}
                </div>
              </div>
            ))}

            {/* Currently learning */}
            <div className="reveal reveal-delay-4 glass rounded-2xl p-5 mt-6">
              <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-3">
                📖 Currently Learning
              </p>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'Next.js', 'Node.js', 'Docker'].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200"
                    style={{
                      background: 'rgba(129,140,248,0.08)',
                      border: '1px solid rgba(129,140,248,0.2)',
                      color: '#a5b4fc',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

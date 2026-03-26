import { experience } from '../data/portfolioData';

/**
 * TimelineItem — Single experience / education entry.
 */
function TimelineItem({ item, index, isLast }) {
  return (
    <div className={`relative pl-10 ${!isLast ? 'pb-12' : ''} reveal reveal-delay-${index + 1}`}>
      {/* Vertical line */}
      {!isLast && (
        <div
          className="absolute left-[17px] top-8 bottom-0 w-px"
          style={{
            background: 'linear-gradient(to bottom, rgba(56,189,248,0.3), rgba(129,140,248,0.1), transparent)',
          }}
        />
      )}

      {/* Circle node */}
      <div
        className="absolute left-0 top-1 w-9 h-9 rounded-xl flex items-center justify-center text-lg"
        style={{
          background: 'rgba(17,24,39,0.9)',
          border: '1px solid rgba(56,189,248,0.2)',
          boxShadow: '0 0 15px rgba(56,189,248,0.08)',
        }}
      >
        {item.icon}
      </div>

      {/* Content */}
      <div className="glass rounded-2xl p-5 ml-2">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-display font-bold text-text-primary text-base">{item.title}</h3>
            <p className="text-accent-primary text-sm font-medium mt-0.5">{item.organization}</p>
          </div>
          <span
            className="text-xs font-mono px-3 py-1 rounded-full whitespace-nowrap"
            style={{
              background: 'rgba(56,189,248,0.08)',
              border: '1px solid rgba(56,189,248,0.15)',
              color: '#7dd3fc',
            }}
          >
            {item.period}
          </span>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed mt-3">{item.description}</p>
      </div>
    </div>
  );
}

/**
 * Experience — Vertical timeline for education and experience.
 */
export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      {/* Bg gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(56,189,248,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="mb-16 reveal">
          <span className="flex justify-center text-3xl mb-3 text-blue-400   pb-2">  Experience</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-text-primary mt-2">
            Education &amp; <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-text-secondary text-sm mt-4 max-w-md">
            My academic background and the experiences that have shaped me as a developer.
          </p>
        </div>

        {/* Split layout on large screens */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div className="relative">
            {experience.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                index={i}
                isLast={i === experience.length - 1}
              />
            ))}
          </div>

          {/* Right panel — currently working on / goals */}
          <div className="space-y-5 lg:pt-2">
            {/* "What I'm working towards" card */}
            <div className="reveal glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-text-primary mb-4 flex items-center gap-2">
                <span>🎯</span> Goals for 2025–2026
              </h3>
              <ul className="space-y-3">
                {[
                  'Land a frontend / full-stack internship',
                  'Master TypeScript & Next.js',
                  'Contribute meaningfully to open source',
                  'Build and ship a SaaS product',
                  
                ].map((goal, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span
                      className="mt-0.5 text-accent-primary font-mono text-xs select-none"
                    >
                      ▹
                    </span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications / courses */}
            <div className="reveal reveal-delay-2 glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-text-primary mb-4 flex items-center gap-2">
                <span>📜</span> Courses &amp; Self-Study
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'React – The Complete Guide', provider: 'Udemy' },
                  { name: 'Machine Learning with Python', provider: 'Coursera' },
                  { name: 'JavaScript Algorithms & DS', provider: 'freeCodeCamp' },
                ].map((c, i) => (
                  <div key={i} className="flex items-start justify-between gap-2">
                    <p className="text-text-secondary text-sm">{c.name}</p>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded whitespace-nowrap"
                      style={{
                        background: 'rgba(129,140,248,0.1)',
                        color: '#a5b4fc',
                      }}
                    >
                      {c.provider}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

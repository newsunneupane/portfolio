import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { MailIcon, SendIcon, CheckIcon, GithubIcon, LinkedinIcon, LocationIcon } from './Icons';

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };
const INITIAL_ERRORS = { name: '', email: '', message: '' };

/**
 * Validates the form and returns an errors object.
 */
function validate(values) {
  const errors = { name: '', email: '', message: '' };
  if (!values.name.trim()) errors.name = 'Name is required.';
  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email.';
  }
  if (!values.message.trim()) errors.message = 'Message is required.';
  else if (values.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.';
  return errors;
}

/**
 * Contact — Form + contact info panel.
 * No backend; form submits to mailto: and shows a success state.
 */
export default function Contact() {
  const [form, setForm]       = useState(INITIAL_FORM);
  const [errors, setErrors]   = useState(INITIAL_ERRORS);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // Clear error on typing
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(form);
    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Simulate sending (opens mailto as a bonus)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Open mailto as a fallback
      const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Hi Newsun,\n\n${form.message}\n\n— ${form.name}\n${form.email}`)}`;
      window.location.href = mailto;
    }, 1000);
  };

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setErrors(INITIAL_ERRORS);
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-28 relative">
      {/* Bg accent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 50% 100%, rgba(56,189,248,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="mb-16 reveal text-center">
          <span className="flex justify-center text-3xl mb-3 text-blue-400   pb-2"> Contact</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-text-primary mt-2">
            Let's <span className="gradient-text">connect</span>
          </h2>
          <p className="text-text-secondary text-sm mt-4 max-w-md mx-auto">
            I'm actively looking for internship opportunities. Whether you have a question,
            a project idea, or just want to say hi — my inbox is always open!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* ── Contact Info Panel ── */}
          <div className="lg:col-span-2 space-y-5 reveal">
            {/* Info cards */}
            {[
              {
                icon: <MailIcon size={18} />,
                label: 'Email',
                value: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
              },
              {
                icon: <LocationIcon size={18} />,
                label: 'Location',
                value: personalInfo.location,
                href: null,
              },
            ].map((item) => (
              <div key={item.label} className="glass rounded-xl p-4 flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(56,189,248,0.1)',
                    border: '1px solid rgba(56,189,248,0.2)',
                    color: '#38bdf8',
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="font-mono text-xs text-text-muted">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-text-primary text-sm font-medium hover:text-accent-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-text-primary text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="glass rounded-xl p-5">
              <p className="font-mono text-xs text-text-muted mb-4 tracking-widest uppercase">Find me on</p>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon flex-1 justify-center gap-2 h-10 text-xs font-mono"
                  aria-label="GitHub"
                >
                  <GithubIcon size={16} /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon flex-1 justify-center gap-2 h-10 text-xs font-mono"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
              </div>
            </div>

            {/* Availability badge */}
            <div
              className="rounded-xl p-4 flex items-center gap-3"
              style={{
                background: 'rgba(52,211,153,0.07)',
                border: '1px solid rgba(52,211,153,0.2)',
              }}
            >
              <span className="glow-dot" style={{ background: '#34d399', boxShadow: '0 0 8px #34d399, 0 0 20px #34d39980' }} />
              <p className="text-sm" style={{ color: '#6ee7b7' }}>
                <span className="font-semibold">Available</span> for internship &amp; freelance work
              </p>
            </div>
          </div>

          {/* ── Contact Form ── */}
          <div className="lg:col-span-3 reveal reveal-delay-2">
            <div className="glass rounded-2xl p-6 sm:p-8">
              {submitted ? (
                /* ── Success State ── */
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(52,211,153,0.1)',
                      border: '1px solid rgba(52,211,153,0.3)',
                    }}
                  >
                    <CheckIcon size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-text-primary">
                    Message Sent!
                  </h3>
                  <p className="text-text-secondary text-sm max-w-xs">
                    Thanks for reaching out, {form.name}! I'll get back to you as soon as possible.
                  </p>
                  <button onClick={resetForm} className="btn-ghost mt-2 text-sm px-4 py-2">
                    Send another message
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs text-text-muted mb-2 tracking-widest">
                        NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs font-mono" style={{ color: '#f87171' }}>
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-text-muted mb-2 tracking-widest">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs font-mono" style={{ color: '#f87171' }}>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block font-mono text-xs text-text-muted mb-2 tracking-widest">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="form-input"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-xs text-text-muted mb-2 tracking-widest">
                      MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, opportunity, or anything you'd like to discuss..."
                      className={`form-input resize-none ${errors.message ? 'error' : ''}`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs font-mono" style={{ color: '#f87171' }}>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-3.5"
                  >
                    {loading ? (
                      <>
                        <span
                          className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
                          style={{ borderColor: '#06080f', borderTopColor: 'transparent' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <SendIcon size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

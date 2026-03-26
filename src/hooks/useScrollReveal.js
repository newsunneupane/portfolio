import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — Attaches an IntersectionObserver to all elements
 * with the `reveal` class inside the observed container (or the whole document).
 * Adds `revealed` class when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Unobserve once revealed to avoid re-triggering
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all .reveal elements in the document
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/**
 * useActiveSection — Tracks which section is currently in view
 * by observing multiple section IDs.
 *
 * @param {string[]} sectionIds
 * @param {function} setActive - state setter
 */
export function useActiveSection(sectionIds, setActive) {
  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds, setActive]);
}

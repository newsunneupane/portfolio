import { useState, useEffect } from 'react';

/**
 * useTypingEffect — cycles through an array of strings
 * with a typewriter animation.
 *
 * @param {string[]} texts   - Array of strings to cycle through
 * @param {number}   speed   - Typing speed in ms per character (default 80)
 * @param {number}   pause   - Pause duration after full string (default 1800)
 * @returns {{ displayText: string, isDeleting: boolean }}
 */
export function useTypingEffect(texts = [], speed = 80, pause = 1800) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts.length) return;

    const current = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);

        if (charIndex + 1 === current.length) {
          // Pause at end, then start deleting
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        // Deleting
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((i) => (i + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return { displayText, isDeleting };
}

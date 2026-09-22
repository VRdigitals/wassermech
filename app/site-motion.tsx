'use client';

import { useEffect } from 'react';
import './site-motion.css';

/** Progressive enhancement: content stays visible if scripting is unavailable. */
export default function SiteMotion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    const reveal = (element: Element, delay = 0) => {
      if (preference.matches) return;
      const animation = element.animate(
        [{ opacity: 0, transform: 'translateY(22px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 650, delay, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' },
      );
      animations.add(animation);
      animation.onfinish = () => animations.delete(animation);
    };
    document.querySelectorAll('.wm-kicker, .wm-hero h1, .wm-intro, .wm-actions, .wm-hero-signature').forEach((element, index) => reveal(element, index * 85));
    const observer = new IntersectionObserver(entries => {
      entries.filter(entry => entry.isIntersecting).forEach((entry, index) => {
        reveal(entry.target, Math.min(index * 65, 195));
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    document.querySelectorAll('.partner-logo, .collection-heading, .collection-copy, .about-grid > div, .portfolio-download > div, .download-card, .product-intro > div, .product-feature, .product-gallery-grid > figure, .contact-grid > div').forEach(element => observer.observe(element));
    const cancelMotion = () => {
      if (preference.matches) animations.forEach(animation => animation.cancel());
    };
    preference.addEventListener('change', cancelMotion);
    return () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      preference.removeEventListener('change', cancelMotion);
    };
  }, []);
  return null;
}

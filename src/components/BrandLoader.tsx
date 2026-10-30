import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';

export const BrandLoader: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(() => {
    // Only show once per session to avoid annoying user on page refreshes/routes
    if (typeof window !== 'undefined') {
      const shown = sessionStorage.getItem('ths_intro_shown');
      return !shown;
    }
    return true;
  });
  const [fading, setFading] = useState<boolean>(false);

  useEffect(() => {
    if (!visible) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? 100 : 850;

    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem('ths_intro_shown', 'true');
      }, 350);
    }, duration);

    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading The Handstand School"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#050B0A',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '320px', padding: '20px' }}>
        <Logo size="lg" linkToHome={false} />
        
        {/* Animated thin turquoise line */}
        <div
          style={{
            position: 'relative',
            width: '180px',
            height: '2px',
            backgroundColor: 'rgba(0, 215, 189, 0.2)',
            margin: '28px auto 16px',
            overflow: 'hidden',
            borderRadius: '2px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              height: '100%',
              backgroundColor: 'var(--color-turquoise)',
              width: '60%',
              animation: 'lineSlide 1.2s infinite ease-in-out',
            }}
          />
        </div>

        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '13px',
            letterSpacing: '0.25em',
            color: 'var(--color-muted-grey)',
            textTransform: 'uppercase',
            fontWeight: 700,
          }}
        >
          CONTROL · STRENGTH · PROGRESSION
        </div>
      </div>
    </div>
  );
};


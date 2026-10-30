import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  linkToHome?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', linkToHome = true }) => {
  const content = (
    <div
      className={`logo-brand ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        lineHeight: 1,
        userSelect: 'none',
        letterSpacing: '0.04em',
      }}
      aria-label="The Handstand School"
    >
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: size === 'lg' ? '12px' : size === 'sm' ? '8px' : '10px',
          fontWeight: 700,
          letterSpacing: '0.22em',
          color: 'var(--color-turquoise)',
          textTransform: 'uppercase',
          marginBottom: '2px',
        }}
      >
        THE
      </span>
      <span
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: size === 'lg' ? '32px' : size === 'sm' ? '18px' : '24px',
          fontWeight: 900,
          letterSpacing: '0.04em',
          color: 'var(--color-turquoise)',
          textTransform: 'uppercase',
          lineHeight: 0.95,
        }}
      >
        HANDSTAND
      </span>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          width: '100%',
          marginTop: '3px',
        }}
      >
        <div style={{ height: '1.5px', background: 'var(--color-turquoise)', flex: 1, opacity: 0.6 }} />
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: size === 'lg' ? '11px' : size === 'sm' ? '7px' : '9px',
            fontWeight: 800,
            letterSpacing: '0.3em',
            color: 'var(--color-pure-white)',
            textTransform: 'uppercase',
          }}
        >
          SCHOOL
        </span>
        <div style={{ height: '1.5px', background: 'var(--color-turquoise)', flex: 1, opacity: 0.6 }} />
      </div>
    </div>
  );

  if (linkToHome) {
    return (
      <Link to="/" style={{ display: 'inline-block', textDecoration: 'none' }}>
        {content}
      </Link>
    );
  }

  return content;
};


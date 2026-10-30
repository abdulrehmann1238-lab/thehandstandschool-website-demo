import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'white' | 'dark';
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  variant = 'white',
}) => {
  const isWhite = variant === 'white';

  return (
    <div
      style={{
        backgroundColor: isWhite ? '#FFFFFF' : '#0E1A18',
        color: isWhite ? 'var(--color-charcoal)' : 'var(--color-pure-white)',
        border: isWhite ? 'none' : '1px solid rgba(0, 215, 189, 0.25)',
        borderRadius: '6px',
        padding: '36px 32px',
        boxShadow: isWhite ? '0 12px 32px rgba(0, 0, 0, 0.08)' : '0 8px 24px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: '100%',
      }}
    >
      {/* Decorative Quote Mark */}
      <div
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          color: 'var(--color-turquoise)',
          opacity: 0.25,
        }}
      >
        <Quote size={36} />
      </div>

      <p
        style={{
          fontSize: '15.5px',
          lineHeight: '1.65',
          color: isWhite ? '#2A3634' : 'var(--color-muted-grey)',
          fontStyle: 'normal',
          marginBottom: '28px',
          flex: 1,
        }}
      >
        "{testimonial.quote}"
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: 'auto' }}>
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid var(--color-turquoise)',
          }}
          onError={(e) => {
            // fallback if avatar fails
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        <div>
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '17px',
              fontWeight: 800,
              letterSpacing: '0.04em',
              color: isWhite ? 'var(--color-deep-black)' : 'var(--color-pure-white)',
              textTransform: 'uppercase',
            }}
          >
            {testimonial.name}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: isWhite ? '#60726E' : 'var(--color-turquoise)',
            }}
          >
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  );
};


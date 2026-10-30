import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { FAQItem } from '../data/faqs';

interface AccordionProps {
  items: FAQItem[];
  theme?: 'dark' | 'light';
}

export const Accordion: React.FC<AccordionProps> = ({ items, theme = 'dark' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isDark = theme === 'dark';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.id}
            style={{
              backgroundColor: isDark ? 'rgba(10, 18, 17, 0.7)' : '#FFFFFF',
              border: `1px solid ${isOpen ? 'var(--color-turquoise)' : isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
              borderRadius: '4px',
              overflow: 'hidden',
              transition: 'border-color 0.2s ease',
            }}
          >
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'transparent',
                border: 'none',
                textAlign: 'left',
                cursor: 'pointer',
                gap: '16px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: isOpen ? 'var(--color-turquoise)' : isDark ? '#FFFFFF' : 'var(--color-charcoal)',
                  textTransform: 'uppercase',
                }}
              >
                {item.question}
              </span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: isOpen
                    ? 'var(--color-turquoise)'
                    : isDark
                    ? 'rgba(255, 255, 255, 0.06)'
                    : 'rgba(0, 0, 0, 0.05)',
                  color: isOpen ? '#050B0A' : isDark ? '#FFFFFF' : 'var(--color-charcoal)',
                  flexShrink: 0,
                  transition: 'transform 0.25s ease, background-color 0.2s ease',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <ChevronDown size={18} />
              </div>
            </button>

            {isOpen && (
              <div
                style={{
                  padding: '0 24px 22px',
                  color: isDark ? 'var(--color-muted-grey)' : '#4A5B57',
                  fontSize: '15px',
                  lineHeight: '1.65',
                  borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)'}`,
                  paddingTop: '16px',
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};


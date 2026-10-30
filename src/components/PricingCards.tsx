import React from 'react';
import { PRICING_PLANS, PricingPlan } from '../data/pricing';
import { Check } from 'lucide-react';

interface PricingCardsProps {
  onSelectPlan: (plan: PricingPlan) => void;
  showFeatures?: boolean;
}

export const PricingCards: React.FC<PricingCardsProps> = ({ onSelectPlan, showFeatures = true }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
        gap: '24px',
        alignItems: 'stretch',
        width: '100%',
      }}
    >
      {PRICING_PLANS.map((plan) => {
        const isBestValue = plan.id === '6-months';

        return (
          <div
            key={plan.id}
            style={{
              backgroundColor: '#091513',
              border: isBestValue
                ? '2px solid var(--color-turquoise)'
                : '1px solid rgba(0, 215, 189, 0.22)',
              borderRadius: '6px',
              padding: '36px 30px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              boxShadow: isBestValue
                ? '0 12px 36px rgba(0, 215, 189, 0.15)'
                : '0 8px 24px rgba(0, 0, 0, 0.3)',
            }}
            className="pricing-card"
          >
            {/* Best Value Badge */}
            {plan.badge && (
              <div
                style={{
                  position: 'absolute',
                  top: '-13px',
                  right: '24px',
                  backgroundColor: 'var(--color-lime)',
                  color: 'var(--color-deep-black)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  padding: '4px 12px',
                  borderRadius: '2px',
                  textTransform: 'uppercase',
                }}
              >
                {plan.badge}
              </div>
            )}

            {/* Plan Header */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '15px',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  color: 'var(--color-turquoise)',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                {plan.name}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '56px',
                  fontWeight: 900,
                  lineHeight: 1,
                  color: 'var(--color-pure-white)',
                  letterSpacing: '0.01em',
                }}
              >
                ${plan.priceTotal.toLocaleString()}
              </div>

              <div
                style={{
                  fontSize: '14px',
                  color: 'var(--color-muted-grey)',
                  marginTop: '4px',
                }}
              >
                ${plan.pricePerMonth} / month
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: 'var(--color-muted-grey)',
                textAlign: 'center',
                marginBottom: '16px',
                minHeight: '44px',
              }}
            >
              {plan.description}
            </p>

            {/* Savings / Subtext */}
            <div
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: plan.savings ? 'var(--color-turquoise)' : 'var(--color-soft-cyan)',
                textAlign: 'center',
                marginBottom: '28px',
                minHeight: '22px',
              }}
            >
              {plan.savings || plan.subtext}
            </div>

            {/* Features List */}
            {showFeatures && (
              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '20px',
                  marginBottom: '32px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                {plan.features.map((feat, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '13.5px',
                      color: 'var(--color-warm-white)',
                      lineHeight: '1.45',
                    }}
                  >
                    <Check
                      size={16}
                      color="var(--color-turquoise)"
                      style={{ flexShrink: 0, marginTop: '2px' }}
                    />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button */}
            <button
              onClick={() => onSelectPlan(plan)}
              className="btn btn-primary btn-full btn-lg"
              style={{
                marginTop: 'auto',
                backgroundColor: 'var(--color-turquoise)',
                color: 'var(--color-deep-black)',
                fontWeight: 800,
                letterSpacing: '0.08em',
              }}
            >
              {plan.ctaText}
            </button>
          </div>
        );
      })}
    </div>
  );
};


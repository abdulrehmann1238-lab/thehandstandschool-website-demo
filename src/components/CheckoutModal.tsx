import React, { useEffect, useState } from 'react';
import { X, CheckCircle, Shield, ArrowRight, Lock } from 'lucide-react';
import { PricingPlan } from '../data/pricing';

interface CheckoutModalProps {
  plan: PricingPlan | null;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ plan, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!plan) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(5, 11, 10, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#0A1211',
          border: '1px solid rgba(0, 215, 189, 0.3)',
          borderRadius: '6px',
          width: '100%',
          maxWidth: '520px',
          padding: '36px',
          position: 'relative',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.6)',
          color: '#FFFFFF',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            color: 'var(--color-muted-grey)',
            cursor: 'pointer',
          }}
        >
          <X size={22} />
        </button>

        {!submitted ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="badge-teal">KAJABI OFFER CHECKOUT DEMO</span>
              {plan.badge && <span className="badge-lime">{plan.badge}</span>}
            </div>

            <h3
              style={{
                fontSize: '32px',
                color: 'var(--color-pure-white)',
                marginBottom: '6px',
              }}
            >
              ENROLL IN {plan.name} COACHING
            </h3>

            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '8px',
                padding: '16px 20px',
                backgroundColor: 'rgba(0, 215, 189, 0.08)',
                border: '1px solid rgba(0, 215, 189, 0.2)',
                borderRadius: '4px',
                margin: '18px 0 24px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '38px',
                  fontWeight: 900,
                  color: 'var(--color-turquoise)',
                }}
              >
                ${plan.priceTotal}
              </span>
              <span style={{ color: 'var(--color-muted-grey)', fontSize: '15px' }}>
                (${plan.pricePerMonth}/mo for {plan.durationMonths} {plan.durationMonths === 1 ? 'month' : 'months'})
              </span>
            </div>

            <p style={{ fontSize: '14px', color: 'var(--color-muted-grey)', marginBottom: '20px' }}>
              {plan.description}
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label form-label-dark">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="form-control form-control-dark"
                />
              </div>

              <div className="form-group">
                <label className="form-label form-label-dark">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@example.com"
                  className="form-control form-control-dark"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-full btn-lg" style={{ marginTop: '12px' }}>
                <Lock size={16} />
                <span>CONFIRM & SIMULATE KAJABI ENROLLMENT</span>
              </button>
            </form>

            <div
              style={{
                marginTop: '20px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '12px',
                color: 'var(--color-text-dim)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
              }}
            >
              <Shield size={16} color="var(--color-turquoise)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Kajabi Implementation Architecture:</strong> In the live Kajabi theme, this button links directly to your Kajabi Offer Checkout URL (<code>https://thehandstandschool.com/offers/{plan.kajabiOfferId}</code>) with zero external payment code needed.
              </div>
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <CheckCircle size={54} color="var(--color-turquoise)" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '28px', color: '#FFFFFF', marginBottom: '12px' }}>
              ENROLLMENT SIMULATED
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--color-muted-grey)', marginBottom: '24px' }}>
              Thank you, <strong>{name || 'Athlete'}</strong>! In your live Kajabi environment, the student is instantly granted access to the coaching portal, redirected to the <strong>Student Intake Form</strong>, and sent the onboarding welcome email sequence.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <a
                href="/intake"
                className="btn btn-primary"
                onClick={() => onClose()}
              >
                PROCEED TO STUDENT INTAKE FORM
              </a>
              <button onClick={onClose} className="btn btn-secondary">
                CLOSE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


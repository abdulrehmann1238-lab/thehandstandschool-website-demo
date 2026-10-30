import React, { useEffect } from 'react';
import { X, CheckCircle2, Code2, Layers, Zap, Database, ArrowRight } from 'lucide-react';

interface KajabiSpecModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KajabiSpecModal: React.FC<KajabiSpecModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2500,
        backgroundColor: 'rgba(5, 11, 10, 0.9)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#0A1412',
          border: '1.5px solid var(--color-turquoise)',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '40px',
          position: 'relative',
          color: '#FFFFFF',
          boxShadow: '0 30px 80px rgba(0, 215, 189, 0.2)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'transparent',
            border: 'none',
            color: 'var(--color-muted-grey)',
            cursor: 'pointer',
          }}
        >
          <X size={24} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span className="badge-lime">PRODUCTION ARCHITECTURE</span>
          <span className="badge-teal">KAJABI PREMIER / ENCORE COMPATIBLE</span>
        </div>

        <h2 style={{ fontSize: '36px', color: '#FFFFFF', marginBottom: '12px' }}>
          HOW THIS DESIGN TRANSLATES SAFELY INTO KAJABI
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--color-muted-grey)', marginBottom: '32px' }}>
          We understand your existing Kajabi website already handles active subscriptions, students, courses, and member logins. Our implementation preserves existing functionality with zero breaking changes.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          {/* Item 1 */}
          <div
            style={{
              padding: '24px',
              backgroundColor: 'rgba(0, 60, 50, 0.2)',
              border: '1px solid rgba(0, 215, 189, 0.2)',
              borderRadius: '6px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--color-turquoise)' }}>
              <Layers size={20} />
              <h4 style={{ fontSize: '18px' }}>Custom Modular Sections</h4>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--color-muted-grey)' }}>
              Each section (Hero, 3 Ways to Train, Coach Support, Pricing Table, Events) is structured as an independent Kajabi Custom Section (`.liquid` schema block). You can reorder, toggle, or edit text directly from Kajabi's visual customizer.
            </p>
          </div>

          {/* Item 2 */}
          <div
            style={{
              padding: '24px',
              backgroundColor: 'rgba(0, 60, 50, 0.2)',
              border: '1px solid rgba(0, 215, 189, 0.2)',
              borderRadius: '6px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--color-turquoise)' }}>
              <Zap size={20} />
              <h4 style={{ fontSize: '18px' }}>Native Kajabi Offer Binding</h4>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--color-muted-grey)' }}>
              All "GET 1 MONTH", "GET 3 MONTHS", and "GET 6 MONTHS" CTA buttons link natively to your configured Kajabi Offer Checkout URLs (<code>/offers/&#123;&#123; section.settings.offer_id &#125;&#125;</code>). Kajabi handles Stripe/PayPal and course fulfillment automatically.
            </p>
          </div>

          {/* Item 3 */}
          <div
            style={{
              padding: '24px',
              backgroundColor: 'rgba(0, 60, 50, 0.2)',
              border: '1px solid rgba(0, 215, 189, 0.2)',
              borderRadius: '6px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--color-turquoise)' }}>
              <Database size={20} />
              <h4 style={{ fontSize: '18px' }}>Student Intake Form Pipeline</h4>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--color-muted-grey)' }}>
              The 8-section intake form connects to Kajabi Form Automations or custom member custom-fields, tagging the student (e.g. <code>ths-intake-submitted</code>) and sending an instant notification webhook to your coach Slack/Airtable roster.
            </p>
          </div>

          {/* Item 4 */}
          <div
            style={{
              padding: '24px',
              backgroundColor: 'rgba(0, 60, 50, 0.2)',
              border: '1px solid rgba(0, 215, 189, 0.2)',
              borderRadius: '6px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--color-turquoise)' }}>
              <Code2 size={20} />
              <h4 style={{ fontSize: '18px' }}>Zero Global CSS Conflict</h4>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--color-muted-grey)' }}>
              All styles are scoped under a dedicated namespace (e.g. <code>.ths-theme-2027</code>) using CSS custom properties. It will never override your existing member portal headers, video players, or course completion widgets.
            </p>
          </div>
        </div>

        <div
          style={{
            padding: '20px',
            backgroundColor: 'rgba(0, 215, 189, 0.08)',
            border: '1px solid rgba(0, 215, 189, 0.3)',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--color-turquoise)' }}>
              Ready to deploy this design into your Kajabi theme?
            </div>
            <div style={{ fontSize: '13px', color: 'var(--color-muted-grey)' }}>
              We deliver clean liquid templates, standalone CSS/JS assets, and full step-by-step installation support.
            </div>
          </div>
          <button onClick={onClose} className="btn btn-primary">
            CONTINUE EXPLORING DEMO
          </button>
        </div>
      </div>
    </div>
  );
};

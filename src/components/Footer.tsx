import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#050B0A',
        color: '#FFFFFF',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '64px',
        paddingBottom: '40px',
        marginTop: 'auto',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '300px' }}>
            <Logo size="md" />
            <p
              style={{
                marginTop: '18px',
                fontSize: '14px',
                lineHeight: '1.6',
                color: 'var(--color-muted-grey)',
              }}
            >
              Handstand coaching, seminars and certification for practitioners and coaches around the world.
            </p>
          </div>

          {/* TRAIN Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '15px',
                letterSpacing: '0.14em',
                color: 'var(--color-pure-white)',
                marginBottom: '16px',
              }}
            >
              TRAIN
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link to="/coaching" style={{ color: 'var(--color-muted-grey)', fontSize: '14px' }}>
                  Coaching
                </Link>
              </li>
              <li>
                <Link to="/events" style={{ color: 'var(--color-muted-grey)', fontSize: '14px' }}>
                  Seminars
                </Link>
              </li>
              <li>
                <Link to="/intake" style={{ color: 'var(--color-muted-grey)', fontSize: '14px' }}>
                  Student Intake
                </Link>
              </li>
              <li>
                <Link to="/pricing" style={{ color: 'var(--color-muted-grey)', fontSize: '14px' }}>
                  Pricing Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* TEACH Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '15px',
                letterSpacing: '0.14em',
                color: 'var(--color-pure-white)',
                marginBottom: '16px',
              }}
            >
              TEACH
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link to="/certifications" style={{ color: 'var(--color-muted-grey)', fontSize: '14px' }}>
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: 'var(--color-muted-grey)', fontSize: '14px' }}>
                  Find a Certified Coach
                </Link>
              </li>
              <li>
                <Link to="/events" style={{ color: 'var(--color-muted-grey)', fontSize: '14px' }}>
                  Host a Seminar
                </Link>
              </li>
            </ul>
          </div>

          {/* SCHOOL Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '15px',
                letterSpacing: '0.14em',
                color: 'var(--color-pure-white)',
                marginBottom: '16px',
              }}
            >
              SCHOOL
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link to="/about" style={{ color: 'var(--color-muted-grey)', fontSize: '14px' }}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/pricing" style={{ color: 'var(--color-muted-grey)', fontSize: '14px' }}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/login" style={{ color: 'var(--color-muted-grey)', fontSize: '14px' }}>
                  Member Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* FOLLOW Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '15px',
                letterSpacing: '0.14em',
                color: 'var(--color-pure-white)',
                marginBottom: '16px',
              }}
            >
              FOLLOW
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--color-muted-grey)', fontSize: '14px' }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--color-muted-grey)', fontSize: '14px' }}
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '13px',
            color: 'var(--color-text-dim)',
          }}
        >
          <div>© 2027 The Handstand School. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
            <span style={{ color: 'var(--color-turquoise)', fontSize: '12px' }}>Kajabi Demonstration Build</span>
          </div>
        </div>
      </div>
    </footer>
  );
};


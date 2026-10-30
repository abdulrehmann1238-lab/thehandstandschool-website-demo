import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ShieldCheck, ExternalLink } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenKajabiModal?: () => void;
  onOpenLoginModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenKajabiModal, onOpenLoginModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'COACHING', path: '/coaching' },
    { label: 'SEMINARS', path: '/events' },
    { label: 'CERTIFICATIONS', path: '/certifications' },
    { label: 'PRICING', path: '/pricing' },
    { label: 'ABOUT', path: '/about' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        backgroundColor: isScrolled ? 'rgba(5, 11, 10, 0.96)' : 'rgba(5, 11, 10, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: isScrolled
          ? '1px solid rgba(0, 215, 189, 0.15)'
          : '1px solid rgba(255, 255, 255, 0.05)',
        transition: 'background-color 0.25s ease, border-color 0.25s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        {/* Brand Logo on Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Logo size="md" />
        </div>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-heading)',
                fontSize: '16px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: isActive ? 'var(--color-turquoise)' : 'var(--color-pure-white)',
                position: 'relative',
                padding: '6px 0',
                transition: 'color 0.2s ease',
                textDecoration: 'none',
              })}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--color-turquoise)',
                        borderRadius: '1px',
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons on Right */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {/* Kajabi Architecture Pill */}
          <button
            onClick={onOpenKajabiModal}
            title="Inspect Kajabi Theme Integration Architecture"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              background: 'rgba(0, 86, 106, 0.25)',
              border: '1px solid rgba(0, 215, 189, 0.35)',
              color: 'var(--color-soft-cyan)',
              fontSize: '11px',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: '3px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            className="kajabi-spec-btn"
          >
            <ShieldCheck size={13} color="var(--color-turquoise)" />
            <span>Kajabi Ready</span>
          </button>

          {/* Login CTA */}
          <Link
            to="/login"
            className="btn btn-primary btn-sm login-btn"
            style={{
              minWidth: '92px',
              height: '38px',
              padding: '0 16px',
              fontSize: '14px',
              letterSpacing: '0.08em',
            }}
          >
            LOG IN
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            className="mobile-menu-toggle"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'var(--color-pure-white)',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            {mobileMenuOpen ? <X size={26} color="var(--color-turquoise)" /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer"
          style={{
            backgroundColor: '#050B0A',
            borderBottom: '1px solid rgba(0, 215, 189, 0.2)',
            padding: '24px var(--gutter)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-heading)',
                fontSize: '20px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                color: isActive ? 'var(--color-turquoise)' : 'var(--color-pure-white)',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              })}
            >
              {link.label}
            </NavLink>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary btn-full"
            >
              STUDENT LOG IN
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenKajabiModal?.();
              }}
              className="btn btn-secondary btn-full"
              style={{ fontSize: '15px' }}
            >
              ⚡ VIEW KAJABI INTEGRATION SPEC
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: inline-flex !important;
          }
          .login-btn {
            display: none !important;
          }
          .kajabi-spec-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};


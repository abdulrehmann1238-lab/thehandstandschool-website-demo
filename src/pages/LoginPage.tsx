import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Mail, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Logo } from '../components/Logo';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [simulatedLoggedIn, setSimulatedLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSimulatedLoggedIn(true);
  };

  return (
    <div
      className="page-login bg-dots-dark"
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px var(--gutter)',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          backgroundColor: '#091513',
          border: '1.5px solid rgba(0, 215, 189, 0.3)',
          borderRadius: '8px',
          padding: '40px 36px',
          color: '#FFFFFF',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <Logo size="md" />
          <h2
            style={{
              fontSize: '28px',
              color: '#FFFFFF',
              marginTop: '20px',
              marginBottom: '6px',
            }}
          >
            STUDENT PORTAL LOGIN
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--color-muted-grey)' }}>
            Access your custom weekly workouts and coach video feedback.
          </p>
        </div>

        {!simulatedLoggedIn ? (
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label form-label-dark">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@example.com"
                className="form-control form-control-dark"
              />
            </div>

            <div className="form-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label className="form-label form-label-dark" style={{ marginBottom: 0 }}>
                  Password
                </label>
                <span style={{ fontSize: '12px', color: 'var(--color-turquoise)', cursor: 'pointer' }}>
                  Forgot password?
                </span>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="form-control form-control-dark"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full btn-lg" style={{ marginTop: '16px' }}>
              <Lock size={16} />
              <span>LOG IN TO MEMBER PORTAL</span>
            </button>
          </form>
        ) : (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <CheckCircle2 size={52} color="var(--color-turquoise)" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '24px', color: '#FFFFFF', marginBottom: '10px' }}>
              SIMULATED LOGIN SUCCESS
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-muted-grey)', marginBottom: '24px' }}>
              Logged in as <strong>{email}</strong>. In production, this form seamlessly directs users to your Kajabi member authentication session with course library access.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link to="/intake" className="btn btn-primary btn-full">
                GO TO STUDENT INTAKE
              </Link>
              <button
                onClick={() => setSimulatedLoggedIn(false)}
                className="btn btn-secondary btn-full"
              >
                LOG OUT
              </button>
            </div>
          </div>
        )}

        <div
          style={{
            marginTop: '28px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '12px',
            color: 'var(--color-text-dim)',
            display: 'flex',
            gap: '8px',
          }}
        >
          <ShieldCheck size={18} color="var(--color-turquoise)" style={{ flexShrink: 0 }} />
          <div>
            <strong>Kajabi Compatibility:</strong> Integrates with your existing Kajabi member database. Existing students keep their current passwords and course completions intact.
          </div>
        </div>
      </div>
    </div>
  );
};


import React, { useEffect, useState } from 'react';
import { X, CheckCircle, Building2, Send } from 'lucide-react';

interface HostSeminarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HostSeminarModal: React.FC<HostSeminarModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [studio, setStudio] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

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
          maxWidth: '540px',
          padding: '36px',
          position: 'relative',
          color: '#FFFFFF',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.6)',
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
            <div className="eyebrow eyebrow-teal">PARTNER WITH THE HANDSTAND SCHOOL</div>
            <h3 style={{ fontSize: '32px', color: '#FFFFFF', marginBottom: '8px' }}>
              HOST A SEMINAR AT YOUR STUDIO
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-muted-grey)', marginBottom: '22px' }}>
              We partner with movement studios, gymnastics centers, yoga spaces, and CrossFit boxes around the world to bring 2-day hands-on seminars to your community.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label form-label-dark">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Coach / Owner Name"
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
                    placeholder="you@yourstudio.com"
                    className="form-control form-control-dark"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label form-label-dark">Facility / Studio Name</label>
                  <input
                    type="text"
                    value={studio}
                    onChange={(e) => setStudio(e.target.value)}
                    placeholder="e.g. Apex Movement"
                    className="form-control form-control-dark"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label form-label-dark">City, State / Country</label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Denver, CO"
                    className="form-control form-control-dark"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label form-label-dark">Tell us about your facility & target dates</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Estimated student capacity, ceiling height, ideal months (e.g. Fall 2027)..."
                  className="form-control form-control-dark"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-full btn-lg" style={{ marginTop: '8px' }}>
                <Send size={16} />
                <span>SUBMIT HOST INQUIRY</span>
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <CheckCircle size={54} color="var(--color-turquoise)" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '28px', color: '#FFFFFF', marginBottom: '12px' }}>
              HOST INQUIRY RECEIVED
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--color-muted-grey)', marginBottom: '24px' }}>
              Thank you, <strong>{name}</strong>! We have received your seminar inquiry for <strong>{studio || 'your facility'}</strong> in <strong>{location}</strong>. Our events coordinator will review your space details and follow up within 2 business days.
            </p>
            <button onClick={onClose} className="btn btn-primary">
              CLOSE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


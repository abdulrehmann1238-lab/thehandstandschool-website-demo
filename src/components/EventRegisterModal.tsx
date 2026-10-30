import React, { useEffect, useState } from 'react';
import { X, Calendar, MapPin, CheckCircle, Users } from 'lucide-react';
import { THSEvent } from '../data/events';

interface EventRegisterModalProps {
  event: THSEvent | null;
  onClose: () => void;
}

export const EventRegisterModal: React.FC<EventRegisterModalProps> = ({ event, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ticketTier, setTicketTier] = useState<'early' | 'standard'>('early');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!event) return null;

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
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="badge-teal">{event.type}</span>
              <span className="badge-lime">{event.status}</span>
            </div>

            <h3 style={{ fontSize: '30px', color: '#FFFFFF', marginBottom: '6px' }}>
              REGISTER: {event.city.toUpperCase()}
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                padding: '14px 18px',
                backgroundColor: 'rgba(0, 86, 106, 0.15)',
                border: '1px solid rgba(0, 215, 189, 0.2)',
                borderRadius: '4px',
                margin: '16px 0 20px',
                fontSize: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-pure-white)' }}>
                <Calendar size={15} color="var(--color-turquoise)" />
                <span>{event.dates}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-muted-grey)' }}>
                <MapPin size={15} color="var(--color-turquoise)" />
                <span>{event.venue} — {event.city}, {event.stateCountry}</span>
              </div>
              {event.spotsLeft && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-lime)', fontSize: '13px' }}>
                  <Users size={14} />
                  <span>Only {event.spotsLeft} of {event.spotsTotal} spots remaining</span>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label form-label-dark">Select Registration Tier</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div
                    onClick={() => setTicketTier('early')}
                    className={`form-radio-label ${ticketTier === 'early' ? 'selected' : ''}`}
                    style={{
                      backgroundColor: ticketTier === 'early' ? 'rgba(0, 215, 189, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                      borderColor: ticketTier === 'early' ? 'var(--color-turquoise)' : 'rgba(255, 255, 255, 0.15)',
                      color: '#FFFFFF',
                    }}
                  >
                    <input
                      type="radio"
                      name="tier"
                      checked={ticketTier === 'early'}
                      onChange={() => setTicketTier('early')}
                    />
                    <div>
                      <div style={{ fontWeight: 700 }}>Early Bird</div>
                      <div style={{ fontSize: '13px', color: 'var(--color-turquoise)' }}>$495</div>
                    </div>
                  </div>

                  <div
                    onClick={() => setTicketTier('standard')}
                    className={`form-radio-label ${ticketTier === 'standard' ? 'selected' : ''}`}
                    style={{
                      backgroundColor: ticketTier === 'standard' ? 'rgba(0, 215, 189, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                      borderColor: ticketTier === 'standard' ? 'var(--color-turquoise)' : 'rgba(255, 255, 255, 0.15)',
                      color: '#FFFFFF',
                    }}
                  >
                    <input
                      type="radio"
                      name="tier"
                      checked={ticketTier === 'standard'}
                      onChange={() => setTicketTier('standard')}
                    />
                    <div>
                      <div style={{ fontWeight: 700 }}>Standard</div>
                      <div style={{ fontSize: '13px', color: 'var(--color-muted-grey)' }}>$595</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label form-label-dark">Attendee Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jordan Lee"
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
                  placeholder="jordan@example.com"
                  className="form-control form-control-dark"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-full btn-lg" style={{ marginTop: '12px' }}>
                COMPLETE SEMINAR REGISTRATION
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <CheckCircle size={54} color="var(--color-turquoise)" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '28px', color: '#FFFFFF', marginBottom: '12px' }}>
              SPOT RESERVED FOR {event.city.toUpperCase()}!
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--color-muted-grey)', marginBottom: '24px' }}>
              Registration simulated for <strong>{name || 'Attendee'}</strong> ({email}). In your production Kajabi setup, this trigger hooks directly into Kajabi Event Automations, syncing calendar invites and seminar prep materials.
            </p>
            <button onClick={onClose} className="btn btn-primary">
              DONE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


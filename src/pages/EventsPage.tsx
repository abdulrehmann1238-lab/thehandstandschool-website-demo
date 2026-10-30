import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight, CheckCircle2, Bell, Building2, Users } from 'lucide-react';
import { EVENTS, THSEvent } from '../data/events';

interface EventsPageProps {
  onRegisterEvent: (event: THSEvent) => void;
  onOpenHostModal: () => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onRegisterEvent, onOpenHostModal }) => {
  const navigate = useNavigate();
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifySubmitted, setNotifySubmitted] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyEmail || !notifyEmail.includes('@')) return;
    setNotifySubmitted(true);
  };

  return (
    <div className="page-events" style={{ overflowX: 'hidden' }}>
      {/* ============================================================
          SECTION A: HERO
          ============================================================ */}
      <section
        className="section-hero bg-diagonal-dark"
        style={{
          position: 'relative',
          paddingTop: '80px',
          paddingBottom: '100px',
          borderBottom: '1px solid rgba(0, 215, 189, 0.2)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left Content */}
            <div style={{ maxWidth: '620px' }}>
              <div className="eyebrow">THE HANDSTAND SCHOOL · TRAIN WITH US</div>
              <h1
                style={{
                  fontSize: 'clamp(44px, 6.5vw, 76px)',
                  letterSpacing: '0.02em',
                  color: 'var(--color-pure-white)',
                  lineHeight: 0.95,
                  marginBottom: '10px',
                }}
              >
                LIVE WORKSHOPS, SEMINARS
              </h1>
              <div style={{ marginBottom: '24px' }}>
                <span
                  className="highlight-pill"
                  style={{
                    fontSize: 'clamp(32px, 5vw, 60px)',
                    lineHeight: 1,
                    padding: '4px 18px 8px',
                  }}
                >
                  & RETREATS.
                </span>
              </div>
              <p
                style={{
                  fontSize: 'clamp(16px, 2vw, 19px)',
                  lineHeight: '1.6',
                  color: 'var(--color-muted-grey)',
                  marginBottom: '36px',
                  maxWidth: '540px',
                }}
              >
                Train upside down, in person, with the THS founders. Hands-on corrections, real-time cues and a room full of people chasing the same skill.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#upcoming-events" className="btn btn-primary btn-lg">
                  <span>VIEW EVENT DATES</span>
                  <ArrowRight size={20} />
                </a>
                <button onClick={onOpenHostModal} className="btn btn-secondary btn-lg">
                  HOST A SEMINAR
                </button>
              </div>
            </div>

            {/* Right Hero Image */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '440px' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '-12px',
                    bottom: '12px',
                    left: '12px',
                    border: '2px solid var(--color-turquoise)',
                    borderRadius: '4px',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 48px rgba(0, 0, 0, 0.7)',
                    backgroundColor: '#0A1412',
                  }}
                >
                  <img
                    src="/images/events_hero_spotting.png"
                    alt="Coaches spotting athlete handstand at live workshop"
                    style={{ width: '100%', height: '380px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION B: UPCOMING EVENTS (MATCHING REFERENCE 5)
          ============================================================ */}
      <section
        id="upcoming-events"
        className="section bg-dots-light"
        style={{
          backgroundColor: 'var(--color-warm-white)',
          color: 'var(--color-charcoal)',
        }}
      >
        <div className="container">
          {/* Header Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            <div>
              <div className="eyebrow eyebrow-dark">UPCOMING EVENTS</div>
              <h2
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 56px)',
                  color: 'var(--color-charcoal)',
                  lineHeight: 1,
                  marginBottom: '10px',
                }}
              >
                COME TRAIN WITH US.
              </h2>
              <div>
                <span
                  className="highlight-pill"
                  style={{
                    fontSize: 'clamp(26px, 3.8vw, 42px)',
                    lineHeight: 1,
                    padding: '4px 16px 6px',
                    backgroundColor: 'var(--color-dark-teal)',
                    color: 'var(--color-pure-white)',
                  }}
                >
                  EVENT DETAILS BELOW.
                </span>
              </div>
            </div>

            <div style={{ maxWidth: '380px', fontSize: '14.5px', color: '#526662', lineHeight: '1.6' }}>
              Spots are limited at every event so each student gets real coaching time. Click an event for the full schedule, pricing and registration.
            </div>
          </div>

          {/* Event Cards List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {EVENTS.map((event) => (
              <div
                key={event.id}
                className="card-light"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(140px, 180px) minmax(140px, 200px) 1fr',
                  alignItems: 'stretch',
                  borderRadius: '6px',
                  boxShadow: '0 8px 30px rgba(0, 60, 50, 0.08)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                {/* 1. Date Panel on Left */}
                <div
                  style={{
                    backgroundColor: '#003C32',
                    color: '#FFFFFF',
                    padding: '28px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '13px',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      color: 'var(--color-turquoise)',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                    }}
                  >
                    {event.monthYear.split(' ')[0]}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '38px',
                      fontWeight: 900,
                      lineHeight: 1,
                      color: '#FFFFFF',
                      marginBottom: '4px',
                    }}
                  >
                    {event.monthYear.split(' ')[1]}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--color-lime)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {event.dateBadge}
                  </div>
                </div>

                {/* 2. Photo in Center */}
                <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#091513' }}>
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: '160px',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                {/* 3. Details & CTA on Right */}
                <div
                  style={{
                    padding: '28px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span className="badge-teal">{event.type}</span>
                    <span className="badge-lime">{event.status}</span>
                  </div>

                  <h3
                    style={{
                      fontSize: '26px',
                      color: 'var(--color-charcoal)',
                      marginBottom: '6px',
                    }}
                  >
                    {event.city.toUpperCase()}
                  </h3>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13.5px',
                      color: 'var(--color-dark-teal)',
                      fontWeight: 600,
                      marginBottom: '10px',
                    }}
                  >
                    <MapPin size={15} />
                    <span>{event.venue} — {event.stateCountry}</span>
                  </div>

                  <p
                    style={{
                      fontSize: '14.5px',
                      lineHeight: '1.55',
                      color: '#495955',
                      marginBottom: '20px',
                      maxWidth: '560px',
                    }}
                  >
                    {event.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                    {event.slug === 'washington-dc' ? (
                      <Link to="/event/washington-dc" className="btn btn-dark btn-sm">
                        <span>VIEW EVENT DETAILS</span>
                        <ArrowRight size={16} />
                      </Link>
                    ) : (
                      <button
                        onClick={() => onRegisterEvent(event)}
                        className="btn btn-dark btn-sm"
                      >
                        <span>VIEW EVENT</span>
                        <ArrowRight size={16} />
                      </button>
                    )}

                    {event.isEarlyOpen && (
                      <button
                        onClick={() => onRegisterEvent(event)}
                        className="btn btn-primary btn-sm"
                      >
                        REGISTER NOW
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .page-events .card-light {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ============================================================
          SECTION C: WHY TRAIN LIVE
          ============================================================ */}
      <section className="section bg-diagonal-dark">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
            <div className="eyebrow">WHY TRAIN LIVE</div>
            <h2
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                color: 'var(--color-pure-white)',
                marginBottom: '16px',
              }}
            >
              THE BENEFITS OF <span style={{ color: 'var(--color-turquoise)' }}>TRAINING IN PERSON.</span>
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--color-muted-grey)' }}>
              A single weekend in person can fast-track months of solo plateaus through immediate tactile correction.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                title: 'HANDS-ON ADJUSTMENTS',
                desc: 'Real-time corrections from the THS founders, with spotting and tactile cues that show your body exactly where to go.',
              },
              {
                title: 'PERSONALIZED FEEDBACK',
                desc: 'Learn the skills and drills that fit your handstand, through individual feedback on what you need to work on next.',
              },
              {
                title: 'COMMUNITY',
                desc: 'Train alongside like-minded handstand enthusiasts who are taking their practice to the next level, just like you.',
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="card-dark"
                style={{
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '28px',
                    fontWeight: 900,
                    color: 'var(--color-turquoise)',
                  }}
                >
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '24px', color: '#FFFFFF' }}>{benefit.title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--color-muted-grey)', lineHeight: '1.6' }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION D & E: EVENT NOTIFICATIONS & HOST A SEMINAR
          ============================================================ */}
      <section
        className="section bg-dots-light"
        style={{
          backgroundColor: 'var(--color-warm-white)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              alignItems: 'stretch',
            }}
          >
            {/* Left Dark Notification Card */}
            <div
              style={{
                backgroundColor: '#071210',
                borderRadius: '6px',
                padding: '40px 36px',
                color: '#FFFFFF',
                border: '1.5px solid rgba(0, 215, 189, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--color-lime)', textTransform: 'uppercase', marginBottom: '8px' }}>
                DON'T SEE YOUR CITY?
              </div>
              <h3 style={{ fontSize: '30px', color: '#FFFFFF', marginBottom: '12px' }}>
                BE FIRST TO KNOW ABOUT NEW EVENTS.
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--color-muted-grey)', marginBottom: '24px', lineHeight: '1.55' }}>
                New dates and locations are announced to the list first, with early-registration pricing.
              </p>

              {!notifySubmitted ? (
                <form onSubmit={handleNotifySubmit} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <input
                    type="email"
                    required
                    value={notifyEmail}
                    onChange={(e) => setNotifyEmail(e.target.value)}
                    placeholder="Your email address"
                    className="form-control form-control-dark"
                    style={{ flex: 1, minWidth: '200px' }}
                  />
                  <button type="submit" className="btn btn-primary">
                    <Bell size={16} />
                    <span>NOTIFY ME</span>
                  </button>
                </form>
              ) : (
                <div
                  style={{
                    padding: '14px 18px',
                    backgroundColor: 'rgba(0, 215, 189, 0.12)',
                    border: '1px solid var(--color-turquoise)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'var(--color-turquoise)',
                    fontSize: '14px',
                  }}
                >
                  <CheckCircle2 size={20} />
                  <span>You're on the priority event announcement list!</span>
                </div>
              )}
            </div>

            {/* Right White Contact Card */}
            <div
              className="card-light"
              style={{
                padding: '40px 36px',
                borderRadius: '6px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                border: '1px solid #D5DFDC',
              }}
            >
              <div className="eyebrow eyebrow-dark">HOST A SEMINAR</div>
              <h3 style={{ fontSize: '30px', color: 'var(--color-charcoal)', marginBottom: '12px' }}>
                BRING THS TO YOUR STUDIO.
              </h3>
              <p style={{ fontSize: '15px', color: '#526662', marginBottom: '28px', lineHeight: '1.6' }}>
                Own a gym, studio or retreat center? We partner with hosts around the world to deliver world-class weekend handstand intensives.
              </p>
              <div>
                <button onClick={onOpenHostModal} className="btn btn-dark btn-lg">
                  <Building2 size={18} />
                  <span>GET IN TOUCH</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, CheckCircle, ArrowLeft, Shield, Award } from 'lucide-react';
import { EVENTS, THSEvent } from '../data/events';
import { COACHES } from '../data/coaches';

interface EventDetailPageProps {
  onRegister: (event: THSEvent) => void;
}

export const EventDetailPage: React.FC<EventDetailPageProps> = ({ onRegister }) => {
  const event = EVENTS.find((e) => e.slug === 'washington-dc') || EVENTS[0];

  return (
    <div className="page-event-detail" style={{ overflowX: 'hidden' }}>
      {/* Header Banner */}
      <section
        style={{
          backgroundColor: '#050B0A',
          color: '#FFFFFF',
          paddingTop: '60px',
          paddingBottom: '80px',
          borderBottom: '1px solid rgba(0, 215, 189, 0.2)',
        }}
        className="bg-dots-dark"
      >
        <div className="container">
          <Link
            to="/events"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              color: 'var(--color-turquoise)',
              fontWeight: 600,
              marginBottom: '28px',
            }}
          >
            <ArrowLeft size={16} />
            <span>BACK TO ALL UPCOMING EVENTS</span>
          </Link>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
                <span className="badge-teal">{event.type}</span>
                <span className="badge-lime">{event.status}</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(40px, 5.5vw, 68px)',
                  lineHeight: 1,
                  marginBottom: '16px',
                }}
              >
                {event.city.toUpperCase()}
              </h1>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: 'var(--color-turquoise)', marginBottom: '24px' }}>
                {event.dates}
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  fontSize: '15px',
                  color: 'var(--color-muted-grey)',
                  marginBottom: '32px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={18} color="var(--color-turquoise)" />
                  <span><strong>{event.venue}</strong> — Washington, D.C., USA</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Clock size={18} color="var(--color-turquoise)" />
                  <span>Saturday & Sunday: 9:30 AM – 5:00 PM EST</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Users size={18} color="var(--color-lime)" />
                  <span>Only {event.spotsLeft} spots remaining of {event.spotsTotal}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onRegister(event)}
                  className="btn btn-primary btn-lg"
                >
                  RESERVE YOUR SPOT — $495
                </button>
              </div>
            </div>

            {/* Right Photo */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '440px' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '-12px',
                    right: '12px',
                    bottom: '12px',
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
                  }}
                >
                  <img
                    src="/images/event_washington_dc.png"
                    alt="Washington DC seminar spot"
                    style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Curriculum Section */}
      <section className="section bg-dots-light" style={{ backgroundColor: 'var(--color-warm-white)', color: 'var(--color-charcoal)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="eyebrow eyebrow-dark">TWO-DAY INTENSIVE CURRICULUM</div>
            <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--color-charcoal)', marginBottom: '36px' }}>
              WHAT YOU WILL LEARN ACROSS THE WEEKEND
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '56px' }}>
              {event.schedule?.map((item, idx) => (
                <div
                  key={idx}
                  className="card-light"
                  style={{
                    padding: '28px',
                    borderLeft: '4px solid var(--color-dark-teal)',
                  }}
                >
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-dark-teal)', letterSpacing: '0.08em', marginBottom: '6px' }}>
                    {item.time}
                  </div>
                  <h3 style={{ fontSize: '22px', color: 'var(--color-charcoal)', marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: '#4E615D', lineHeight: '1.6' }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Coaches Faculty */}
            <div className="card-light" style={{ padding: '36px', backgroundColor: '#F0F6F4', border: '1px solid #D5E2DE' }}>
              <div className="eyebrow eyebrow-dark">INSTRUCTORS</div>
              <h3 style={{ fontSize: '26px', color: 'var(--color-charcoal)', marginBottom: '16px' }}>
                COACHED BY ALL 3 THS FOUNDERS
              </h3>
              <p style={{ fontSize: '15px', color: '#4E615D', marginBottom: '24px' }}>
                You will receive hands-on spotting from Andrew Moraru, Dr. Robert Adams, and Kyle Weiger with a strict 1:7 coach-to-student ratio.
              </p>

              <button onClick={() => onRegister(event)} className="btn btn-dark btn-lg">
                REGISTER FOR WASHINGTON, D.C.
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


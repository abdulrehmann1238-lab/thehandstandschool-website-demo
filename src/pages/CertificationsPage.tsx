import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle2, Users, BookOpen, Clock, ShieldCheck, ArrowRight, Send } from 'lucide-react';
import { TestimonialCard } from '../components/TestimonialCard';
import { TESTIMONIALS } from '../data/testimonials';

export const CertificationsPage: React.FC = () => {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistName, setWaitlistName] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail) return;
    setWaitlistSubmitted(true);
  };

  return (
    <div className="page-certifications" style={{ overflowX: 'hidden' }}>
      {/* Hero Header */}
      <section
        style={{
          backgroundColor: '#050B0A',
          color: '#FFFFFF',
          paddingTop: '72px',
          paddingBottom: '80px',
          borderBottom: '1px solid rgba(0, 215, 189, 0.2)',
          textAlign: 'center',
        }}
        className="bg-dots-dark"
      >
        <div className="container-narrow">
          <div className="eyebrow eyebrow-teal">TEACHER TRAINING & CERTIFICATION</div>
          <h1
            style={{
              fontSize: 'clamp(44px, 6vw, 76px)',
              letterSpacing: '0.02em',
              lineHeight: 0.95,
              marginBottom: '10px',
            }}
          >
            BECOME A CERTIFIED COACH.
          </h1>
          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: 'var(--color-muted-grey)',
              maxWidth: '680px',
              margin: '0 auto 28px',
            }}
          >
            The definitive education system for yoga teachers, gymnastics instructors, personal trainers, and movement educators who want to teach handstands with authority and safety.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-lime)' }}>
            <Award size={16} />
            <span>Next Cohort: Fall 2027 · Applications Open by Invitation</span>
          </div>
        </div>
      </section>

      {/* Curriculum Breakdown */}
      <section
        className="section bg-dots-light"
        style={{ backgroundColor: 'var(--color-warm-white)', color: 'var(--color-charcoal)' }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
            <div className="eyebrow eyebrow-dark">CURRICULUM ARCHITECTURE</div>
            <h2 style={{ fontSize: 'clamp(34px, 5vw, 52px)', color: 'var(--color-charcoal)', marginBottom: '14px' }}>
              6 CORE PILLARS OF TEACHER TRAINING
            </h2>
            <p style={{ fontSize: '16.5px', color: '#4E615D' }}>
              A hybrid 12-week program combining online biomechanics modules, weekly live teaching labs, and a 3-day in-person spotting immersion.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                title: '01. Functional Handstand Biomechanics',
                desc: 'Wrist capsule anatomy, scapular kinematics, active shoulder flexion limits, and joint compensation analysis.',
              },
              {
                title: '02. Hands-on Spotting Protocols',
                desc: 'Safe, tactile spotting techniques for kick-ups, tucks, straddles, and press handstands across all body types.',
              },
              {
                title: '03. Progressive Cueing Matrix',
                desc: 'Translating complex motor principles into clear, actionable verbal and visual cues that click instantly for beginners.',
              },
              {
                title: '04. Client Assessment & Programming',
                desc: 'How to conduct a 20-minute movement screen and write custom periodized programs that prevent client burnout.',
              },
              {
                title: '05. Overcoming Fear & Inverted Psychology',
                desc: 'De-escalating spatial disorientation, safe bail mechanics, and building psychological confidence in inverted states.',
              },
              {
                title: '06. Business & Workshop Delivery',
                desc: 'How to structure, market, and deliver sold-out 2-day handstand workshops and build a thriving 1:1 coaching practice.',
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="card-light"
                style={{
                  padding: '32px 28px',
                  borderTop: '4px solid var(--color-dark-teal)',
                }}
              >
                <h3 style={{ fontSize: '22px', color: 'var(--color-charcoal)', marginBottom: '10px' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: '#4E615D', lineHeight: '1.6' }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graduate Highlight */}
      <section
        style={{
          background: 'linear-gradient(135deg, #00566A 0%, #008D80 50%, #00BFA8 100%)',
          padding: '72px 0',
        }}
      >
        <div className="container-narrow">
          <TestimonialCard testimonial={TESTIMONIALS[0]} variant="white" />
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="section bg-dots-dark">
        <div className="container-narrow">
          <div
            style={{
              backgroundColor: '#091513',
              border: '1.5px solid var(--color-turquoise)',
              borderRadius: '6px',
              padding: '48px 36px',
              textAlign: 'center',
              color: '#FFFFFF',
            }}
          >
            <div className="eyebrow eyebrow-teal">LIMITED TO 16 COACHES PER COHORT</div>
            <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: '#FFFFFF', marginBottom: '14px' }}>
              JOIN THE TEACHER TRAINING WAITLIST
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-muted-grey)', maxWidth: '580px', margin: '0 auto 32px' }}>
              Cohort sizes are intentionally capped to ensure direct mentorship with Andrew, Dr. Robert, and Kyle. Waitlist members receive 48-hour advance application access.
            </p>

            {!waitlistSubmitted ? (
              <form onSubmit={handleWaitlistSubmit} style={{ maxWidth: '480px', margin: '0 auto' }}>
                <div className="form-group">
                  <input
                    type="text"
                    required
                    value={waitlistName}
                    onChange={(e) => setWaitlistName(e.target.value)}
                    placeholder="Your full name"
                    className="form-control form-control-dark"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    required
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    placeholder="Your email address"
                    className="form-control form-control-dark"
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-full btn-lg">
                  <Send size={18} />
                  <span>JOIN COACH WAITLIST</span>
                </button>
              </form>
            ) : (
              <div style={{ padding: '24px 0' }}>
                <CheckCircle2 size={54} color="var(--color-turquoise)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '26px', color: '#FFFFFF', marginBottom: '8px' }}>
                  YOU ARE ON THE WAITLIST!
                </h3>
                <p style={{ color: 'var(--color-muted-grey)', fontSize: '15px' }}>
                  Thank you, {waitlistName}. When applications open for the next cohort, you will be notified at {waitlistEmail}.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};


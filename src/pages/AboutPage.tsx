import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Mail, MapPin, Award, CheckCircle2, Send } from 'lucide-react';
import { COACHES } from '../data/coaches';

export const AboutPage: React.FC = () => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [contactSent, setContactSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail) return;
    setContactSent(true);
  };

  return (
    <div className="page-about" style={{ overflowX: 'hidden' }}>
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
          <div className="eyebrow eyebrow-teal">ABOUT THE SCHOOL</div>
          <h1
            style={{
              fontSize: 'clamp(44px, 6vw, 76px)',
              letterSpacing: '0.02em',
              lineHeight: 0.95,
              marginBottom: '14px',
            }}
          >
            PRECISION IN MOTION.
          </h1>
          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: 'var(--color-muted-grey)',
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            The Handstand School was founded to demystify inversions. We replace blind trial-and-error with progressive biomechanics, motor learning principles, and accountable 1:1 coaching.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        className="section bg-dots-light"
        style={{ backgroundColor: 'var(--color-warm-white)', color: 'var(--color-charcoal)' }}
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
            <div>
              <div className="eyebrow eyebrow-dark">OUR ORIGIN & PHILOSOPHY</div>
              <h2 style={{ fontSize: 'clamp(34px, 5vw, 50px)', color: 'var(--color-charcoal)', marginBottom: '18px' }}>
                WHY WE BUILT THE SCHOOL
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: '1.65', color: '#495955', marginBottom: '18px' }}>
                For decades, handstand training was treated either as circus magic reserved for child prodigies, or chaotic wall kicking with zero structured cueing. Adult learners were left with chronic wrist pain and stagnation.
              </p>
              <p style={{ fontSize: '16.5px', lineHeight: '1.65', color: '#495955', marginBottom: '28px' }}>
                Our team joined forces—combining Doctor of Physical Therapy credentials, elite gymnastics backgrounds, and worldwide adult workshop pedagogy—to create the first truly standardized handstand curriculum.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Every drill is prescribed with explicit biomechanical intent',
                  'Wrist health and joint longevity precede high-intensity holds',
                  'Coaches review each student with founder oversight',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--color-dark-teal)', fontWeight: 600 }}>
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Collage */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '440px' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '-12px',
                    right: '12px',
                    bottom: '12px',
                    border: '2px solid var(--color-dark-teal)',
                    borderRadius: '4px',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    boxShadow: '0 16px 40px rgba(0, 60, 50, 0.15)',
                  }}
                >
                  <img
                    src="/images/coaches_team_standing.png"
                    alt="The Handstand School Founders"
                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Grid */}
      <section className="section bg-dots-dark">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
            <div className="eyebrow eyebrow-teal">LEADERSHIP</div>
            <h2 style={{ fontSize: 'clamp(38px, 5vw, 56px)', color: '#FFFFFF', marginBottom: '14px' }}>
              THE FOUNDING FACULTY
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--color-muted-grey)' }}>
              Get to know the master coaches behind the Handstand School curriculum.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
            }}
          >
            {COACHES.map((coach) => (
              <div
                key={coach.id}
                className="card-dark"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '30px',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    marginBottom: '20px',
                    backgroundColor: '#091513',
                    border: '1.5px solid rgba(0, 215, 189, 0.3)',
                    height: '280px',
                  }}
                >
                  <img
                    src={coach.image}
                    alt={coach.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                    }}
                  />
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: 'var(--color-turquoise)',
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                  }}
                >
                  {coach.role}
                </div>

                <h3 style={{ fontSize: '26px', color: '#FFFFFF', marginBottom: '8px' }}>
                  {coach.name}
                </h3>

                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-lime)',
                    marginBottom: '14px',
                  }}
                >
                  {coach.credentials}
                </div>

                <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--color-muted-grey)' }}>
                  {coach.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-teal-section" id="contact">
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="eyebrow" style={{ color: 'var(--color-soft-cyan)' }}>GET IN TOUCH</div>
            <h2 style={{ fontSize: 'clamp(34px, 5vw, 50px)', color: '#FFFFFF', marginBottom: '12px' }}>
              HAVE QUESTIONS ABOUT THE PROGRAM?
            </h2>
            <p style={{ fontSize: '16px', color: '#C0D8D4' }}>
              Drop our team a note and a member of our coaching leadership will get back to you within 24 hours.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#0A1412',
              border: '1.5px solid rgba(0, 215, 189, 0.3)',
              borderRadius: '6px',
              padding: '36px',
              color: '#FFFFFF',
            }}
          >
            {!contactSent ? (
              <form onSubmit={handleContactSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label form-label-dark">Name</label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Your name"
                      className="form-control form-control-dark"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label form-label-dark">Email</label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="Your email address"
                      className="form-control form-control-dark"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label form-label-dark">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={contactMsg}
                    onChange={(e) => setContactMsg(e.target.value)}
                    placeholder="Ask about online coaching, teacher training dates, or seminar hosting..."
                    className="form-control form-control-dark"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg">
                  <Send size={18} />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <CheckCircle2 size={48} color="var(--color-turquoise)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '24px', color: '#FFFFFF', marginBottom: '8px' }}>MESSAGE SENT</h3>
                <p style={{ color: 'var(--color-muted-grey)', fontSize: '15px' }}>
                  Thank you, {contactName}! A THS team member will reply to {contactEmail} shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};


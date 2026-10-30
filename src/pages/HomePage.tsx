import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Check, CheckCircle2, Award, Users, Calendar, ShieldCheck } from 'lucide-react';
import { COACHES } from '../data/coaches';
import { TESTIMONIALS } from '../data/testimonials';
import { TestimonialCard } from '../components/TestimonialCard';

interface HomePageProps {
  onOpenCheckoutModal?: () => void;
  onOpenWaitlistModal?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenCheckoutModal, onOpenWaitlistModal }) => {
  const navigate = useNavigate();

  return (
    <div className="page-home" style={{ overflowX: 'hidden' }}>
      {/* ============================================================
          SECTION A: HERO
          ============================================================ */}
      <section
        className="section-hero bg-dots-dark"
        style={{
          position: 'relative',
          paddingTop: '80px',
          paddingBottom: '110px',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(0, 215, 189, 0.15)',
        }}
      >
        {/* Ambient radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '550px',
            height: '550px',
            background: 'radial-gradient(circle, rgba(0, 215, 189, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
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
              <div className="eyebrow">COACHING · SEMINARS · CERTIFICATION</div>

              <h1
                style={{
                  fontSize: 'clamp(52px, 7vw, 84px)',
                  letterSpacing: '0.02em',
                  color: 'var(--color-pure-white)',
                  lineHeight: 0.95,
                  marginBottom: '6px',
                }}
              >
                HANDSTAND COACHING
              </h1>

              <div style={{ marginBottom: '24px' }}>
                <span
                  className="highlight-pill"
                  style={{
                    fontSize: 'clamp(38px, 5.5vw, 68px)',
                    lineHeight: 1,
                    padding: '4px 18px 8px',
                  }}
                >
                  BUILT FOR YOU.
                </span>
              </div>

              <p
                style={{
                  fontSize: 'clamp(16px, 2vw, 19px)',
                  lineHeight: '1.6',
                  color: 'var(--color-muted-grey)',
                  marginBottom: '36px',
                  maxWidth: '520px',
                }}
              >
                Move the skill forward. Take your practice and your coaching to the next level with one proven, progressive system.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/coaching" className="btn btn-primary btn-lg">
                  <span>FIND YOUR COACH</span>
                  <ArrowRight size={20} />
                </Link>
                <Link to="/events" className="btn btn-secondary btn-lg">
                  SEE LIVE EVENTS
                </Link>
              </div>
            </div>

            {/* Right Hero Image */}
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '480px',
                }}
              >
                {/* Decorative offset frame */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    right: '-14px',
                    bottom: '14px',
                    left: '14px',
                    border: '2px solid var(--color-turquoise)',
                    borderRadius: '4px',
                    pointerEvents: 'none',
                    zIndex: 1,
                  }}
                />

                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    borderRadius: '4px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
                    backgroundColor: '#0A1412',
                  }}
                >
                  <img
                    src="/images/home_hero_athlete.png"
                    alt="The Handstand School Athlete Handstand"
                    style={{
                      width: '100%',
                      height: '420px',
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'contrast(1.08) brightness(0.95)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(5, 11, 10, 0.95) 0%, transparent 60%)',
                      padding: '24px',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: 'var(--color-turquoise)' }}>
                      PROVEN METHODOLOGY
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--color-muted-grey)' }}>
                      Individualized biomechanics & motor control
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION B: TRUST STATISTICS
          ============================================================ */}
      <section
        style={{
          backgroundColor: 'var(--color-pure-white)',
          color: 'var(--color-charcoal)',
          padding: '48px 0',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '32px',
              textAlign: 'center',
            }}
          >
            {/* Stat 1 */}
            <div style={{ padding: '12px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(54px, 6vw, 72px)',
                  fontWeight: 900,
                  color: 'var(--color-dark-teal)',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                3
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '17px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'var(--color-charcoal)',
                  textTransform: 'uppercase',
                }}
              >
                Expert Lead Coaches
              </div>
            </div>

            {/* Stat 2 */}
            <div style={{ padding: '12px', borderLeft: '1px solid rgba(0,0,0,0.06)', borderRight: '1px solid rgba(0,0,0,0.06)' }}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(54px, 6vw, 72px)',
                  fontWeight: 900,
                  color: 'var(--color-dark-teal)',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                40+
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '17px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'var(--color-charcoal)',
                  textTransform: 'uppercase',
                }}
              >
                Years of Coaching Experience
              </div>
            </div>

            {/* Stat 3 */}
            <div style={{ padding: '12px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(54px, 6vw, 72px)',
                  fontWeight: 900,
                  color: 'var(--color-dark-teal)',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                25
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '17px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'var(--color-charcoal)',
                  textTransform: 'uppercase',
                }}
              >
                Certified Coaches Worldwide
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION C: THREE WAYS TO TRAIN
          ============================================================ */}
      <section className="section bg-dots-dark">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
            <div className="eyebrow eyebrow-teal">CHOOSE YOUR PATH</div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', color: '#FFFFFF', marginBottom: '14px' }}>
              THREE WAYS TO TRAIN WITH THE SCHOOL
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--color-muted-grey)' }}>
              Whether you train on your own, want to earn your certification, or want hands-on spotting at our in-person events.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '28px',
            }}
          >
            {/* Card 1: Online Coaching */}
            <div className="card-dark" style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(0, 215, 189, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  color: 'var(--color-turquoise)',
                }}
              >
                <Users size={24} />
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--color-turquoise)', textTransform: 'uppercase', marginBottom: '8px' }}>
                1:1 PERSONALIZED
              </div>
              <h3 style={{ fontSize: '26px', color: '#FFFFFF', marginBottom: '12px' }}>
                ONLINE COACHING
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-muted-grey)', marginBottom: '28px', flex: 1 }}>
                Personalized programming and feedback tailored to your individual anatomy, goals, and schedule.
              </p>
              <Link to="/coaching" className="btn btn-primary btn-full">
                <span>EXPLORE COACHING</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Card 2: Teacher Training */}
            <div className="card-dark" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '24px', right: '24px' }}>
                <span className="badge-lime">WAITLIST OPEN</span>
              </div>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(184, 242, 59, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  color: 'var(--color-lime)',
                }}
              >
                <Award size={24} />
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--color-lime)', textTransform: 'uppercase', marginBottom: '8px' }}>
                COACH CERTIFICATION
              </div>
              <h3 style={{ fontSize: '26px', color: '#FFFFFF', marginBottom: '12px' }}>
                TEACHER TRAINING & CERTIFICATION
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-muted-grey)', marginBottom: '28px', flex: 1 }}>
                Learn the Handstand School methodology, cueing frameworks, spotting labs, and client programming to teach with authority.
              </p>
              <Link to="/certifications" className="btn btn-secondary btn-full">
                JOIN THE WAITLIST
              </Link>
            </div>

            {/* Card 3: Live Seminars */}
            <div className="card-dark" style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(0, 215, 189, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  color: 'var(--color-turquoise)',
                }}
              >
                <Calendar size={24} />
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--color-turquoise)', textTransform: 'uppercase', marginBottom: '8px' }}>
                IN-PERSON IMMERSION
              </div>
              <h3 style={{ fontSize: '26px', color: '#FFFFFF', marginBottom: '12px' }}>
                LIVE SEMINARS & EVENTS
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-muted-grey)', marginBottom: '28px', flex: 1 }}>
                Train in person with experienced coaches. Hands-on spotting, real-time corrections, and dedicated training blocks.
              </p>
              <Link to="/events" className="btn btn-secondary btn-full">
                SEE UPCOMING EVENTS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION D: ONLINE COACHING (STOP GUESSING WHAT TO TRAIN NEXT)
          ============================================================ */}
      <section className="section bg-teal-section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left Column */}
            <div>
              <div className="eyebrow" style={{ color: 'var(--color-soft-cyan)' }}>ONLINE COACHING</div>
              <h2
                style={{
                  fontSize: 'clamp(38px, 5.5vw, 60px)',
                  color: 'var(--color-pure-white)',
                  marginBottom: '16px',
                }}
              >
                STOP GUESSING WHAT TO TRAIN NEXT.
              </h2>
              <p
                style={{
                  fontSize: '17px',
                  lineHeight: '1.65',
                  color: '#D1E5E1',
                  marginBottom: '32px',
                }}
              >
                Everything you need to build a consistent, effortless freestanding handstand hold. No generic templates. No figuring it out alone.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '14px',
                  marginBottom: '36px',
                }}
              >
                {[
                  'FREESTANDING HANDSTANDS',
                  'PRESS HANDSTANDS',
                  'SHAPE CHANGES',
                  'ONE-ARM HANDSTANDS',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '17px',
                      fontWeight: 700,
                      color: 'var(--color-pure-white)',
                    }}
                  >
                    <CheckCircle2 size={18} color="var(--color-turquoise)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/coaching" className="btn btn-primary btn-lg">
                <span>START YOUR CUSTOM PROGRAM</span>
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Right Athlete Image with Offset Frame */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
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
                    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <img
                    src="/images/home_freestanding_hold.png"
                    alt="Freestanding handstand alignment"
                    style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION E: COACHING CERTIFICATION
          ============================================================ */}
      <section
        className="section bg-dots-light"
        style={{
          backgroundColor: 'var(--color-warm-white)',
          color: 'var(--color-charcoal)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '56px',
              alignItems: 'center',
            }}
          >
            {/* Left Collage of Coaches */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    bottom: '10px',
                    left: '10px',
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
                    boxShadow: '0 16px 36px rgba(0, 60, 50, 0.15)',
                  }}
                >
                  <img
                    src="/images/certification_coach_collage.png"
                    alt="The Handstand School Master Coaches"
                    style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0, 60, 50, 0.95) 0%, transparent 80%)',
                      padding: '20px',
                      color: '#FFFFFF',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: 'var(--color-turquoise)' }}>
                      MASTER COACH FACULTY
                    </div>
                    <div style={{ fontSize: '13px', opacity: 0.85 }}>
                      Andrew Moraru · Dr. Robert Adams · Kyle Weiger
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <div className="eyebrow eyebrow-dark">COACHING CERTIFICATION</div>
              <h2
                style={{
                  fontSize: 'clamp(36px, 5vw, 54px)',
                  color: 'var(--color-charcoal)',
                  marginBottom: '16px',
                }}
              >
                BECOME A THS CERTIFIED COACH.
              </h2>
              <p
                style={{
                  fontSize: '16.5px',
                  lineHeight: '1.65',
                  color: '#495955',
                  marginBottom: '32px',
                }}
              >
                The definitive framework for coaches who want to teach handstands safely, effectively, and with authority. Gain proven cueing, spotting protocols, and student programming models.
              </p>

              {/* 6 Program Highlights Pills */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '12px',
                  marginBottom: '36px',
                }}
              >
                {[
                  'Comprehensive Curriculum',
                  'Hands-on Practical Hours',
                  'Anatomy & Biomechanics',
                  'Live Spotting Labs',
                  'Client Programming System',
                  'Master Coach Mentorship',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '10px 14px',
                      backgroundColor: 'rgba(0, 86, 106, 0.08)',
                      border: '1px solid rgba(0, 86, 106, 0.18)',
                      borderRadius: '3px',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      color: 'var(--color-dark-teal)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Check size={15} color="var(--color-dark-teal)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/certifications" className="btn btn-dark btn-lg">
                <span>EXPLORE CERTIFICATION</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION F: LIVE SEMINARS
          ============================================================ */}
      <section className="section bg-diagonal-dark">
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
            <div>
              <div className="eyebrow">LIVE SEMINARS & EVENTS</div>
              <h2
                style={{
                  fontSize: 'clamp(38px, 5.5vw, 60px)',
                  color: 'var(--color-pure-white)',
                  marginBottom: '16px',
                }}
              >
                TRAIN WITH US IN PERSON.
              </h2>
              <p
                style={{
                  fontSize: '17px',
                  lineHeight: '1.65',
                  color: 'var(--color-muted-grey)',
                  marginBottom: '32px',
                }}
              >
                There is nothing quite like hands-on adjustments in an energetic room full of practitioners chasing the same goals. Learn how to feel the balance line under master supervision.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
                {[
                  'ALL LEVELS WELCOME — FROM FIRST KICK-UP TO SHAPES',
                  'HANDS-ON SPOTTING & REAL-TIME CUEING',
                  'WORLDWIDE TOUR DATES & RETREAT EXPERIENCES',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '17px',
                      fontWeight: 700,
                      color: 'var(--color-warm-white)',
                    }}
                  >
                    <CheckCircle2 size={18} color="var(--color-turquoise)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/events" className="btn btn-primary btn-lg">
                <span>SEE EVENT DATES</span>
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Right Seminar Group Photo */}
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
                    boxShadow: '0 20px 48px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  <img
                    src="/images/home_seminar_group.png"
                    alt="The Handstand School Live Seminar Spotting"
                    style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION G: TRAINING METHODOLOGY
          ============================================================ */}
      <section className="section bg-teal-section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 64px' }}>
            <div className="eyebrow" style={{ color: 'var(--color-soft-cyan)' }}>THE METHODOLOGY</div>
            <h2
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                color: 'var(--color-pure-white)',
                lineHeight: 1.15,
                marginBottom: '18px',
              }}
            >
              All our live and online programs are progressive, building <span style={{ color: 'var(--color-turquoise)' }}>rock-solid foundations</span> in the basics first.
            </h2>
            <p style={{ fontSize: '17px', color: '#C0D8D4' }}>
              We break down the handstand into three core athletic pillars, removing the guesswork so you can stack with total confidence.
            </p>
          </div>

          {/* Three Foundation Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '56px',
            }}
          >
            {/* Card 1 */}
            <div
              style={{
                backgroundColor: 'rgba(5, 11, 10, 0.5)',
                border: '1px solid rgba(0, 215, 189, 0.2)',
                borderRadius: '6px',
                padding: '36px 28px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '44px',
                  fontWeight: 900,
                  color: 'var(--color-turquoise)',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}
              >
                01
              </div>
              <h3 style={{ fontSize: '24px', color: '#FFFFFF', marginBottom: '10px' }}>STRENGTH</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-muted-grey)', lineHeight: '1.6' }}>
                Build the straight-arm pulling and pushing power, core stability, and wrist resilience needed for longevity and control.
              </p>
            </div>

            {/* Card 2 */}
            <div
              style={{
                backgroundColor: 'rgba(5, 11, 10, 0.5)',
                border: '1px solid rgba(0, 215, 189, 0.2)',
                borderRadius: '6px',
                padding: '36px 28px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '44px',
                  fontWeight: 900,
                  color: 'var(--color-turquoise)',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}
              >
                02
              </div>
              <h3 style={{ fontSize: '24px', color: '#FFFFFF', marginBottom: '10px' }}>MOBILITY</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-muted-grey)', lineHeight: '1.6' }}>
                Develop active shoulder flexion, thoracic extension, and hamstring flexibility to stack your joints effortlessly without arching.
              </p>
            </div>

            {/* Card 3 */}
            <div
              style={{
                backgroundColor: 'rgba(5, 11, 10, 0.5)',
                border: '1px solid rgba(0, 215, 189, 0.2)',
                borderRadius: '6px',
                padding: '36px 28px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '44px',
                  fontWeight: 900,
                  color: 'var(--color-turquoise)',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}
              >
                03
              </div>
              <h3 style={{ fontSize: '24px', color: '#FFFFFF', marginBottom: '10px' }}>MOTOR CONTROL</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-muted-grey)', lineHeight: '1.6' }}>
                Rewire your balance reflexes, learn fingertip micro-adjustments, and gain absolute psychological calm when inverted.
              </p>
            </div>
          </div>

          {/* Progression Diagram Banner */}
          <div
            style={{
              backgroundColor: '#061311',
              border: '1.5px solid var(--color-turquoise)',
              borderRadius: '6px',
              padding: '32px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '24px',
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: 'var(--color-turquoise)' }}>
                  SAME SYSTEM. DIFFERENT PROGRESSIONS.
                </div>
                <div style={{ fontSize: '14px', color: 'var(--color-muted-grey)', maxWidth: '480px' }}>
                  Progress through four structured phases at your body's natural pace.
                </div>
              </div>

              {/* Progress Steps */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}
              >
                {['Foundation', 'Line & Balance', 'Shapes & Press', 'One-Arm Mastery'].map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        padding: '6px 14px',
                        backgroundColor: idx === 0 ? 'var(--color-turquoise)' : 'rgba(255, 255, 255, 0.08)',
                        color: idx === 0 ? '#050B0A' : '#FFFFFF',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '14px',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        borderRadius: '2px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {step}
                    </div>
                    {idx < 3 && <span style={{ color: 'var(--color-turquoise)' }}>→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION H: MEET THE TEAM
          ============================================================ */}
      <section className="section bg-dots-dark">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
            <div className="eyebrow eyebrow-teal">THE COACHING COLLECTIVE</div>
            <h2 style={{ fontSize: 'clamp(38px, 5vw, 56px)', color: '#FFFFFF', marginBottom: '14px' }}>
              SIMPLY PUT, IT'S THE TEAM.
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--color-muted-grey)' }}>
              World-class instruction with decades of combined experience across biomechanics, physical therapy, and performance coaching.
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

      {/* ============================================================
          SECTION I: TESTIMONIALS
          ============================================================ */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(180deg, #00566A 0%, #008D80 50%, #00BFA8 100%)',
          color: '#FFFFFF',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
            <div className="eyebrow" style={{ color: 'var(--color-lime)' }}>HANDSTAND ROCKSTARS</div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', color: '#FFFFFF', marginBottom: '14px' }}>
              HEAR IT FROM OUR GRADUATES
            </h2>
            <p style={{ fontSize: '17px', color: '#E0F5F2' }}>
              Real practitioners, real breakthroughs. From conquering wrist pain to freestanding holds and coach certifications.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '24px',
            }}
          >
            {TESTIMONIALS.slice(0, 3).map((test) => (
              <TestimonialCard key={test.id} testimonial={test} variant="white" />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section
        style={{
          backgroundColor: '#050B0A',
          padding: '72px 0',
          borderTop: '1px solid rgba(0, 215, 189, 0.2)',
          textAlign: 'center',
        }}
      >
        <div className="container-narrow">
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 52px)', color: '#FFFFFF', marginBottom: '14px' }}>
            READY TO BUILD YOUR HANDSTAND?
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--color-muted-grey)', marginBottom: '32px' }}>
            Complete the 5-minute student intake questionnaire and have your lead coach review your goals today.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/intake" className="btn btn-primary btn-lg">
              <span>COMPLETE STUDENT INTAKE</span>
              <ArrowRight size={20} />
            </Link>
            <Link to="/coaching" className="btn btn-secondary btn-lg">
              VIEW COACHING DETAILS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};


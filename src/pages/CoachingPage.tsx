import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Video, Calendar, Shield, Target, MessageSquare, LineChart, Award } from 'lucide-react';
import { PricingCards } from '../components/PricingCards';
import { TestimonialCard } from '../components/TestimonialCard';
import { TESTIMONIALS } from '../data/testimonials';
import { PricingPlan } from '../data/pricing';

interface CoachingPageProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const CoachingPage: React.FC<CoachingPageProps> = ({ onSelectPlan }) => {
  return (
    <div className="page-coaching" style={{ overflowX: 'hidden' }}>
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
              <div className="eyebrow">ONLINE COACHING</div>
              <h1
                style={{
                  fontSize: 'clamp(48px, 6.5vw, 78px)',
                  letterSpacing: '0.02em',
                  color: 'var(--color-pure-white)',
                  lineHeight: 0.95,
                  marginBottom: '8px',
                }}
              >
                YOUR HANDSTAND TRAINING.
              </h1>
              <div style={{ marginBottom: '24px' }}>
                <span
                  className="highlight-pill"
                  style={{
                    fontSize: 'clamp(36px, 5vw, 64px)',
                    lineHeight: 1,
                    padding: '4px 18px 8px',
                  }}
                >
                  BUILT AROUND YOU.
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
                Personalized programming and expert coaching for your goals, your level and your progress.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#pricing" className="btn btn-primary btn-lg">
                  <span>START YOUR CUSTOM PROGRAM</span>
                  <ArrowRight size={20} />
                </a>
                <Link to="/intake" className="btn btn-secondary btn-lg">
                  COMPLETE INTAKE FORM
                </Link>
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
                    src="/images/coaching_hero_athlete.png"
                    alt="Handstand Online Coaching Student"
                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION B: STOP GUESSING WHAT TO TRAIN NEXT
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
            {/* Left Image */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    right: '10px',
                    bottom: '10px',
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
                    boxShadow: '0 16px 36px rgba(0, 60, 50, 0.12)',
                  }}
                >
                  <img
                    src="/images/coaching_students_wall.png"
                    alt="Students training at the wall with coach feedback"
                    style={{ width: '100%', height: '380px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <div className="eyebrow eyebrow-dark">STOP GUESSING</div>
              <h2
                style={{
                  fontSize: 'clamp(36px, 5vw, 54px)',
                  color: 'var(--color-charcoal)',
                  marginBottom: '18px',
                }}
              >
                WHAT TO TRAIN NEXT.
              </h2>
              <p
                style={{
                  fontSize: '17px',
                  lineHeight: '1.65',
                  color: '#445652',
                  marginBottom: '20px',
                }}
              >
                You're putting that work in. But are you working on the right things? Training on your own often leads to guessing what exercise to do next, frustration with inconsistent holds, and wondering whether you're actually making progress.
              </p>
              <div
                style={{
                  padding: '14px 20px',
                  backgroundColor: 'rgba(0, 86, 106, 0.08)',
                  borderLeft: '4px solid var(--color-dark-teal)',
                  marginBottom: '28px',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: 'var(--color-dark-teal)',
                }}
              >
                No generic templates. No figuring it out alone.
              </div>
              <a href="#pricing" className="btn btn-dark btn-lg">
                <span>GET STARTED</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION C: THE THS DIFFERENCE
          ============================================================ */}
      <section className="section bg-dots-dark">
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
              <div className="eyebrow eyebrow-teal">THE THS DIFFERENCE</div>
              <h2
                style={{
                  fontSize: 'clamp(36px, 5vw, 54px)',
                  color: 'var(--color-pure-white)',
                  marginBottom: '16px',
                }}
              >
                MORE THAN YOUR 1:1 COACH.
              </h2>
              <p
                style={{
                  fontSize: '16.5px',
                  lineHeight: '1.65',
                  color: 'var(--color-muted-grey)',
                  marginBottom: '20px',
                }}
              >
                When you join The Handstand School, you don't just get an individual trainer sending you disconnected drills. Your designated lead coach operates inside a structured collective system.
              </p>
              <p
                style={{
                  fontSize: '16.5px',
                  lineHeight: '1.65',
                  color: 'var(--color-muted-grey)',
                  marginBottom: '32px',
                }}
              >
                Every coach reports back to founder leadership on each student they manage. That means your programming benefits from 40+ years of collective elite handstand coaching experience.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 20px',
                  backgroundColor: 'rgba(0, 215, 189, 0.08)',
                  border: '1px solid rgba(0, 215, 189, 0.25)',
                  borderRadius: '4px',
                }}
              >
                <Shield size={24} color="var(--color-turquoise)" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '14.5px', color: 'var(--color-warm-white)' }}>
                  <strong>Leadership Oversight:</strong> Andrew Moraru, Dr. Robert Adams, and Kyle Weiger regularly review active student programming.
                </div>
              </div>
            </div>

            {/* Right Photo */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '440px' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    bottom: '10px',
                    left: '10px',
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
                    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  <img
                    src="/images/coaches_floor_handstands.png"
                    alt="Coaches floor handstands"
                    style={{ width: '100%', height: '340px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION D: FIVE STEPS TO YOUR NEXT SKILL
          ============================================================ */}
      <section className="section bg-diagonal-dark">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
            <div className="eyebrow">HOW IT WORKS</div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 54px)', color: '#FFFFFF', marginBottom: '14px' }}>
              FIVE STEPS TO YOUR NEXT SKILL.
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--color-muted-grey)' }}>
              A proven, stress-free path from where you are today to your dream freestanding balance.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center',
            }}
          >
            {/* Left 5 Steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  step: '01',
                  title: 'TELL US YOUR GOALS',
                  desc: 'Complete the intake questionnaire detailing your training background, current hold, schedule, and limitations.',
                },
                {
                  step: '02',
                  title: 'MEET YOUR COACH',
                  desc: 'We match you with your designated THS coach who conducts an in-depth video biomechanics intake review.',
                },
                {
                  step: '03',
                  title: 'GET YOUR CUSTOM PROGRAM',
                  desc: 'Receive your personalized weekly training block with high-definition cue videos, drills, sets, and rep prescriptions.',
                },
                {
                  step: '04',
                  title: 'TRAIN + GET FEEDBACK',
                  desc: 'Film your reps and submit clips. Your coach returns detailed voiceover feedback breaking down your line, balance, and next steps.',
                },
                {
                  step: '05',
                  title: 'PROGRESS',
                  desc: 'Celebrate measurable breakthroughs, transition to advanced shape variations, press handstands, or one-arm mastery.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    padding: '20px',
                    backgroundColor: 'rgba(5, 11, 10, 0.6)',
                    border: '1px solid rgba(0, 215, 189, 0.18)',
                    borderRadius: '4px',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '22px',
                      fontWeight: 900,
                      backgroundColor: 'var(--color-turquoise)',
                      color: 'var(--color-deep-black)',
                      width: '46px',
                      height: '46px',
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', color: '#FFFFFF', marginBottom: '6px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '14.5px', color: 'var(--color-muted-grey)', lineHeight: '1.5' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right B&W Athlete Photograph */}
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
                    boxShadow: '0 20px 48px rgba(0, 0, 0, 0.7)',
                  }}
                >
                  <img
                    src="/images/athlete_bw_progression.png"
                    alt="Athlete inverted progression"
                    style={{ width: '100%', height: '480px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION E: FEATURE TESTIMONIAL BANNER
          ============================================================ */}
      <section
        style={{
          background: 'linear-gradient(135deg, #00566A 0%, #008D80 50%, #00BFA8 100%)',
          padding: '64px 0',
        }}
      >
        <div className="container-narrow">
          <TestimonialCard testimonial={TESTIMONIALS[1]} variant="white" />
        </div>
      </section>

      {/* ============================================================
          SECTION F: WHAT'S INCLUDED
          ============================================================ */}
      <section className="section bg-dots-dark">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px' }}>
            <div className="eyebrow eyebrow-teal">WHAT'S INCLUDED</div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 54px)', color: '#FFFFFF', marginBottom: '14px' }}>
              EVERYTHING IS BUILT AROUND YOU.
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--color-muted-grey)' }}>
              Complete high-touch support designed to eliminate bottlenecks and accelerate real-world results.
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
                icon: <Target size={24} color="var(--color-turquoise)" />,
                title: '1. Customized Program',
                desc: 'Tailored weekly schedules based on your available training days, equipment, and current hold capacity.',
              },
              {
                icon: <Video size={24} color="var(--color-turquoise)" />,
                title: '2. Weekly Video Feedback',
                desc: 'Upload training footage and receive frame-by-frame breakdown, visual overlays, and audio commentary from your coach.',
              },
              {
                icon: <Calendar size={24} color="var(--color-turquoise)" />,
                title: '3. Monthly 1:1 Live Call',
                desc: 'Jump on video with your coach to audit real-time form, retest mobility benchmarks, and align next phase targets.',
              },
              {
                icon: <LineChart size={24} color="var(--color-turquoise)" />,
                title: '4. Modifications & Adjustments',
                desc: 'Have wrist tenderness or limited time this week? Your coach immediately alters drills to match your current state.',
              },
              {
                icon: <MessageSquare size={24} color="var(--color-turquoise)" />,
                title: '5. Coach Accountability',
                desc: 'Direct communication inside the platform so you never feel alone or stranded on what to execute next.',
              },
              {
                icon: <Award size={24} color="var(--color-turquoise)" />,
                title: '6. Progress Tracking',
                desc: 'Track hold durations, bail confidence, shoulder flexion milestones, and shape changes inside your student dashboard.',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="card-dark"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  padding: '28px',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(0, 215, 189, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '22px', color: '#FFFFFF' }}>{card.title}</h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-muted-grey)', lineHeight: '1.6' }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION G: SKILLS YOU CAN TRAIN
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
            {/* Left Skills Grid */}
            <div>
              <div className="eyebrow" style={{ color: 'var(--color-soft-cyan)' }}>SKILL MASTERY</div>
              <h2
                style={{
                  fontSize: 'clamp(36px, 5vw, 54px)',
                  color: 'var(--color-pure-white)',
                  marginBottom: '28px',
                }}
              >
                THE SKILLS YOU ACTUALLY WANT.
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                {[
                  { num: '01', name: 'Handstand Basics', desc: 'Effortless 30-60s straight-line balance with calm breathing.' },
                  { num: '02', name: 'Press Handstands', desc: 'Straddle, pike, and stalder press mechanics with compression.' },
                  { num: '03', name: 'Shape Changes', desc: 'Straddle, tuck, hollowback, and Mexican handstand control.' },
                  { num: '04', name: 'One-Arm Handstands', desc: 'Shoulder depression, fingertip weight shift, and flags.' },
                ].map((skill, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '20px',
                      backgroundColor: 'rgba(5, 11, 10, 0.45)',
                      border: '1px solid rgba(0, 215, 189, 0.25)',
                      borderRadius: '4px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '18px',
                        fontWeight: 900,
                        color: 'var(--color-turquoise)',
                        marginBottom: '6px',
                      }}
                    >
                      {skill.num}
                    </div>
                    <h3 style={{ fontSize: '18px', color: '#FFFFFF', marginBottom: '6px' }}>
                      {skill.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--color-muted-grey)' }}>
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Coach Portrait */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
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
                    boxShadow: '0 20px 48px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  <img
                    src="/images/robert_adams_portrait.png"
                    alt="Dr. Robert Adams Coach Portrait"
                    style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 80%)',
                      padding: '20px',
                      color: '#FFFFFF',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: 'var(--color-turquoise)' }}>
                      DR. ROBERT ADAMS
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--color-muted-grey)' }}>
                      Co-Founder & Biomechanics Specialist
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION H: BEGINNER REASSURANCE
          ============================================================ */}
      <section className="section bg-dots-dark">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow eyebrow-teal">FOR EVERY LEVEL</div>
          <h2 style={{ fontSize: 'clamp(34px, 5vw, 50px)', color: '#FFFFFF', marginBottom: '16px' }}>
            YOU DON'T NEED AN ADVANCED HANDSTAND TO START.
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--color-muted-grey)', marginBottom: '40px' }}>
            Whether you are struggling to kick up to the wall without fear, or already hold 10 seconds and want a consistent press, we meet you exactly where your body is.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              padding: '32px',
              backgroundColor: 'rgba(0, 86, 106, 0.15)',
              border: '1.5px solid var(--color-turquoise)',
              borderRadius: '6px',
              marginBottom: '36px',
            }}
          >
            <div style={{ padding: '16px 24px', backgroundColor: '#050B0A', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ fontSize: '12px', color: 'var(--color-turquoise)', fontWeight: 700, letterSpacing: '0.1em' }}>
                CURRENT STATE
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', color: '#FFFFFF', marginTop: '4px' }}>
                WHERE YOU ARE NOW
              </div>
            </div>

            <ArrowRight size={32} color="var(--color-turquoise)" />

            <div style={{ padding: '16px 24px', backgroundColor: 'var(--color-turquoise)', borderRadius: '4px', color: 'var(--color-deep-black)' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.1em' }}>
                PROVEN TARGET
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 800, marginTop: '4px' }}>
                WHERE YOU WANT TO GO NEXT
              </div>
            </div>
          </div>

          <Link to="/intake" className="btn btn-primary btn-lg">
            <span>START YOUR JOURNEY</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* ============================================================
          SECTION I: STUDENT TESTIMONIAL
          ============================================================ */}
      <section
        style={{
          background: 'linear-gradient(135deg, #00566A 0%, #008D80 50%, #00BFA8 100%)',
          padding: '64px 0',
        }}
      >
        <div className="container-narrow">
          <TestimonialCard testimonial={TESTIMONIALS[2]} variant="white" />
        </div>
      </section>

      {/* ============================================================
          SECTION J: SUPPORT SYSTEM (FROM REFERENCE 3)
          ============================================================ */}
      <section className="section bg-dots-dark" id="support-system">
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
              <div className="eyebrow eyebrow-teal">YOUR SUPPORT SYSTEM</div>
              <h2
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 56px)',
                  color: 'var(--color-pure-white)',
                  lineHeight: 1,
                  marginBottom: '10px',
                }}
              >
                ONE COACH <span style={{ color: 'var(--color-turquoise)' }}>FOR YOU.</span>
              </h2>
              <h2
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 56px)',
                  color: 'var(--color-pure-white)',
                  lineHeight: 1,
                  marginBottom: '24px',
                }}
              >
                A TEAM BEHIND THEM.
              </h2>

              <p
                style={{
                  fontSize: '16.5px',
                  lineHeight: '1.65',
                  color: 'var(--color-muted-grey)',
                  marginBottom: '18px',
                }}
              >
                Every THS coach reports back to leadership on each student they manage. That means your coach has another layer of expertise and support behind them when reviewing your progress and programming. It also keeps the quality of coaching consistent across the entire THS team.
              </p>

              <div
                style={{
                  padding: '16px 20px',
                  backgroundColor: 'rgba(0, 215, 189, 0.08)',
                  borderLeft: '4px solid var(--color-turquoise)',
                  marginBottom: '32px',
                  color: 'var(--color-warm-white)',
                  fontSize: '15px',
                  lineHeight: '1.55',
                }}
              >
                You get personalized attention from your coach, backed by The Handstand School coaching system.
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="#pricing" className="btn btn-primary btn-lg">
                  CHOOSE YOUR PLAN
                </a>
              </div>
            </div>

            {/* Right Large Coaches Standing Photograph */}
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
                    src="/images/coaches_team_standing.png"
                    alt="The Handstand School Founders standing together"
                    style={{ width: '100%', height: '440px', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(5, 11, 10, 0.95) 0%, transparent 80%)',
                      padding: '20px',
                      color: '#FFFFFF',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: 'var(--color-turquoise)' }}>
                      THE LEADERSHIP BOARD
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--color-muted-grey)' }}>
                      Andrew Moraru · Dr. Robert Adams · Kyle Weiger
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION K: GRADUATE TESTIMONIAL (ERIN PHILLIPS - FROM REF 3)
          ============================================================ */}
      <section
        style={{
          background: 'linear-gradient(135deg, #00566A 0%, #008D80 50%, #00BFA8 100%)',
          padding: '64px 0',
        }}
      >
        <div className="container-narrow">
          <TestimonialCard testimonial={TESTIMONIALS[0]} variant="white" />
        </div>
      </section>

      {/* ============================================================
          SECTION L: PRICING (FROM REFERENCE 3)
          ============================================================ */}
      <section className="section bg-diagonal-dark" id="pricing">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
            <div className="eyebrow">PRICING</div>
            <h2
              style={{
                fontSize: 'clamp(38px, 5.5vw, 60px)',
                color: 'var(--color-pure-white)',
                marginBottom: '16px',
              }}
            >
              CHOOSE YOUR COMMITMENT.
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--color-muted-grey)', maxWidth: '680px', margin: '0 auto' }}>
              Handstand progress doesn't happen overnight. Give yourself the time, structure and coaching to work toward the skills you want.
            </p>
          </div>

          <PricingCards onSelectPlan={onSelectPlan} />

          <div
            style={{
              marginTop: '40px',
              textAlign: 'center',
              fontSize: '13px',
              color: 'var(--color-text-dim)',
            }}
          >
            Demonstration pricing: Clicking any plan opens simulated Kajabi checkout and guides you to the student intake form.
          </div>
        </div>
      </section>
    </div>
  );
};


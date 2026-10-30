import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, HelpCircle, Shield, Sparkles } from 'lucide-react';
import { PricingCards } from '../components/PricingCards';
import { Accordion } from '../components/Accordion';
import { FAQS } from '../data/faqs';
import { PricingPlan } from '../data/pricing';

interface PricingPageProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onSelectPlan }) => {
  return (
    <div className="page-pricing" style={{ overflowX: 'hidden' }}>
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
          <div className="eyebrow eyebrow-teal">MEMBERSHIP & PACKAGES</div>
          <h1
            style={{
              fontSize: 'clamp(44px, 6vw, 76px)',
              letterSpacing: '0.02em',
              lineHeight: 0.95,
              marginBottom: '10px',
            }}
          >
            CHOOSE YOUR COMMITMENT.
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
            Handstand progress doesn't happen overnight. Give yourself the time, structure and coaching to work toward the skills you want.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-lime)' }}>
            <Shield size={16} />
            <span>Kajabi Powered Enrollment · 100% Risk-Free 14-Day Guarantee</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="section bg-diagonal-dark">
        <div className="container">
          <PricingCards onSelectPlan={onSelectPlan} />
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section
        className="section bg-dots-light"
        style={{
          backgroundColor: 'var(--color-warm-white)',
          color: 'var(--color-charcoal)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <div className="eyebrow eyebrow-dark">PACKAGE COMPARISON</div>
            <h2 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--color-charcoal)', marginBottom: '12px' }}>
              COMPARE COACHING TIERS
            </h2>
            <p style={{ fontSize: '16px', color: '#526662' }}>
              Choose the level of feedback, live call frequency, and mentor oversight that matches your ambitions.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '6px',
              border: '1px solid #D5DFDC',
              overflowX: 'auto',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
            }}
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                minWidth: '600px',
              }}
            >
              <thead>
                <tr style={{ backgroundColor: '#003C32', color: '#FFFFFF' }}>
                  <th style={{ padding: '20px', fontSize: '16px', fontFamily: 'var(--font-heading)', width: '40%' }}>
                    FEATURE / DELIVERABLE
                  </th>
                  <th style={{ padding: '20px', fontSize: '16px', fontFamily: 'var(--font-heading)', textAlign: 'center', width: '20%' }}>
                    1 MONTH ($500)
                  </th>
                  <th style={{ padding: '20px', fontSize: '16px', fontFamily: 'var(--font-heading)', textAlign: 'center', width: '20%' }}>
                    3 MONTHS ($1,200)
                  </th>
                  <th style={{ padding: '20px', fontSize: '16px', fontFamily: 'var(--font-heading)', textAlign: 'center', width: '20%', backgroundColor: '#004f42' }}>
                    6 MONTHS ($2,100)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Custom Weekly Programming', m1: true, m3: true, m6: true },
                  { name: 'Weekly Video Feedback Review', m1: true, m3: true, m6: true },
                  { name: 'Direct In-App Messaging', m1: true, m3: true, m6: true },
                  { name: 'Monthly 1:1 Live Video Call', m1: false, m3: true, m6: true },
                  { name: 'Leadership Team Roster Review', m1: false, m3: true, m6: true },
                  { name: 'Bi-Weekly Live Check-ins', m1: false, m3: false, m6: true },
                  { name: 'Complimentary Live Seminar Pass', m1: false, m3: false, m6: true },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid #E3ECE9',
                      backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#F9FCFB',
                    }}
                  >
                    <td style={{ padding: '16px 20px', fontWeight: 600, fontSize: '14.5px', color: '#2B3B38' }}>
                      {row.name}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>
                      {row.m1 ? (
                        <Check size={18} color="var(--color-dark-teal)" style={{ margin: '0 auto' }} />
                      ) : (
                        <span style={{ color: '#BAC7C4' }}>—</span>
                      )}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center' }}>
                      {row.m3 ? (
                        <Check size={18} color="var(--color-dark-teal)" style={{ margin: '0 auto' }} />
                      ) : (
                        <span style={{ color: '#BAC7C4' }}>—</span>
                      )}
                    </td>
                    <td style={{ padding: '16px', textAlign: 'center', backgroundColor: 'rgba(0, 215, 189, 0.05)' }}>
                      {row.m6 ? (
                        <Check size={20} color="var(--color-dark-teal)" style={{ margin: '0 auto', strokeWidth: 3 }} />
                      ) : (
                        <span style={{ color: '#BAC7C4' }}>—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section bg-dots-dark" id="faq">
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="eyebrow eyebrow-teal">FREQUENTLY ASKED QUESTIONS</div>
            <h2 style={{ fontSize: 'clamp(34px, 5vw, 50px)', color: '#FFFFFF', marginBottom: '14px' }}>
              EVERYTHING YOU NEED TO KNOW
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-muted-grey)' }}>
              Got questions before choosing a program? Read through our most common answers below.
            </p>
          </div>

          <Accordion items={FAQS} theme="dark" />
        </div>
      </section>

      {/* Bottom Final CTA */}
      <section
        style={{
          backgroundColor: '#003C32',
          padding: '72px 0',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        <div className="container-narrow">
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 52px)', marginBottom: '14px' }}>
            START YOUR CUSTOM PROGRAM TODAY.
          </h2>
          <p style={{ fontSize: '17px', color: '#D2E5E1', marginBottom: '32px' }}>
            Step onto your hands with complete certainty. Join dozens of active students progressing through The Handstand School system.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/intake" className="btn btn-primary btn-lg">
              <span>BEGIN STUDENT INTAKE</span>
              <ArrowRight size={20} />
            </Link>
            <Link to="/coaching" className="btn btn-secondary btn-lg">
              RETURN TO COACHING
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};


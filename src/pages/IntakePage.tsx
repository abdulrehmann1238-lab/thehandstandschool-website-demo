import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Shield, RefreshCw, Check, Sparkles, Send } from 'lucide-react';

export const IntakePage: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    // Section 1
    fullName: '',
    email: '',
    age: '',
    // Section 2
    trainingDuration: '6-12 months',
    primaryGoals: '',
    successVision: '',
    currentHold: '5-10 seconds',
    holdConsistency: 'Most sessions',
    biggestObstacle: '',
    previousAttempts: '',
    // Section 3
    trainingDaysPerWeek: '4 days',
    sessionDuration: '45-60 minutes',
    equipmentAvailable: ['Wall space', 'Parallettes'],
    trainingLocation: 'Home',
    // Section 4
    learningStyle: 'Visual video breakdown',
    feedbackStyle: 'Deep technical breakdown with exact micro-cues',
    // Section 5
    hasCurrentInjuries: 'No',
    injuryDetails: '',
    painLocations: ['None'],
    sleepQuality: 8,
    sleepDuration: '7-8 hours',
    // Section 6
    threeMealsFrequency: 'Often',
    preTrainingMeal: 'Often',
    adequatelyFueled: 'Often',
    hydrationConsistency: 'Always',
    // Section 7
    wellbeingAnxious: 'Not at all',
    wellbeingWorry: 'Not at all',
    wellbeingInterest: 'Not at all',
    wellbeingDown: 'Not at all',
    // Section 8
    anythingElse: '',
    questionsForCoach: '',
  });

  const [activeTab, setActiveTab] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Please provide a valid email';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setActiveTab(1);
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }
    setSubmitted(true);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const handleReset = () => {
    if (window.confirm('Reset this demonstration intake questionnaire?')) {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        age: '',
        trainingDuration: '6-12 months',
        primaryGoals: '',
        successVision: '',
        currentHold: '5-10 seconds',
        holdConsistency: 'Most sessions',
        biggestObstacle: '',
        previousAttempts: '',
        trainingDaysPerWeek: '4 days',
        sessionDuration: '45-60 minutes',
        equipmentAvailable: ['Wall space'],
        trainingLocation: 'Home',
        learningStyle: 'Visual video breakdown',
        feedbackStyle: 'Deep technical breakdown with exact micro-cues',
        hasCurrentInjuries: 'No',
        injuryDetails: '',
        painLocations: ['None'],
        sleepQuality: 8,
        sleepDuration: '7-8 hours',
        threeMealsFrequency: 'Often',
        preTrainingMeal: 'Often',
        adequatelyFueled: 'Often',
        hydrationConsistency: 'Always',
        wellbeingAnxious: 'Not at all',
        wellbeingWorry: 'Not at all',
        wellbeingInterest: 'Not at all',
        wellbeingDown: 'Not at all',
        anythingElse: '',
        questionsForCoach: '',
      });
      setActiveTab(1);
    }
  };

  const toggleEquipment = (item: string) => {
    setFormData((prev) => {
      const exists = prev.equipmentAvailable.includes(item);
      const updated = exists
        ? prev.equipmentAvailable.filter((x) => x !== item)
        : [...prev.equipmentAvailable, item];
      return { ...prev, equipmentAvailable: updated };
    });
  };

  const sectionTitles = [
    'About You',
    'Your Handstand',
    'Your Setup',
    'How You Learn',
    'Health & Recovery',
    'Nutrition',
    'Wellbeing',
    'Anything Else',
  ];

  return (
    <div className="page-intake" style={{ backgroundColor: 'var(--color-warm-white)', minHeight: '100vh', paddingBottom: '96px' }}>
      {/* Hero Header */}
      <section
        style={{
          backgroundColor: '#050B0A',
          color: '#FFFFFF',
          paddingTop: '64px',
          paddingBottom: '60px',
          borderBottom: '1px solid rgba(0, 215, 189, 0.2)',
          textAlign: 'center',
        }}
        className="bg-dots-dark"
      >
        <div className="container-narrow">
          <div className="eyebrow eyebrow-teal">STUDENT INTAKE FORM</div>
          <h1
            style={{
              fontSize: 'clamp(36px, 5.5vw, 62px)',
              lineHeight: 1,
              marginBottom: '10px',
            }}
          >
            WELCOME TO <span style={{ color: 'var(--color-turquoise)' }}>THE HANDSTAND SCHOOL.</span>
          </h1>
          <p
            style={{
              fontSize: '16.5px',
              color: 'var(--color-muted-grey)',
              maxWidth: '680px',
              margin: '0 auto 20px',
              lineHeight: '1.6',
            }}
          >
            This form helps us understand your training history, current goals, schedule, and environment so your coach can build a program tailored to you. Please answer as accurately as you can. There are no right or wrong answers.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-lime)' }}>
            <Shield size={15} />
            <span>Demonstration form — Answers remain securely in local component memory</span>
          </div>
        </div>
      </section>

      {/* Progress & Quick Nav Bar */}
      <div
        style={{
          position: 'sticky',
          top: '72px',
          zIndex: 100,
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E1E8E6',
          boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              overflowX: 'auto',
              padding: '12px 0',
              gap: '8px',
            }}
          >
            {sectionTitles.map((title, idx) => {
              const secNum = idx + 1;
              const isActive = activeTab === secNum;
              return (
                <button
                  key={secNum}
                  onClick={() => {
                    setActiveTab(secNum);
                    const el = document.getElementById(`section-0${secNum}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    background: isActive ? 'var(--color-dark-teal)' : '#F2F6F5',
                    color: isActive ? '#FFFFFF' : '#4A5B57',
                    border: 'none',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '12px',
                      color: isActive ? 'var(--color-turquoise)' : '#839692',
                    }}
                  >
                    0{secNum}
                  </span>
                  <span>{title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Form Content */}
      <div className="container-narrow" style={{ marginTop: '48px' }}>
        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* ============================================================
                SECTION 01: ABOUT YOU
                ============================================================ */}
            <div id="section-01" className="card-light" style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '28px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '56px',
                  fontWeight: 900,
                  color: 'rgba(0, 215, 189, 0.25)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                01
              </div>
              <div className="eyebrow eyebrow-dark">GETTING STARTED</div>
              <h2 style={{ fontSize: '28px', color: 'var(--color-charcoal)', marginBottom: '20px' }}>
                ABOUT YOU
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="form-control"
                  />
                  {errors.fullName && <div style={{ color: '#D9383A', fontSize: '12px', marginTop: '4px' }}>{errors.fullName}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="form-control"
                  />
                  {errors.email && <div style={{ color: '#D9383A', fontSize: '12px', marginTop: '4px' }}>{errors.email}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="e.g. 32"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            {/* ============================================================
                SECTION 02: YOUR HANDSTAND
                ============================================================ */}
            <div id="section-02" className="card-light" style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '28px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '56px',
                  fontWeight: 900,
                  color: 'rgba(0, 215, 189, 0.25)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                02
              </div>
              <div className="eyebrow eyebrow-dark">EXPERIENCE & TARGETS</div>
              <h2 style={{ fontSize: '28px', color: 'var(--color-charcoal)', marginBottom: '20px' }}>
                YOUR HANDSTAND
              </h2>

              <div className="form-group">
                <label className="form-label">How long have you been training handstands?</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                  {['Less than 6 months', '6–12 months', '1–2 years', '2+ years'].map((dur) => (
                    <div
                      key={dur}
                      onClick={() => setFormData({ ...formData, trainingDuration: dur })}
                      className={`form-radio-label ${formData.trainingDuration === dur ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="duration"
                        checked={formData.trainingDuration === dur}
                        onChange={() => setFormData({ ...formData, trainingDuration: dur })}
                      />
                      <span>{dur}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Current freestanding handstand hold duration:</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                  {['Cannot hold yet', '1–3 seconds', '5–10 seconds', '15–30 seconds', '30+ seconds', '60+ seconds'].map((hold) => (
                    <div
                      key={hold}
                      onClick={() => setFormData({ ...formData, currentHold: hold })}
                      className={`form-radio-label ${formData.currentHold === hold ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="hold"
                        checked={formData.currentHold === hold}
                        onChange={() => setFormData({ ...formData, currentHold: hold })}
                      />
                      <span>{hold}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Primary training goals for your coaching program:</label>
                <textarea
                  rows={3}
                  value={formData.primaryGoals}
                  onChange={(e) => setFormData({ ...formData, primaryGoals: e.target.value })}
                  placeholder="e.g. 30-second freestanding hold with quiet breath, straddle press entry, overcoming fear of falling..."
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label className="form-label">What would success look like in 90 days?</label>
                <textarea
                  rows={2}
                  value={formData.successVision}
                  onChange={(e) => setFormData({ ...formData, successVision: e.target.value })}
                  placeholder="Describe how your body and practice will feel..."
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label className="form-label">What has been your biggest training obstacle so far?</label>
                <textarea
                  rows={2}
                  value={formData.biggestObstacle}
                  onChange={(e) => setFormData({ ...formData, biggestObstacle: e.target.value })}
                  placeholder="e.g. Inconsistent kick-up, wrist fatigue, banana back arch, fear of overbalancing..."
                  className="form-control"
                />
              </div>
            </div>

            {/* ============================================================
                SECTION 03: YOUR TRAINING SETUP
                ============================================================ */}
            <div id="section-03" className="card-light" style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '28px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '56px',
                  fontWeight: 900,
                  color: 'rgba(0, 215, 189, 0.25)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                03
              </div>
              <div className="eyebrow eyebrow-dark">ENVIRONMENT</div>
              <h2 style={{ fontSize: '28px', color: 'var(--color-charcoal)', marginBottom: '20px' }}>
                YOUR TRAINING SETUP
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label">Days per week you can dedicate to practice:</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {['2 days', '3 days', '4 days', '5+ days'].map((days) => (
                      <div
                        key={days}
                        onClick={() => setFormData({ ...formData, trainingDaysPerWeek: days })}
                        className={`form-radio-label ${formData.trainingDaysPerWeek === days ? 'selected' : ''}`}
                      >
                        <input
                          type="radio"
                          name="days"
                          checked={formData.trainingDaysPerWeek === days}
                          onChange={() => setFormData({ ...formData, trainingDaysPerWeek: days })}
                        />
                        <span>{days}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Available time per session:</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {['30 minutes', '45–60 minutes', '60–75 minutes', '90+ minutes'].map((time) => (
                      <div
                        key={time}
                        onClick={() => setFormData({ ...formData, sessionDuration: time })}
                        className={`form-radio-label ${formData.sessionDuration === time ? 'selected' : ''}`}
                      >
                        <input
                          type="radio"
                          name="time"
                          checked={formData.sessionDuration === time}
                          onChange={() => setFormData({ ...formData, sessionDuration: time })}
                        />
                        <span>{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Equipment available (select all that apply):</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' }}>
                  {['Clear wall space', 'Parallettes', 'Resistance bands', 'Yoga blocks', 'Floor only'].map((eq) => {
                    const isSelected = formData.equipmentAvailable.includes(eq);
                    return (
                      <div
                        key={eq}
                        onClick={() => toggleEquipment(eq)}
                        className={`form-radio-label ${isSelected ? 'selected' : ''}`}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleEquipment(eq)}
                        />
                        <span>{eq}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ============================================================
                SECTION 04: HOW YOU LEARN
                ============================================================ */}
            <div id="section-04" className="card-light" style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '28px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '56px',
                  fontWeight: 900,
                  color: 'rgba(0, 215, 189, 0.25)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                04
              </div>
              <div className="eyebrow eyebrow-dark">COACHING PREFERENCES</div>
              <h2 style={{ fontSize: '28px', color: 'var(--color-charcoal)', marginBottom: '20px' }}>
                HOW YOU LEARN
              </h2>

              <div className="form-group">
                <label className="form-label">What cueing style resonates best with you?</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                  {[
                    'Visual video breakdown (drawings & frame-by-frame analysis)',
                    'Anatomical / Biomechanical cues (bone stacking, scapular position)',
                    'Tactile / Internal sensation cues (pushing the floor away, gripping with fingertips)',
                    'Straightforward drills with clear rep-by-rep objectives',
                  ].map((style) => (
                    <div
                      key={style}
                      onClick={() => setFormData({ ...formData, learningStyle: style })}
                      className={`form-radio-label ${formData.learningStyle === style ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="style"
                        checked={formData.learningStyle === style}
                        onChange={() => setFormData({ ...formData, learningStyle: style })}
                      />
                      <span>{style}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ============================================================
                SECTION 05: HEALTH & RECOVERY
                ============================================================ */}
            <div id="section-05" className="card-light" style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '28px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '56px',
                  fontWeight: 900,
                  color: 'rgba(0, 215, 189, 0.25)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                05
              </div>
              <div className="eyebrow eyebrow-dark">BODY READINESS</div>
              <h2 style={{ fontSize: '28px', color: 'var(--color-charcoal)', marginBottom: '20px' }}>
                HEALTH & RECOVERY
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label">Any current injuries or physical limitations?</label>
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '8px' }}>
                    {['No', 'Yes'].map((opt) => (
                      <div
                        key={opt}
                        onClick={() => setFormData({ ...formData, hasCurrentInjuries: opt })}
                        className={`form-radio-label ${formData.hasCurrentInjuries === opt ? 'selected' : ''}`}
                        style={{ minWidth: '80px', justifyContent: 'center' }}
                      >
                        <input
                          type="radio"
                          name="injuries"
                          checked={formData.hasCurrentInjuries === opt}
                          onChange={() => setFormData({ ...formData, hasCurrentInjuries: opt })}
                        />
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>
                  {formData.hasCurrentInjuries === 'Yes' && (
                    <input
                      type="text"
                      placeholder="Please specify (e.g. right wrist impingement, rotator cuff)..."
                      className="form-control"
                      value={formData.injuryDetails}
                      onChange={(e) => setFormData({ ...formData, injuryDetails: e.target.value })}
                    />
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Average nightly sleep duration:</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {['< 6 hours', '6–7 hours', '7–8 hours', '8+ hours'].map((sleep) => (
                      <div
                        key={sleep}
                        onClick={() => setFormData({ ...formData, sleepDuration: sleep })}
                        className={`form-radio-label ${formData.sleepDuration === sleep ? 'selected' : ''}`}
                      >
                        <input
                          type="radio"
                          name="sleep"
                          checked={formData.sleepDuration === sleep}
                          onChange={() => setFormData({ ...formData, sleepDuration: sleep })}
                        />
                        <span>{sleep}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ============================================================
                SECTION 06: NUTRITION & FUEL
                ============================================================ */}
            <div id="section-06" className="card-light" style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '28px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '56px',
                  fontWeight: 900,
                  color: 'rgba(0, 215, 189, 0.25)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                06
              </div>
              <div className="eyebrow eyebrow-dark">FUEL & ENERGY</div>
              <h2 style={{ fontSize: '28px', color: 'var(--color-charcoal)', marginBottom: '20px' }}>
                NUTRITION
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label">How often do you eat at least 3 meals a day?</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {['Rarely', 'Sometimes', 'Often', 'Always'].map((opt) => (
                      <div
                        key={opt}
                        onClick={() => setFormData({ ...formData, threeMealsFrequency: opt })}
                        className={`form-radio-label ${formData.threeMealsFrequency === opt ? 'selected' : ''}`}
                      >
                        <input
                          type="radio"
                          name="meals"
                          checked={formData.threeMealsFrequency === opt}
                          onChange={() => setFormData({ ...formData, threeMealsFrequency: opt })}
                        />
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Do you feel adequately fueled before training sessions?</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {['Rarely', 'Sometimes', 'Often', 'Always'].map((opt) => (
                      <div
                        key={opt}
                        onClick={() => setFormData({ ...formData, adequatelyFueled: opt })}
                        className={`form-radio-label ${formData.adequatelyFueled === opt ? 'selected' : ''}`}
                      >
                        <input
                          type="radio"
                          name="fueled"
                          checked={formData.adequatelyFueled === opt}
                          onChange={() => setFormData({ ...formData, adequatelyFueled: opt })}
                        />
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ============================================================
                SECTION 07: WELLBEING (OPTIONAL CONTEXT)
                ============================================================ */}
            <div id="section-07" className="card-light" style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '28px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '56px',
                  fontWeight: 900,
                  color: 'rgba(0, 215, 189, 0.25)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                07
              </div>
              <div className="eyebrow eyebrow-dark">TRAINING CONTEXT</div>
              <h2 style={{ fontSize: '28px', color: 'var(--color-charcoal)', marginBottom: '8px' }}>
                WELLBEING
              </h2>
              <p style={{ fontSize: '13px', color: '#6A7D78', marginBottom: '20px' }}>
                (Optional self-reflection: helps your coach calibrate training volume during stressful life periods.)
              </p>

              <div className="form-group">
                <label className="form-label">Over the last 2 weeks, how often have you felt overwhelmed or anxious?</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
                  {['Not at all', 'Several days', 'More than half the days', 'Nearly every day'].map((opt) => (
                    <div
                      key={opt}
                      onClick={() => setFormData({ ...formData, wellbeingAnxious: opt })}
                      className={`form-radio-label ${formData.wellbeingAnxious === opt ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="anxious"
                        checked={formData.wellbeingAnxious === opt}
                        onChange={() => setFormData({ ...formData, wellbeingAnxious: opt })}
                      />
                      <span>{opt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ============================================================
                SECTION 08: ANYTHING ELSE
                ============================================================ */}
            <div id="section-08" className="card-light" style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '28px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '56px',
                  fontWeight: 900,
                  color: 'rgba(0, 215, 189, 0.25)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                08
              </div>
              <div className="eyebrow eyebrow-dark">OPEN NOTES</div>
              <h2 style={{ fontSize: '28px', color: 'var(--color-charcoal)', marginBottom: '20px' }}>
                ANYTHING ELSE
              </h2>

              <div className="form-group">
                <label className="form-label">Is there anything else your coach should know about your body or practice?</label>
                <textarea
                  rows={3}
                  value={formData.anythingElse}
                  onChange={(e) => setFormData({ ...formData, anythingElse: e.target.value })}
                  placeholder="Previous athletic background (e.g. gymnastics, yoga, weightlifting), fears, upcoming travel..."
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Do you have any specific questions before your program is delivered?</label>
                <textarea
                  rows={2}
                  value={formData.questionsForCoach}
                  onChange={(e) => setFormData({ ...formData, questionsForCoach: e.target.value })}
                  placeholder="Questions about schedule, video uploads, or portal access..."
                  className="form-control"
                />
              </div>
            </div>

            {/* Bottom Submit Card (Matching Reference 4) */}
            <div
              style={{
                backgroundColor: '#050B0A',
                border: '1.5px solid var(--color-turquoise)',
                borderRadius: '6px',
                padding: '36px',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '24px',
              }}
            >
              <div style={{ maxWidth: '520px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--color-lime)', textTransform: 'uppercase', marginBottom: '6px' }}>
                  NEXT STEP IN YOUR ONBOARDING
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--color-turquoise)' }}>
                  YOUR COACH REVIEWS YOUR RESPONSES AND BUILDS YOUR PROGRAM AROUND YOU.
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-muted-grey)', marginTop: '8px' }}>
                  Clicking submit validates your responses and generates your simulated coaching onboarding payload.
                </p>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ padding: '18px 36px', fontSize: '20px' }}>
                <Send size={20} />
                <span>SUBMIT INTAKE FORM</span>
              </button>
            </div>
          </form>
        ) : (
          /* ============================================================
             SUBMISSION SUCCESS STATE
             ============================================================ */
          <div
            className="card-light"
            style={{
              padding: '64px 40px',
              textAlign: 'center',
              borderRadius: '8px',
              border: '2px solid var(--color-turquoise)',
            }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 215, 189, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                color: 'var(--color-dark-teal)',
              }}
            >
              <CheckCircle2 size={44} />
            </div>

            <div className="eyebrow eyebrow-dark">SUBMISSION SUCCESSFUL</div>
            <h2
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                color: 'var(--color-charcoal)',
                marginBottom: '16px',
              }}
            >
              YOUR JOURNEY STARTS HERE.
            </h2>
            <p
              style={{
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#445652',
                maxWidth: '620px',
                margin: '0 auto 32px',
              }}
            >
              Thank you, <strong>{formData.fullName}</strong> ({formData.email})! Your intake profile has been generated. In production, this form triggers a Kajabi member webhook that logs your metrics into your coaching dashboard and alerts your lead coach.
            </p>

            {/* Summary Highlights */}
            <div
              style={{
                backgroundColor: '#F3F7F6',
                border: '1px solid #D8E4E1',
                borderRadius: '6px',
                padding: '24px',
                maxWidth: '560px',
                margin: '0 auto 36px',
                textAlign: 'left',
                fontSize: '14px',
              }}
            >
              <div style={{ fontWeight: 700, color: 'var(--color-dark-teal)', marginBottom: '10px' }}>
                Intake Profile Summary:
              </div>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', color: '#4A5B57' }}>
                <li>Training Duration: <strong>{formData.trainingDuration}</strong></li>
                <li>Current Freestanding Hold: <strong>{formData.currentHold}</strong></li>
                <li>Weekly Availability: <strong>{formData.trainingDaysPerWeek} ({formData.sessionDuration})</strong></li>
                <li>Primary Goal: <em>{formData.primaryGoals || 'Master consistent freestanding balance'}</em></li>
                <li>Learning Style: <strong>{formData.learningStyle}</strong></li>
              </ul>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/coaching" className="btn btn-primary btn-lg">
                <span>VIEW COACHING PACKAGES</span>
                <ArrowRight size={20} />
              </Link>
              <button onClick={handleReset} className="btn btn-secondary btn-lg" style={{ color: 'var(--color-charcoal)', borderColor: 'var(--color-dark-teal)' }}>
                <RefreshCw size={18} />
                <span>RESET FORM</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


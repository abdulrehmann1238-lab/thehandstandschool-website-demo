import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrandLoader } from './components/BrandLoader';
import { CheckoutModal } from './components/CheckoutModal';
import { EventRegisterModal } from './components/EventRegisterModal';
import { HostSeminarModal } from './components/HostSeminarModal';
import { KajabiSpecModal } from './components/KajabiSpecModal';
import { HomePage } from './pages/HomePage';
import { CoachingPage } from './pages/CoachingPage';
import { IntakePage } from './pages/IntakePage';
import { EventsPage } from './pages/EventsPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { LoginPage } from './pages/LoginPage';
import { PricingPlan } from './data/pricing';
import { THSEvent } from './data/events';
import { ShieldCheck } from 'lucide-react';

// Scroll to top on route change helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  // Modal states
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<THSEvent | null>(null);
  const [hostModalOpen, setHostModalOpen] = useState(false);
  const [kajabiModalOpen, setKajabiModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Fast Minimal Branded Loader */}
      <BrandLoader />

      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header
          onOpenKajabiModal={() => setKajabiModalOpen(true)}
          onOpenLoginModal={() => {}}
        />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenCheckoutModal={() => setSelectedPlan(null)}
                  onOpenWaitlistModal={() => {}}
                />
              }
            />
            <Route
              path="/coaching"
              element={<CoachingPage onSelectPlan={(plan) => setSelectedPlan(plan)} />}
            />
            <Route path="/intake" element={<IntakePage />} />
            <Route
              path="/events"
              element={
                <EventsPage
                  onRegisterEvent={(ev) => setSelectedEvent(ev)}
                  onOpenHostModal={() => setHostModalOpen(true)}
                />
              }
            />
            <Route
              path="/event/washington-dc"
              element={<EventDetailPage onRegister={(ev) => setSelectedEvent(ev)} />}
            />
            <Route
              path="/pricing"
              element={<PricingPage onSelectPlan={(plan) => setSelectedPlan(plan)} />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* Fallback to home */}
            <Route
              path="*"
              element={
                <HomePage
                  onOpenCheckoutModal={() => setSelectedPlan(null)}
                  onOpenWaitlistModal={() => {}}
                />
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>

      {/* Modals */}
      <CheckoutModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
      <EventRegisterModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      <HostSeminarModal isOpen={hostModalOpen} onClose={() => setHostModalOpen(false)} />
      <KajabiSpecModal isOpen={kajabiModalOpen} onClose={() => setKajabiModalOpen(false)} />

      {/* Floating Discreet Kajabi Spec Button */}
      <button
        onClick={() => setKajabiModalOpen(true)}
        aria-label="Inspect Kajabi Implementation Blueprint"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 900,
          backgroundColor: '#050B0A',
          color: 'var(--color-turquoise)',
          border: '1.5px solid var(--color-turquoise)',
          borderRadius: '30px',
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'var(--font-heading)',
          fontSize: '15px',
          fontWeight: 700,
          letterSpacing: '0.06em',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.backgroundColor = 'rgba(0, 215, 189, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.backgroundColor = '#050B0A';
        }}
      >
        <ShieldCheck size={18} color="var(--color-turquoise)" />
        <span>KAJABI SPEC</span>
      </button>
    </BrowserRouter>
  );
};


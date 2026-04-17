
import React, { useState, useCallback, useEffect, Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import FeaturesServices from './components/FeaturesServices';
import PartnersCarousel from './components/PartnersCarousel';
import MedicalNetwork from './components/MedicalNetwork';
import Discounts from './components/Discounts';
import BestProviders from './components/BestProviders';
import NearbyProviders from './components/NearbyProviders';
import NearbyServices from './components/NearbyServices';
import SuggestedResults from './components/SuggestedResults';
import AvailableDoctors from './components/AvailableDoctors';
import FloatingUrgentConsultation from './components/FloatingUrgentConsultation';
import FloatingMembershipRequest from './components/FloatingMembershipRequest';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Toast, { ToastType } from './components/Toast';

// Lazy load modal components
const BookingsModal = lazy(() => import('./components/BookingsModal'));
const DoctorPlatformModal = lazy(() => import('./components/DoctorPlatformModal'));
const ServiceDetailModal = lazy(() => import('./components/ServiceDetailModal'));

// Lazy load less critical sections
const AboutUs = lazy(() => import('./components/AboutUs'));
const FAQ = lazy(() => import('./components/FAQ'));
const Blog = lazy(() => import('./components/Blog'));

const AppContent: React.FC = () => {
  const { i18n } = useTranslation();
  const [notification, setNotification] = useState<{ message: string; type: ToastType } | null>(null);
  const [isBookingsModalOpen, setIsBookingsModalOpen] = useState(false);
  const [isDoctorPlatformModalOpen, setIsDoctorPlatformModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const notify = useCallback((message: string, type: ToastType = 'info') => {
    setNotification({ message, type });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fcfc]">
      <Header 
        onOpenBookings={() => setIsBookingsModalOpen(true)} 
        onOpenDoctorPlatform={() => setIsDoctorPlatformModalOpen(true)}
      />
      <main className="flex-grow">
        <ErrorBoundary>
          <HeroSlider onOpenBookings={() => setIsBookingsModalOpen(true)} />
        </ErrorBoundary>

        <ErrorBoundary>
          <FeaturesServices 
            onOpenBookings={() => setIsBookingsModalOpen(true)} 
            onOpenService={setSelectedServiceId}
          />
        </ErrorBoundary>

        <ErrorBoundary>
          <PartnersCarousel />
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<div className="py-8" />}>
            <AboutUs />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <MedicalNetwork />
        </ErrorBoundary>

        <ErrorBoundary>
          <SuggestedResults />
        </ErrorBoundary>

        <ErrorBoundary>
          <AvailableDoctors />
        </ErrorBoundary>

        <ErrorBoundary>
          <Discounts notify={notify} />
        </ErrorBoundary>

        <ErrorBoundary>
          <BestProviders />
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<div className="py-8" />}>
            <Blog />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <NearbyProviders />
        </ErrorBoundary>

        <ErrorBoundary>
          <NearbyServices notify={notify} />
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<div className="py-8" />}>
            <FAQ />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />

      <FloatingUrgentConsultation onClick={() => setIsBookingsModalOpen(true)} />
      <FloatingMembershipRequest onClick={() => setSelectedServiceId('membership')} />

      <Suspense fallback={null}>
        <BookingsModal 
          isOpen={isBookingsModalOpen} 
          onClose={() => setIsBookingsModalOpen(false)} 
        />
      </Suspense>

      <Suspense fallback={null}>
        <DoctorPlatformModal
          isOpen={isDoctorPlatformModalOpen}
          onClose={() => setIsDoctorPlatformModalOpen(false)}
        />
      </Suspense>

      <Suspense fallback={null}>
        <ServiceDetailModal 
          isOpen={!!selectedServiceId}
          onClose={() => setSelectedServiceId(null)}
          serviceId={selectedServiceId || ''}
        />
      </Suspense>


      {notification && (
        <Toast
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <AppContent />
    </Suspense>
  );
};

export default App;

import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Quote from './components/Quote';
import ErrorBoundary from './components/ErrorBoundary';
import WaitlistPage from './pages/WaitlistPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

const AppContent: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigation = (ref: React.RefObject<HTMLDivElement>) => {
    scrollToSection(ref);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={
            <>
              <Hero 
                scrollToContact={() => scrollToSection(contactRef)}
                scrollToProjects={() => scrollToSection(projectsRef)}
              />
              <About />
              <Services scrollToContact={() => scrollToSection(contactRef)} />
              <Projects scrollToContact={() => scrollToSection(contactRef)} />
              <Contact />
              <Footer 
                scrollToSection={scrollToSection}
                projectsRef={projectsRef}
                servicesRef={servicesRef}
                contactRef={contactRef}
                handleNavigation={handleNavigation}
              />
            </>
          } />
          <Route path="/waitlist" element={<WaitlistPage />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
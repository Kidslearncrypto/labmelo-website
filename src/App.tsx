import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import WaitlistPage from './pages/WaitlistPage';

const AppContent: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <ErrorBoundary>
        <div style={{ padding: '20px', color: 'green' }}>
          Testing: App is loading...
        </div>
        <Routes>
          <Route path="/" element={
            <>
              <Hero 
                scrollToContact={() => scrollToSection(contactRef)}
                scrollToProjects={() => scrollToSection(projectsRef)}
              />
              <div ref={projectsRef} style={{ height: '100vh', backgroundColor: 'blue', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1>Projects Section</h1>
              </div>
              <div ref={contactRef} style={{ height: '100vh', backgroundColor: 'green', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1>Contact Section</h1>
              </div>
            </>
          } />
          <Route path="/waitlist" element={<WaitlistPage />} />
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
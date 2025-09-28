import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Services from './src/components/Services';
import Projects from './src/components/Projects';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';
import ContactModal from './src/components/ContactModal';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const projectsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openContactModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Router>
      <div className="app">
        <Header 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
          projectsRef={projectsRef}
          servicesRef={servicesRef}
          contactRef={contactRef}
          openContactModal={openContactModal}
        />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero scrollToProjects={() => scrollToSection(projectsRef)} />
                <About />
                <Services scrollToContact={() => scrollToSection(contactRef)} />
                <Projects openContactModal={openContactModal} />
                <Contact />
              </>
            } />
          </Routes>
        </main>
        <Footer 
          scrollToSection={scrollToSection}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          servicesRef={servicesRef}
          contactRef={contactRef}
        />
        <ContactModal setIsModalOpen={setIsModalOpen} />
      </div>
    </Router>
  );
};

export default App; 
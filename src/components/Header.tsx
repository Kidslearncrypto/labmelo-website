import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  projectsRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  openContactModal: () => void;
  handleNavigation: (ref: React.RefObject<HTMLDivElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  scrollToSection,
  projectsRef,
  servicesRef,
  contactRef,
  openContactModal,
  handleNavigation
}) => {
  return (
    <header className="fixed w-full z-50 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
          <Logo />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-white hover:text-purple-300 transition-colors duration-300 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-custom transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <button 
            onClick={() => handleNavigation(projectsRef)}
            className="text-white hover:text-purple-300 transition-colors duration-300 relative group"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-custom transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => handleNavigation(servicesRef)}
            className="text-white hover:text-purple-300 transition-colors duration-300 relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-custom transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => handleNavigation(contactRef)}
            className="text-white hover:text-purple-300 transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-custom transition-all duration-300 group-hover:w-full"></span>
          </button>
          <Link
            to="/quote"
            className="text-white hover:text-purple-400 transition-colors duration-200"
          >
            Get a Quote
          </Link>
        <button 
          onClick={openContactModal}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
        >
            Contact Us
        </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white py-2 hover:text-purple-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <button 
              onClick={() => {
                handleNavigation(projectsRef);
                setIsMenuOpen(false);
              }}
              className="text-white py-2 hover:text-purple-300 transition-colors duration-300 text-left"
            >
              Projects
            </button>
            <button 
              onClick={() => {
                handleNavigation(servicesRef);
                setIsMenuOpen(false);
              }}
              className="text-white py-2 hover:text-purple-300 transition-colors duration-300 text-left"
            >
              Services
            </button>
            <button 
              onClick={() => {
                handleNavigation(contactRef);
                setIsMenuOpen(false);
              }}
              className="text-white py-2 hover:text-purple-300 transition-colors duration-300 text-left"
            >
              Contact
            </button>
            <Link
              to="/quote"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-2 rounded-full bg-white text-black hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-left"
            >
              Get a Quote
            </Link>
            <button 
              onClick={() => {
                openContactModal();
                setIsMenuOpen(false);
              }}
              className="px-6 py-2 rounded-full bg-white text-black hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-left"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
import React from 'react';
import Logo from './Logo';

interface FooterProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  projectsRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  handleNavigation: (ref: React.RefObject<HTMLDivElement>) => void;
}

const Footer: React.FC<FooterProps> = ({
  scrollToSection,
  projectsRef,
  servicesRef,
  contactRef,
  handleNavigation,
}) => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation(projectsRef)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation(servicesRef)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation(contactRef)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: support@labmelo.com</li>

            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms-of-use" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Use
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Labmelo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  scrollToProjects: () => void;
  scrollToContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToProjects, scrollToContact }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-purple-900 z-0"></div>
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-600 opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Let's Build Your Vision,</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">FAST.</span>
          </h1>
          
          <div className="flex flex-col items-center space-y-4 mb-10">
            <div className="flex items-center space-x-2 text-gray-300">
              <Check className="text-green-400" size={24} />
              <p className="text-lg">Build custom apps for Android, iOS, web, or a mix of platforms</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Check className="text-green-400" size={24} />
              <p className="text-lg">Receive a fixed price and precise timelines for your app development project</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Check className="text-green-400" size={24} />
              <p className="text-lg">Tailored marketing strategy as part of your plan  </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-black hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-medium animate-bounce"
              style={{ animationDuration: '2s' }}
            >
              Book your Consultation
            </button>
            <Link
              to="/quote"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-medium animate-bounce"
              style={{ animationDuration: '2s', animationDelay: '0.5s' }}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
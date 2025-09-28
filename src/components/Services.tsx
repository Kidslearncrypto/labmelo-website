import React, { useEffect, useRef, useState } from 'react';
import { 
  Users, 
  Rocket, 
  Clock, 
  BarChart2, 
  Zap,
  Code,
  MessageSquare,
  Target,
  TrendingUp,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServicesProps {
  scrollToContact: () => void;
}

const Services: React.FC<ServicesProps> = ({ scrollToContact }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const aiTools = [
    {
      name: 'Bolt.new',
      description: 'AI-powered development platform for rapid prototyping',
      icon: <Zap size={24} className="text-purple-400" />
    },
    {
      name: 'Cursor',
      description: 'Intelligent code editor with AI assistance',
      icon: <Code size={24} className="text-purple-400" />
    },
    {
      name: 'Native',
      description: 'Cross-platform development framework',
      icon: <Sparkles size={24} className="text-purple-400" />
    },
    {
      name: 'Expo',
      description: 'React Native development platform',
      icon: <Rocket size={24} className="text-purple-400" />
    },
    {
      name: 'Readdy AI',
      description: 'AI-powered content generation',
      icon: <MessageSquare size={24} className="text-purple-400" />
    }
  ];

  const timelineSteps = [
    {
      title: 'Planning & Strategy',
      duration: '2 weeks',
      description: 'Initial consultation and project roadmap development'
    },
    {
      title: 'Design & Prototyping',
      duration: '3 weeks',
      description: 'UI/UX design and interactive prototype creation'
    },
    {
      title: 'Development',
      duration: '6 weeks',
      description: 'Core functionality implementation and testing'
    },
    {
      title: 'Testing & Refinement',
      duration: '2 weeks',
      description: 'Quality assurance and performance optimization'
    },
    {
      title: 'Launch & Marketing',
      duration: '3 weeks',
      description: 'App deployment and marketing campaign execution'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-black z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">What We Do</span>
          </h2>
          
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            We combine expert development with cutting-edge AI tools to deliver high-quality apps within 3 months, backed by a strategic marketing plan.
          </p>
        </div>
        
        {/* 1-on-1 Collaboration */}
        <div className={`mb-12 md:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-br from-gray-900 to-black p-0.5 rounded-xl">
            <div className="bg-black rounded-lg p-6 md:p-8">
              <div className="flex items-center mb-4 md:mb-6">
                <Users size={32} className="text-purple-400 mr-3 md:mr-4" />
                <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  1-on-1 Developer Collaboration
                </h3>
              </div>
              <p className="text-gray-300 text-base md:text-lg">
                Work directly with our expert developers to create a custom plan tailored to your app's needs. We ensure clear communication and personalized attention throughout the development process.
              </p>
            </div>
          </div>
        </div>

        {/* AI Tools */}
        <div className={`mb-12 md:mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            AI-Powered Development Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {aiTools.map((tool, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black p-0.5 rounded-xl group hover:from-purple-600 hover:to-blue-600 transition-all duration-500">
                <div className="bg-black rounded-lg p-4 md:p-6">
                  <div className="flex items-center mb-3 md:mb-4">
                    {tool.icon}
                    <h4 className="text-lg md:text-xl font-bold ml-3 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-500">
                      {tool.name}
                    </h4>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className={`mb-12 md:mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            3-Month Development Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-400 to-blue-400 hidden md:block"></div>
            <div className="space-y-6 md:space-y-8">
              {timelineSteps.map((step, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} md:w-1/2 md:mx-auto`}>
                  <div className="w-full md:w-11/12">
                    <div className={`bg-gradient-to-br from-gray-900 to-black p-0.5 rounded-xl ${index === timelineSteps.length - 1 ? 'animate-pulse' : ''}`}>
                      <div className="bg-black rounded-lg p-4 md:p-6 relative z-10">
                        <div className="flex items-center mb-2">
                          <Clock size={18} className="text-purple-400 mr-2" />
                          <span className="text-purple-400 font-medium text-sm md:text-base">{step.duration}</span>
                        </div>
                        <h4 className="text-lg md:text-xl font-bold mb-2">{step.title}</h4>
                        <p className="text-gray-400 text-sm md:text-base">{step.description}</p>
                      </div>
                      {index === timelineSteps.length - 1 && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 animate-pulse -z-10"></div>
                      )}
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-purple-400 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
                </div>
                
        {/* Marketing Plan */}
        <div className={`mb-12 md:mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-br from-gray-900 to-black p-0.5 rounded-xl">
            <div className="bg-black rounded-lg p-6 md:p-8">
              <div className="flex items-center mb-4 md:mb-6">
                <Target size={32} className="text-purple-400 mr-3 md:mr-4" />
                <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Strategic Marketing Plan
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <TrendingUp size={20} className="text-purple-400 mr-3 mt-1" />
                    <div>
                      <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Social Media Campaigns</h4>
                      <p className="text-gray-400 text-sm md:text-base">Engaging content strategies across multiple platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BarChart2 size={20} className="text-purple-400 mr-3 mt-1" />
                    <div>
                      <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2">App Store Optimization</h4>
                      <p className="text-gray-400 text-sm md:text-base">Optimize visibility and conversion rates</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Users size={20} className="text-purple-400 mr-3 mt-1" />
                    <div>
                      <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2">User Acquisition</h4>
                      <p className="text-gray-400 text-sm md:text-base">Targeted campaigns to reach your ideal users</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Sparkles size={20} className="text-purple-400 mr-3 mt-1" />
                    <div>
                      <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2">SEO Strategy</h4>
                      <p className="text-gray-400 text-sm md:text-base">Improve organic visibility and rankings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mt-8">
            <Link
              to="/quote"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-lg font-medium group"
          >
              <span>Start your project</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
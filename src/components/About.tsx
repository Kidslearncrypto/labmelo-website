import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const About: React.FC = () => {
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

  const teamMembers = [
    {
      name: 'Alex Morgan',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      name: 'Jamie Chen',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      name: 'Sam Wilson',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=600',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#',
      },
    },
  ];

  const coreValues = [
    {
      title: 'Innovation',
      description: 'We push boundaries and embrace new technologies to deliver cutting-edge solutions.',
    },
    {
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality in all our work.',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership with our clients.',
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical practices in all our dealings.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-black z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">About Us</span>
          </h2>
          
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            We are a passionate team of designers, developers, and strategists dedicated to creating exceptional digital experiences. With a focus on innovation and quality, we help businesses transform their ideas into reality and achieve their goals in the digital landscape.
          </p>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-900 to-black p-1 rounded-xl group hover:from-purple-900 hover:to-blue-900 transition-all duration-500"
            >
              <div className="bg-black rounded-lg overflow-hidden p-6">
                <div className="mb-4 relative overflow-hidden rounded-xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                
                <div className="flex space-x-4">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    <Twitter size={20} />
                  </a>
                  <a href={member.social.instagram} className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Our Core Values</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-900 to-black p-0.5 rounded-xl group hover:from-purple-600 hover:to-blue-600 transition-all duration-500"
              >
                <div className="bg-black rounded-lg h-full p-6">
                  <h4 className="text-xl font-bold mb-3 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-500">
                    {value.title}
                  </h4>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
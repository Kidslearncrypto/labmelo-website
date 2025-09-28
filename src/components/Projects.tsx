import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectsProps {
  scrollToContact: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ scrollToContact }) => {
  const projects = [
    {
      title: "Daily Bios",
      description: "An AI-powered platform that provides three daily biographies tailored to your personal growth goals, focusing on communication, creativity, and leadership. Get inspired by remarkable stories and actionable insights.",
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Daily+Bios",
      tags: ["AI/ML", "Personal Growth", "Leadership"]
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2 text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Featured Project
          </h2>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8">
            Discover Daily Bios, our innovative AI-powered application that delivers personalized biographies to inspire your growth journey.
          </p>
            <Link
              to="/quote"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-lg sm:text-xl font-medium"
            >
              Start Yours
            </Link>
          </motion.div>

          {/* Right side - Project card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 sm:h-80 md:h-96">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 break-words">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 break-words">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 text-sm sm:text-base bg-purple-900 text-purple-200 rounded-full"
                    >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/daily-bios"
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-3 text-lg sm:text-xl"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={24} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
'use client';

import { motion } from 'framer-motion';
import { useQuiz } from '@/context/QuizContext';
import { useState } from 'react';

export default function GetTheAppPage() {
  const { answers } = useQuiz();
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const generatePersonalizedMessage = () => {
    const eraText = answers.eras.length > 0 
      ? answers.eras.join(' and ')
      : 'various historical periods';
    
    return `We'll serve you ${answers.feel.toLowerCase()} stories from the ${eraText}.`;
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmailSubmitted(true);
      // In a real app, you'd send this to your backend
      console.log('Email submitted:', email);
    }
  };

  const handleDeepLink = () => {
    // Try to open the app, fallback to store if not installed
    window.location.href = 'dailybios://login';
    
    // Fallback to App Store after a short delay
    setTimeout(() => {
      window.location.href = 'https://apps.apple.com/app/idYOURID';
    }, 2000);
  };

  return (
    <main className="min-h-screen flex flex-col px-4 py-8">
      <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Success Message */}
          <div className="mb-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-olive to-copper rounded-full flex items-center justify-center">
              <span className="text-2xl">✓</span>
            </div>
            <h1 className="font-syne text-3xl md:text-4xl font-bold mb-6">
              Perfect! Here's your personalized plan
            </h1>
            <p className="text-xl text-off-white/80 mb-8">
              {generatePersonalizedMessage()}
            </p>
          </div>

          {/* Download Section */}
          <div className="space-y-6 mb-12">
            <h2 className="font-syne text-2xl font-semibold">
              Get Daily Bios now
            </h2>
            
            <div className="space-y-4">
              <button
                onClick={handleDeepLink}
                className="btn-primary w-full text-lg"
              >
                Open Daily Bios App
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://apps.apple.com/app/idYOURID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="font-medium">Download on the App Store</div>
                  </div>
                </a>
                
                <a
                  href="https://play.google.com/store/apps/details?id=YOUR_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">🤖</div>
                    <div className="font-medium">Get it on Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Email Capture */}
          {!emailSubmitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="card"
            >
              <h3 className="font-syne text-xl font-semibold mb-4">
                Get the download link via email
              </h3>
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-slate/50 border border-white/10 rounded-xl text-off-white placeholder-off-white/50 focus:outline-none focus:border-olive/50"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Email me the download link
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="card bg-olive/10 border-olive/30"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">📧</div>
                <p className="font-medium">Check your email for the download link!</p>
              </div>
            </motion.div>
          )}

          {/* Back to Start */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            <a
              href="/"
              className="text-off-white/60 hover:text-off-white transition-colors"
            >
              ← Back to start
            </a>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}


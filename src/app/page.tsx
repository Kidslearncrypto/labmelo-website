'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your daily dose of history,{' '}
              <span className="bg-gradient-to-r from-olive to-copper bg-clip-text text-transparent">
                reimagined.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-off-white/80 mb-12 max-w-2xl mx-auto">
              Three short biographies a day—tailored to how you like stories told.
            </p>

            {/* Phone Mockup */}
            <div className="relative mb-12">
              <div className="w-64 h-96 mx-auto bg-slate/90 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="h-12 bg-gradient-to-r from-olive to-copper flex items-center justify-center">
                  <div className="w-16 h-1 bg-white/30 rounded-full"></div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-white/10 rounded-full w-3/4"></div>
                  <div className="h-3 bg-white/5 rounded-full w-full"></div>
                  <div className="h-3 bg-white/5 rounded-full w-2/3"></div>
                  <div className="h-20 bg-gradient-to-r from-olive/20 to-copper/20 rounded-xl"></div>
                </div>
              </div>
            </div>

            <Link href="/quiz" className="btn-primary inline-block text-lg">
              Start My Custom Plan
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-4 py-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center"
          >
            <p className="text-off-white/60 mb-6">Trusted by thousands of readers</p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-off-white/40">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-sm">4.8/5</span>
              </div>
              
              <div className="text-sm">
                <span className="font-medium">10,000+</span> daily readers
              </div>
              
              <div className="text-sm">
                Featured in <span className="font-medium">TechCrunch</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}



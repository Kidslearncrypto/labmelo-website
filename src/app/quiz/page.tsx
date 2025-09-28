'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useQuiz } from '@/context/QuizContext';

const quizSteps = [
  {
    id: 'feel',
    question: 'How do you like your stories told?',
    options: [
      'Dramatic movie scene',
      'Gossip from the past',
      'A mystery to solve',
      'Quick shot of inspiration',
      'Epic tale to remember'
    ]
  },
  {
    id: 'eras',
    question: 'Which historical eras interest you most?',
    options: [
      'Ancient',
      'Middle Ages',
      'Renaissance',
      'Enlightenment',
      'Industrial',
      'Modern',
      'No preference'
    ],
    multiSelect: true
  },
  {
    id: 'timePerDay',
    question: 'How much time do you have each day?',
    options: [
      '5 minutes',
      '10 minutes',
      '15 minutes'
    ]
  },
  {
    id: 'goal',
    question: 'What\'s your main goal?',
    options: [
      'Learn smarter',
      'Master power',
      'Enhance creativity',
      'Just curious'
    ]
  }
];

export default function QuizPage() {
  const router = useRouter();
  const { answers, updateAnswer, isComplete } = useQuiz();
  const [currentStep, setCurrentStep] = useState(0);

  const currentQuestion = quizSteps[currentStep];

  const handleOptionSelect = (option: string) => {
    if (currentQuestion.multiSelect) {
      const currentEras = answers.eras;
      const newEras = currentEras.includes(option)
        ? currentEras.filter(era => era !== option)
        : [...currentEras, option];
      updateAnswer('eras', newEras);
    } else {
      updateAnswer(currentQuestion.id as keyof typeof answers, option);
    }
  };

  const handleNext = () => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (isComplete) {
      router.push('/get-the-app');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      router.push('/');
    }
  };

  const isOptionSelected = (option: string) => {
    if (currentQuestion.multiSelect) {
      return answers.eras.includes(option);
    }
    return answers[currentQuestion.id as keyof typeof answers] === option;
  };

  const canProceed = () => {
    if (currentQuestion.multiSelect) {
      return answers.eras.length > 0;
    }
    return answers[currentQuestion.id as keyof typeof answers] !== '';
  };

  const progress = ((currentStep + 1) / quizSteps.length) * 100;

  return (
    <main className="min-h-screen flex flex-col px-4 py-8">
      {/* Progress Bar */}
      <div className="max-w-md mx-auto w-full mb-8">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handleBack}
            className="text-off-white/60 hover:text-off-white transition-colors"
          >
            ← Back
          </button>
          <span className="text-sm text-off-white/60">
            {currentStep + 1} of {quizSteps.length}
          </span>
        </div>
        <div className="w-full bg-slate/50 rounded-full h-1">
          <div 
            className="bg-gradient-to-r from-olive to-copper h-1 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <h2 className="font-syne text-3xl md:text-4xl font-bold mb-12">
                {currentQuestion.question}
              </h2>

              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <motion.div
                    key={option}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => handleOptionSelect(option)}
                      className={`quiz-option w-full text-left p-6 ${
                        isOptionSelected(option) ? 'selected' : ''
                      }`}
                    >
                      <span className="text-lg font-medium">{option}</span>
                    </button>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className={`btn-primary ${
                    !canProceed() ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {currentStep === quizSteps.length - 1 ? 'Get My Results' : 'Continue'}
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}


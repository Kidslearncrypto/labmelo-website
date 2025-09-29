'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface QuizAnswers {
  feel: string;
  eras: string[];
  timePerDay: string;
  goal: string;
}

interface QuizContextType {
  answers: QuizAnswers;
  updateAnswer: (key: keyof QuizAnswers, value: string | string[]) => void;
  isComplete: boolean;
  resetQuiz: () => void;
}

const defaultAnswers: QuizAnswers = {
  feel: '',
  eras: [],
  timePerDay: '',
  goal: '',
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [answers, setAnswers] = useState<QuizAnswers>(defaultAnswers);

  // Load answers from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('quizAnswers');
    if (saved) {
      try {
        setAnswers(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to parse saved quiz answers:', error);
      }
    }
  }, []);

  // Save answers to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
  }, [answers]);

  const updateAnswer = (key: keyof QuizAnswers, value: string | string[]) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const isComplete = answers.feel && answers.eras.length > 0 && answers.timePerDay && answers.goal;

  const resetQuiz = () => {
    setAnswers(defaultAnswers);
    localStorage.removeItem('quizAnswers');
  };

  return (
    <QuizContext.Provider value={{ answers, updateAnswer, isComplete, resetQuiz }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}



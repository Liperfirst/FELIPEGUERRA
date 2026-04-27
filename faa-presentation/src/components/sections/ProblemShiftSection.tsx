"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/content';

interface SectionProps {
  onComplete?: () => void;
  isActive: boolean;
}

export function ProblemShiftSection({ onComplete, isActive }: SectionProps) {
  const { language } = useLanguage();
  const problemContent = translations[language].problem.statements;
  const shiftContent = translations[language].solution;
  
  useEffect(() => {
    if (isActive && onComplete) {
      const timer = setTimeout(() => {
        onComplete();
      }, 7000); // Wait longer for multiple lines
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  return (
    <section className="min-h-screen flex items-center justify-center relative snap-start">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6 mb-20">
          {problemContent.map((statement, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.8, duration: 1 }}
              viewport={{ once: false, amount: 0.8 }}
              className={`text-2xl md:text-4xl font-light ${
                idx >= 2 ? 'text-neutral-300' : 'text-neutral-500'
              }`}
            >
              {statement}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: problemContent.length * 0.8 + 0.5, duration: 1.5 }}
          viewport={{ once: false }}
          className="mt-20 pt-10 border-t border-neutral-800"
        >
          <p className="text-xl md:text-2xl text-neutral-400 mb-2">{shiftContent.subtitle}</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white glow-text">{shiftContent.title}</h2>
        </motion.div>
      </div>
    </section>
  );
}

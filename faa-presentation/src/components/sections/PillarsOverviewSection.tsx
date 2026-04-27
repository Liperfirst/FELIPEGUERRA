"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/content';

interface SectionProps {
  onComplete?: () => void;
  isActive: boolean;
}

export function PillarsOverviewSection({ onComplete, isActive }: SectionProps) {
  const { language } = useLanguage();
  const content = translations[language].pillarsIntro;
  
  useEffect(() => {
    if (isActive && onComplete) {
      const timer = setTimeout(() => {
        onComplete();
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  return (
    <section className="min-h-screen flex items-center justify-center relative snap-start">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.4, duration: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
              className="glass-panel p-10 rounded-3xl flex flex-col items-center text-center justify-center relative overflow-hidden group"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-brand-blue opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl" />
              
              <span className="text-brand-blue text-sm uppercase tracking-widest font-semibold mb-4 glow-text-blue">
                {pillar.action}
              </span>
              <h3 className="text-2xl md:text-3xl font-light text-white">
                {pillar.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          viewport={{ once: false }}
          className="mt-20 text-center"
        >
          <p className="text-3xl md:text-5xl font-light text-white leading-relaxed whitespace-pre-line">
            {content.conclusion}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

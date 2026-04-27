"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/content';
import { CinematicText } from '../ui/CinematicText';

interface SectionProps {
  onComplete?: () => void;
  isActive: boolean;
}

export function OpeningSection({ onComplete, isActive }: SectionProps) {
  const { language } = useLanguage();
  const content = translations[language].hero;
  
  // Since we want to control the flow, we can signal when this section finishes its animation
  useEffect(() => {
    if (isActive && onComplete) {
      // It takes about 3 seconds for the cinematic text to reveal. 
      // Add 2 seconds pause.
      const timer = setTimeout(() => {
        onComplete();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  return (
    <section className="min-h-screen flex items-center justify-center relative snap-start">
      <div className="text-center">
        <CinematicText 
          text={content.title.join('\n')} 
          className="text-4xl md:text-6xl lg:text-7xl font-light tracking-widest text-white leading-tight"
          glow={true}
        />
        
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 2.5, duration: 1.5 }}
          viewport={{ once: false }}
          className="mt-12 text-xl md:text-2xl text-neutral-400 font-light"
        >
          {content.subtitle}
        </motion.div>
      </div>
    </section>
  );
}

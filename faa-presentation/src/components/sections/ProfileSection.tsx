"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/content';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

interface SectionProps {
  isActive: boolean;
  onComplete: () => void;
}

const SECTION_DURATION = 12000;

export function ProfileSection({ isActive, onComplete }: SectionProps) {
  const { language } = useLanguage();
  const t = translations[language].profile;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive) {
      timer = setTimeout(onComplete, SECTION_DURATION);
    }
    return () => clearTimeout(timer);
  }, [isActive, onComplete]);

  return (
    <Section className="min-h-screen bg-black flex items-center">
      <FadeIn className="w-full max-w-6xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-[60px] transform -translate-x-4 translate-y-4 pointer-events-none" />
              <div className="relative w-full h-full rounded-full border border-white/10 overflow-hidden bg-neutral-900 flex items-center justify-center group shadow-2xl">
                {/* 
                  Fallback if no image is present. 
                  The user can place profile.jpg in public/ folder to override this abstract placeholder.
                */}
                <img 
                  src="/profile.jpg" 
                  alt="Felipe Guerra"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback visual if image is missing
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'text-7xl font-light text-neutral-700 tracking-widest';
                      fallback.innerText = 'FG';
                      parent.appendChild(fallback);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-2 tracking-tight">
              {t.headline}
            </h2>
            <h3 className="text-lg md:text-xl text-brand-blue font-light tracking-wide mb-10">
              {t.subheadline}
            </h3>

            <div className="space-y-5 mb-12">
              {t.points.map((point: string, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex items-start gap-4 text-left"
                >
                  <CheckCircle2 className="w-5 h-5 text-neutral-600 shrink-0 mt-0.5" />
                  <span className="text-neutral-300 font-light text-lg">{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pl-6 border-l-2 border-brand-blue/50 text-left"
            >
              <p className="text-xl md:text-2xl font-light text-white italic leading-relaxed">
                "{t.quote}"
              </p>
            </motion.div>
          </div>

        </div>

      </FadeIn>
    </Section>
  );
}

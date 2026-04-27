"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/content';
import { Mail, Phone } from 'lucide-react';

interface SectionProps {
  onComplete?: () => void;
  isActive: boolean;
}

export function FinalSection({ onComplete, isActive }: SectionProps) {
  const { language } = useLanguage();
  const content = translations[language].conclusion;
  
  useEffect(() => {
    if (isActive && onComplete) {
      // This is the last section, we don't necessarily need to trigger complete,
      // but we do it for consistency.
      const timer = setTimeout(() => {
        onComplete();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  return (
    <section className="min-h-screen flex items-center justify-center relative snap-start bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/10 via-black to-black opacity-60 pointer-events-none" />
      
      <div className="text-center px-6 max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight">
            {content.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: false }}
          className="text-xl md:text-2xl font-light text-neutral-400 mb-16 leading-relaxed max-w-3xl mx-auto whitespace-pre-line"
        >
          {content.text}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: false }}
          className="flex flex-col items-center justify-center gap-10"
        >
          {/* Main CTA */}
          <button className="px-10 py-5 rounded-full bg-white text-black font-medium text-xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center gap-3 group">
            {content.cta}
          </button>

          {/* Elegant Contact Cards */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 w-full">
            <a href={`mailto:${content.contacts.email}`} className="flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-900/60 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-all group">
              <Mail className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-light text-neutral-300 group-hover:text-white transition-colors">{content.contacts.email}</span>
            </a>
            
            <a href={`tel:${content.contacts.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-900/60 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-all group">
              <Phone className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-light text-neutral-300 group-hover:text-white transition-colors">{content.contacts.phone}</span>
            </a>
            
            <a href={`https://instagram.com/${content.contacts.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-900/60 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-all group">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-neutral-400 group-hover:text-white transition-colors"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <span className="text-sm font-light text-neutral-300 group-hover:text-white transition-colors">{content.contacts.instagram}</span>
            </a>
          </div>

          {/* Microcopy */}
          {/* @ts-ignore - microcopy was added to content.ts */}
          {content.microcopy && (
            <p className="mt-8 text-sm text-neutral-500 font-light max-w-md text-center">
              {content.microcopy}
            </p>
          )}

        </motion.div>
      </div>
    </section>
  );
}

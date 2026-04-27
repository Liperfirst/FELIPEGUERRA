"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, Language } from '@/context/LanguageContext';

interface LanguageSelectorProps {
  onStart: () => void;
}

export function LanguageSelector({ onStart }: LanguageSelectorProps) {
  const { language, setLanguage, t } = useLanguage();

  const languages: { id: Language; label: string }[] = [
    { id: 'en', label: 'English' },
    { id: 'es', label: 'Español' },
    { id: 'pt', label: 'Português' }
  ];

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020202]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)", transition: { duration: 0.8, ease: "easeInOut" } }}
      >
        {/* Subtle background glow just for this screen */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-[#020202] to-[#020202] pointer-events-none" />

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative z-10 text-center max-w-lg px-6"
        >
          <h1 className="text-3xl md:text-4xl font-light tracking-wide text-white mb-2 glow-text">
            Formação <span className="text-neutral-500">·</span> Adoração <span className="text-neutral-500">·</span> Alcance
          </h1>
          <p className="text-neutral-400 text-sm md:text-base font-light mb-12">
            Uma proposta estratégica para formação, adoração e alcance.
          </p>

          <div className="flex flex-col gap-8 items-center">
            <div className="flex gap-4">
              {languages.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setLanguage(l.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    language === l.id 
                      ? 'bg-white text-black font-medium' 
                      : 'bg-transparent text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-600'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <motion.button
              onClick={onStart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-neutral-800 to-neutral-900 border border-neutral-700 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow duration-300 flex items-center gap-2"
            >
              <span className="text-lg">👉</span>
              <span>{t('start')}</span>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

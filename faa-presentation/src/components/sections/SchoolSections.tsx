"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/data/content';
import { Users, GraduationCap, DollarSign, TrendingUp, Music } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
  onComplete: () => void;
}

const SECTION_DURATION = 8000;

export function SchoolOverviewSection({ isActive, onComplete }: SectionProps) {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language].school;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive) {
      timer = setTimeout(onComplete, SECTION_DURATION);
    }
    return () => clearTimeout(timer);
  }, [isActive, onComplete]);

  return (
    <Section className="min-h-screen flex items-center">
      <FadeIn delay={0.2} className="max-w-4xl">
        <div className={`max-w-4xl ${theme === 'experience' ? 'bg-black/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] mb-12' : 'mb-12'}`}>
          <h2 className="text-sm font-medium tracking-widest text-brand-blue uppercase mb-4">
            Pilar 2
          </h2>
          <h1 className={`text-4xl md:text-6xl font-light text-white mb-6 leading-tight ${theme === 'experience' ? 'glow-text-experience' : ''}`}>
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 font-light mb-8 max-w-2xl">
            {t.subtitle}
          </p>
          <div className={`h-px w-24 bg-gradient-to-r ${theme === 'experience' ? 'from-pink-500' : 'from-brand-blue'} to-transparent mb-8`} />
          <p className="text-lg text-neutral-300 font-light leading-relaxed max-w-3xl">
            {t.overview}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`glass-panel p-6 rounded-2xl border ${theme === 'experience' ? 'border-pink-500/20' : 'border-white/5'}`}>
            <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
              <Music className={theme === 'experience' ? 'text-pink-500' : 'text-brand-blue'} />
              {t.opportunity.title}
            </h3>
            <ul className="space-y-3">
              {t.opportunity.stats.map((stat, idx) => (
                <li key={idx} className="text-neutral-400 font-light text-sm flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${theme === 'experience' ? 'bg-pink-500/50' : 'bg-brand-blue/50'} shrink-0`} />
                  {stat}
                </li>
              ))}
            </ul>
          </div>
          <div className={`glass-panel p-6 rounded-2xl border ${theme === 'experience' ? 'border-purple-500/20' : 'border-white/5'}`}>
            <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
              <GraduationCap className={theme === 'experience' ? 'text-purple-500' : 'text-brand-blue'} />
              {t.methodology.title}
            </h3>
            <ul className="space-y-3">
              {t.methodology.points.map((point, idx) => (
                <li key={idx} className="text-neutral-400 font-light text-sm flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${theme === 'experience' ? 'bg-purple-500/50' : 'bg-brand-blue/50'} shrink-0`} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

export function SchoolSimulatorSection({ isActive, onComplete }: SectionProps) {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language].school.simulator;
  const destiny = translations[language].school.destiny;
  
  const [students, setStudents] = useState(t.baseStudents);
  
  const revenue = students * t.costPerStudent;
  const profit = revenue - t.costPerTeacher;

  // Em modo automático, não avança rápido, dá tempo pro usuário brincar ou observar
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive) {
      // 12 seconds to allow interaction
      timer = setTimeout(onComplete, 12000);
    }
    return () => clearTimeout(timer);
  }, [isActive, onComplete]);

  return (
    <Section className="min-h-screen flex flex-col justify-center">
      <FadeIn>
        <div className={`text-center mb-12 max-w-4xl mx-auto ${theme === 'experience' ? 'bg-black/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' : ''}`}>
          <h2 className={`text-3xl md:text-4xl font-light text-white mb-4 ${theme === 'experience' ? 'glow-text-experience' : ''}`}>
            {t.title}
          </h2>
          <p className="text-neutral-300 font-light max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto w-full">
          {/* Simulator Card */}
          <div className={`glass-panel p-8 rounded-3xl border ${theme === 'experience' ? 'border-purple-500/30 bg-purple-500/5 shadow-[0_0_40px_rgba(168,85,247,0.15)]' : 'border-brand-blue/20 bg-brand-blue/5'}`}>
            <div className="mb-8">
              <label className="flex justify-between text-sm font-medium text-neutral-300 mb-4">
                <span>{t.labels.students}</span>
                <span className={`text-xl ${theme === 'experience' ? 'text-purple-400' : 'text-brand-blue'}`}>{students}</span>
              </label>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={students}
                onChange={(e) => setStudents(parseInt(e.target.value))}
                className={`w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer ${theme === 'experience' ? 'accent-purple-500' : 'accent-brand-blue'}`}
              />
              <div className="flex justify-between text-xs text-neutral-500 mt-2">
                <span>5</span>
                <span>{t.labels.breakeven} ({t.baseStudents})</span>
                <span>30</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 rounded-xl bg-black/40 border border-white/5">
                <div className="flex items-center gap-3">
                  <DollarSign className="text-green-400 w-5 h-5" />
                  <span className="text-neutral-300">{t.labels.revenue}</span>
                </div>
                <span className="text-xl text-white font-light">${revenue}</span>
              </div>
              <div className="flex justify-between items-center p-4 rounded-xl bg-black/40 border border-white/5">
                <div className="flex items-center gap-3">
                  <Users className="text-neutral-400 w-5 h-5" />
                  <span className="text-neutral-300">{t.labels.cost}</span>
                </div>
                <span className="text-xl text-white font-light">${t.costPerTeacher}</span>
              </div>
              <div className={`flex justify-between items-center p-5 rounded-xl border transition-all ${profit >= 0 ? (theme === 'experience' ? 'bg-purple-500/10 border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]' : 'bg-brand-blue/10 border-brand-blue/30') : 'bg-red-500/10 border-red-500/30'}`}>
                <div className="flex items-center gap-3">
                  <TrendingUp className={profit >= 0 ? (theme === 'experience' ? 'text-purple-400 w-6 h-6' : 'text-brand-blue w-6 h-6') : 'text-red-400 w-6 h-6'} />
                  <span className="text-white font-medium">{t.labels.profit}</span>
                </div>
                <span className={`text-2xl font-light ${profit >= 0 ? (theme === 'experience' ? 'text-purple-400' : 'text-brand-blue') : 'text-red-400'}`}>
                  ${profit}
                </span>
              </div>
            </div>
          </div>

          {/* Destiny Card */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-light text-white mb-8">{destiny.title}</h3>
            <div className="space-y-6">
              {destiny.items.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center shrink-0 ${theme === 'experience' ? 'bg-purple-500/10 border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]' : 'bg-white/5 border-white/10'}`}>
                    <span className={`text-sm font-medium ${theme === 'experience' ? 'text-purple-400' : 'text-brand-blue'}`}>{idx + 1}</span>
                  </div>
                  <span className="text-neutral-300 font-light text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

export const schoolSections = [
  SchoolOverviewSection,
  SchoolSimulatorSection
];

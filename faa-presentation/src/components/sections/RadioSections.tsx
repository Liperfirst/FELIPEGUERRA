"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/content';
import { Radio, Globe, Headphones, Play, Pause, DollarSign, Calendar } from 'lucide-react';

import { RadioSimulatorSection } from './RadioSimulatorSection';

interface SectionProps {
  isActive: boolean;
  onComplete: () => void;
}

const SECTION_DURATION = 8000;

export function RadioOverviewSection({ isActive, onComplete }: SectionProps) {
  const { language } = useLanguage();
  const t = translations[language].radio;
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive) {
      timer = setTimeout(onComplete, SECTION_DURATION + 4000);
    }
    return () => clearTimeout(timer);
  }, [isActive, onComplete]);

  return (
    <Section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Reach Visual */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-[600px] h-[600px] bg-white/10 rounded-full blur-[80px]" 
        />
      </div>

      <FadeIn delay={0.2} className="w-full max-w-6xl mx-auto z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-medium tracking-widest text-brand-blue uppercase mb-4">
            Pilar 3
          </h2>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 font-light mb-8 max-w-2xl">
            {t.subtitle}
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-brand-blue to-transparent mb-8" />
          <p className="text-lg text-neutral-300 font-light leading-relaxed mb-12">
            {t.overview}
          </p>

          <div className="grid grid-cols-2 gap-6">
            {t.stats.map((stat, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5">
                <span className="text-3xl font-light text-white block mb-2">{stat.value}</span>
                <span className="text-sm text-neutral-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Player */}
        <div className="flex flex-col items-center">
          <div className="glass-panel w-full max-w-sm p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex justify-between items-center mb-8 relative z-10">
              <span className="text-xs font-medium tracking-wider text-brand-blue uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                Live Demo
              </span>
              <Radio className="text-neutral-500 w-5 h-5" />
            </div>

            <div className="text-center mb-8 relative z-10">
              <h3 className="text-2xl font-medium text-white mb-2">New Beginning Radio</h3>
              <p className="text-neutral-400 text-sm">Esperanza y Verdad · Hope and Truth</p>
            </div>

            <div className="flex justify-center mb-8 relative z-10">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 rounded-full bg-brand-blue text-black flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_30px_rgba(var(--brand-blue-rgb),0.3)]"
              >
                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
              </button>
            </div>

            <div className="space-y-2 relative z-10">
              {t.programming.slice(0,3).map((prog, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-neutral-400 p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <Headphones className="w-4 h-4" />
                  <span>{prog}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

export function RadioCostsSection({ isActive, onComplete }: SectionProps) {
  const { language } = useLanguage();
  const t = translations[language].radio.costs;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive) {
      timer = setTimeout(onComplete, SECTION_DURATION);
    }
    return () => clearTimeout(timer);
  }, [isActive, onComplete]);

  return (
    <Section className="min-h-screen flex flex-col justify-center">
      <FadeIn className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            {t.title}
          </h2>
          <p className="text-neutral-400 font-light max-w-2xl mx-auto">
            Uma das maiores vantagens para uma organização sem fins lucrativos: 
            operações licenciadas e sustentáveis com custos mínimos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Breakdown */}
          <div className="space-y-4">
            {t.items.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-5 rounded-2xl glass-panel border border-white/5 hover:border-white/10 transition-colors">
                <span className="text-neutral-300 font-light text-lg">{item.name}</span>
                <span className="text-white font-medium">${item.cost}</span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="flex flex-col gap-6">
            <div className="glass-panel p-8 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 flex-1 flex flex-col justify-center items-center text-center">
              <span className="text-neutral-400 uppercase tracking-widest text-xs mb-4">Custo Total Anual</span>
              <span className="text-5xl md:text-7xl font-light text-white mb-4">${t.total}</span>
              <span className="text-brand-blue font-medium bg-brand-blue/10 px-4 py-1 rounded-full text-sm">
                ~${t.monthly} / mês
              </span>
            </div>
            <div className="text-center p-4">
              <p className="text-neutral-500 font-light text-sm italic">
                * Estimativas baseadas nas tabelas de webcasters não-comerciais.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

export function RadioTimelineSection({ isActive, onComplete }: SectionProps) {
  const { language } = useLanguage();
  const t = translations[language].radio.timeline;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive) {
      timer = setTimeout(onComplete, SECTION_DURATION);
    }
    return () => clearTimeout(timer);
  }, [isActive, onComplete]);

  return (
    <Section className="min-h-screen flex flex-col justify-center">
      <FadeIn className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Timeline de Implementação (12 Meses)
          </h2>
          <p className="text-neutral-400 font-light max-w-2xl mx-auto">
            A rádio não nasce pronta. Ela nasce como um processo estruturado.
          </p>
        </div>

        <div className="relative border-l border-white/10 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0 md:grid md:grid-cols-4 md:gap-8">
          {/* Mobile line is handled by border-l, Desktop needs a horizontal line */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/10 z-0" />
          
          {t.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 mb-12 md:mb-0"
            >
              {/* Dot */}
              <div className="absolute -left-10 md:-left-0 md:mx-auto md:relative w-4 h-4 rounded-full bg-brand-blue shadow-[0_0_15px_rgba(var(--brand-blue-rgb),0.5)] md:mt-4 md:mb-6" />
              
              <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-black/40 text-center">
                <span className="text-brand-blue font-medium text-lg block mb-2">{step.phase}</span>
                <span className="text-neutral-300 font-light">{step.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}

export const radioSections = [
  RadioOverviewSection,
  RadioSimulatorSection,
  RadioTimelineSection
];

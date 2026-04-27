"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/content';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

import { WorshipVisualSystemSection } from './WorshipVisualSystemSection';

interface SectionProps {
  isActive: boolean;
  onComplete: () => void;
}

const SECTION_DURATION = 8000;

export function WorshipOverviewSection({ isActive, onComplete }: SectionProps) {
  const { language } = useLanguage();
  const t = translations[language].worship;

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
        <h2 className="text-sm font-medium tracking-widest text-brand-blue uppercase mb-4">
          Pilar 1
        </h2>
        <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
          {t.title}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 font-light mb-8 max-w-2xl">
          {t.subtitle}
        </p>
        <div className="h-px w-24 bg-gradient-to-r from-brand-blue to-transparent mb-8" />
        <p className="text-lg text-neutral-300 font-light leading-relaxed max-w-3xl">
          {t.overview}
        </p>
      </FadeIn>
    </Section>
  );
}

export function WorshipProblemSolutionSection({ isActive, onComplete }: SectionProps) {
  const { language } = useLanguage();
  const t = translations[language].worship;
  const ui = translations[language].ui;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive) {
      timer = setTimeout(onComplete, SECTION_DURATION + 2000);
    }
    return () => clearTimeout(timer);
  }, [isActive, onComplete]);

  return (
    <Section className="min-h-screen flex flex-col justify-center">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-light text-white mb-12 text-center">
          {t.problemSolution.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto w-full">
          {/* Before */}
          <div className="glass-panel p-8 rounded-2xl border border-red-500/10 bg-red-500/5">
            <h3 className="text-xl font-medium text-red-400 mb-6 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              {ui.before}
            </h3>
            <ul className="space-y-6">
              {t.problemSolution.before.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2 shrink-0" />
                  <span className="text-neutral-300 font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="glass-panel p-8 rounded-2xl border border-brand-blue/20 bg-brand-blue/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[100px] rounded-full" />
            <h3 className="text-xl font-medium text-brand-blue mb-6 flex items-center gap-2 relative z-10">
              <CheckCircle2 className="w-5 h-5" />
              {ui.after}
            </h3>
            <ul className="space-y-6 relative z-10">
              {t.problemSolution.after.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
                  <span className="text-white font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

export function WorshipFlowSection({ isActive, onComplete }: SectionProps) {
  const { language } = useLanguage();
  const t = translations[language].worship;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive) {
      timer = setTimeout(onComplete, SECTION_DURATION + 2000);
    }
    return () => clearTimeout(timer);
  }, [isActive, onComplete]);

  const steps = [
    { title: "App", subtitle: "Preparação" },
    { title: "Ensaio", subtitle: "Construção" },
    { title: "Culto", subtitle: "Adoração" },
    { title: "Avaliação", subtitle: "Ajuste" }
  ];

  return (
    <Section className="min-h-screen flex flex-col justify-center">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-light text-white mb-16 text-center">
          Fluxo de Preparação Contínua
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto w-full">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/5 text-center w-full md:w-48 relative overflow-hidden group hover:border-brand-blue/30 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/0 to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-xl font-medium text-white mb-2">{step.title}</h4>
                <p className="text-sm text-neutral-400">{step.subtitle}</p>
              </motion.div>
              
              {idx < steps.length - 1 && (
                <div className="hidden md:flex text-neutral-600">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
              {idx < steps.length - 1 && (
                <div className="md:hidden w-px h-8 bg-neutral-800" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6">
            <h3 className="text-xl font-medium text-white mb-4">{t.roles.title}</h3>
            <div className="space-y-4">
              {t.roles.items.map((role, idx) => (
                <div key={idx} className="border-l-2 border-neutral-800 pl-4">
                  <h4 className="text-brand-blue font-medium">{role.role}</h4>
                  <p className="text-sm text-neutral-400 mt-1">{role.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 glass-panel rounded-2xl border border-white/5">
            <h3 className="text-xl font-medium text-white mb-4">{t.cycle.title}</h3>
            <ul className="space-y-3">
              {t.cycle.points.map((point, idx) => (
                <li key={idx} className="text-neutral-300 font-light text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-blue shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <ul className="space-y-2">
                {t.features.map((feat, idx) => (
                  <li key={idx} className="text-xs text-neutral-500 font-medium tracking-wide uppercase">
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

export const worshipSections = [
  WorshipOverviewSection,
  WorshipProblemSolutionSection,
  WorshipVisualSystemSection,
  WorshipFlowSection
];

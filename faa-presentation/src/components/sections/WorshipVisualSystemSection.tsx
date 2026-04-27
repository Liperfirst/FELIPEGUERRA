"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../ui/Section';
import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/data/content';
import { Play, Square, Activity, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
  onComplete: () => void;
}

const SECTION_DURATION = 12000;
const SONG_DURATION = 30; // 30 seconds demo

interface SongSection {
  name: string;
  start: number;
  end: number;
  color: string;
}

const SONG_SECTIONS: SongSection[] = [
  { name: 'Intro', start: 0, end: 5, color: 'bg-neutral-600 text-white' },
  { name: 'Verso', start: 5, end: 12, color: 'bg-brand-blue/40 text-brand-blue' },
  { name: 'Refrão', start: 12, end: 20, color: 'bg-brand-blue text-white' },
  { name: 'Ponte', start: 20, end: 26, color: 'bg-purple-500 text-white' },
  { name: 'Final', start: 26, end: 30, color: 'bg-neutral-600 text-white' },
];

export function WorshipVisualSystemSection({ isActive, onComplete }: SectionProps) {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language].worship.visualSystem;
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [beatPulse, setBeatPulse] = useState(false);
  
  const currentSectionIndex = SONG_SECTIONS.findIndex(s => currentTime >= s.start && currentTime < s.end);
  const currentSection = SONG_SECTIONS[currentSectionIndex] || SONG_SECTIONS[SONG_SECTIONS.length - 1];
  const nextSection = SONG_SECTIONS[currentSectionIndex + 1];
  
  const timeToNext = nextSection ? Math.ceil(nextSection.start - currentTime) : 0;
  const isTransitioning = timeToNext > 0 && timeToNext <= 4; // 4 seconds countdown

  // Auto-complete logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && !isPlaying) {
      timer = setTimeout(onComplete, SECTION_DURATION);
    }
    return () => clearTimeout(timer);
  }, [isActive, isPlaying, onComplete]);

  // Simulator playback logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= SONG_DURATION) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.1; // 100ms updates
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // BPM Pulse (120 BPM = 2 beats per second = every 500ms)
  useEffect(() => {
    let pulseInterval: NodeJS.Timeout;
    if (isPlaying) {
      pulseInterval = setInterval(() => {
        setBeatPulse(true);
        setTimeout(() => setBeatPulse(false), 150);
      }, 500);
    }
    return () => clearInterval(pulseInterval);
  }, [isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setCurrentTime(0);
    } else {
      // Simulate user scroll to disable auto-mode globally if they interact
      window.dispatchEvent(new Event('wheel'));
      setIsPlaying(true);
      if (currentTime >= SONG_DURATION) setCurrentTime(0);
    }
  };

  return (
    <Section className="min-h-screen py-24 flex flex-col justify-center">
      <FadeIn>
        <div className={`text-center mb-12 max-w-4xl mx-auto ${theme === 'experience' ? 'bg-black/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' : ''}`}>
          <h2 className={`text-3xl md:text-5xl font-light text-white mb-4 ${theme === 'experience' ? 'glow-text-experience' : ''}`}>
            {t.title}
          </h2>
          <p className="text-xl text-brand-blue font-light max-w-2xl mx-auto mb-6">
            {t.subtitle}
          </p>
          <p className="text-lg text-neutral-300 font-light max-w-3xl mx-auto">
            {t.overview}
          </p>
        </div>

        {/* Interactive Simulator UI */}
        <div className="max-w-4xl mx-auto w-full mb-16">
          <motion.div 
            animate={{ 
              scale: theme === 'experience' && beatPulse ? 1.02 : 1,
              backgroundColor: theme === 'experience' && isPlaying 
                ? ['rgba(236, 72, 153, 0.05)', 'rgba(34, 211, 238, 0.1)', 'rgba(168, 85, 247, 0.1)', 'rgba(255, 102, 0, 0.05)', 'rgba(236, 72, 153, 0.05)'][currentSectionIndex % 5]
                : 'rgba(23, 23, 23, 0.5)' // bg-neutral-900/50
            }}
            transition={{ duration: 0.2 }}
            className={`glass-panel p-1 rounded-3xl border transition-colors duration-500 shadow-2xl relative overflow-hidden group ${theme === 'experience' ? 'border-cyan-500/20' : 'border-white/10'}`}
          >
            {/* Ambient Glow */}
            <div className={`absolute inset-0 bg-gradient-to-b opacity-50 ${theme === 'experience' ? 'from-pink-500/10 via-transparent to-cyan-500/10' : 'from-brand-blue/5 to-transparent'}`} />
            
            <div className="relative p-8 md:p-12 z-10">
              
              {/* Header Info */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${isPlaying ? (theme === 'experience' ? 'bg-cyan-400 animate-pulse drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'bg-red-500 animate-pulse') : 'bg-neutral-600'}`} />
                  <span className="text-sm font-medium tracking-widest uppercase text-neutral-400">
                    Live Demo
                  </span>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">BPM</span>
                    <div className={`text-xl font-mono transition-colors duration-100 ${beatPulse ? (theme === 'experience' ? 'text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]' : 'text-brand-blue') : 'text-white'}`}>
                      120
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-neutral-500 uppercase tracking-widest block mb-1">Time</span>
                    <div className="text-xl font-mono text-white">
                      4/4
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Visual Display */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                
                {/* Current Section Bubble */}
                <div className={`flex-1 w-full h-40 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 border ${theme === 'experience' ? 'border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]' : 'border-white/10'} ${currentSection.color} ${beatPulse ? (theme === 'experience' ? 'scale-105 shadow-[0_0_50px_rgba(255,255,255,0.2)]' : 'scale-[1.02]') : 'scale-100'}`}>
                  <span className="text-sm uppercase tracking-widest opacity-80 mb-2">Atual</span>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                    {currentSection.name}
                  </h3>
                </div>

                {/* Countdown / Next Section */}
                <div className="flex-1 w-full h-40 glass-panel rounded-2xl flex flex-col items-center justify-center border border-white/5 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    {isTransitioning ? (
                      <motion.div 
                        key="countdown"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2 }}
                        className="text-center"
                      >
                        <span className="text-brand-blue uppercase tracking-widest text-sm font-medium block mb-2">
                          {t.nextSection}: {nextSection?.name}
                        </span>
                        <div className="text-6xl font-bold text-white">
                          {timeToNext}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="next"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center text-neutral-500"
                      >
                        <span className="uppercase tracking-widest text-xs block mb-2">
                          {t.nextSection}
                        </span>
                        <div className="text-2xl font-light">
                          {nextSection?.name || '--'}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative h-2 bg-neutral-800 rounded-full mb-8 overflow-hidden">
                {/* Sections markers */}
                {SONG_SECTIONS.map((section, idx) => (
                  <div 
                    key={idx}
                    className="absolute top-0 bottom-0 border-r border-black/50 opacity-30"
                    style={{ 
                      left: `${(section.start / SONG_DURATION) * 100}%`,
                      width: `${((section.end - section.start) / SONG_DURATION) * 100}%`,
                      backgroundColor: idx % 2 === 0 ? 'white' : 'transparent'
                    }}
                  />
                ))}
                
                {/* Progress Bar */}
                <div 
                  className="absolute top-0 left-0 bottom-0 bg-brand-blue transition-all duration-100 ease-linear"
                  style={{ width: `${(currentTime / SONG_DURATION) * 100}%` }}
                >
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/50" />
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-center">
                <button
                  onClick={togglePlay}
                  className="flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform"
                >
                  {isPlaying ? (
                    <>
                      <Square size={18} className="fill-black" />
                      Parar Simulação
                    </>
                  ) : (
                    <>
                      <Play size={18} className="fill-black" />
                      {t.simulateBtn}
                    </>
                  )}
                </button>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Before / After Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div className="glass-panel p-8 rounded-2xl border border-red-500/10">
            <h3 className="text-xl font-medium text-neutral-400 mb-6 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-400" />
              {t.before.title}
            </h3>
            <ul className="space-y-4">
              {t.before.points.map((point: string, idx: number) => (
                <li key={idx} className="flex gap-3 text-neutral-500 font-light">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-red-500/50 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-brand-blue/20 bg-brand-blue/5">
            <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-blue" />
              {t.after.title}
            </h3>
            <ul className="space-y-4">
              {t.after.points.map((point: string, idx: number) => (
                <li key={idx} className="flex gap-3 text-neutral-200 font-light">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-blue shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quotes */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {t.quotes.map((quote: string, idx: number) => (
            <p key={idx} className={`text-xl md:text-2xl font-light ${idx === 2 ? 'text-brand-blue' : 'text-neutral-400'}`}>
              "{quote}"
            </p>
          ))}
        </div>

      </FadeIn>
    </Section>
  );
}

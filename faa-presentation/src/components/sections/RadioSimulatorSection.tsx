"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../ui/Section';
import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { translations, Language } from '@/data/content';
import { Play, Pause, Radio, Globe, Activity, CheckCircle2, XCircle, Users, Headphones, MessagesSquare, Share2, MapPin, ArrowRight } from 'lucide-react';

interface SectionProps {
  isActive: boolean;
  onComplete: () => void;
}

const SECTION_DURATION = 20000; // 20 seconds to give enough time to explore

type ProgramId = "live" | "replay" | "interview" | "music" | "devotional" | "kids" | "prayer";

export function RadioSimulatorSection({ isActive, onComplete }: SectionProps) {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language].radio.radioSimulator;
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeProgram, setActiveProgram] = useState<ProgramId>('live');
  const [simLang, setSimLang] = useState<Language>('en'); // 'en', 'es', 'pt'
  
  // Auto-complete logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && !isPlaying) {
      timer = setTimeout(onComplete, SECTION_DURATION);
    }
    return () => clearTimeout(timer);
  }, [isActive, isPlaying, onComplete]);

  // Disable auto-mode globally on interaction
  const handleInteraction = () => {
    window.dispatchEvent(new Event('wheel'));
  };

  const togglePlay = () => {
    handleInteraction();
    setIsPlaying(!isPlaying);
  };

  const selectProgram = (id: ProgramId) => {
    handleInteraction();
    setActiveProgram(id);
    setIsPlaying(true);
  };

  const currentProgramData = t.programs.find((p: any) => p.id === activeProgram) || t.programs[0];

  // Animated Waveform Component
  const Waveform = ({ active }: { active: boolean }) => {
    const barCount = theme === 'experience' ? 24 : 12;
    return (
      <div className="flex items-center gap-1 h-12">
        {[...Array(barCount)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-1.5 rounded-full ${theme === 'experience' ? 'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]' : 'bg-brand-blue'}`}
            animate={{
              height: active ? [
                Math.random() * (theme === 'experience' ? 40 : 24) + 8, 
                Math.random() * (theme === 'experience' ? 64 : 40) + 8, 
                Math.random() * (theme === 'experience' ? 40 : 24) + 8
              ] : 8,
              backgroundColor: theme === 'experience' && active ? [
                '#22d3ee', // cyan
                '#ec4899', // pink
                '#a855f7', // purple
                '#22d3ee'
              ] : theme === 'experience' ? '#22d3ee' : '#0ea5e9'
            }}
            transition={{
              duration: theme === 'experience' ? (Math.random() * 0.3 + 0.2) : 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: theme === 'experience' ? "circInOut" : "easeInOut",
              delay: i * (theme === 'experience' ? 0.02 : 0.1)
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <Section className="min-h-screen py-24 flex flex-col justify-center">
      <FadeIn>
        <div className={`text-center mb-12 max-w-4xl mx-auto ${theme === 'experience' ? 'bg-black/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' : ''}`}>
          <h2 className={`text-3xl md:text-5xl font-light text-white mb-4 ${theme === 'experience' ? 'glow-text-experience' : ''}`}>
            {t.title}
          </h2>
          <p className="text-xl text-brand-blue font-light max-w-2xl mx-auto">
            {t.reachText}
          </p>
        </div>

        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-8 mb-16">
          
          {/* LEFT COLUMN: Player & Programs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Top Bar: Language Toggle */}
            <div className="flex justify-between items-center bg-black/40 p-2 rounded-full border border-white/5 backdrop-blur-md">
              <span className="text-xs uppercase tracking-widest text-neutral-500 ml-4 hidden sm:block">Select Language</span>
              <div className="flex gap-2 w-full sm:w-auto justify-between sm:justify-end">
                {['en', 'es', 'pt'].map((l) => (
                  <button
                    key={l}
                    onClick={() => { handleInteraction(); setSimLang(l as Language); }}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest transition-all ${
                      simLang === l 
                        ? 'bg-brand-blue text-white shadow-[0_0_15px_rgba(var(--brand-blue-rgb),0.5)]' 
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {l === 'en' ? 'English' : l === 'es' ? 'Español' : 'Português'}
                  </button>
                ))}
              </div>
            </div>

            {/* Premium Player */}
            <div className={`glass-panel p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden group ${theme === 'experience' ? 'border-cyan-500/30 shadow-[0_0_50px_rgba(34,211,238,0.2)] bg-black/60' : 'border-white/10'}`}>
              <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-500 opacity-50 ${theme === 'experience' ? 'from-pink-500/20 via-purple-500/10 to-cyan-500/20' : 'from-brand-blue/10 to-transparent'}`} />
              
              {/* Particles Effect for Experience Mode */}
              <AnimatePresence>
                {theme === 'experience' && isPlaying && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                        initial={{ 
                          x: Math.random() * 400, 
                          y: 200,
                          opacity: 0,
                          scale: Math.random() * 2 + 0.5
                        }}
                        animate={{ 
                          y: -50,
                          x: `calc(${Math.random() * 400}px + ${Math.random() * 50 - 25}px)`,
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: Math.random() * 2 + 1.5,
                          repeat: Infinity,
                          delay: Math.random() * 2
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between items-start mb-10 relative z-10">
                <div>
                  <span className="text-xs font-medium tracking-wider text-red-500 uppercase flex items-center gap-2 mb-2">
                    <span className={`w-2 h-2 rounded-full bg-red-500 ${isPlaying ? 'animate-pulse shadow-[0_0_10px_rgba(239,68,68,1)]' : ''}`} />
                    {t.player.onAir}
                  </span>
                  <h3 className="text-2xl font-light text-white">{t.player.name}</h3>
                </div>
                <Radio className={`w-6 h-6 ${isPlaying ? (theme === 'experience' ? 'text-cyan-400 animate-pulse drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'text-brand-blue animate-pulse') : 'text-neutral-500'}`} />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 relative z-10">
                <button 
                  onClick={togglePlay}
                  className={`w-20 h-20 shrink-0 rounded-full flex items-center justify-center hover:scale-105 transition-all text-black ${theme === 'experience' ? 'bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_40px_rgba(34,211,238,0.6)]' : 'bg-brand-blue shadow-[0_0_30px_rgba(var(--brand-blue-rgb),0.3)]'}`}
                >
                  {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                </button>
                
                <div className="flex-1 w-full flex flex-col justify-center">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">{currentProgramData.title}</h4>
                      <p className="text-sm text-neutral-400">{currentProgramData.desc}</p>
                    </div>
                  </div>
                  
                  {/* Waveform Visualization */}
                  <div className={`h-16 flex items-center rounded-xl p-4 border ${theme === 'experience' ? 'bg-black/40 border-white/10' : 'bg-black/20 border-white/5'}`}>
                    <Waveform active={isPlaying} />
                    <div className="ml-auto text-xs font-mono text-neutral-500 uppercase tracking-widest">
                      {simLang.toUpperCase()} STREAM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {t.programs.map((prog: any) => (
                <button
                  key={prog.id}
                  onClick={() => selectProgram(prog.id)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    activeProgram === prog.id 
                      ? 'border-brand-blue bg-brand-blue/10 shadow-[0_0_20px_rgba(var(--brand-blue-rgb),0.1)]' 
                      : 'border-white/5 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full mb-3 block ${activeProgram === prog.id ? 'bg-brand-blue' : 'bg-neutral-600'}`} />
                  <span className={`text-sm block leading-tight ${activeProgram === prog.id ? 'text-white font-medium' : 'text-neutral-400'}`}>
                    {prog.title}
                  </span>
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: Reach & Metrics */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Visual Reach Abstract Map */}
            <div className="glass-panel p-6 rounded-3xl border border-white/5 relative h-64 overflow-hidden flex flex-col items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
              
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                {/* Center Node (Church) */}
                <motion.div 
                  className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center z-20 shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MapPin className="text-black w-5 h-5" />
                </motion.div>

                {/* Orbiting/Connecting Nodes */}
                {isPlaying && (
                  <>
                    <motion.div className="absolute w-64 h-64 border border-brand-blue/30 rounded-full animate-spin-slow" />
                    
                    {[
                      { icon: Globe, label: "Home", pos: "-top-8 -left-8", color: "text-blue-400" },
                      { icon: Activity, label: "Car", pos: "top-10 -right-12", color: "text-purple-400" },
                      { icon: Headphones, label: "Work", pos: "-bottom-10 left-10", color: "text-emerald-400" },
                      { icon: MapPin, label: "Phone", pos: "bottom-8 -right-4", color: "text-brand-blue" }
                    ].map((node, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.2 }}
                        className={`absolute ${node.pos} flex flex-col items-center gap-2`}
                      >
                        <div className="w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                          <node.icon className={`w-4 h-4 ${node.color}`} />
                        </div>
                        <span className="text-[10px] text-neutral-400 uppercase tracking-widest">{node.label}</span>
                        
                        {/* Connecting line simulation */}
                        <motion.div 
                          className="absolute top-1/2 left-1/2 w-0.5 bg-brand-blue/30 origin-top-left -z-10"
                          style={{ height: '100px', transform: `rotate(${i * 90 + 45}deg)` }}
                        />
                      </motion.div>
                    ))}
                  </>
                )}
              </div>
            </div>

            {/* Metrics Panel */}
            <div className="glass-panel p-6 rounded-3xl border border-white/5 flex-1 flex flex-col justify-between">
              <h4 className="text-sm text-neutral-400 font-medium tracking-widest uppercase mb-6 flex items-center gap-2">
                <Activity className="w-4 h-4 text-brand-blue" />
                {t.metrics.title}
              </h4>
              
              <div className="space-y-6">
                {t.metrics.items.map((item: any, idx: number) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-xs text-neutral-500 uppercase tracking-widest mb-2">{item.label}</span>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-black/30 p-3 rounded-xl border border-white/5">
                        <span className="text-white text-xl font-light">{item.value1}</span>
                        <span className="text-neutral-500 text-[10px] uppercase block mt-1">{item.period1}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neutral-600" />
                      <div className="flex-1 bg-brand-blue/10 p-3 rounded-xl border border-brand-blue/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-brand-blue/5 animate-pulse" />
                        <span className="text-brand-blue text-xl font-medium relative z-10">{item.value2}</span>
                        <span className="text-brand-blue/60 text-[10px] uppercase block mt-1 relative z-10">{item.period2}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM ROW: Before/After & Costs */}
        <div className="grid md:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Before/After */}
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-4">
            <div className="glass-panel p-6 rounded-2xl border border-red-500/10 flex flex-col justify-center">
              <h3 className="text-lg font-medium text-neutral-400 mb-4 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-400" />
                {t.beforeAfter.beforeTitle}
              </h3>
              <ul className="space-y-3">
                {t.beforeAfter.beforePoints.map((point: string, idx: number) => (
                  <li key={idx} className="flex gap-2 text-neutral-500 font-light text-sm">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-red-500/50 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-brand-blue/20 bg-brand-blue/5 flex flex-col justify-center">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                {t.beforeAfter.afterTitle}
              </h3>
              <ul className="space-y-3">
                {t.beforeAfter.afterPoints.map((point: string, idx: number) => (
                  <li key={idx} className="flex gap-2 text-neutral-200 font-light text-sm">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-blue shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Costs Card */}
          <div className="md:col-span-4 glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <span className="text-white font-medium">$</span>
              </div>
              <h4 className="text-lg font-medium text-white mb-6 leading-snug">
                {t.costs.title}
              </h4>
            </div>
            
            <div className="space-y-3">
              {t.costs.items.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
                  <span className="text-neutral-400">{item.name}</span>
                  <span className="text-neutral-600 text-xs">{item.cost}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </FadeIn>
    </Section>
  );
}

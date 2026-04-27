"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/data/content';

export type TabId = 'story' | 'worship' | 'school' | 'radio' | 'contact';

interface TopNavigationProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export function TopNavigation({ activeTab, onTabChange }: TopNavigationProps) {
  const { language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const ui = translations[language].ui;

  const tabs: { id: TabId; label: string }[] = [
    { id: 'story', label: ui.navStory },
    { id: 'worship', label: ui.navWorship },
    { id: 'school', label: ui.navSchool },
    { id: 'radio', label: ui.navRadio },
    { id: 'contact', label: ui.navContact }
  ];

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center pt-6 px-6 pointer-events-none"
    >
      <div className="w-24 md:w-48" /> {/* Spacer to balance center flex */}
      
      <div className="pointer-events-auto flex items-center bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative px-4 md:px-6 py-2 text-xs md:text-sm font-medium rounded-full transition-colors duration-300 ${
                isActive ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-white/10 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-white/5"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="pointer-events-auto w-24 md:w-48 flex justify-end">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-3 py-1.5 hover:bg-white/10 transition-colors"
        >
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-800">
            {theme === 'experience' ? (
              <div className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
            ) : (
              <div className="w-2 h-2 rounded-full bg-brand-blue" />
            )}
          </div>
          <span className="text-xs font-medium text-neutral-300 hidden md:block">
            {theme === 'experience' ? 'Experiência' : 'Apresentação'}
          </span>
        </button>
      </div>
    </motion.div>
  );
}

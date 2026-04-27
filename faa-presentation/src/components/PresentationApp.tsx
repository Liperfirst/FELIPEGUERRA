"use client";

import React, { useState, useEffect, useRef } from 'react';
import { BackgroundGlow } from './ui/BackgroundGlow';
import { LanguageSelector } from './ui/LanguageSelector';
import { TopNavigation, TabId } from './ui/TopNavigation';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/content';
import { Play, Pause, RotateCcw } from 'lucide-react';

// Sections
import { OpeningSection } from './sections/OpeningSection';
import { ProblemShiftSection } from './sections/ProblemShiftSection';
import { PillarsOverviewSection } from './sections/PillarsOverviewSection';
import { ProfileSection } from './sections/ProfileSection';
import { FinalSection } from './sections/FinalSection';

import { worshipSections } from './sections/WorshipSections';
import { schoolSections } from './sections/SchoolSections';
import { radioSections } from './sections/RadioSections';

const storySections = [
  OpeningSection,
  ProblemShiftSection,
  PillarsOverviewSection
];

const tabOrder: TabId[] = ['story', 'worship', 'school', 'radio', 'contact'];

export function PresentationApp() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isAutoMode, setIsAutoMode] = useState(true);
  
  const [activeTab, setActiveTab] = useState<TabId>('story');
  const [activeSection, setActiveSection] = useState(0);
  
  const { language } = useLanguage();
  const ui = translations[language].ui;
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Get current sections array based on activeTab
  const currentSections = (() => {
    switch (activeTab) {
      case 'story': return storySections;
      case 'worship': return worshipSections;
      case 'school': return schoolSections;
      case 'radio': return radioSections;
      case 'contact': return [ProfileSection, FinalSection];
      default: return storySections;
    }
  })();

  // Handle Tab Change
  const handleTabChange = (tab: TabId) => {
    setIsAutoMode(false); // Manual navigation disables auto-mode
    setActiveTab(tab);
    setActiveSection(0);
    // Force scroll to top of container when changing pillars
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Scroll to section when activeSection changes
  useEffect(() => {
    if (hasStarted && activeSection < currentSections.length) {
      const element = sectionsRef.current[activeSection];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [activeSection, activeTab, hasStarted, currentSections.length]);

  // Handle user manual scroll interruption
  useEffect(() => {
    const handleScroll = () => {
      if (!isAutoMode) return; 
      setIsAutoMode(false);
    };

    if (hasStarted) {
      const timer = setTimeout(() => {
        window.addEventListener('wheel', handleScroll, { passive: true });
        window.addEventListener('touchmove', handleScroll, { passive: true });
      }, 1000);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('wheel', handleScroll);
        window.removeEventListener('touchmove', handleScroll);
      };
    }
  }, [hasStarted, isAutoMode]);

  // Handle Auto-Mode Progression
  const handleSectionComplete = (index: number) => {
    if (!isAutoMode) return;

    if (index < currentSections.length - 1) {
      // Go to next section in current tab
      setActiveSection(index + 1);
    } else {
      // Reached the end of current tab's sections
      const currentTabIndex = tabOrder.indexOf(activeTab);
      if (currentTabIndex < tabOrder.length - 1) {
        // Go to next tab
        setActiveTab(tabOrder[currentTabIndex + 1]);
        setActiveSection(0);
      }
      // If it's the last section of the last tab, auto-mode just stops naturally (or we could loop).
    }
  };

  const toggleMode = () => {
    setIsAutoMode(!isAutoMode);
    if (!isAutoMode) {
      setActiveSection((prev) => prev);
    }
  };

  const restart = () => {
    setIsAutoMode(true);
    setActiveTab('story');
    setActiveSection(0);
  };

  return (
    <main className="relative min-h-screen text-white bg-transparent selection:bg-brand-blue/30 selection:text-white">
      <BackgroundGlow />
      
      {!hasStarted && (
        <LanguageSelector onStart={() => setHasStarted(true)} />
      )}

      {hasStarted && (
        <>
          <TopNavigation activeTab={activeTab} onTabChange={handleTabChange} />

          <div 
            ref={containerRef}
            className="w-full relative h-screen overflow-y-auto scroll-smooth" 
            style={{ scrollbarWidth: 'none' }}
          >
            
            {/* Main Content */}
            {currentSections.map((SectionComponent, index) => (
              <div 
                key={`${activeTab}-${index}`} // Force re-render when tab changes if needed, but important for refs
                ref={(el) => {
                  if (el) sectionsRef.current[index] = el;
                }}
                className="w-full"
              >
                <SectionComponent 
                  isActive={activeSection === index}
                  onComplete={() => handleSectionComplete(index)} 
                />
              </div>
            ))}

            {/* Floating Controls */}
            <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4 glass-panel px-4 py-2 rounded-full">
              <span className="text-xs text-neutral-400 font-medium tracking-widest uppercase hidden md:block mr-2">
                {isAutoMode ? ui.autoMode : ui.manualMode}
              </span>
              
              <button 
                onClick={toggleMode}
                className={`p-2 rounded-full transition-colors ${isAutoMode ? 'bg-brand-blue/20 text-brand-blue' : 'hover:bg-neutral-800 text-neutral-400'}`}
                title={isAutoMode ? ui.pause : ui.play}
              >
                {isAutoMode ? <Pause size={18} /> : <Play size={18} />}
              </button>
              
              <button 
                onClick={restart}
                className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 transition-colors"
                title={ui.restart}
              >
                <RotateCcw size={18} />
              </button>
            </div>
            
          </div>
        </>
      )}
    </main>
  );
}

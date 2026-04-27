"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export function BackgroundGlow() {
  const { theme } = useTheme();

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-cinematic-gradient opacity-90 transition-opacity duration-1000" />
      
      {/* Subtle subtle grain (not dirt, just depth) */}
      <div className="noise-bg" />
      
      <AnimatePresence mode="popLayout">
        {theme === 'classic' ? (
          <motion.div
            key="classic-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 pointer-events-none z-[-1]"
          >
            {/* Animated glow orbs - Classic */}
            <motion.div 
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] rounded-full bg-brand-blue blur-[120px] opacity-10"
            />
            
            <motion.div 
              animate={{ 
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.3, 1],
              }}
              transition={{ 
                duration: 12, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vh] rounded-full bg-brand-purple blur-[150px] opacity-10"
            />
          </motion.div>
        ) : (
          <motion.div
            key="experience-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 pointer-events-none z-[-1]"
          >
            {/* Apple Music / Spotify Editorial Smooth Gradients */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                x: ['0%', '5%', '-5%', '0%'],
                y: ['0%', '-5%', '5%', '0%'],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: "linear" 
              }}
              className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vh] rounded-[100%] bg-fuchsia-600 blur-[120px] opacity-30"
            />
            
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                x: ['0%', '-10%', '5%', '0%'],
                y: ['0%', '10%', '-5%', '0%'],
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity,
                ease: "linear",
                delay: 2
              }}
              className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vh] rounded-[100%] bg-blue-600 blur-[150px] opacity-30"
            />

            <motion.div 
              animate={{ 
                scale: [1, 1.4, 1],
                x: ['0%', '10%', '-10%', '0%'],
                y: ['0%', '5%', '-10%', '0%'],
              }}
              transition={{ 
                duration: 30, 
                repeat: Infinity,
                ease: "linear",
                delay: 5
              }}
              className="absolute top-[20%] left-[30%] w-[50vw] h-[50vh] rounded-[100%] bg-cyan-500 blur-[140px] opacity-20"
            />
            
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                x: ['0%', '-5%', '10%', '0%'],
                y: ['0%', '-10%', '5%', '0%'],
              }}
              transition={{ 
                duration: 22, 
                repeat: Infinity,
                ease: "linear",
                delay: 7
              }}
              className="absolute bottom-[20%] left-[10%] w-[40vw] h-[40vh] rounded-[100%] bg-purple-600 blur-[130px] opacity-25"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

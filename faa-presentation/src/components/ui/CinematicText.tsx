"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface CinematicTextProps {
  text: string;
  className?: string;
  delay?: number;
  glow?: boolean;
}

export function CinematicText({ text, className = "", delay = 0, glow = false }: CinematicTextProps) {
  // Split text by lines (for '\n')
  const lines = text.split('\n');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        duration: 0.8
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className={className}
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="overflow-hidden">
          {line.split(' ').map((word, index) => (
            <motion.span
              key={`${lineIndex}-${index}`}
              variants={child}
              className={`inline-block mr-2 ${glow ? 'glow-text' : ''}`}
            >
              {word}
            </motion.span>
          ))}
          <br className="hidden md:block" />
        </div>
      ))}
    </motion.div>
  );
}

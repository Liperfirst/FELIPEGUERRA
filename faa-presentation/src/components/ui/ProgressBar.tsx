"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed left-0 top-0 bottom-0 w-1 bg-white/5 z-50">
      <motion.div
        className="w-full h-full bg-gold-500 origin-top opacity-50"
        style={{ scaleY }}
      />
    </div>
  );
}

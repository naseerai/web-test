import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const GlobalScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '6px', // Progress bar thickness (6px is standard)
        background: '#FF6B00', // Orange color
        transformOrigin: '0%',
        zIndex: 10000, // Header kante paina undali
      }}
    />
  );
};

export default GlobalScrollProgress;
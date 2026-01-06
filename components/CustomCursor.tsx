'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring animation
  const springConfig = { damping: 30, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    const hasMousePointer = window.matchMedia('(pointer: fine)').matches;
    setIsMobile(!hasMousePointer);
    
    if (!hasMousePointer) return;

    // Track hoverable elements - only trigger when actually on the element
    const checkHoverableElement = (e: MouseEvent) => {
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (!element) {
        setIsHovering(false);
        return;
      }
      
      // Check if the element or any parent is hoverable
      const isHoverable = element.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover], .cursor-pointer, [onclick]');
      setIsHovering(!!isHoverable);
    };

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
      checkHoverableElement(e);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  // Don't render on mobile/touch devices
  if (isMobile) return null;

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Atomic Orbit Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 1.4 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
          className="relative w-10 h-10"
        >
          {/* Nucleus (center) */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: isClicking ? 1.5 : 1,
            }}
          >
            <div className="w-2 h-2 bg-[#2ecc71] rounded-full" />
            <div className="absolute inset-0 w-2 h-2 bg-[#2ecc71] rounded-full blur-sm opacity-80" />
            <div className="absolute inset-[-2px] w-3 h-3 bg-[#2ecc71]/30 rounded-full blur-md" />
          </motion.div>

          {/* Orbit 1 - Horizontal ellipse */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-5"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: isHovering ? 1 : 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Orbit path */}
            <div className="absolute inset-0 border border-[#2ecc71]/20 rounded-full" />
            
            {/* Electron 1 */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={isClicking ? {
                x: [0, 30, -20, 0],
                y: [0, -25, 20, 0],
                opacity: [1, 0.5, 0.5, 1],
              } : {}}
              transition={{ duration: 0.4 }}
            >
              <div className="w-1.5 h-1.5 bg-[#2ecc71] rounded-full" />
              <div className="absolute inset-0 w-1.5 h-1.5 bg-[#2ecc71] rounded-full blur-sm" />
            </motion.div>
          </motion.div>

          {/* Orbit 2 - Tilted ellipse */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-5"
            style={{ transform: 'translate(-50%, -50%) rotate(60deg)' }}
            animate={{
              rotate: [60, 420],
            }}
            transition={{
              duration: isHovering ? 1.2 : 3.5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Orbit path */}
            <div className="absolute inset-0 border border-[#2ecc71]/20 rounded-full" />
            
            {/* Electron 2 */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
              animate={isClicking ? {
                x: [0, -35, 15, 0],
                y: [0, 20, -30, 0],
                opacity: [1, 0.5, 0.5, 1],
              } : {}}
              transition={{ duration: 0.4 }}
            >
              <div className="w-1.5 h-1.5 bg-[#2ecc71] rounded-full" />
              <div className="absolute inset-0 w-1.5 h-1.5 bg-[#2ecc71] rounded-full blur-sm" />
            </motion.div>
          </motion.div>

          {/* Orbit 3 - Opposite tilt */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-5"
            style={{ transform: 'translate(-50%, -50%) rotate(-60deg)' }}
            animate={{
              rotate: [-60, -420],
            }}
            transition={{
              duration: isHovering ? 0.9 : 2.8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Orbit path */}
            <div className="absolute inset-0 border border-[#2ecc71]/20 rounded-full" />
            
            {/* Electron 3 */}
            <motion.div
              className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
              animate={isClicking ? {
                x: [0, 25, -30, 0],
                y: [0, 30, -15, 0],
                opacity: [1, 0.5, 0.5, 1],
              } : {}}
              transition={{ duration: 0.4 }}
            >
              <div className="w-1.5 h-1.5 bg-[#2ecc71] rounded-full" />
              <div className="absolute inset-0 w-1.5 h-1.5 bg-[#2ecc71] rounded-full blur-sm" />
            </motion.div>
          </motion.div>

          {/* Hover indicator ring - positioned outside orbits */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            animate={{
              opacity: isHovering ? 1 : 0,
              scale: isHovering ? 1 : 0.6,
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-16 h-16 border-2 border-[#2ecc71]/50 rounded-full" />
            <div className="absolute inset-0 w-16 h-16 border border-[#2ecc71]/30 rounded-full blur-md" />
            {/* Corner marks for precision feel */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-[2px] h-2 bg-[#2ecc71]/60" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-[2px] h-2 bg-[#2ecc71]/60" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-[2px] bg-[#2ecc71]/60" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-[2px] bg-[#2ecc71]/60" />
          </motion.div>

          {/* Click burst effect */}
          {isClicking && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    opacity: 1,
                    scale: 1,
                  }}
                  animate={{ 
                    x: Math.cos((i * 60) * Math.PI / 180) * 30,
                    y: Math.sin((i * 60) * Math.PI / 180) * 30,
                    opacity: 0,
                    scale: 0.5,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-1 h-1 bg-[#2ecc71] rounded-full -translate-x-1/2 -translate-y-1/2" />
                </motion.div>
              ))}
            </>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}

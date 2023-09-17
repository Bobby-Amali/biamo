"use client"

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const targetRef = useRef(null); // Ref to the "use client" element

  // Calculate the position of the target element
  const targetTop = targetRef.current
    ? targetRef.current.getBoundingClientRect().top
    : 0;

  // Calculate whether the target element is above the viewport
  const targetAboveViewport = targetTop < 0;

  return (
    <div className="scroll-container">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: inView ? 1 : 0,
            scale: inView ? 1 : 0.8,
          }}
          transition={{ duration: 0.5 }}
          className="animated-section"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedSection;




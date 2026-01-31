import React from 'react';
import { motion } from 'framer-motion';
import { staggeredChildrenVariants, getAnimationProps, ANIMATION_CONSTANTS, isMobileDevice } from '../../lib/animations';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  threshold?: number;
  splitWords?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  children, 
  className = '',
  delay = 0,
  staggerDelay = ANIMATION_CONSTANTS.STAGGER.FAST,
  threshold = ANIMATION_CONSTANTS.VIEWPORT.NORMAL,
  splitWords = false
}) => {
  const textContent = typeof children === 'string' ? children : '';
  const isMobile = isMobileDevice();
  const shouldSplitWords = splitWords && !isMobile; // Disable splitWords on mobile
  const words = shouldSplitWords ? textContent.split(' ') : [textContent];

  const childVariants = {
    hidden: { opacity: 0, y: isMobile ? 5 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? ANIMATION_CONSTANTS.DURATION.FAST : ANIMATION_CONSTANTS.DURATION.FAST,
        ease: ANIMATION_CONSTANTS.EASING.ENTRANCE,
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: isMobile ? ANIMATION_CONSTANTS.STAGGER.FAST : staggerDelay,
        delayChildren: delay,
      },
    },
  };

  if (shouldSplitWords && typeof children === 'string') {
    return (
      <motion.div
        className={className}
        variants={containerVariants}
        {...getAnimationProps(containerVariants, { transition: { staggerChildren: isMobile ? ANIMATION_CONSTANTS.STAGGER.FAST : staggerDelay, delayChildren: delay } }, threshold)}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            style={{ display: 'inline-block', marginRight: '0.25em' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={staggeredChildrenVariants}
      {...getAnimationProps(staggeredChildrenVariants, { transition: { delay: delay } }, threshold)}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;

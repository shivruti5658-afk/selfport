import React from 'react';
import { motion } from 'framer-motion';
import { staggeredChildrenVariants, getAnimationProps, ANIMATION_CONSTANTS } from '../../lib/animations';

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
  const words = splitWords ? textContent.split(' ') : [textContent];

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION.NORMAL,
        ease: ANIMATION_CONSTANTS.EASING.ENTRANCE,
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  if (splitWords && typeof children === 'string') {
    return (
      <motion.div
        className={className}
        variants={containerVariants}
        {...getAnimationProps(containerVariants, { transition: { staggerChildren: staggerDelay, delayChildren: delay } }, threshold)}
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

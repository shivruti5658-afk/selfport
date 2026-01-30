import React from 'react';
import { motion } from 'framer-motion';
import { directionalVariants, getAnimationProps, ANIMATION_CONSTANTS } from '../../lib/animations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'center' | 'up' | 'down';
  delay?: number;
  className?: string;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  direction = 'center', 
  delay = 0,
  className = '',
  threshold = ANIMATION_CONSTANTS.VIEWPORT.NORMAL
}) => {
  const getVariants = () => {
    switch (direction) {
      case 'left':
        return directionalVariants.left;
      case 'right':
        return directionalVariants.right;
      case 'up':
        return directionalVariants.up;
      case 'down':
        return directionalVariants.down;
      default:
        return directionalVariants.center;
    }
  };

  return (
    <motion.section
      className={className}
      {...getAnimationProps(getVariants(), { transition: { delay: delay } }, threshold)}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;

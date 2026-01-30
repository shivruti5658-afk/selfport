import type { Variants, MotionProps } from 'framer-motion';

// Global Animation Constants
export const ANIMATION_CONSTANTS = {
  // Duration
  DURATION: {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.4,
    VERY_SLOW: 0.6,
  },
  
  // Easing curves
  EASING: {
    SMOOTH: [0.4, 0, 0.2, 1] as const,
    ENTRANCE: [0.25, 0.46, 0.45, 0.94] as const,
    EXIT: [0.55, 0.055, 0.675, 0.19] as const,
    BOUNCE: [0.68, -0.55, 0.265, 1.55] as const,
  },
  
  // Stagger delays
  STAGGER: {
    FAST: 0.05,
    NORMAL: 0.1,
    SLOW: 0.15,
  },
  
  // Viewport thresholds
  VIEWPORT: {
    EARLY: 0.3,
    NORMAL: 0.2,
    LATE: 0.1,
  },
} as const;

// Check for reduced motion preference
export const shouldReduceMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Page Load Variants
export const pageLoadVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_CONSTANTS.DURATION.NORMAL,
      ease: ANIMATION_CONSTANTS.EASING.ENTRANCE,
      staggerChildren: ANIMATION_CONSTANTS.STAGGER.NORMAL,
    },
  },
};

// Staggered Children Variants
export const staggeredChildrenVariants: Variants = {
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

// Scroll Animation Variants
export const scrollAnimationVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_CONSTANTS.DURATION.SLOW,
      ease: ANIMATION_CONSTANTS.EASING.SMOOTH,
    },
  },
};

// Directional Animation Variants
export const directionalVariants = {
  left: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION.NORMAL,
        ease: ANIMATION_CONSTANTS.EASING.SMOOTH,
      },
    },
  },
  right: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION.NORMAL,
        ease: ANIMATION_CONSTANTS.EASING.SMOOTH,
      },
    },
  },
  up: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION.NORMAL,
        ease: ANIMATION_CONSTANTS.EASING.SMOOTH,
      },
    },
  },
  down: {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION.NORMAL,
        ease: ANIMATION_CONSTANTS.EASING.SMOOTH,
      },
    },
  },
  center: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: ANIMATION_CONSTANTS.DURATION.NORMAL,
        ease: ANIMATION_CONSTANTS.EASING.SMOOTH,
      },
    },
  },
};

// Hover Variants
export const hoverVariants: Variants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.04,
    y: -2,
    transition: {
      duration: ANIMATION_CONSTANTS.DURATION.FAST,
      ease: ANIMATION_CONSTANTS.EASING.SMOOTH,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: ANIMATION_CONSTANTS.DURATION.FAST,
      ease: ANIMATION_CONSTANTS.EASING.EXIT,
    },
  },
};

// Navigation Variants
export const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_CONSTANTS.DURATION.FAST,
      ease: ANIMATION_CONSTANTS.EASING.SMOOTH,
    },
  },
};

// Mobile Menu Variants
export const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: ANIMATION_CONSTANTS.DURATION.NORMAL,
      ease: ANIMATION_CONSTANTS.EASING.SMOOTH,
      staggerChildren: ANIMATION_CONSTANTS.STAGGER.FAST,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: ANIMATION_CONSTANTS.DURATION.FAST,
      ease: ANIMATION_CONSTANTS.EASING.EXIT,
    },
  },
};

// Background Animation Variants
export const backgroundVariants: Variants = {
  animate: {
    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
    transition: {
      duration: 20,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

// Skill Progress Bar Variants
export const progressVariants: Variants = {
  hidden: { width: 0 },
  visible: (width: number) => ({
    width: `${width}%`,
  }),
};

// Count Up Animation Variants
export const countUpVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_CONSTANTS.DURATION.NORMAL,
      ease: ANIMATION_CONSTANTS.EASING.SMOOTH,
    },
  },
};

// Custom Hook for Intersection Observer
export const useScrollAnimation = (threshold = ANIMATION_CONSTANTS.VIEWPORT.NORMAL) => {
  return {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: false, amount: threshold },
    transition: {
      duration: ANIMATION_CONSTANTS.DURATION.NORMAL,
      ease: ANIMATION_CONSTANTS.EASING.SMOOTH,
    },
  };
};

// Animation Props Generator
export const getAnimationProps = (
  variants: Variants,
  custom?: any,
  threshold?: number
): MotionProps => {
  const baseProps: MotionProps = {
    variants,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { 
      once: false, 
      amount: threshold || ANIMATION_CONSTANTS.VIEWPORT.NORMAL 
    },
  };

  if (shouldReduceMotion()) {
    return {
      ...baseProps,
      variants: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      },
      transition: { duration: 0.1 },
    };
  }

  if (custom !== undefined) {
    baseProps.custom = custom;
  }

  return baseProps;
};

// Accessibility-first animation hook
export const useAccessibleAnimation = (variants: Variants, custom?: any) => {
  const prefersReducedMotion = shouldReduceMotion();
  
  if (prefersReducedMotion) {
    return {
      variants: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      },
      initial: 'hidden',
      whileInView: 'visible',
      viewport: { once: true, amount: 0.1 },
      transition: { duration: 0.1 },
    };
  }

  return {
    variants,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: ANIMATION_CONSTANTS.VIEWPORT.NORMAL },
    custom,
    transition: {
      duration: ANIMATION_CONSTANTS.DURATION.NORMAL,
      ease: ANIMATION_CONSTANTS.EASING.SMOOTH,
    },
  };
};

// Route Transition Variants
export const routeVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

export const routeTransition = {
  type: 'tween' as const,
  ease: ANIMATION_CONSTANTS.EASING.SMOOTH,
  duration: ANIMATION_CONSTANTS.DURATION.NORMAL,
};

// Particle Animation for Background
export const particleVariants: Variants = {
  animate: {
    y: [0, -100, 0],
    opacity: [0, 1, 0],
    transition: {
      duration: 10,
      ease: 'linear',
      repeat: Infinity,
      repeatDelay: Math.random() * 5,
    },
  },
};

// Glow Effect Variants
export const glowVariants: Variants = {
  initial: { boxShadow: '0 0 0 rgba(0, 255, 255, 0)' },
  hover: {
    boxShadow: '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)',
    transition: {
      duration: ANIMATION_CONSTANTS.DURATION.FAST,
      ease: ANIMATION_CONSTANTS.EASING.SMOOTH,
    },
  },
};

export default {
  ANIMATION_CONSTANTS,
  pageLoadVariants,
  scrollAnimationVariants,
  directionalVariants,
  hoverVariants,
  navVariants,
  mobileMenuVariants,
  backgroundVariants,
  progressVariants,
  countUpVariants,
  useScrollAnimation,
  getAnimationProps,
  routeVariants,
  routeTransition,
  particleVariants,
  glowVariants,
};

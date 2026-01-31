import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { progressVariants, countUpVariants, scrollAnimationVariants, getAnimationProps, ANIMATION_CONSTANTS } from '../../lib/animations';

interface AnimatedSkillBarProps {
  skill: string;
  level: number;
  color?: string;
  delay?: number;
}

const AnimatedSkillBar: React.FC<AnimatedSkillBarProps> = ({ 
  skill, 
  level, 
  color = 'cyan',
  delay = 0 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const duration = ANIMATION_CONSTANTS.DURATION.SLOW * 1000; // Convert to ms
      const increment = level / (duration / 16); // 60fps
      let currentCount = 0;
      
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= level) {
          setCount(level);
          clearInterval(timer);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, level]);

  const colorClasses = {
    cyan: 'bg-cyan-400',
    blue: 'bg-blue-400',
    purple: 'bg-purple-400',
    yellow: 'bg-yellow-400',
    green: 'bg-green-400',
    pink: 'bg-pink-400',
  };

  return (
    <motion.div 
      className="mb-6"
      {...getAnimationProps(scrollAnimationVariants)}
      style={{ animationDelay: `${delay}ms` }}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex justify-between items-center mb-2">
        <motion.span 
          className="text-white font-medium"
          variants={countUpVariants}
        >
          {skill}
        </motion.span>
        <motion.span 
          className={`text-${color}-400 font-bold text-sm`}
          variants={countUpVariants}
        >
          {count}%
        </motion.span>
      </div>
      
      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full ${colorClasses[color as keyof typeof colorClasses]} rounded-full relative overflow-hidden`}
          variants={progressVariants}
          custom={level}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          style={{ 
            boxShadow: `0 0 20px ${color}40`,
          }}
        >
          {/* Simplified shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 5,
              delay: delay / 1000 + 2,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimatedSkillBar;

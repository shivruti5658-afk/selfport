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

  useEffect(() => {
    const duration = ANIMATION_CONSTANTS.DURATION.SLOW * 1000; // Convert to ms
    const increment = level / (duration / 16); // 60fps
    let currentCount = 0;
    
    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        currentCount += increment;
        if (currentCount >= level) {
          setCount(level);
          clearInterval(counter);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [level, delay]);

  const colorGradients = {
    cyan: 'bg-gradient-to-r from-cyan-500 to-cyan-400',
    blue: 'bg-gradient-to-r from-blue-500 to-blue-400',
    purple: 'bg-gradient-to-r from-purple-500 to-purple-400',
    yellow: 'bg-gradient-to-r from-yellow-500 to-yellow-400',
    green: 'bg-gradient-to-r from-green-500 to-green-400',
    pink: 'bg-gradient-to-r from-pink-500 to-pink-400',
    slate: 'bg-gradient-to-r from-slate-500 to-slate-400',
  };

  return (
    <motion.div 
      className="mb-6"
      {...getAnimationProps(scrollAnimationVariants)}
      style={{ animationDelay: `${delay}ms` }}
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
          className={`h-full ${colorGradients[color as keyof typeof colorGradients]} rounded-full relative overflow-hidden`}
          variants={progressVariants}
          custom={level}
          initial="hidden"
          animate="visible"
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

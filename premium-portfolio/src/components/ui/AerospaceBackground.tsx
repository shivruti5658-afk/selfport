import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { particleVariants, backgroundVariants } from '../../lib/animations';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

interface AerospaceBackgroundProps {
  children: React.ReactNode;
}

const AerospaceBackground: React.FC<AerospaceBackgroundProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate particles on mount
  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);
    return () => window.removeEventListener('resize', generateParticles);
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Canvas animation for grid lines
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid lines with subtle animation
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;

      const gridSize = 50;
      const offset = (time * 0.01) % gridSize;

      // Vertical lines
      for (let x = -gridSize; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + offset, 0);
        ctx.lineTo(x + offset, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = -gridSize; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + offset);
        ctx.lineTo(canvas.width, y + offset);
        ctx.stroke();
      }

      // Draw connection lines to mouse
      particles.forEach((particle) => {
        const distance = Math.sqrt(
          Math.pow(particle.x - mousePosition.x, 2) + 
          Math.pow(particle.y - mousePosition.y, 2)
        );

        if (distance < 150) {
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.2 * (1 - distance / 150)})`;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mousePosition.x, mousePosition.y);
          ctx.stroke();
        }
      });

      time++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [particles, mousePosition]);

  return (
    <div className="relative min-h-screen">
      {/* Animated gradient background */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        variants={backgroundVariants}
        animate="animate"
      />

      {/* Grid canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 opacity-30 pointer-events-none"
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed rounded-full bg-cyan-400 pointer-events-none"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
          }}
          variants={particleVariants}
          animate="animate"
          custom={particle.speed}
        />
      ))}

      {/* Aerospace tech lines */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 255, 255, 0.3)" />
            <stop offset="50%" stopColor="rgba(255, 0, 255, 0.2)" />
            <stop offset="100%" stopColor="rgba(255, 255, 0, 0.1)" />
          </linearGradient>
        </defs>
        
        {/* Animated tech lines */}
        <motion.path
          d="M 100 100 Q 300 50 500 100 T 900 100"
          stroke="url(#techGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: [0, 0.5, 0],
            pathOffset: [0, 1, 0]
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
        
        <motion.path
          d="M 0 300 Q 200 250 400 300 T 800 300"
          stroke="url(#techGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: [0, 0.3, 0],
            pathOffset: [0, 1, 0]
          }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />
        
        <motion.path
          d="M 200 0 Q 100 200 200 400 T 200 800"
          stroke="url(#techGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: [0, 0.4, 0],
            pathOffset: [0, 1, 0]
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 4,
          }}
        />
      </svg>

      {/* Subtle overlay gradient */}
      <div className="fixed inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AerospaceBackground;

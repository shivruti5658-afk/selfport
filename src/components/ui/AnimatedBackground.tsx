import React, { useState, useEffect } from 'react';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>
        
        {/* Interactive gradient orbs that follow cursor */}
        <div 
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-yellow-600/30 via-blue-600/20 to-transparent rounded-full blur-[250px] transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x - 400}px`,
            top: `${mousePosition.y - 400}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-600/25 via-purple-600/15 to-transparent rounded-full blur-[200px] transition-all duration-1200 ease-out"
          style={{
            right: `${window.innerWidth - mousePosition.x - 300}px`,
            bottom: `${window.innerHeight - mousePosition.y - 300}px`,
            transform: 'translate(50%, 50%)'
          }}
        />
        
        <div 
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-600/20 via-pink-600/10 to-transparent rounded-full blur-[180px] transition-all duration-1400 ease-out"
          style={{
            left: `${mousePosition.x - 250}px`,
            bottom: `${window.innerHeight - mousePosition.y - 250}px`,
            transform: 'translate(-50%, 50%)'
          }}
        />
        
        {/* Static animated gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-yellow-600/20 via-blue-600/15 to-transparent rounded-full blur-[200px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-transparent rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-600/15 via-pink-600/10 to-transparent rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '4s', transform: 'translate(-50%, -50%)' }}></div>
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-30"
              style={{
                width: Math.random() * 2 + 'px',
                height: Math.random() * 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-10px) translateX(-10px);
            opacity: 0.4;
          }
          75% { 
            transform: translateY(-30px) translateX(5px);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New Modern Color System - Clean & Premium
        'soft-space-gray': '#F6F8FB',
        'cloud-white': '#FFFFFF',
        'deep-navy': '#0F172A',
        'slate-gray': '#475569',
        'cosmic-blue': '#2563EB',
        'aurora-teal': '#06B6D4',
        'lavender-gray': '#E2E8F0',
        
        // Semantic color names
        'bg-primary': '#F6F8FB',
        'bg-secondary': '#FFFFFF',
        'text-primary': '#0F172A',
        'text-secondary': '#475569',
        'accent-primary': '#2563EB',
        'accent-secondary': '#06B6D4',
        'border-subtle': '#E2E8F0',
        
        // Legacy aliases for compatibility
        'deep-space': '#F6F8FB',
        'graphite': '#E2E8F0',
        'aerospace-yellow': '#2563EB',
        'electric-blue': '#06B6D4',
        'off-white': '#0F172A',
        'neutral-gray': '#475569'
      },
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        'display': ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      spacing: {
        'section-desktop': '120px',
        'section-tablet': '80px',
        'section-mobile': '60px',
        'content-max': '1200px'
      },
      borderRadius: {
        'soft': '12px',
        'medium': '16px',
        'large': '20px'
      },
      animation: {
        'reveal': 'reveal 0.5s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
        'fade-in': 'fade-in 0.4s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'gradient-sweep': 'gradient-sweep 2s ease-in-out infinite',
        'card-lift': 'card-lift 0.3s ease-out',
        'magnetic': 'magnetic 0.2s ease-out',
        'slide-up': 'slide-up 0.4s ease-out',
        'scale-in': 'scale-in 0.3s ease-out'
      },
      keyframes: {
        reveal: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'slide-in': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'gradient-sweep': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        },
        'card-lift': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-8px)' }
        },
        magnetic: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      backdropBlur: {
        'soft': '8px',
        'medium': '12px'
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'large': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.12)'
      }
    },
  },
  plugins: [],
};

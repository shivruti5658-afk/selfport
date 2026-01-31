import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navVariants, mobileMenuVariants, hoverVariants, staggeredChildrenVariants, getAnimationProps, ANIMATION_CONSTANTS } from '../../lib/animations';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Education', path: '/education' },
  { name: 'Experience', path: '/experience' },
  { name: 'Research & Publications', path: '/research-publications' },
  { name: 'Skills', path: '/skills' },
  { name: 'Interests', path: '/interests' },
  { name: 'Miscellaneous', path: '/miscellaneous-projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const htmlElement = section as HTMLElement;
        const sectionTop = htmlElement.offsetTop;
        const sectionHeight = htmlElement.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(`/${sectionId}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' 
            : 'bg-transparent'
        }`}
        {...getAnimationProps(navVariants)}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <motion.div className="flex-shrink-0" variants={staggeredChildrenVariants}>
              <NavLink 
                to="/" 
                className="group flex items-center space-x-2"
                {...hoverVariants}
              >
                <span className="text-white font-bold text-xl sm:text-2xl lg:text-3xl">
                  Portfolio <span className="text-cyan-400">(S.K.)</span>
                </span>
              </NavLink>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path || activeSection === link.path;
                  return (
                    <motion.div
                      key={link.name}
                      className="relative px-4 py-2 rounded-lg text-sm font-medium group"
                      variants={staggeredChildrenVariants}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: ANIMATION_CONSTANTS.DURATION.FAST }}
                    >
                      <NavLink
                        to={link.path}
                        className={`relative z-10 ${
                          isActive
                            ? 'text-white'
                            : 'text-gray-300 group-hover:text-white'
                        }`}
                      >
                        {link.name}
                      </NavLink>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div 
                          className="absolute inset-0 bg-gray-800 rounded-lg" 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: ANIMATION_CONSTANTS.DURATION.FAST }}
                        />
                      )}
                      
                      {/* Hover underline */}
                      <motion.div 
                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent ${
                          isActive ? 'w-full' : 'w-0'
                        }`}
                        initial={{ width: isActive ? '100%' : '0%' }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: ANIMATION_CONSTANTS.DURATION.NORMAL }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <motion.div className="lg:hidden" variants={staggeredChildrenVariants}>
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-3 rounded-xl text-gray-200 hover:text-white hover:bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black group transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: ANIMATION_CONSTANTS.DURATION.FAST }}
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                  <div className={`h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}></div>
                  <div className={`h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}></div>
                  <div className={`h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}></div>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div 
          className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-black/95 backdrop-blur-lg border-t border-gray-700 z-50`}
          initial="hidden"
          animate={isMobileMenuOpen ? "visible" : "hidden"}
          variants={mobileMenuVariants}
        >
          <div className="px-4 py-6 space-y-1 max-h-screen overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    className="block px-4 py-4 rounded-xl text-base font-medium bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 transition-all duration-200"
                    variants={staggeredChildrenVariants}
                    whileHover={{ scale: 1.02, translateX: 4 }}
                    transition={{ duration: ANIMATION_CONSTANTS.DURATION.FAST }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between w-full ${
                        isActive 
                          ? 'text-white bg-blue-600/20 border-blue-500/30' 
                          : 'text-gray-200 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <motion.div 
                          className="w-3 h-3 bg-blue-400 rounded-full border-2 border-white" 
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                    </NavLink>
                  </motion.div>
                );
              })}
          </div>
          
          {/* Mobile menu footer */}
          <motion.div 
            className="px-4 py-6 border-t border-gray-700 bg-gray-800/30"
            variants={staggeredChildrenVariants}
          >
              <div className="flex items-center justify-between text-sm text-gray-300">
                <motion.div 
                  className="flex items-center space-x-3"
                  variants={staggeredChildrenVariants}
                >
                  <motion.a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: ANIMATION_CONSTANTS.DURATION.FAST }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    </motion.a>
                </motion.div>
                <span className="font-mono text-xs">STATUS: ACTIVE</span>
              </div>
          </motion.div>
        </motion.div>
      </motion.nav>

      {/* Navigation overlay for mobile */}
      {isMobileMenuOpen && (
        <motion.div 
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
          onClick={() => setIsMobileMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: ANIMATION_CONSTANTS.DURATION.FAST }}
        />
      )}
    </>
  );
};

export default Navbar;

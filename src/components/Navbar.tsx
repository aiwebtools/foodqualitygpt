
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-cyber-bg-dark/95 backdrop-blur-md py-2 sm:py-3 shadow-md' 
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo withTagline />
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          <Button 
            href="https://chatgpt.com/g/g-gqCQ0z0n1-food-quality-inspector-gpt" 
            variant="green" 
            external
          >
            <span className="hidden lg:inline">Access Food Quality Inspector GPT</span>
            <span className="lg:hidden">Try GPT Tool</span>
          </Button>
          <ul className="flex gap-4 lg:gap-6">
            <li>
              <a 
                href="#faq" 
                className="text-gray-300 hover:text-cyber-neon-blue transition-colors text-sm lg:text-base"
              >
                FAQ
              </a>
            </li>
            <li>
              <a 
                href="#disclaimer" 
                className="text-gray-300 hover:text-cyber-neon-blue transition-colors text-sm lg:text-base"
              >
                Disclaimer
              </a>
            </li>
            <li>
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyber-neon-blue transition-colors text-sm lg:text-base"
              >
                More AI Tools
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2 -mr-2 active:scale-95 transition-transform"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu with smooth transition */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Button 
            href="https://chatgpt.com/g/g-gqCQ0z0n1-food-quality-inspector-gpt" 
            variant="green" 
            className="w-full text-center"
            external
          >
            Access Food Quality Inspector GPT
          </Button>
          <ul className="flex flex-col space-y-1">
            <li>
              <a 
                href="#faq" 
                className="block py-3 px-2 text-gray-300 hover:text-cyber-neon-blue active:text-cyber-neon-blue transition-colors rounded-md hover:bg-white/5"
                onClick={closeMenu}
              >
                FAQ
              </a>
            </li>
            <li>
              <a 
                href="#disclaimer" 
                className="block py-3 px-2 text-gray-300 hover:text-cyber-neon-blue active:text-cyber-neon-blue transition-colors rounded-md hover:bg-white/5"
                onClick={closeMenu}
              >
                Disclaimer
              </a>
            </li>
            <li>
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block py-3 px-2 text-gray-300 hover:text-cyber-neon-blue active:text-cyber-neon-blue transition-colors rounded-md hover:bg-white/5"
              >
                More AI Tools
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

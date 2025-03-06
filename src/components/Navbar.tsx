
import React, { useState, useEffect } from 'react';
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
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cyber-bg-dark/80 backdrop-blur-md py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo withTagline />
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Button 
            href="https://chatgpt.com/g/g-gqCQ0z0n1-food-quality-inspector-gpt" 
            variant="green" 
            external
          >
            Access Food Quality Inspector GPT
          </Button>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#faq" 
                className="text-gray-300 hover:text-cyber-neon-blue transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <a 
                href="#disclaimer" 
                className="text-gray-300 hover:text-cyber-neon-blue transition-colors"
              >
                Disclaimer
              </a>
            </li>
            <li>
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyber-neon-blue transition-colors"
              >
                More AI Tools
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cyber-bg-dark/95 backdrop-blur-md py-4 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Button 
              href="https://chatgpt.com/g/g-gqCQ0z0n1-food-quality-inspector-gpt" 
              variant="green" 
              className="w-full text-center"
              external
            >
              Access Food Quality Inspector GPT
            </Button>
            <ul className="flex flex-col space-y-3">
              <li>
                <a 
                  href="#faq" 
                  className="block py-2 text-gray-300 hover:text-cyber-neon-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="block py-2 text-gray-300 hover:text-cyber-neon-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block py-2 text-gray-300 hover:text-cyber-neon-blue transition-colors"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

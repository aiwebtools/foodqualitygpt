
import React from 'react';
import Logo from './Logo';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-bg-dark pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo withTagline className="mb-4" />
            <p className="text-gray-400 mb-6">
              Your AI-powered food quality inspector, helping you make better food choices with advanced analysis.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://chatgpt.com/g/g-gqCQ0z0n1-food-quality-inspector-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-button-green text-sm"
              >
                Access Food Quality Inspector GPT
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyber-neon-blue transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-cyber-neon-blue transition-colors">Features</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-cyber-neon-blue transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-cyber-neon-blue transition-colors">Disclaimer</a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors flex items-center"
                >
                  More AI Tools
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors flex items-center"
                >
                  Privacy Policy
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors flex items-center"
                >
                  Terms of Service
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-cyber-neon-blue transition-colors flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block py-2 px-4 bg-cyber-neon-purple/10 text-cyber-neon-purple border border-cyber-neon-purple/30 rounded-full text-sm font-medium transition-all hover:bg-cyber-neon-purple/20"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>
        
        <div className="neon-line mb-6"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyber-neon-blue transition-colors"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </p>
          
          <p className="text-gray-500 text-sm">
            Scanning food with AI for safer, healthier choices.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

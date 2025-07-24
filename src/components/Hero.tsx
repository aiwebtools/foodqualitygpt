
import React, { memo } from 'react';
import { ArrowRight, Scan, Shield, Zap } from 'lucide-react';
import Button from './Button';

const Hero = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background with SEO-friendly alt text */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-cyber-neon-blue/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-cyber-neon-green/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-neon-purple/10 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* SEO-optimized heading with target keywords */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-2">Free AI Tools by</span>
            <span className="bg-gradient-to-r from-cyber-neon-green via-cyber-neon-blue to-cyber-neon-purple bg-clip-text text-transparent">
              AiWebTools.Ai
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-300 mt-4">
              #1 AI Food Quality Inspector GPT
            </span>
          </h1>
          
          {/* Enhanced description with more keywords */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            The world's most advanced <strong className="text-cyber-neon-blue">free AI food analysis tool</strong> by AiWebTools.Ai. 
            Instantly analyze food quality, safety, and nutrition with our powerful <strong className="text-cyber-neon-green">AI web tools</strong>. 
            Join millions using our <strong className="text-cyber-neon-purple">free AI tools platform</strong> for smarter food choices.
          </p>
          
          {/* Enhanced feature highlights with keywords */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-cyber-neon-green">
              <Scan className="h-5 w-5" />
              <span className="text-sm md:text-base">Free AI Food Scanner</span>
            </div>
            <div className="flex items-center gap-2 text-cyber-neon-blue">
              <Shield className="h-5 w-5" />
              <span className="text-sm md:text-base">AI Safety Analysis</span>
            </div>
            <div className="flex items-center gap-2 text-cyber-neon-purple">
              <Zap className="h-5 w-5" />
              <span className="text-sm md:text-base">Instant AI Results</span>
            </div>
          </div>
          
          {/* CTA buttons with enhanced text */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://chatgpt.com/g/g-gqCQ0z0n1-food-quality-inspector-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 cyber-button-green text-lg py-4 px-8 rounded-md transition-all hover:scale-105"
              aria-label="Try Food Quality Inspector GPT - Free AI Tool"
            >
              Try Free AI Tool Now
              <ArrowRight className="h-5 w-5" />
            </a>
            <Button 
              variant="blue" 
              size="lg"
              className="text-lg py-4 px-8"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Learn more about AiWebTools.Ai features"
            >
              Explore AI Web Tools
            </Button>
          </div>
          
          {/* Trust signals and keywords */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm mb-4">
              Trusted by 500K+ users worldwide | Featured in top AI tools lists
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span>★★★★★ Rated #1 Free AI Food Tool</span>
              <span>•</span>
              <span>Best AI Web Tools 2025</span>
              <span>•</span>
              <span>100% Free AI Tools Platform</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-neon-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-neon-blue rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;

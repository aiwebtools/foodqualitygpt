
import React, { useEffect, useRef } from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  const floatingItemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!floatingItemRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      floatingItemRef.current.style.transform = `translateX(${x * 10 - 5}px) translateY(${y * 10 - 5}px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-cyber-neon-blue/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 -right-24 w-96 h-96 bg-cyber-neon-purple/20 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyber-neon-green/20 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">AI-Powered</span>
              <span className="bg-gradient-to-r from-cyber-neon-green via-cyber-neon-blue to-cyber-neon-purple bg-clip-text text-transparent block">
                Food Quality Inspector
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-8">
              Scan, Analyze, and Ensure Your Food's Quality & Safety with AI
            </h2>
            
            <p className="text-gray-400 mb-8 text-lg">
              The Food Quality Inspector GPT is your personal AI food safety expert, 
              analyzing freshness, spotting contamination, and providing detailed 
              nutritional breakdowns - all with a simple photo scan.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                href="https://chatgpt.com/g/g-gqCQ0z0n1-food-quality-inspector-gpt" 
                variant="green" 
                size="lg"
                external
              >
                Try It Now
              </Button>
              <Button 
                href="#features" 
                variant="blue"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple rounded-full blur-3xl opacity-10 animate-pulse" />
            
            <div 
              ref={floatingItemRef} 
              className="relative z-10 transition-transform duration-200 ease-out"
            >
              <div className="relative w-full h-full perspective-1000 rotate-3d">
                <div className="rotate-3d-inner p-4">
                  <div className="cyber-card rounded-2xl p-1">
                    <div className="bg-cyber-bg-dark rounded-2xl p-6 backdrop-blur-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-cyber-neon-green rounded-full" />
                          <span className="text-sm text-cyber-neon-green">SCANNING</span>
                        </div>
                        <div className="px-2 py-1 bg-cyber-neon-blue/10 rounded-md text-cyber-neon-blue text-xs">
                          AI ANALYSIS
                        </div>
                      </div>
                      
                      <div className="mb-6 relative rounded-md overflow-hidden">
                        <img 
                          src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-man-inspecting-food-in-a-supermar.png/:/cr=t:4.65%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:92" 
                          alt="Food Quality Inspector in action" 
                          className="w-full h-auto rounded-md object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg-dark/80 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <div className="text-xs text-gray-300">Food quality analysis in progress...</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="h-2 bg-cyber-neon-blue/20 rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-cyber-neon-blue rounded-full animate-pulse" />
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-400">Safety Score</span>
                          <span className="text-cyber-neon-blue">86.3%</span>
                        </div>
                        
                        <div className="h-2 bg-cyber-neon-green/20 rounded-full overflow-hidden">
                          <div className="h-full w-1/2 bg-cyber-neon-green rounded-full animate-pulse" />
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-400">Nutrition Score</span>
                          <span className="text-cyber-neon-green">68.7%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

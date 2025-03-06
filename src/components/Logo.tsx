
import React from 'react';
import { FlaskConical } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  withTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, withTagline = false }) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="flex items-center gap-2">
        <div className="relative">
          <FlaskConical className="h-8 w-8 text-cyber-neon-green" />
          <div className="absolute inset-0 text-cyber-neon-green blur-sm opacity-50">
            <FlaskConical className="h-8 w-8" />
          </div>
        </div>
        <div className="font-bold text-xl">
          <span className="text-white">Food Quality</span>
          <span className="text-cyber-neon-green ml-1">Inspector GPT</span>
        </div>
      </div>
      {withTagline && (
        <div className="text-xs text-gray-400 mt-1">
          Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-cyber-neon-blue hover:underline">AiWebTools.Ai</a>
        </div>
      )}
    </div>
  );
};

export default Logo;

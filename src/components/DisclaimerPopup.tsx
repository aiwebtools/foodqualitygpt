
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Button from './Button';

const DisclaimerPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if the user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem('disclaimerAccepted');
    
    if (!hasAccepted) {
      // Show popup with slight delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Save to localStorage
    localStorage.setItem('disclaimerAccepted', 'true');
    
    // Hide the popup with animation
    setIsVisible(false);
    
    // Show confirmation toast
    toast({
      title: "Disclaimer Accepted",
      description: "Thank you for acknowledging our disclaimer.",
      duration: 3000,
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 500 }}
        className="relative w-full max-w-md mx-4 overflow-hidden rounded-xl"
      >
        <div className="cyber-card p-1 rounded-xl">
          <div className="bg-cyber-bg rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4 text-cyber-neon-red">
              <AlertTriangle className="h-6 w-6" />
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber-neon-red to-cyber-neon-yellow">
                Important Disclaimer
              </h3>
            </div>
            
            <div className="space-y-3 text-gray-300 mb-6">
              <p>
                The Food Quality Inspector GPT is designed for informational purposes only and is not a substitute for professional advice.
              </p>
              <p>
                Any analysis provided should not be considered as medical or professional advice. Food safety decisions should always be made based on proper inspection by qualified professionals.
              </p>
              <p className="text-cyber-neon-blue">
                By clicking "I AGREE", you acknowledge these limitations and agree to use this tool at your own risk.
              </p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex justify-center"
            >
              <Button 
                onClick={handleAccept}
                variant="green"
                size="lg"
                className="w-full font-bold tracking-wider flex items-center justify-center gap-2 uppercase"
              >
                <CheckCircle2 className="h-5 w-5" />
                I AGREE
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DisclaimerPopup;


import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';

const Legal: React.FC = () => {
  return (
    <section id="disclaimer" className="py-20 relative bg-cyber-bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Legal Information
          </h2>
          <div className="w-20 h-1 bg-cyber-neon-red mx-auto mb-6" />
          <p className="text-gray-400 text-lg">
            Important disclaimers and legal information about the Food Quality Inspector GPT.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="cyber-card p-1 rounded-xl mb-8">
            <div className="bg-cyber-bg rounded-xl p-6">
              <div className="flex items-start mb-4">
                <AlertTriangle className="text-cyber-neon-red h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-semibold text-white">Disclaimer</h3>
              </div>
              
              <div className="text-gray-400 space-y-4">
                <p>
                  The Food Quality Inspector GPT is designed to provide information about food quality, safety, and nutrition based on visual analysis and general knowledge. However, it has several important limitations:
                </p>
                
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-white">Not a Substitute for Professional Advice:</strong> This tool is not a replacement for professional advice from nutritionists, food safety experts, or healthcare professionals.
                  </li>
                  <li>
                    <strong className="text-white">Visual Analysis Limitations:</strong> The AI's ability to detect contamination, freshness, or quality issues is limited by what is visibly apparent in provided images.
                  </li>
                  <li>
                    <strong className="text-white">No Diagnostic Capabilities:</strong> Food Quality Inspector GPT cannot diagnose food-borne illnesses, allergic reactions, or health conditions.
                  </li>
                  <li>
                    <strong className="text-white">Informational Use Only:</strong> All information provided is for educational and informational purposes only.
                  </li>
                  <li>
                    <strong className="text-white">Not FDA Approved:</strong> This tool has not been evaluated or approved by the FDA or any regulatory food safety organization.
                  </li>
                </ul>
                
                <p>
                  By using Food Quality Inspector GPT, you acknowledge these limitations and agree to use the information provided at your own risk. AI Web Tools LLC and its affiliates shall not be held liable for any damages or consequences arising from the use of this tool or the information it provides.
                </p>
              </div>
            </div>
          </div>
          
          <div className="cyber-card p-1 rounded-xl">
            <div className="bg-cyber-bg rounded-xl p-6">
              <div className="flex items-start mb-4">
                <Info className="text-cyber-neon-blue h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-semibold text-white">Terms of Use</h3>
              </div>
              
              <div className="text-gray-400 space-y-4">
                <p>
                  By accessing and using Food Quality Inspector GPT, you agree to the following terms:
                </p>
                
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-white">Acceptable Use:</strong> You will use this tool in compliance with all applicable laws and regulations.
                  </li>
                  <li>
                    <strong className="text-white">Data Privacy:</strong> Images and information you share are subject to OpenAI's privacy policies.
                  </li>
                  <li>
                    <strong className="text-white">No Guarantee of Accuracy:</strong> While we strive for accuracy, we cannot guarantee that all information provided is complete, accurate, or up-to-date.
                  </li>
                  <li>
                    <strong className="text-white">Intellectual Property:</strong> All content, including AI-generated analyses, remains the intellectual property of AI Web Tools LLC and its licensors.
                  </li>
                </ul>
                
                <p>
                  For the complete terms of service, please visit our <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-cyber-neon-blue hover:underline">Terms of Service</a> page. For information about how we handle your data, please review our <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-cyber-neon-blue hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;

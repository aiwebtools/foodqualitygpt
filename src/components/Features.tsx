
import React from 'react';
import { Search, FileText, AlertCircle, Leaf, VolumeX, Microscope, BookOpen, WebhookIcon } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Search className="h-6 w-6 text-cyber-neon-blue" />,
      title: "Visual Food Analysis",
      description: "Upload photos of food items for instant analysis of quality, freshness, and potential contaminants."
    },
    {
      icon: <Microscope className="h-6 w-6 text-cyber-neon-purple" />,
      title: "Detailed Nutrient Breakdown",
      description: "Get comprehensive analysis of vitamins, minerals, and micronutrients in your food with exact measurements."
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-cyber-neon-red" />,
      title: "Health Risk Assessment",
      description: "Identify potentially harmful ingredients, banned substances, and health implications for various conditions."
    },
    {
      icon: <FileText className="h-6 w-6 text-cyber-neon-green" />,
      title: "Downloadable Reports",
      description: "Generate detailed, comprehensive reports of all findings that can be downloaded and saved for reference."
    },
    {
      icon: <Leaf className="h-6 w-6 text-cyber-neon-green" />,
      title: "Sustainability Analysis",
      description: "Learn about the environmental impact and sustainable practices behind your food choices."
    },
    {
      icon: <WebhookIcon className="h-6 w-6 text-cyber-neon-blue" />,
      title: "Web Research Integration",
      description: "Leverages advanced web research to provide the most up-to-date information about food regulations."
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyber-neon-blue via-cyber-neon-purple to-cyber-neon-green bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <div className="w-20 h-1 bg-cyber-neon-blue mx-auto mb-6" />
          <p className="text-gray-400 text-lg">
            The Food Quality Inspector GPT combines cutting-edge AI with comprehensive nutritional databases to give you the most detailed food analysis available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="cyber-card p-1 rounded-xl glow-on-hover"
            >
              <div className="bg-cyber-bg-dark rounded-xl p-6 h-full">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-3 bg-cyber-bg/80 border border-white/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple rounded-2xl opacity-10 blur-xl" />
          <div className="cyber-card p-1 rounded-2xl relative">
            <div className="bg-cyber-bg-dark rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    How It Works
                  </h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex gap-3">
                      <span className="text-cyber-neon-green font-bold">1.</span>
                      <span>Upload a photo of your food item or provide a description</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyber-neon-green font-bold">2.</span>
                      <span>Our AI analyzes the visual data and cross-references with databases</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyber-neon-green font-bold">3.</span>
                      <span>Receive detailed analysis of quality, safety, and nutritional content</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyber-neon-green font-bold">4.</span>
                      <span>Download a comprehensive report of the findings</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 relative">
                  <div className="p-1 bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple rounded-lg">
                    <img 
                      src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-photo-of-a-man-inspecting-food-in-a-supermar.png/:/cr=t:4.65%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:92" 
                      alt="Food inspection process" 
                      className="rounded-lg w-full h-auto"
                    />
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

export default Features;


import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "What is Food Quality Inspector GPT?",
      answer: "Food Quality Inspector GPT is an AI tool that helps analyze food items for quality, safety, and nutritional content. It can assess images of food items, identify signs of freshness or contamination, and provide detailed nutritional breakdowns and safety assessments."
    },
    {
      question: "How accurate is the analysis?",
      answer: "Food Quality Inspector GPT combines advanced image recognition with comprehensive nutritional databases to provide high-quality analysis. However, it should be used as a guide only and not as a replacement for professional health or safety advice, especially in critical situations."
    },
    {
      question: "Can it detect allergens in food?",
      answer: "The tool can help identify common allergens when they're listed in ingredients or visible in images. However, it cannot detect trace amounts or cross-contamination that might not be visible. Always rely on official product labeling for critical allergy information."
    },
    {
      question: "What types of food can be analyzed?",
      answer: "Food Quality Inspector GPT can analyze a wide range of foods including fruits, vegetables, meats, packaged products, and prepared meals. The more visible the food and any packaging/labels, the more comprehensive the analysis will be."
    },
    {
      question: "Is my data private when I use this tool?",
      answer: "We adhere to OpenAI's privacy policies. Images and information you share are used only for the purpose of generating your analysis and are subject to OpenAI's data retention and privacy policies. For full details, please refer to OpenAI's privacy policy."
    },
    {
      question: "What makes Food Quality Inspector GPT different from other nutrition apps?",
      answer: "Unlike apps that focus solely on calorie counting or basic nutrient tracking, Food Quality Inspector GPT provides comprehensive analysis including freshness assessment, detection of potentially harmful ingredients, sustainability information, and detailed nutritional breakdowns with health implications."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyber-neon-purple via-cyber-neon-blue to-cyber-neon-green bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <div className="w-20 h-1 bg-cyber-neon-purple mx-auto mb-6" />
          <p className="text-gray-400 text-lg">
            Get answers to common questions about the Food Quality Inspector GPT.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 cyber-card p-1 rounded-lg overflow-hidden"
            >
              <div className="bg-cyber-bg-dark rounded-lg overflow-hidden">
                <button 
                  className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-white text-lg">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-cyber-neon-blue flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-cyber-neon-blue flex-shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`px-5 transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Emily Johnson",
      role: "Nutritionist",
      content: "As a nutritionist, I'm impressed by the depth of analysis this tool provides. It's helped me educate my clients about their food choices with accurate, scientific data.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Health-Conscious Consumer",
      content: "I used to spend hours researching ingredients. Now I just snap a photo and get all the information I need. It's flagged several ingredients I didn't know I should avoid!",
      rating: 5
    },
    {
      name: "Sarah Rodriguez",
      role: "Parent",
      content: "This tool has been invaluable for managing my child's food allergies. I can quickly check products for hidden allergens and make safer choices.",
      rating: 4
    }
  ];
  
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-cyber-neon-green/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-cyber-neon-blue/10 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyber-neon-green to-cyber-neon-blue bg-clip-text text-transparent">
              What Our Users Say
            </span>
          </h2>
          <div className="w-20 h-1 bg-cyber-neon-green mx-auto mb-6" />
          <p className="text-gray-400 text-lg">
            Discover how Food Quality Inspector GPT is helping people make healthier, safer food choices.
          </p>
        </div>
        
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="cyber-card p-1 rounded-xl glow-on-hover"
            >
              <div className="bg-cyber-bg-dark rounded-xl p-6 h-full flex flex-col">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-cyber-neon-yellow fill-cyber-neon-yellow' : 'text-gray-600'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-300 italic mb-6 flex-grow">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-medium">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://chatgpt.com/g/g-gqCQ0z0n1-food-quality-inspector-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block cyber-button-green text-lg py-3 px-10 rounded-md"
          >
            Try Food Quality Inspector GPT Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

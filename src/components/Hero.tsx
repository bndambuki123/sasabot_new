import React from 'react';
import { MessageCircle, ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-[#024b6f] via-[#035a7d] to-[#40925b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-lg font-medium mb-6">
              💸 Sales on Autopilot, Backed by AI
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 gap-4 ">
              <img 
              src="https://9sesnjogxwvboa1y.public.blob.vercel-storage.com/SasaBOT%20Logo%20white%20small.png" 
              alt="Sasabot Logo" 
               className="inline h-12 w-auto align-bottom mx-1"
                style={{ verticalAlign: 'center', margin: '0 6px' }}
              />
              : Your Smart Assistant for Orders, Sales & Customer Chats
            </h1>
          </div>
           <p className="text-xl sm:text-1xl text-blue-100 mb-8 italic">
              Respond faster, Sell smarter. Intelligent automation to grow your business.
            </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="https://wa.me/254762222000?text=Hello! I'd like to try the Sasabot demo" 
              className="bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#20c55a] transition-all duration-300 flex items-center space-x-0 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <img
                src="https://9sesnjogxwvboa1y.public.blob.vercel-storage.com/WhatsApp%20icon.png"
                alt="WhatsApp Logo"
                className="inline h-9 w-auto"
                />
              <span>Try the Demo on WhatsApp</span>
            </a>
            <a 
              href="https://wa.me/254762222000?text=Hello! I want to get started with Sasabot" 
              className="bg-white text-[#024b6f] px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center space-x-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
         

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 rounded-full p-4">
                <Play className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">See Sasabot in Action</h3>
            <p className="text-blue-100 mb-6">
              Watch how Sasabot transforms your WhatsApp Business into a sales powerhouse
            </p>
            <div className="bg-white/5 rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-white/20">
              <span className="text-white/60">Demo Video Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
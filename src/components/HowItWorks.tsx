import React from 'react';
import { Smartphone, Settings, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    title: 'Connect Your WhatsApp Business',
    description: 'Link your existing WhatsApp Business account to Sasabot in just 2 minutes',
    color: 'bg-blue-50 text-[#024b6f]'
  },
  {
    icon: Settings,
    title: 'Customize Automation',
    description: 'Set up automated responses, product catalogs, and customer workflows',
    color: 'bg-green-50 text-[#40925b]'
  },
  {
    icon: TrendingUp,
    title: 'Start Converting Leads',
    description: 'Watch your sales grow as Sasabot handles inquiries 24/7',
    color: 'bg-purple-50 text-purple-600'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with Sasabot in three simple steps and transform your customer communication
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="h-10 w-10" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 -z-10">
                    <div className="w-0 h-full bg-[#40925b] animate-pulse"></div>
                  </div>
                )}
                <div className="absolute -top-2 -right-2 bg-[#40925b] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://wa.me/254700000000?text=Hi! I want to get started with Sasabot" 
            className="bg-[#024b6f] text-white px-8 py-4 rounded-full hover:bg-[#035a7d] transition-colors inline-flex items-center space-x-2 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            <span>Start Your Setup</span>
            <TrendingUp className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
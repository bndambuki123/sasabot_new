import React from 'react';
import { Clock, DollarSign, Star, Users } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Automate repetitive customer inquiries and focus on growing your business',
    stat: '80% faster response time'
  },
  {
    icon: DollarSign,
    title: 'Increase Sales',
    description: 'Never miss a potential customer with 24/7 automated responses',
    stat: '40% more conversions'
  },
  {
    icon: Star,
    title: 'Look Professional',
    description: 'Instant, consistent responses make your business appear larger and more established',
    stat: '95% customer satisfaction'
  },
  {
    icon: Users,
    title: 'Scale Easily',
    description: 'Handle hundreds of conversations simultaneously without hiring more staff',
    stat: '10x conversation capacity'
  }
];

const WhySasabot = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Sasabot?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of Nairobi entrepreneurs who've transformed their WhatsApp into a sales machine
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[#024b6f] to-[#40925b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {benefit.description}
              </p>
              <div className="bg-[#40925b] text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
                {benefit.stat}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#024b6f] to-[#40925b] rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Real Results from Real Businesses</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-lg p-6">
              <p className="text-lg mb-4 italic">
                "Sasabot helped me respond to customers even when I'm sleeping. My electronics sales doubled in just one month!"
              </p>
              <div className="font-semibold">- John M., Electronics Seller</div>
              <div className="text-blue-200 text-sm">Eastleigh, Nairobi</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <p className="text-lg mb-4 italic">
                "I can handle 10x more inquiries now. Sasabot is like having a personal assistant for my WhatsApp Business."
              </p>
              <div className="font-semibold">- Grace K., Fashion Boutique</div>
              <div className="text-blue-200 text-sm">Westlands, Nairobi</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <p className="text-lg mb-4 italic">
                "Professional, fast, and reliable. My customers love the instant responses and I love the increased sales."
              </p>
              <div className="font-semibold">- David O., Home Appliances</div>
              <div className="text-blue-200 text-sm">CBD, Nairobi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySasabot;
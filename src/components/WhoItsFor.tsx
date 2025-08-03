import React from 'react';
import { Smartphone, Store, Truck, Building } from 'lucide-react';

const targetAudiences = [
  {
    icon: Smartphone,
    title: 'Digital Hustlers',
    description: 'Instagram, Facebook, and WhatsApp sellers who need to scale their customer service',
    examples: 'Fashion, accessories, beauty products'
  },
  {
    icon: Store,
    title: 'Electronics Shops',
    description: 'Small to medium electronics retailers looking to automate inquiries and bookings',
    examples: 'Phones, computers, gadgets, repairs'
  },
  {
    icon: Truck,
    title: 'Delivery-Based Sellers',
    description: 'Businesses that rely on delivery and need efficient order management',
    examples: 'Food, groceries, pharmacy, courier'
  },
  {
    icon: Building,
    title: 'Small Hotels & Services',
    description: 'Hospitality and service businesses managing bookings and customer inquiries',
    examples: 'Guesthouses, salons, fitness, consulting'
  }
];

const WhoItsFor = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Perfect for Modern Digital Entrepreneurs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're selling on Jiji, Instagram, or directly through WhatsApp, Sasabot scales with your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {targetAudiences.map((audience, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group">
              <div className="bg-gradient-to-br from-[#024b6f] to-[#40925b] w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <audience.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {audience.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {audience.description}
              </p>
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-sm text-gray-700 font-medium">Examples:</p>
                <p className="text-sm text-gray-600">{audience.examples}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-md inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to join the automation revolution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Thousands of Nairobi businesses trust Sasabot to handle their customer conversations
            </p>
            <a 
              href="#contact" 
              className="bg-[#40925b] text-white px-8 py-3 rounded-full hover:bg-[#367a4d] transition-colors inline-flex items-center space-x-2 font-semibold"
            >
              <span>Get Started Today</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
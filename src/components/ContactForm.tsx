import React, { useState } from 'react';
import { Send, User, Building, Phone, Mail } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    whatsappNumber: '',
    email: '',
    businessType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    const message = `Hi! I'm interested in Sasabot. 
    Name: ${formData.name}
    Business: ${formData.businessName}
    Type: ${formData.businessType}
    WhatsApp: ${formData.whatsappNumber}
    Email: ${formData.email}`;
    
    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600">
            Join hundreds of Nairobi entrepreneurs already using Sasabot
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#024b6f] focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="h-4 w-4 inline mr-2" />
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#024b6f] focus:border-transparent transition-colors"
                  placeholder="Your business name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="h-4 w-4 inline mr-2" />
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  required
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#024b6f] focus:border-transparent transition-colors"
                  placeholder="+254 700 000 000"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="h-4 w-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#024b6f] focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                Type of Business
              </label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#024b6f] focus:border-transparent transition-colors"
              >
                <option value="">Select your business type...</option>
                <option value="electronics">Electronics & Gadgets</option>
                <option value="fashion">Fashion & Accessories</option>
                <option value="food">Food & Beverages</option>
                <option value="beauty">Beauty & Cosmetics</option>
                <option value="delivery">Delivery & Logistics</option>
                <option value="hospitality">Hotels & Hospitality</option>
                <option value="services">Services & Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#024b6f] to-[#40925b] text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-3 text-lg font-semibold transform hover:-translate-y-1"
              >
                <Send className="h-5 w-5" />
                <span>Get Started with Sasabot</span>
              </button>
              <p className="text-sm text-gray-500 mt-4">
                We'll contact you within 24 hours to set up your automation
              </p>
            </div>
          </form>
        </div>

        <div className="mt-12 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#25D366] text-white p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Quick Demo</h3>
              <p className="text-sm mb-4">Try our demo bot instantly</p>
              <a 
                href="https://wa.me/254700000000?text=Hi! I'd like to try the demo" 
                className="bg-white text-[#25D366] px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Try Demo
              </a>
            </div>
            
            <div className="bg-[#024b6f] text-white p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Schedule Call</h3>
              <p className="text-sm mb-4">Book a 15-minute consultation</p>
              <a 
                href="mailto:hello@sasabot.com" 
                className="bg-white text-[#024b6f] px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Book Call
              </a>
            </div>
            
            <div className="bg-[#40925b] text-white p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-sm mb-4">Custom solutions for large businesses</p>
              <a 
                href="mailto:enterprise@sasabot.com" 
                className="bg-white text-[#40925b] px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
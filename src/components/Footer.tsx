import React from 'react';
import { MessageCircle, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="https://9sesnjogxwvboa1y.public.blob.vercel-storage.com/SasaBOT%20Logo%20white%20small.png" 
                alt="Sasabot Logo" 
                className="h-6 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering African SMEs with intelligent automation chatbots. 
              Built in Africa, for Africa – helping businesses respond faster and sell smarter.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#investors" className="text-gray-300 hover:text-white transition-colors">Investors</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Get Started</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#40925b]" />
                <span className="text-gray-300">+254 762 222 000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#40925b]" />
                <span className="text-gray-300">hi@sasabot.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#40925b]" />
                <span className="text-gray-300">Pine Tree Plaza, <br /> 
                  Kaburu Dr. <br />
                  Off Ngong Road, <br />
                  Nairobi, Kenya</span>
              </div>
            </div>

            <div className="mt-6">
              <a 
                href="https://wa.me/254762222000" 
                className="bg-[#25D366] text-white px-4 py-2 rounded-full hover:bg-[#20c55a] transition-colors inline-flex items-center space-x-2 text-sm font-medium"
              >
                <img
                src="https://9sesnjogxwvboa1y.public.blob.vercel-storage.com/WhatsApp%20icon.png"
                alt="WhatsApp Logo"
                className="inline h-9 w-auto"
                />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Sasabot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
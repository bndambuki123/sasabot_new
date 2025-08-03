import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img 
              src="https://9sesnjogxwvboa1y.public.blob.vercel-storage.com/SasaBOT%20Logo%20%28blue%29%20mini-QHaZbc5YewL8wZwZDFi3nS6Wn7qe2E.png" 
              alt="Sasabot Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-[#024b6f] transition-colors">How It Works</a>
            <a href="#about" className="text-gray-700 hover:text-[#024b6f] transition-colors">About</a>
            <a href="#investors" className="text-gray-700 hover:text-[#024b6f] transition-colors">Investors</a>
            <a href="#contact" className="text-gray-700 hover:text-[#024b6f] transition-colors">Contact</a>
            <a 
              href="https://wa.me/254762222000" 
              className="bg-[#25D366] text-white px-6 py-2 rounded-full hover:bg-[#20c55a] transition-colors flex items-center space-x-0"
            >
              <img
                src="https://9sesnjogxwvboa1y.public.blob.vercel-storage.com/WhatsApp%20icon.png"
                alt="WhatsApp Logo"
                className="inline h-9 w-auto"
                />
              <span>Try Demo</span>
            </a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#how-it-works" className="text-gray-700 hover:text-[#024b6f] transition-colors">How It Works</a>
              <a href="#about" className="text-gray-700 hover:text-[#024b6f] transition-colors">About</a>
              <a href="#investors" className="text-gray-700 hover:text-[#024b6f] transition-colors">Investors</a>
              <a href="#contact" className="text-gray-700 hover:text-[#024b6f] transition-colors">Contact</a>
              <a 
                href="https://wa.me/254700000000" 
                className="bg-[#25D366] text-white px-6 py-2 rounded-full hover:bg-[#20c55a] transition-colors flex items-center justify-center space-x-2 w-fit"
              >
                <img
                src="https://9sesnjogxwvboa1y.public.blob.vercel-storage.com/WhatsApp%20icon.png"
                alt="WhatsApp Logo"
                className="inline h-9 w-auto"
                />
                <span>Try Demo</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
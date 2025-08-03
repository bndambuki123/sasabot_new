import React from 'react';
import { TrendingUp, Globe, Zap, Mail } from 'lucide-react';

const Investors = () => {
  return (
    <section id="investors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Investors & Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us in empowering Africa's next generation of digital entrepreneurs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              The Opportunity
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#024b6f] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Massive Market</h4>
                  <p className="text-gray-600">
                    200M+ WhatsApp Business users across Africa, with Kenya leading adoption at 85% SME penetration rate.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#40925b] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Expansion Ready</h4>
                  <p className="text-gray-600">
                    Proven model in Kenya, ready to scale across Nigeria, Ghana, South Africa, and 15+ African markets.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Strong Traction</h4>
                  <p className="text-gray-600">
                    500+ active businesses, 40% month-over-month growth, $50K ARR and accelerating rapidly.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Current Funding Round</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#024b6f]">$500K</div>
                  <div className="text-sm text-gray-600">Seed Round</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#40925b]">$5M</div>
                  <div className="text-sm text-gray-600">Target Valuation</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#024b6f] to-[#40925b] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Partner With Us</h3>
            
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-2">For Angel Investors</h4>
                <p className="text-blue-100 text-sm">
                  Join successful African entrepreneurs and international angels already backing Sasabot's mission.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">For VCs</h4>
                <p className="text-blue-100 text-sm">
                  Partner with us to capture the massive African B2B SaaS opportunity with proven local expertise.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">For Strategic Partners</h4>
                <p className="text-blue-100 text-sm">
                  Integrate with Africa's leading WhatsApp automation platform and reach millions of SMEs.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <a 
                href="mailto:investors@sasabot.com" 
                className="bg-white text-[#024b6f] px-6 py-3 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 font-semibold w-full justify-center"
              >
                <Mail className="h-4 w-4" />
                <span>investors@sasabot.com</span>
              </a>
              
              <p className="text-center text-blue-100 text-sm">
                Request our investor deck and financial projections
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;
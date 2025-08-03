import React from 'react';
import { Heart, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About Sasabot
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Born from the streets of Nairobi, Sasabot understands the unique challenges facing African SMEs. 
              We're not just building software – we're empowering the next generation of African entrepreneurs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#024b6f] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To democratize business automation for African SMEs, starting with WhatsApp – the platform where African business happens.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#40925b] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    A future where every African entrepreneur has access to world-class automation tools, regardless of their technical background or budget.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Impact</h3>
                  <p className="text-gray-600">
                    Over 500 businesses automated, $2M+ in additional revenue generated, and thousands of hours saved for entrepreneurs across Kenya.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#024b6f] to-[#40925b] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Meet the Founders</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <img
                src="https://9sesnjogxwvboa1y.public.blob.vercel-storage.com/Brian%20Photo.png"
                alt="B"
                className="h-16 w-auto"
                />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Brian Ndambuki</h4>
                  <p className="text-blue-100 mb-3">Co-founder & CEO</p>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Business strategist with deep understanding of Kenyan SME challenges. 
                    Previously grew Ndaxx Construction Ltd to USD100k+ revenues within first year.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                   <img
                src="https://9sesnjogxwvboa1y.public.blob.vercel-storage.com/mercy%20photo.png"
                alt="M"
                className="h-16 w-auto"
                />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Mercy Nyamusi</h4>
                  <p className="text-blue-100 mb-3">Co-founder & CTO</p>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Computer Scientist with years of experience in Machine Learning and building scalable systems. 
                    Passionate about solving real African problems with technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-center text-blue-100 italic">
                "We built Sasabot because we believe African SMEs deserve world-class tools to remain competitive in the modern market"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
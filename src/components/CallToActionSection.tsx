import React from 'react';
import { Sparkles } from 'lucide-react';

const CallToActionSection: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(16, 185, 129, 0.7), rgba(5, 150, 105, 0.8)), url('https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Sparkles size={24} className="text-white" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Discover Jharkhand<br />in a <span className="text-yellow-300">New Way</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed">
            Embark on an unforgettable journey through India's hidden paradise
          </p>

          <button className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:scale-110 transform hover:shadow-2xl">
            {/* Glowing Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur opacity-70 group-hover:opacity-100 group-hover:blur-md transition-all duration-300 animate-pulse"></span>
            
            {/* Button Text */}
            <span className="relative z-10 flex items-center">
              Plan Your Trip
              <Sparkles className="ml-3 group-hover:rotate-12 transition-transform duration-300" size={24} />
            </span>
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            {[
              { number: '50+', label: 'Tourist Spots' },
              { number: '1000+', label: 'Happy Travelers' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
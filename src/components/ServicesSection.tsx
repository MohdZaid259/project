import React from 'react';
import { Hotel, Utensils, Car, Users } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Hotel,
      title: 'Hotel',
      description: 'Luxury accommodations in prime locations'
    },
    {
      icon: Utensils,
      title: 'Restaurant',
      description: 'Authentic local cuisine experiences'
    },
    {
      icon: Car,
      title: 'Travel',
      description: 'Comfortable transportation arrangements'
    },
    {
      icon: Users,
      title: 'Guide',
      description: 'Expert local guides for immersive tours'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What's <span className="text-emerald-600">Included</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for the perfect Jharkhand adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-500"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-emerald-500 group-hover:to-emerald-600 transition-all duration-500 group-hover:rotate-6 group-hover:shadow-xl">
                  <IconComponent 
                    size={32} 
                    className="text-emerald-600 group-hover:text-white transition-colors duration-500" 
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
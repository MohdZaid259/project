import React, { useEffect, useState } from 'react';

const PartnersSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('partners-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const partners = [
    { name: 'Tourism Board', logo: 'TB' },
    { name: 'Heritage Trust', logo: 'HT' },
    { name: 'Adventure Tours', logo: 'AT' },
    { name: 'Eco Tourism', logo: 'ET' },
    { name: 'Wildlife Society', logo: 'WS' },
    { name: 'Cultural Center', logo: 'CC' }
  ];

  return (
    <section id="partners-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by leading organizations in tourism and heritage
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-600 font-bold text-lg">{partner.logo}</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-800">{partner.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
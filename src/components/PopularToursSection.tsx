import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const PopularToursSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const tours = [
    {
      id: 1,
      name: 'Hundru Falls',
      image: 'https://i.pinimg.com/736x/e9/b6/9f/e9b69f6687e891d068881d9847d6a0f7.jpg',
      description: 'Spectacular 98-meter waterfall surrounded by lush greenery',
      duration: '2 Days'
    },
    {
      id: 2,
      name: 'Netarhat',
      image: 'https://i.pinimg.com/474x/39/9c/0c/399c0cf0be265752eadd3a02d08e3b35.jpg',
      description: 'Queen of Chotanagpur with breathtaking sunrise views',
      duration: '3 Days'
    },
    {
      id: 3,
      name: 'Parasnath Hill',
      image: 'https://i.pinimg.com/474x/fc/af/5a/fcaf5ab11446e08ee81333daadf40163.jpg',
      description: 'Highest peak in Jharkhand, sacred Jain pilgrimage site',
      duration: '1 Day'
    },
    {
      id: 4,
      name: 'Betla National Park',
      image: 'https://i.pinimg.com/474x/cf/fc/33/cffc3311a2dfbb58e7b66fa849230cdc.jpg',
      description: 'Wildlife sanctuary home to tigers, elephants, and deer',
      duration: '2 Days'
    },
    {
      id: 5,
      name: 'Baidyanath Temple',
      image: 'https://i.pinimg.com/474x/fb/19/61/fb19617db79e77d29babfa8c189077cf.jpg',
      description: 'One of the twelve Jyotirlingas, ancient spiritual center',
      duration: '1 Day'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular <span className="text-emerald-600">Tours</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the most breathtaking destinations Jharkhand has to offer
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          {/* Tours Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 px-12 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {tours.map((tour, index) => (
              <div
                key={tour.id}
                className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
                style={{
                  animation: `slideIn 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {tour.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="text-emerald-500 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900">{tour.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularToursSection;
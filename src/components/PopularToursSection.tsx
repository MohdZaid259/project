import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const PopularToursSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const tours = [
    {
      id: 1,
      name: 'Hundru Falls',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Spectacular 98-meter waterfall surrounded by lush greenery',
      duration: '2 Days'
    },
    {
      id: 2,
      name: 'Netarhat',
      image: 'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Queen of Chotanagpur with breathtaking sunrise views',
      duration: '3 Days'
    },
    {
      id: 3,
      name: 'Parasnath Hill',
      image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Highest peak in Jharkhand, sacred Jain pilgrimage site',
      duration: '1 Day'
    },
    {
      id: 4,
      name: 'Betla National Park',
      image: 'https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Wildlife sanctuary home to tigers, elephants, and deer',
      duration: '2 Days'
    },
    {
      id: 5,
      name: 'Baidyanath Temple',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
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
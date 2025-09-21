import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Jharkhand exceeded all my expectations! The waterfalls were breathtaking and our guide was incredibly knowledgeable about the local culture.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      text: 'An amazing experience exploring the hidden gems of Jharkhand. The wildlife at Betla National Park was unforgettable!',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      location: 'California, USA',
      rating: 5,
      text: 'As a foreign tourist, I was impressed by the natural beauty and warm hospitality. Jharkhand is truly a hidden paradise.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Travelers <span className="text-emerald-600">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from our happy travelers
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-500 relative">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-emerald-100">
                      <Quote size={48} />
                    </div>

                    {/* Stars */}
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </p>

                    {/* User Info */}
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-emerald-600 font-medium">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-emerald-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
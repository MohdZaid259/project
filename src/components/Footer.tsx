import React, { useState } from 'react';
import { ChevronUp, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-screen opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[90%] mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-emerald-400">
              Explore Jharkhand
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover the hidden beauty of Jharkhand with our expertly curated tours. 
              From majestic waterfalls to ancient temples, experience India's best-kept secret.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <button
                  key={index}
                  className="bg-gray-800 hover:bg-emerald-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-emerald-400">Quick Links</h4>
            <ul className="space-y-2">
              {['Popular Tours', 'Adventure Packages', 'Cultural Tours', 'Wildlife Safari', 'Pilgrimage Tours'].map((link) => (
                <li key={link}>
                  <button className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-emerald-400">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="text-emerald-400 mr-3" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-emerald-400 mr-3" />
                <span className="text-gray-300">info@explorejharkhand.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="text-emerald-400 mr-3 mt-1" />
                <span className="text-gray-300">
                  Tourism Complex, Ranchi<br />
                  Jharkhand 834001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 Explore Jharkhand. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <button className="hover:text-emerald-400 transition-colors duration-300">
              Privacy Policy
            </button>
            <button className="hover:text-emerald-400 transition-colors duration-300">
              Terms of Service
            </button>
            <button className="hover:text-emerald-400 transition-colors duration-300">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 group"
        >
          <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
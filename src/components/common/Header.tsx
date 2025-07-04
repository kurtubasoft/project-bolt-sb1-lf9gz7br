import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { label: 'Ana Sayfa', page: 'home', href: '#' },
    { label: 'Özellikler', page: 'home', href: '#features' },
    { label: 'Fiyatlar', page: 'home', href: '#pricing' },
    { label: 'Referanslar', page: 'home', href: '#testimonials' },
    { label: 'Blog', page: 'blog', href: '#' },
    { label: 'İletişim', page: 'home', href: '#contact' }
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/kurtuba_logo copy copy.png" 
              alt="Kurtuba Soft" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Mesaicepte
              </h1>
              <p className="text-xs text-gray-500">by Kurtuba Soft</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => item.page === 'home' ? window.location.href = item.href : handleNavigate(item.page)}
                className={`transition-colors ${
                  (currentPage === item.page) || (item.page === 'home' && currentPage === 'home')
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <a 
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 pulse-glow"
            >
              Teklif Al
            </a>
            
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 py-4 space-y-4">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => item.page === 'home' ? window.location.href = item.href : handleNavigate(item.page)}
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
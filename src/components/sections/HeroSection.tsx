import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Personel Takibi
              <span className="gradient-text-animated block">Artık Cebinizde!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Konum bazlı takip, QR kod sistemi, detaylı raporlama ve izin yönetimi ile 
              modern PDKS çözümü. Kurtuba Soft güvencesiyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 text-center pulse-glow"
              >
                Ücretsiz Demo Al
              </a>
              <a 
                href="#features"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-center"
              >
                Özellikleri Keşfet
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Mesaicepte Mobil PDKS" 
                className="rounded-2xl shadow-2xl float"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))',
                }}
              />
            </div>
            
            {/* Enhanced floating shadow effects */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-2xl blur-3xl transform translate-y-12 scale-110"
              style={{ zIndex: -1 }}
            ></div>
            <div 
              className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-2xl blur-2xl transform translate-y-8 scale-105"
              style={{ zIndex: -2 }}
            ></div>
            <div 
              className="absolute inset-0 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-2xl blur-xl transform translate-y-4 scale-100"
              style={{ zIndex: -3 }}
            ></div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
            >
              <Clock className="w-8 h-8 text-blue-600" />
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg"
            >
              <MapPin className="w-8 h-8 text-purple-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
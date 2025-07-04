import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { socialLinks } from '../../data/contact';

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href={socialLinks.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
        
        {/* Main button */}
        <div 
          className="relative bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 border-4 border-white/20"
          style={{
            boxShadow: '0 20px 60px rgba(34, 197, 94, 0.4), 0 0 0 0 rgba(34, 197, 94, 0.8)',
          }}
        >
          <MessageCircle className="w-10 h-10" />
          
          {/* Notification badge */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-7 h-7 flex items-center justify-center animate-bounce font-bold border-2 border-white">
            1
          </div>
          
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-20"></div>
          <div className="absolute inset-0 rounded-full border-2 border-green-300 animate-ping opacity-10" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          WhatsApp ile iletişime geç
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
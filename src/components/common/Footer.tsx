import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/kurtuba_logo copy copy.png" 
                alt="Kurtuba Soft" 
                className="h-8 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Mesaicepte</h3>
                <p className="text-sm text-gray-400">by Kurtuba Soft</p>
              </div>
            </div>
            <p className="text-gray-400">
              Modern PDKS çözümleri ile personel takibinde yeni dönem.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Ürün</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Özellikler</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Fiyatlar</a></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">Blog</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Şirket</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">İletişim</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gizlilik</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Destek</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Yardım Merkezi</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Demo Talep Et</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dokümantasyon</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kurtuba Soft Bilgi Teknolojileri A.Ş. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
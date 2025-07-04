import { Feature } from '../types/features';
import { MapPin, QrCode, BarChart3, Shield, Smartphone, Users } from 'lucide-react';

export const features: Feature[] = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Konum Bazlı Takip",
    description: "GPS teknolojisi ile personelin belirlenen lokasyonlarda giriş-çıkış yapmasını sağlayın."
  },
  {
    icon: <QrCode className="w-8 h-8" />,
    title: "QR Kod Sistemi",
    description: "Hızlı ve güvenli giriş-çıkış için QR kod okutma sistemi."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Detaylı Raporlama",
    description: "Mesai saatleri, geç kalma, erken çıkış ve fazla mesai raporları."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Güvenli Altyapı",
    description: "256-bit SSL şifreleme ile verileriniz güvende."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobil Uyumlu",
    description: "iOS ve Android cihazlarda sorunsuz çalışır."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Çoklu Kullanıcı",
    description: "Sınırsız personel ve yönetici hesabı desteği."
  }
];
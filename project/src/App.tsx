import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Star, Users, MapPin, Phone, Mail, ArrowRight, Check, Quote, Smartphone, Clock, Shield, BarChart3, QrCode, FileText, Building2, Calculator, MessageCircle, Download, Play, Globe, Zap, Target, Award, TrendingUp, DollarSign, Construction, ShoppingCart, Truck, Factory, Guitar as Hospital, GraduationCap, PlayCircle, ExternalLink, ChevronRight, Calendar, User, Briefcase, Settings, Lock, CheckCircle, AlertCircle, Info, Headphones, BookOpen, Lightbulb, TrendingDown } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(10);
  const [isAnnual, setIsAnnual] = useState(false);
  const [usdToTry, setUsdToTry] = useState(34.5);
  const [showFAQ, setShowFAQ] = useState<number | null>(null);
  const [showQuotePopup, setShowQuotePopup] = useState(false);
  const [showChatWidget, setShowChatWidget] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show quote popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuotePopup(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  // Fetch USD to TRY exchange rate
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        if (data.rates && data.rates.TRY) {
          setUsdToTry(data.rates.TRY);
        }
      } catch (error) {
        console.log('Exchange rate fetch failed, using default rate');
      }
    };

    fetchExchangeRate();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const getPricingTier = (employees: number) => {
    if (employees >= 100) {
      return {
        pricePerUser: 1.00,
        minPrice: 100.00,
        maxPrice: 500.00,
        tier: '100+ Personel'
      };
    } else if (employees >= 50) {
      return {
        pricePerUser: 1.25,
        minPrice: 62.50,
        maxPrice: 125.00,
        tier: '50+ Personel'
      };
    } else if (employees >= 11) {
      return {
        pricePerUser: 1.75,
        minPrice: 19.25,
        maxPrice: 87.50,
        tier: '11-49 Personel'
      };
    } else {
      return {
        pricePerUser: 2.00,
        minPrice: 2.00,
        maxPrice: 20.00,
        tier: '1-10 Personel'
      };
    }
  };

  const calculatePrice = () => {
    const tier = getPricingTier(employeeCount);
    const monthlyPriceUSD = Math.max(tier.minPrice, Math.min(employeeCount * tier.pricePerUser, tier.maxPrice));
    const monthlyPriceTRY = monthlyPriceUSD * usdToTry;
    
    if (isAnnual) {
      const annualPriceTRY = monthlyPriceTRY * 12 * 0.8; // 20% discount
      return {
        monthly: monthlyPriceTRY,
        annual: annualPriceTRY,
        savings: monthlyPriceTRY * 12 - annualPriceTRY,
        tier: tier.tier
      };
    }
    
    return {
      monthly: monthlyPriceTRY,
      annual: monthlyPriceTRY * 12,
      savings: 0,
      tier: tier.tier
    };
  };

  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Konum ve GPS ile Giriş-Çıkış",
      description: "Çalışanlarınız sadece belirlenen konumlarda giriş-çıkış yapabilir. GPS tabanlı güvenli takip sistemi.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "QR Kod ile Giriş Sistemi",
      description: "Hızlı ve pratik QR kod okutma ile anında giriş-çıkış işlemleri. Temassız ve hijyenik çözüm.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Çalışma Süresi Hesaplama",
      description: "Otomatik mesai hesaplama, fazla mesai takibi ve detaylı çalışma süresi raporları.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "İzin ve Mesai Takibi",
      description: "Personel izin talepleri, onay süreçleri ve mesai planlaması tek platformda.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Departman ve Şube Tanımı",
      description: "Çoklu şube ve departman yönetimi. Her birim için ayrı raporlama ve takip imkanı.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Yönetici Paneli & Mobil Uygulama",
      description: "Web tabanlı yönetici paneli ve kullanıcı dostu mobil uygulama ile tam kontrol.",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  const sectoralUseCases = [
    {
      icon: <Construction className="w-12 h-12" />,
      title: "İnşaat & Şantiye",
      description: "Şantiye personelinin konum bazlı takibi, vardiya yönetimi ve güvenlik kontrolü.",
      features: ["GPS ile şantiye sınırları", "Güvenlik ekipmanı kontrolü", "Vardiya değişim takibi"],
      gradient: "from-orange-500 to-red-600",
      stats: "40+ şantiye projesi"
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Perakende & Mağaza",
      description: "Mağaza personeli vardiya kontrolü, kasa değişimleri ve müşteri hizmet takibi.",
      features: ["Kasa devir teslim", "Müşteri yoğunluk analizi", "Satış performans takibi"],
      gradient: "from-blue-500 to-purple-600",
      stats: "150+ mağaza zinciri"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Lojistik & Nakliye",
      description: "Sürücü takibi, araç rotaları ve teslimat süreçlerinin mobil yönetimi.",
      features: ["Rota optimizasyonu", "Teslimat onayları", "Araç bakım takibi"],
      gradient: "from-green-500 to-teal-600",
      stats: "80+ lojistik firması"
    },
    {
      icon: <Factory className="w-12 h-12" />,
      title: "Üretim & Fabrika",
      description: "Üretim hattı personeli, vardiya planlaması ve kalite kontrol süreçleri.",
      features: ["Üretim hattı takibi", "Kalite kontrol noktaları", "Makine operatör takibi"],
      gradient: "from-purple-500 to-pink-600",
      stats: "60+ üretim tesisi"
    },
    {
      icon: <Hospital className="w-12 h-12" />,
      title: "Sağlık & Hastane",
      description: "Sağlık personeli vardiya yönetimi, hasta bakım süreçleri ve acil durum koordinasyonu.",
      features: ["Nöbet takibi", "Hasta bakım süreleri", "Acil durum ekipleri"],
      gradient: "from-red-500 to-pink-600",
      stats: "25+ sağlık kuruluşu"
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Eğitim & Okul",
      description: "Öğretmen ve personel takibi, ders programları ve etkinlik yönetimi.",
      features: ["Ders programı takibi", "Etkinlik koordinasyonu", "Güvenlik personeli"],
      gradient: "from-indigo-500 to-blue-600",
      stats: "35+ eğitim kurumu"
    }
  ];

  const advantages = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Kurulum Gerekmez",
      description: "Mobil uygulama üzerinden direkt kullanım, anında başlayın",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Uygun Fiyat",
      description: "Rakiplerine kıyasla oldukça düşük maliyetli çözüm",
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Şubeler Arası Takip",
      description: "Tüm lokasyonlarınızı eş zamanlı olarak yönetin",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Web ve Mobil Uyumluluk",
      description: "Her cihazdan erişim, her yerden kontrol imkanı",
      gradient: "from-blue-400 to-indigo-500"
    }
  ];

  const customerReferences = [
    {
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      company: "ABC İnşaat A.Ş.",
      sector: "İnşaat",
      employees: 250,
      improvement: "40% zaman kazancı",
      description: "Şantiye personel takibinde devrim yarattı"
    },
    {
      logo: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      company: "XYZ Lojistik Ltd.",
      sector: "Lojistik",
      employees: 180,
      improvement: "60% verimlilik artışı",
      description: "Sürücü takibi ve rota optimizasyonu mükemmel"
    },
    {
      logo: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      company: "DEF Perakende",
      sector: "Perakende",
      employees: 320,
      improvement: "50% bordro hazırlık süresi azaldı",
      description: "Çoklu mağaza yönetimi artık çok kolay"
    },
    {
      logo: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      company: "GHI Üretim San.",
      sector: "Üretim",
      employees: 450,
      improvement: "35% operasyonel verimlilik",
      description: "Vardiya yönetimi ve üretim takibi optimize edildi"
    }
  ];

  const faqs = [
    {
      question: "GPS çalışmazsa sistem nasıl çalışır?",
      answer: "Sistem GPS olmadan da çalışabilir. QR kod ile giriş-çıkış alternatifi mevcuttur. Ayrıca manuel giriş seçenekleri de bulunmaktadır."
    },
    {
      question: "Web panel üzerinden yönetim nasıl yapılır?",
      answer: "Web paneli üzerinden tüm personel bilgileri, raporlar, izin talepleri ve mesai planlaması yönetilebilir. Kullanıcı dostu arayüz ile kolay yönetim."
    },
    {
      question: "Kaç kişilik ekipler için uygun?",
      answer: "1 kişilik küçük ekiplerden 500+ kişilik büyük organizasyonlara kadar her ölçekte kullanılabilir."
    },
    {
      question: "Veri güvenliği nasıl sağlanıyor?",
      answer: "Tüm veriler SSL şifreleme ile korunur. KVKK uyumlu veri işleme, düzenli yedekleme ve güvenlik güncellemeleri yapılır."
    },
    {
      question: "Mobil uygulama hangi cihazlarda çalışır?",
      answer: "iOS ve Android tüm cihazlarda sorunsuz çalışır. Minimum sistem gereksinimleri: iOS 12+ ve Android 8+."
    }
  ];

  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      role: "İnsan Kaynakları Müdürü",
      company: "ABC İnşaat",
      content: "Saha çalışanlarımızın takibi artık çok kolay. Gerçek zamanlı konum bilgisi ve detaylı raporlar işimizi çok kolaylaştırdı.",
      rating: 5,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "Elif Kaya",
      role: "Genel Müdür",
      company: "XYZ Lojistik",
      content: "Çoklu şube yönetimi için mükemmel bir çözüm. Tüm lokasyonlarımızı tek panelden yönetebiliyoruz.",
      rating: 5,
      gradient: "from-green-500 to-teal-600"
    },
    {
      name: "Mehmet Demir",
      role: "Operasyon Müdürü",
      company: "DEF Güvenlik",
      content: "24/7 çalışan ekiplerimiz için ideal. Vardiya değişimleri ve mesai takibi artık otomatik.",
      rating: 5,
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const blogPosts = [
    {
      title: "Mobil PDKS Nedir? Avantajları ve Kullanım Alanları",
      excerpt: "Modern işletmelerin personel takibi için tercih ettiği mobil PDKS sistemlerinin detaylı incelemesi.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "15 Aralık 2024",
      readTime: "5 dk",
      category: "Teknoloji",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Saha Personel Takibi: En İyi Uygulamalar ve İpuçları",
      excerpt: "Saha çalışanlarının verimli takibi için pratik çözümler ve uzman önerileri.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "12 Aralık 2024",
      readTime: "7 dk",
      category: "İnsan Kaynakları",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "İzin Talebi Süreçleri: Dijital Dönüşüm Rehberi",
      excerpt: "Geleneksel izin süreçlerinden dijital çözümlere geçiş için kapsamlı rehber.",
      image: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "10 Aralık 2024",
      readTime: "6 dk",
      category: "Yönetim",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "KVKK ve Personel Veri Güvenliği: Bilmeniz Gerekenler",
      excerpt: "Personel verilerinin güvenli işlenmesi ve KVKK uyumluluğu hakkında önemli bilgiler.",
      image: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "8 Aralık 2024",
      readTime: "8 dk",
      category: "Hukuk",
      gradient: "from-red-500 to-orange-600"
    },
    {
      title: "Vardiya Yönetimi: Verimlilik Artırma Stratejileri",
      excerpt: "Etkili vardiya planlaması ile operasyonel verimliliği maksimize etme yöntemleri.",
      image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "5 Aralık 2024",
      readTime: "9 dk",
      category: "Operasyon",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      title: "QR Kod Teknolojisi ile Temassız Giriş Sistemleri",
      excerpt: "Pandemi sonrası dönemde önem kazanan temassız giriş çözümlerinin analizi.",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "3 Aralık 2024",
      readTime: "4 dk",
      category: "Teknoloji",
      gradient: "from-teal-500 to-green-600"
    }
  ];

  const pricing = calculatePrice();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mesaicepte</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Anasayfa' },
                { id: 'features', label: 'Özellikler' },
                { id: 'sectors', label: 'Sektörler' },
                { id: 'demo', label: 'Demo' },
                { id: 'pricing', label: 'Fiyat' },
                { id: 'blog', label: 'Blog' },
                { id: 'contact', label: 'İletişim' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 ${
                    activeSection === item.id ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                Giriş Yap
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
            <div className="px-4 py-2 space-y-2">
              {[
                { id: 'home', label: 'Anasayfa' },
                { id: 'features', label: 'Özellikler' },
                { id: 'sectors', label: 'Sektörler' },
                { id: 'demo', label: 'Demo' },
                { id: 'pricing', label: 'Fiyat' },
                { id: 'blog', label: 'Blog' },
                { id: 'contact', label: 'İletişim' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Personel Takibi
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 gradient-text-animated">
                    Artık Cebinizde
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Mobil PDKS ile çalışanlarınızı her yerden takip edin. 
                  Konum bazlı takip, giriş/çıkış raporlama ve izin yönetimi tek uygulamada.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 pulse-glow"
                >
                  <span className="flex items-center">
                    Ücretsiz Dene
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('demo')}
                  className="px-8 py-4 border-2 border-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-border text-transparent bg-clip-text font-semibold rounded-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
                >
                  Demo İzle
                </motion.button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {[
                  { icon: MapPin, label: "Konum Bazlı Takip", gradient: "from-blue-500 to-cyan-500" },
                  { icon: BarChart3, label: "Raporlama", gradient: "from-purple-500 to-pink-500" },
                  { icon: FileText, label: "İzin Yönetimi", gradient: "from-green-500 to-emerald-500" },
                  { icon: Calculator, label: "Bordro", gradient: "from-orange-500 to-red-500" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 float">
                <img 
                  src="https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Mobil PDKS Uygulaması" 
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl transform scale-110"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Öne Çıkan Özellikler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern teknoloji ile personel takibinde yeni standartlar
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/20"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectoral Use Cases */}
      <section id="sectors" className="py-20 bg-gradient-to-br from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sektörel Kullanım Senaryoları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her sektörün ihtiyacına özel çözümler
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectoralUseCases.map((useCase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${useCase.gradient} rounded-2xl flex items-center justify-center mb-6 text-white`}>
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                
                <div className="space-y-2 mb-4">
                  {useCase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${useCase.gradient} text-white text-sm font-medium rounded-full`}>
                  {useCase.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sistem Tanıtım Videosu
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mesaicepte'nin tüm özelliklerini 2 dakikada keşfedin
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative z-10 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <PlayCircle className="w-10 h-10 text-white" />
                  </motion.button>
                  <div className="absolute bottom-4 left-4 text-white/80 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span>2:15 Demo Video</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6">Videoda Görecekleriniz:</h3>
              
              <div className="space-y-4">
                {[
                  { icon: Smartphone, title: "Mobil Uygulama Kullanımı", desc: "Kolay giriş-çıkış işlemleri" },
                  { icon: BarChart3, title: "Yönetici Paneli", desc: "Detaylı raporlama ve analiz" },
                  { icon: MapPin, title: "GPS Takip Sistemi", desc: "Gerçek zamanlı konum bilgisi" },
                  { icon: QrCode, title: "QR Kod Entegrasyonu", desc: "Hızlı ve güvenli giriş" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="pt-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  Canlı Demo Talep Et
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer References */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Başarı Hikayeleri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mesaicepte ile verimliliklerini artıran firmalar
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customerReferences.map((reference, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
              >
                <div className="text-center">
                  <img 
                    src={reference.logo} 
                    alt={reference.company}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-gray-900 mb-1">{reference.company}</h3>
                  <p className="text-sm text-gray-600 mb-3">{reference.sector}</p>
                  
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-3 mb-4">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                      {reference.improvement}
                    </div>
                    <div className="text-sm text-gray-600">{reference.employees} personel</div>
                  </div>
                  
                  <p className="text-sm text-gray-700 italic">"{reference.description}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Store Links */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Uygulamayı Hemen İndirin
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                iOS ve Android cihazlarınızda Mesaicepte'yi kullanmaya başlayın
              </p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a 
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Download className="w-5 h-5 text-black" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </motion.a>
              
              <motion.a 
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Download className="w-5 h-5 text-black" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </motion.a>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">50K+</div>
                <div className="text-gray-300">İndirme</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">4.8</div>
                <div className="text-gray-300">App Store Puanı</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">1000+</div>
                <div className="text-gray-300">Aktif Firma</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Fiyat Hesaplama
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              İhtiyacınıza göre özel fiyat hesaplayın
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="glass p-8 rounded-3xl shadow-2xl border border-white/10"
            >
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Controls */}
                <div className="space-y-8">
                  <div>
                    <label className="block text-lg font-medium text-white mb-6">
                      Personel Sayısı
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="500"
                      value={employeeCount}
                      onChange={(e) => setEmployeeCount(parseInt(e.target.value))}
                      className="w-full h-4 slider-modern appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-300 mt-3">
                      <span>1</span>
                      <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        {employeeCount} Personel
                      </span>
                      <span>500+</span>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-blue-200 text-sm font-medium rounded-full border border-blue-400/30">
                        {pricing.tier}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium text-white mb-6">
                      Ödeme Planı
                    </label>
                    <div className="flex bg-white/10 rounded-2xl p-2 backdrop-blur-sm">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsAnnual(false)}
                        className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all ${
                          !isAnnual 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        Aylık
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsAnnual(true)}
                        className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all relative ${
                          isAnnual 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        Yıllık
                        <span className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                          %20 İndirim
                        </span>
                      </motion.button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-2xl border border-blue-400/30">
                    <div className="flex items-center text-sm text-blue-200 mb-3">
                      <DollarSign className="w-5 h-5 mr-2" />
                      <span>Güncel Döviz Kuru: 1 USD = {usdToTry.toFixed(2)} TL</span>
                    </div>
                    <div className="text-xs text-gray-400">
                      * Fiyatlar gerçek zamanlı döviz kuruna göre hesaplanmaktadır
                    </div>
                  </div>
                </div>
                
                {/* Pricing Display */}
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-400/30 backdrop-blur-sm">
                  <div className="text-center mb-8">
                    <p className="text-lg text-gray-300 mb-3">
                      {isAnnual ? 'Yıllık Lisans Ücreti' : 'Aylık Lisans Ücreti'}
                    </p>
                    <motion.p 
                      key={isAnnual ? pricing.annual : pricing.monthly}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                    >
                      ₺{(isAnnual ? pricing.annual : pricing.monthly).toLocaleString('tr-TR', { maximumFractionDigits: 0 })}
                    </motion.p>
                    {isAnnual && (
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-lg text-green-400 font-medium mt-3"
                      >
                        ₺{pricing.savings.toLocaleString('tr-TR', { maximumFractionDigits: 0 })} tasarruf!
                      </motion.p>
                    )}
                    {!isAnnual && (
                      <p className="text-sm text-gray-400 mt-3">
                        Yıllık: ₺{pricing.annual.toLocaleString('tr-TR', { maximumFractionDigits: 0 })}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-4 text-sm mb-8">
                    {[
                      "Sınırsız Giriş-Çıkış",
                      "GPS ve QR Kod Desteği",
                      "Detaylı Raporlama",
                      "7/24 Teknik Destek",
                      "Mobil ve Web Erişim",
                      "KVKK Uyumlu Veri İşleme"
                    ].map((feature, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 pulse-glow"
                  >
                    Hemen Başla
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Blog & Rehberler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personel yönetimi ve PDKS sistemleri hakkında faydalı içerikler
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/20"
              >
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${post.gradient} opacity-20`}></div>
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${post.gradient} text-white text-xs font-medium rounded-full`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-medium text-sm hover:from-blue-700 hover:to-purple-700 transition-all"
                  >
                    Devamını Oku
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
            >
              Tüm Blog Yazılarını Görüntüle
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Müşteri Yorumları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mesaicepte kullanan firmaların deneyimleri
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
              >
                <div className={`w-8 h-8 bg-gradient-to-r ${testimonial.gradient} rounded-lg flex items-center justify-center mb-4`}>
                  <Quote className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-medium">{testimonial.company}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-600">
              Merak ettiğiniz soruların cevapları
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/20"
              >
                <motion.button
                  whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  onClick={() => setShowFAQ(showFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: showFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  </motion.div>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: showFAQ === index ? "auto" : 0,
                    opacity: showFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KVKK & Security Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Veri Güvenliği & KVKK Uyumluluğu
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Verileriniz bizim için öncelik, güvenliğiniz garantimiz
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: "KVKK Uyumlu",
                description: "Tüm veri işleme süreçlerimiz KVKK mevzuatına uygun olarak gerçekleştirilir.",
                gradient: "from-green-500 to-emerald-600"
              },
              {
                icon: <Lock className="w-12 h-12" />,
                title: "SSL Şifreleme",
                description: "256-bit SSL şifreleme ile verileriniz en üst düzeyde korunur.",
                gradient: "from-blue-500 to-purple-600"
              },
              {
                icon: <CheckCircle className="w-12 h-12" />,
                title: "ISO 27001",
                description: "Uluslararası bilgi güvenliği standartlarına uygun altyapı.",
                gradient: "from-purple-500 to-pink-600"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-400/30">
              <h3 className="text-2xl font-bold mb-4">Veri Güvenliği Önceliğimizdir</h3>
              <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Kurtuba Soft olarak, müşterilerimizin verilerinin güvenliği en önemli önceliğimizdir. 
                Tüm sistemlerimiz düzenli güvenlik denetimlerinden geçer ve en güncel güvenlik 
                protokolleri ile korunur. KVKK kapsamında veri işleme süreçlerimiz şeffaf ve 
                denetlenebilir şekilde yürütülür.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              İletişim
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sorularınız için bizimle iletişime geçin
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Telefon</h3>
                  <p className="text-gray-600">0554 536 05 71</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">E-posta</h3>
                  <p className="text-gray-600">destek@kurtubasoft.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
                  <p className="text-gray-600">0554 536 05 71</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Adres</h3>
                  <p className="text-gray-600">OSB 2. Bölge 83235, Nolu Cd No:8/10 OSB/Gaziantep</p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Kurtuba Soft Bilgi Teknolojileri A.Ş.</h3>
                <p className="text-gray-600 leading-relaxed">
                  Profesyonel yazılım çözümleri ile işletmenizin dijital dönüşümüne katkı sağlıyoruz. 
                  Mesaicepte, modern teknoloji ile personel yönetiminde yeni standartlar belirliyor.
                </p>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white/50"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Şirket
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white/50"
                      placeholder="Şirket adınız"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta Adresi
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white/50"
                    placeholder="ornek@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white/50"
                    placeholder="0555 123 45 67"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white/50"
                    placeholder="Projeniz hakkında detayları paylaşın..."
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
                >
                  Mesaj Gönder
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Mesaicepte</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Mobil PDKS çözümü ile personel takibinde yeni nesil teknoloji deneyimi.
              </p>
              <div className="text-sm text-gray-400">
                <p>Kurtuba Soft Bilgi Teknolojileri A.Ş.</p>
                <p>OSB 2. Bölge 83235, Nolu Cd No:8/10</p>
                <p>OSB/Gaziantep</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Özellikler</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Konum Takibi</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">QR Kod Sistemi</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Raporlama</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">İzin Yönetimi</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Şirket</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Hakkımızda</a></li>
                <li><a href="#blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Kariyer</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">İletişim</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Destek</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Yardım Merkezi</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Dokümantasyon</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Gizlilik Politikası</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">KVKK</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              &copy; 2025 Kurtuba Soft Bilgi Teknolojileri A.Ş. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Quote Popup */}
      {showQuotePopup && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowQuotePopup(false)}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ücretsiz Teklif Alın</h3>
              <p className="text-gray-600">Size özel fiyat teklifi hazırlayalım</p>
            </div>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Ad Soyad"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="E-posta"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Telefon"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="number"
                placeholder="Personel Sayısı"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
                >
                  Teklif Al
                </motion.button>
                <button
                  type="button"
                  onClick={() => setShowQuotePopup(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Kapat
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Live Chat Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        {showChatWidget && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl p-6 w-80 mb-4 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Canlı Destek</h4>
                  <p className="text-sm text-green-600">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setShowChatWidget(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-sm text-gray-700">Merhaba! Size nasıl yardımcı olabilirim?</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Mesajınızı yazın..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowChatWidget(!showChatWidget)}
          className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center pulse-glow"
        >
          {showChatWidget ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/905545360571"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 left-6 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}

export default App;
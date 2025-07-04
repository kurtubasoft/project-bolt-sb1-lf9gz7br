import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  MapPin, 
  QrCode, 
  BarChart3, 
  Shield, 
  Smartphone, 
  Users, 
  CheckCircle, 
  Star,
  Menu,
  X,
  MessageCircle,
  Calendar,
  FileText,
  TrendingUp,
  ArrowRight,
  Phone,
  Mail,
  MapPinIcon
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const blogPosts = [
    {
      id: 1,
      title: "PDKS Sistemlerinin İşletmelere Faydaları",
      excerpt: "Modern PDKS sistemleri ile personel takibinde yaşanan devrim ve işletmelere sağladığı avantajlar...",
      date: "15 Ocak 2024",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Teknoloji"
    },
    {
      id: 2,
      title: "Mobil PDKS ile Uzaktan Çalışma Yönetimi",
      excerpt: "Hibrit çalışma modellerinde personel takibi nasıl yapılır? Mobil PDKS çözümleri ile uzaktan çalışma...",
      date: "12 Ocak 2024",
      image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "İş Dünyası"
    },
    {
      id: 3,
      title: "QR Kod ile Personel Takibi: Yeni Nesil Çözümler",
      excerpt: "QR kod teknolojisi ile personel giriş-çıkış takibi nasıl yapılır? Avantajları ve uygulama örnekleri...",
      date: "10 Ocak 2024",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Teknoloji"
    }
  ];

  const renderBlogPost = (post: any) => (
    <motion.article
      key={post.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          {post.date}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {post.excerpt}
        </p>
        <button 
          onClick={() => navigateTo(`blog-${post.id}`)}
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
        >
          Devamını Oku
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </motion.article>
  );

  const renderBlogDetail = (postId: string) => {
    const post = blogPosts.find(p => p.id === parseInt(postId.split('-')[1]));
    if (!post) return null;

    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="relative h-64 md:h-96">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-8 text-white">
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    {post.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{post.title}</h1>
                  <div className="flex items-center text-gray-200">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Giriş</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Modern iş dünyasında personel takibi ve zaman yönetimi, işletmelerin verimliliğini artırmak için kritik öneme sahiptir. 
                  Geleneksel yöntemlerden dijital çözümlere geçiş, hem çalışanlar hem de işverenler için birçok avantaj sunmaktadır.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Teknolojinin Rolü</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Mobil PDKS sistemleri, konum bazlı takip, QR kod entegrasyonu ve gerçek zamanlı raporlama özellikleri ile 
                  işletmelere kapsamlı bir çözüm sunmaktadır. Bu teknolojiler sayesinde:
                </p>
                
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Personel giriş-çıkış takibi otomatikleşir</li>
                  <li>Mesai hesaplamaları hatasız yapılır</li>
                  <li>Raporlama süreçleri hızlanır</li>
                  <li>İnsan kaynakları yönetimi kolaylaşır</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Sonuç</h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  PDKS sistemleri, işletmelerin dijital dönüşüm sürecinde önemli bir adım teşkil etmektedir. 
                  Doğru sistem seçimi ve implementasyonu ile işletmeler, operasyonel verimliliğini artırabilir 
                  ve rekabet avantajı elde edebilir.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    Mesaicepte ile Tanışın
                  </h3>
                  <p className="text-blue-800 mb-4">
                    Modern PDKS çözümlerimiz hakkında daha fazla bilgi almak ve ücretsiz demo talep etmek için bizimle iletişime geçin.
                  </p>
                  <button 
                    onClick={() => navigateTo('home')}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Teklif Al
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-8">
            <button 
              onClick={() => navigateTo('blog')}
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              ← Blog'a Geri Dön
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (currentPage.startsWith('blog-')) {
    return renderBlogDetail(currentPage);
  }

  if (currentPage === 'blog') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm fixed w-full top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/kurtuba_logo copy.png" 
                  alt="Kurtuba Soft" 
                  className="h-10 w-auto"
                />
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Mesaicepte
                  </h1>
                  <p className="text-xs text-gray-500">by Kurtuba Soft</p>
                </div>
              </div>
              
              <nav className="hidden md:flex space-x-8">
                <button onClick={() => navigateTo('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Ana Sayfa</button>
                <button onClick={() => navigateTo('blog')} className="text-blue-600 font-semibold">Blog</button>
              </nav>
              
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => navigateTo('home')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Teklif Al
                </button>
                
                <button className="md:hidden" onClick={toggleMenu}>
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Blog Content */}
        <div className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Blog & Haberler
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                PDKS sistemleri, personel yönetimi ve teknoloji dünyasından en güncel haberler ve makaleler
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(renderBlogPost)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/kurtuba_logo copy.png" 
                alt="Kurtuba Soft" 
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Mesaicepte
                </h1>
                <p className="text-xs text-gray-500">by Kurtuba Soft</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Özellikler</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Fiyatlar</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Referanslar</a>
              <button onClick={() => navigateTo('blog')} className="text-gray-700 hover:text-blue-600 transition-colors">Blog</button>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">İletişim</a>
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
              <a href="#features" className="block text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Özellikler</a>
              <a href="#pricing" className="block text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Fiyatlar</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Referanslar</a>
              <button onClick={() => navigateTo('blog')} className="block text-gray-700 hover:text-blue-600 transition-colors">Blog</button>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>İletişim</a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Güçlü Özellikler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern işletmelerin ihtiyaçlarına özel tasarlanmış kapsamlı PDKS çözümü
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fiyat Planları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İşletmenizin büyüklüğüne uygun esnek fiyatlandırma seçenekleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Başlangıç",
                price: "₺299",
                period: "/ay",
                features: [
                  "50 personele kadar",
                  "Temel raporlama",
                  "Mobil uygulama",
                  "Email destek"
                ],
                popular: false
              },
              {
                name: "Profesyonel",
                price: "₺599",
                period: "/ay",
                features: [
                  "200 personele kadar",
                  "Gelişmiş raporlama",
                  "QR kod sistemi",
                  "Konum bazlı takip",
                  "Öncelikli destek"
                ],
                popular: true
              },
              {
                name: "Kurumsal",
                price: "₺999",
                period: "/ay",
                features: [
                  "Sınırsız personel",
                  "Tüm özellikler",
                  "API entegrasyonu",
                  "Özel raporlar",
                  "7/24 destek"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      En Popüler
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact"
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Başla
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Müşteri Yorumları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mesaicepte kullanan işletmelerden gelen gerçek deneyimler
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmet Yılmaz",
                company: "ABC İnşaat",
                rating: 5,
                comment: "Personel takibi hiç bu kadar kolay olmamıştı. Özellikle şantiye alanlarında konum bazlı takip çok işimize yarıyor."
              },
              {
                name: "Fatma Demir",
                company: "XYZ Lojistik",
                rating: 5,
                comment: "Raporlama sistemi mükemmel. Bordro hazırlama süremiz yarıya indi. Kesinlikle tavsiye ederim."
              },
              {
                name: "Mehmet Kaya",
                company: "DEF Teknoloji",
                rating: 5,
                comment: "Uzaktan çalışan ekibimizi takip etmek için ideal bir çözüm. Mobil uygulaması çok kullanışlı."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hemen Başlayın
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ücretsiz demo ile Mesaicepte'nin gücünü keşfedin
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h3 className="text-2xl font-bold mb-6">İletişim Bilgileri</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4" />
                  <span>+90 (212) 555 0123</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4" />
                  <span>info@mesaicepte.com</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="w-6 h-6 mr-4" />
                  <span>İstanbul, Türkiye</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ücretsiz Demo Talep Edin</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ad Soyad"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-posta"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Telefon"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Şirket Adı"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Mesajınız"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Demo Talep Et
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/kurtuba_logo copy.png" 
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
                <li><button onClick={() => navigateTo('blog')} className="hover:text-white transition-colors">Blog</button></li>
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

      {/* Enhanced WhatsApp Button */}
      <motion.a
        href="https://wa.me/905551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-5 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 z-50 hover:scale-110"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        style={{
          boxShadow: '0 12px 40px rgba(34, 197, 94, 0.6), 0 0 0 0 rgba(34, 197, 94, 0.8)',
          animation: 'pulseGlow 2s infinite',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          border: '3px solid rgba(255, 255, 255, 0.3)'
        }}
      >
        <MessageCircle className="w-10 h-10" />
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
          1
        </div>
      </motion.a>
    </div>
  );
}

export default App;
import { PricingPlan } from '../types/features';

export const pricingPlans: PricingPlan[] = [
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
    popular: false,
    buttonText: "Başla"
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
    popular: true,
    buttonText: "En Popüler"
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
    popular: false,
    buttonText: "Başla"
  }
];
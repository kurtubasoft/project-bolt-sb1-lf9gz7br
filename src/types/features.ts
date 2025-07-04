export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
  buttonText?: string;
}

export interface Testimonial {
  name: string;
  company: string;
  rating: number;
  comment: string;
  avatar?: string;
}
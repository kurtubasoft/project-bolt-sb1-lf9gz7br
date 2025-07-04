export interface NavigationItem {
  label: string;
  href: string;
  action?: () => void;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface SocialLinks {
  whatsapp: string;
  linkedin?: string;
  twitter?: string;
}
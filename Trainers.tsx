export interface Trainer {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  certifications: string[];
  quote: string;
}

export interface Plan {
  id: string;
  name: string;
  basePrice: number;
  period: 'month' | 'quarter' | 'year';
  description: string;
  features: string[];
  popular: boolean;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  planJoined: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string; // Dynamic rendering map
  imageUrl: string;
}

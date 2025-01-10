export interface Property {
  id: string;
  title: string;
  type: 'Maison' | 'Appartement' | 'Bureau' | 'Salle polyvalente' | 'Villa' | 'Magasin';
  status: 'À louer' | 'À vendre';
  price: number;
  currency: string;
  location: string;
  surface: number;
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  imageUrl: string; // Changed from string[] to string
  features: string[];
  createdAt: string;
  agent: {
    name: string;
    phone: string;
    email: string;
  };

}
  
  export interface SearchFilters {
    status: string;
    type: string;
    location: string;
    priceRange: string; // e.g., "min-max"
  }
  
  export interface User {
    id: string;
    email: string;
    name: string;
    photoURL?: string;
    twoFactorEnabled: boolean;
    twoFactorSecret?: string;
  }
  
  export interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
  }

export interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
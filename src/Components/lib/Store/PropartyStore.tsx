import { create } from 'zustand';
import type { Property, SearchFilters } from '../../../Types';

interface PropertyStore {
  properties: Property[];
  filters: SearchFilters;
  setFilters: (filters: SearchFilters) => void;
  searchProperties: () => Property[];
}

export const usePropertyStore = create<PropertyStore>((set, get) => ({
  properties: [
    {
      id: "1",
      title: 'Gombe',
      price: 850000,
      location: 'Aix-en-Provence',
      type: 'Villa',
      bedrooms: 4,
      bathrooms: 3,
      surface: 200,
      imageUrl:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      status: 'À vendre',
      description: 'Beautiful villa located in the heart of Aix-en-Provence.',
      features: ['Swimming Pool', 'Garage', 'Garden'],
      createdAt: new Date().toISOString(),
      agent: {
        name: 'John Doe',
        phone: '+33 123 456 789',
        email: 'john.doe@example.com',
      }
    },
    {
      id: "2",
      title: 'Lemba',
      price: 850000,
      location: 'Aix-en-Provence',
      type: 'Villa',
      bedrooms: 4,
      bathrooms: 3,
      surface: 200,
      imageUrl:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      status: 'À vendre',
      description: 'Beautiful villa located in the heart of Aix-en-Provence.',
      features: ['Swimming Pool', 'Garage', 'Garden'],
      createdAt: new Date().toISOString(),
      agent: {
        name: 'John Doe',
        phone: '+33 123 456 789',
        email: 'john.doe@example.com',
      }
    },
    {
      id: "3",
      title: 'Gombe',
      price: 850000,
      location: 'Aix-en-Provence',
      type: 'Villa',
      bedrooms: 4,
      bathrooms: 3,
      surface: 200,
      imageUrl:"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      status: 'À vendre',
      description: 'Beautiful villa located in the heart of Aix-en-Provence.',
      features: ['Swimming Pool', 'Garage', 'Garden'],
      createdAt: new Date().toISOString(),
      agent: {
        name: 'John Doe',
        phone: '+33 123 456 789',
        email: 'john.doe@example.com',
      }
    },
  ],
  filters: {
    status: '',
    type: '',
    location: '',
    priceRange: '', // Example: '500000-1000000' for a range
  },
  setFilters: (filters) => set({ filters }), // Update filters
  searchProperties: () => {
    const { filters, properties } = get();

    const filteredProperties = properties.filter((property) => {
      const matchesStatus = filters.status ? property.status === filters.status : true;
      const matchesType = filters.type ? property.type === filters.type : true;
      const matchesLocation = filters.location
        ? property.location.toLowerCase().includes(filters.location.toLowerCase())
        : true;

      // Price range filter
      const matchesPriceRange = (() => {
        if (!filters.priceRange) return true;
        const [min, max] = filters.priceRange.split('-').map((v) => parseInt(v, 10));
        return property.price >= (min || 0) && property.price <= (max || Infinity);
      })();

      return matchesStatus && matchesType && matchesLocation && matchesPriceRange;
    });

    console.log('Filtered properties:', filteredProperties);
    return filteredProperties;
  },
}));

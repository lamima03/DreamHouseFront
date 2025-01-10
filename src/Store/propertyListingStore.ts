import {create} from 'zustand'

interface PropertyPhoto {
  id: string;
  file: File;
  preview: string;
}

interface Location {
  address?: string;
  postalCode?: string;
  city?: string;
}

interface Pricing {
  pricePerNight?: number;
  cleaningFee?: number;
  securityDeposit?: number;
}

interface Details {
  title?: string;
  description?: string;
  maxGuests?: number;
  bedrooms?: number;
}

interface PropertyListingStore {
  propertyType?: string;
  setPropertyType: (type: string) => void;
  
  location: Location;
  setLocation: (location: Location) => void;
  
  amenities: string[];
  toggleAmenity: (amenityId: string) => void;
  
  photos: PropertyPhoto[];
  addPhotos: (newPhotos: PropertyPhoto[]) => void;
  removePhoto: (photoId: string) => void;
  
  pricing: Pricing;
  setPricing: (pricing: Pricing) => void;
  
  details: Details;
  setDetails: (details: Details) => void;
}

export const usePropertyListingStore = create<PropertyListingStore>((set) => ({
  propertyType: undefined,
  setPropertyType: (type) => set({ propertyType: type }),
  
  location: {},
  setLocation: (location) => set({ location }),
  
  amenities: [],
  toggleAmenity: (amenityId) => set((state) => ({
    amenities: state.amenities.includes(amenityId)
      ? state.amenities.filter(id => id !== amenityId)
      : [...state.amenities, amenityId]
  })),
  
  photos: [],
  addPhotos: (newPhotos) => set((state) => ({
    photos: [...state.photos, ...newPhotos]
  })),
  removePhoto: (photoId) => set((state) => ({
    photos: state.photos.filter(photo => photo.id !== photoId)
  })),
  
  pricing: {},
  setPricing: (pricing) => set({ pricing }),
  
  details: {},
  setDetails: (details) => set({ details })
}));
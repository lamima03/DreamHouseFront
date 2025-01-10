import { Heart } from 'lucide-react';
import type { Property } from '../../Types';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={property.imageUrl[0]}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-100">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
          <span className="text-lg font-bold text-brown-900">
            {property.price.toLocaleString()} {property.currency}
          </span>
        </div>
        
        <p className="text-gray-600 mb-3">{property.location}</p>
        
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span>{property.surface} m²</span>
          {property.bedrooms && <span>{property.bedrooms} ch.</span>}
          {property.bathrooms && <span>{property.bathrooms} sdb.</span>}
        </div>
      </div>
    </div>
  );
}
import { Bed, Bath, Square } from 'lucide-react';

const featuredListings = [
  {
    id: 1,
    title: 'Levitia Rise',
    address: '123 Bonnefontaine Ave',
    price: 235000,
    beds: 4,
    baths: 2,
    area: 450,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    status: 'À vendre'
  },
  {
    id: 2,
    title: 'City vertu',
    address: '456 Rue Saint-Michel',
    price: 275000,
    beds: 3,
    baths: 2,
    area: 350,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    status: 'À louer'
  },
  {
    id: 3,
    title: 'Maëva',
    address: '789 Rue du Port',
    price: 195000,
    beds: 2,
    baths: 1,
    area: 250,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    status: 'À vendre'
  }
];

export const FeaturedListings = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">À la une sur le marché</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredListings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={listing.image} 
                  alt={listing.title}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  {listing.status}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
                <p className="text-gray-600 mb-4">{listing.address}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-4 text-gray-600">
                    <div className="flex items-center">
                      <Bed className="h-5 w-5 mr-2" />
                      <span>{listing.beds}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-5 w-5 mr-2" />
                      <span>{listing.baths}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-5 w-5 mr-2" />
                      <span>{listing.area}m²</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">
                    {listing.price.toLocaleString('fr-FR')} $
                  </span>
                  <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-black transition-colors">
                    Voir détails
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
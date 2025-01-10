import { PropertyCard } from '../PropartyCard/PropartyCard';
import { usePropertyStore } from '../lib/Store/PropartyStore';
export const FeaturedProperties = () => {
  const { properties } = usePropertyStore();
  const featuredProperties = properties.slice(0, 3); // Prend les 3 premières propriétés

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Propriétés Vedettes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez nos biens les plus exceptionnels sélectionnés pour vous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-secondary text-white rounded-md hover:bg-primary transition-colors">
            Voir toutes nos propriétés
          </button>
        </div>
      </div>
    </section>
  );
};
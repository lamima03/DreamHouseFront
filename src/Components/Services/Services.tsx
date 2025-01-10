import { Home, Key, Building, HeartHandshake } from 'lucide-react';

export const Services = () => {
  return (
    <section className="py-16 bg-customchoco">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services immobiliers conçus pour répondre à tous vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Home className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Achat de bien</h3>
            <p className="text-gray-600">
              Trouvez la maison de vos rêves parmi notre large sélection de biens
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Key className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">
              Des locations qui correspondent à votre style de vie et votre budget
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Building className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Vente</h3>
            <p className="text-gray-600">
              Vendez votre bien au meilleur prix avec nos experts immobiliers
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <HeartHandshake className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Conseil</h3>
            <p className="text-gray-600">
              Bénéficiez de conseils personnalisés pour tous vos projets immobiliers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
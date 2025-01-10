import { ArrowRight } from 'lucide-react';

export const CallToAction = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vous souhaitez vendre votre bien ?
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Obtenez une estimation gratuite de votre bien en quelques clics
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-footercolor transition-colors">
              Estimer mon bien
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
              alt="Estimation immobilière"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
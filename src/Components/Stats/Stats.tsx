import { Home, Users, Building2, Award } from 'lucide-react';

export const Stats = () => {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-white">
            <Home className="h-12 w-12 mb-4" />
            <span className="text-4xl font-bold mb-2">6K+</span>
            <span className="text-blue-100">Biens à vendre</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <Users className="h-12 w-12 mb-4" />
            <span className="text-4xl font-bold mb-2">8K+</span>
            <span className="text-blue-100">Clients satisfaits</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <Building2 className="h-12 w-12 mb-4" />
            <span className="text-4xl font-bold mb-2">2K+</span>
            <span className="text-blue-100">Agents immobiliers</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <Award className="h-12 w-12 mb-4" />
            <span className="text-4xl font-bold mb-2">15+</span>
            <span className="text-blue-100">Années d'expérience</span>
          </div>
        </div>
      </div>
    </section>
  );
};
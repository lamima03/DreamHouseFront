import { Shield, Clock, ThumbsUp, HeartHandshake } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Sécurité garantie',
    description: 'Toutes nos transactions sont sécurisées et conformes à la réglementation en vigueur'
  },
  {
    icon: Clock,
    title: 'Rapidité d\'exécution',
    description: 'Notre équipe s\'engage à traiter votre dossier dans les meilleurs délais'
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction client',
    description: '98% de nos clients sont satisfaits de nos services et nous recommandent'
  },
  {
    icon: HeartHandshake,
    title: 'Accompagnement personnalisé',
    description: 'Un conseiller dédié vous accompagne tout au long de votre projet'
  }
];

export const Benefits = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi nous choisir ?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les avantages qui font de Dream House votre partenaire immobilier idéal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-4 bg-secondary rounded-full mb-4">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
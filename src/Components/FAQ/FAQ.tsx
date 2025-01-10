import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Comment puis-je commencer ma recherche de bien immobilier ?",
    answer: "Commencez par définir vos critères essentiels (budget, localisation, type de bien) et utilisez notre barre de recherche avancée. Vous pouvez également contacter un de nos agents pour un accompagnement personnalisé."
  },
  {
    question: "Quels sont les documents nécessaires pour acheter un bien ?",
    answer: "Les documents principaux incluent une pièce d'identité, les trois derniers bulletins de salaire, les deux derniers avis d'imposition, un justificatif de domicile et une simulation de prêt bancaire."
  },
  {
    question: "Comment estimer la valeur de mon bien ?",
    answer: "Nous proposons une estimation gratuite basée sur l'analyse du marché local, les caractéristiques de votre bien et les transactions récentes dans votre secteur. Contactez-nous pour une estimation personnalisée."
  },
  {
    question: "Quels sont vos frais d'agence ?",
    answer: "Nos frais d'agence varient selon le type de transaction et le prix du bien. Ils incluent l'ensemble de nos services : estimation, photos professionnelles, visites, négociation et accompagnement jusqu'à la signature."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
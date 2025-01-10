import { usePropertyListingStore } from '../../../Store/propertyListingStore';
import StepNavigation from '../StepNavigation';
import { classNames } from '../../lib/utils/ClassName';

const propertyTypes = [
  { 
    id: 'apartment', 
    label: 'Appartement', 
    icon: '🏢',
    description: 'Parfait pour la vie urbaine'
  },
  { 
    id: 'house', 
    label: 'Maison', 
    icon: '🏠',
    description: 'Idéal pour les familles'
  },
  { 
    id: 'studio', 
    label: 'Studio', 
    icon: '🏡',
    description: 'Solution compacte et fonctionnelle'
  },
  { 
    id: 'villa', 
    label: 'Villa', 
    icon: '🏰',
    description: 'Pour un séjour luxueux'
  },
  { 
    id: 'Magasin', 
    label: 'Magasin', 
    icon: '🏭',
    description: 'Espace Commercial '
  },
  { 
    id: 'SallePolyvalente', 
    label: 'Salle Polyvalente', 
    icon: '🏭',
    description: 'Pour des evenements marquants '
  }
];

interface PropertyTypeStepProps {
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const PropertyTypeStep: React.FC<PropertyTypeStepProps> = ({ 
  onNext, 
  onBack, 
  isFirstStep, 
  isLastStep 
}) => {
  const { propertyType, setPropertyType } = usePropertyListingStore();

  return (
    <div className='flex justify-center z-50 shadow-primary shadow text-white '>
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-black dark:text-footercolor">
          Quel type de bien est-ce ?
        </h2>
        <p className="mt-2 text-black dark:text-footercolor">
          Sélectionnez le type qui correspond le mieux à votre bien
        </p>
      </div>

      <div role="group" aria-labelledby="property-types" className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {propertyTypes.length > 0 ? (
          propertyTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setPropertyType(type.id)}
              className={classNames(
                "flex flex-col items-center justify-center p-4 border rounded-lg transition-all duration-200 ease-in-out",
                "hover:border-secondary hover:shadow-md",
                propertyType === type.id
                  ? "bg-primary text-white border-secondary"
                  : "bg-white text-gray-900 border-gray-200 dark:bg-footercolor dark:text-gray-100 dark:border-secondary"
              )}
              aria-pressed={propertyType === type.id}
            >
              <span className="text-4xl mb-2">{type.icon}</span>
              <span className="font-semibold text-lg mb-1">{type.label}</span>
              <p className="text-sm text-center">{type.description}</p>
            </button>
          ))
        ) : (
          <p className="text-footercolor">Aucune option de type de bien n'est disponible.</p>
        )}
      </div>

      <StepNavigation
        onNext={onNext}
        onBack={onBack}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        canProgress={!!propertyType}
      />
    </div>
    </div>

  );
};

export default PropertyTypeStep;


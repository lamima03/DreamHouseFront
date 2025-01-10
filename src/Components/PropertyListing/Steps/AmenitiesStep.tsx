import { usePropertyListingStore } from '../../../Store/propertyListingStore';
import StepNavigation from '../StepNavigation';

const amenities = [
  { id: 'wifi', label: 'WiFi', icon: '📶' },
  { id: 'kitchen', label: 'Cuisine équipée', icon: '🍳' },
  { id: 'parking', label: 'Parking', icon: '🅿️' },
  { id: 'pool', label: 'Piscine', icon: '🏊‍♂️' },
  { id: 'ac', label: 'Climatisation', icon: '❄️' },
  { id: 'tv', label: 'Télévision', icon: '📺' },
  { id: 'washer', label: 'Lave-linge', icon: '🧺' },
  { id: 'dryer', label: 'Sèche-linge', icon: '👕' },
  { id: 'gym', label: 'Salle de sport', icon: '🏋️‍♂️' },
  { id: 'balcony', label: 'Balcon', icon: '🏗️' },
];

interface AmenitiesStepProps {
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}
export default function AmenitiesStep({ onNext, onBack, isFirstStep, isLastStep }: AmenitiesStepProps) {
  const { amenities: selectedAmenities, toggleAmenity } = usePropertyListingStore();

  return (
    <div className="space-y-6 w-50%">
      <div>
        <h2 className="text-2xl font-semibold">Quels équipements proposez-vous ?</h2>
        <p className="text-gray-600 mt-2">Sélectionnez tous les équipements disponibles dans votre bien</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {amenities.map((amenity) => (
          <button
            key={amenity.id}
            onClick={() => toggleAmenity(amenity.id)}
            className={`
              p-4 border rounded-xl flex items-center space-x-3 hover:border-primary transition-colors
              ${selectedAmenities.includes(amenity.id) ? 'border-primary bg-primary/5' : 'border-gray-200'}
            `}
          >
            <span className="text-2xl">{amenity.icon}</span>
            <span className="font-medium">{amenity.label}</span>
          </button>
        ))}
      </div>

      <StepNavigation
        onNext={onNext}
        onBack={onBack}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        canProgress={selectedAmenities.length > 0}
      />
    </div>
  );
}
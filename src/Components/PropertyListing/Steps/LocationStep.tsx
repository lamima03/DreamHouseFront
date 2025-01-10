import { usePropertyListingStore } from '../../../Store/propertyListingStore';
import StepNavigation from '../StepNavigation';

interface LocationStepProps {
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export default function LocationStep({ onNext, onBack, isFirstStep, isLastStep }: LocationStepProps) {
  const { location, setLocation } = usePropertyListingStore();

  return (
    <div className="space-y-6 w-50%">
      <div>
        <h2 className="text-2xl font-semibold">Où se situe votre bien ?</h2>
        <p className="text-gray-600 mt-2">Indiquez l'adresse complète de votre bien</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Adresse</label>
          <input
            type="text"
            value={location.address || ''}
            onChange={(e) => setLocation({ ...location, address: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            placeholder="123 rue Example"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Code postal</label>
            <input
              type="text"
              value={location.postalCode || ''}
              onChange={(e) => setLocation({ ...location, postalCode: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="75001"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Ville</label>
            <input
              type="text"
              value={location.city || ''}
              onChange={(e) => setLocation({ ...location, city: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Paris"
            />
          </div>
        </div>
      </div>

      <StepNavigation
        onNext={onNext}
        onBack={onBack}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        canProgress={!!(location.address && location.postalCode && location.city)}
      />
    </div>
  );
}
import { usePropertyListingStore } from '../../../Store/propertyListingStore';
import StepNavigation from '../StepNavigation';

interface PricingStepProps {
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export default function PricingStep({ onNext, onBack, isFirstStep, isLastStep }: PricingStepProps) {
  const { pricing, setPricing } = usePropertyListingStore();

  return (
    <div className='w-full flex justify-center'>
    <div className="space-y-6 w-1/2 ">
      <div>
        <h2 className="text-2xl font-semibold">Définissez votre prix</h2>
        <p className="text-gray-600 mt-2">Choisissez un prix compétitif pour votre bien</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Prix par mois</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              value={pricing.pricePerNight || ''}
              onChange={(e) => setPricing({ ...pricing, pricePerNight: Number(e.target.value) })}
              className="block w-full pl-7 pr-12 rounded-md border-gray-300 focus:ring-primary focus:border-primary"
              placeholder="0"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">/mois</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Frais de ménage</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              value={pricing.cleaningFee || ''}
              onChange={(e) => setPricing({ ...pricing, cleaningFee: Number(e.target.value) })}
              className="block w-full pl-7 rounded-md border-gray-300 focus:ring-primary focus:border-primary"
              placeholder="0"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Caution</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              value={pricing.securityDeposit || ''}
              onChange={(e) => setPricing({ ...pricing, securityDeposit: Number(e.target.value) })}
              className="block w-full pl-7 rounded-md border-gray-300 focus:ring-primary focus:border-primary"
              placeholder="0"
            />
          </div>
        </div>
      </div>

      <StepNavigation
        onNext={onNext}
        onBack={onBack}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        canProgress={!!pricing.pricePerNight}
      />
    </div>
    </div>
  );
}
import { useState } from 'react';
import PropertyTypeStep from './Steps/PropertyTypeStep';
import LocationStep from './Steps/LocationStep';
import AmenitiesStep from './Steps/AmenitiesStep';
import PhotosStep from './Steps/PhotosStep';
import PricingStep from './Steps/PrecingStep';
import TitleDescriptionStep from './Steps/TitleDescriptionStep';
//import { usePropertyListingStore } from '../../Store/propertyListingStore';
import WizardProgress from './WizardProgress';

interface PropertyListingWizardProps {
  onComplete: () => void;
}

export default function PropertyListingWizard({ onComplete }: PropertyListingWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    { title: 'Type de bien', component: PropertyTypeStep },
    { title: 'Localisation', component: LocationStep },
    { title: 'Équipements', component: AmenitiesStep },
    { title: 'Photos', component: PhotosStep },
    { title: 'Prix', component: PricingStep },
    { title: 'Description', component: TitleDescriptionStep },
  ];

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="min-h-[600px] flex flex-col">
      <WizardProgress currentStep={currentStep} steps={steps} />
      
      <div className="flex-1 p-6">
        <CurrentStepComponent 
          onNext={goToNextStep}
          onBack={goToPreviousStep}
          isFirstStep={currentStep === 0}
          isLastStep={currentStep === steps.length - 1}
        />
      </div>
    </div>
  );
}
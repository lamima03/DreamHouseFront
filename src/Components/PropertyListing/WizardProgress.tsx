interface WizardProgressProps {
  currentStep: number;
  steps: Array<{ title: string }>;
}

export default function WizardProgress({ currentStep, steps }: WizardProgressProps) {
  return (
    <div className="px-6 py-4 border-b">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className={`
              flex items-center justify-center w-8 h-8 rounded-full
              ${index <= currentStep ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}
            `}>
              {index + 1}
            </div>
            <div className={`
              ml-2 text-sm font-medium
              ${index <= currentStep ? 'text-primary' : 'text-gray-500'}
            `}>
              {step.title}
            </div>
            {index < steps.length - 1 && (
              <div className={`
                w-12 h-0.5 mx-2
                ${index < currentStep ? 'bg-primary' : 'bg-gray-200'}
              `} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
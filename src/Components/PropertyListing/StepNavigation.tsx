interface StepNavigationProps {
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  canProgress: boolean;
}

export default function StepNavigation({
  onNext,
  onBack,
  isFirstStep,
  isLastStep,
  canProgress
}: StepNavigationProps) {
  return (
    <div className="flex justify-between pt-6 mt-6 border-t">
      {!isFirstStep && (
        <button
          onClick={onBack}
          className="px-6 py-2 text-gray-600 hover:text-gray-900"
        >
          Retour
        </button>
      )}
      <button
        onClick={onNext}
        disabled={!canProgress}
        className={`
          px-6 py-2 rounded-lg ml-auto
          ${canProgress
            ? 'bg-primary text-white hover:bg-primary-dark'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }
        `}
      >
        {isLastStep ? 'Publier l\'annonce' : 'Continuer'}
      </button>
    </div>
  );
}
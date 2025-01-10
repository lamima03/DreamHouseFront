import { usePropertyListingStore } from '../../../Store/propertyListingStore';
import StepNavigation from '../StepNavigation';
import BackButton from '../../Button/BackButton';

interface TitleDescriptionStepProps {
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export default function TitleDescriptionStep({
  onNext,
  onBack,
  isFirstStep,
  isLastStep,
}: TitleDescriptionStepProps) {
  const { details, setDetails } = usePropertyListingStore();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-2xl p-8 rounded-lg shadow-lg">
        {/* En-tête */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Décrivez votre bien</h2>
          <p className="text-gray-500 mt-2">
            Donnez envie aux voyageurs de séjourner chez vous en mettant en avant les points forts de
            votre logement.
          </p>
        </div>

        {/* Formulaire */}
        <div className="space-y-6">
          {/* Titre */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Titre de l'annonce</label>
            <input
              type="text"
              value={details.title || ''}
              onChange={(e) => setDetails({ ...details, title: e.target.value })}
              className="mt-1 block w-full rounded-lg border-2 border-primary shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-gray-800 placeholder-gray-400"
              placeholder="Ex : Superbe appartement lumineux avec vue"
              maxLength={100}
            />
            <p className="mt-1 text-sm text-gray-500">
              {details.title?.length || 0}/100 caractères
            </p>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={details.description || ''}
              onChange={(e) => setDetails({ ...details, description: e.target.value })}
              rows={6}
              className="mt-1 block w-full rounded-lg border-2 border-primary shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-gray-800 placeholder-gray-400"
              placeholder="Décrivez votre bien en détail : espace, ambiance, équipements, proximité des points d'intérêt..."
              maxLength={2000}
            />
            <p className="mt-1 text-sm text-gray-500">
              {details.description?.length || 0}/2000 caractères
            </p>
          </div>

          {/* Informations supplémentaires */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre d'habitants</label>
              <input
                type="number"
                value={details.maxGuests || ''}
                onChange={(e) => setDetails({ ...details, maxGuests: Number(e.target.value) })}
                min="1"
                className="mt-1 block w-full rounded-lg border-2 border-primary shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre de chambres</label>
              <input
                type="number"
                value={details.bedrooms || ''}
                onChange={(e) => setDetails({ ...details, bedrooms: Number(e.target.value) })}
                min="0"
                className="mt-1 block w-full rounded-lg border-2 border-primary shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-gray-800"
              />
            </div>
          </div>
        </div>

        {/* Boutons de navigation */}
        <div className="mt-8 flex justify-between items-center">
          <BackButton onClick={onBack} />
          <StepNavigation
            onNext={onNext}
            onBack={onBack}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            canProgress={!!(details.title && details.description && details.maxGuests)}
          />
        </div>
      </div>
    </div>
  );
}

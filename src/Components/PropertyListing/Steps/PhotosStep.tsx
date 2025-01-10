import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { usePropertyListingStore } from '../../../Store/propertyListingStore';
import StepNavigation from '../StepNavigation';

interface PhotosStepProps {
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export default function PhotosStep({ onNext, onBack, isFirstStep, isLastStep }: PhotosStepProps) {
  const { photos, addPhotos, removePhoto } = usePropertyListingStore();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newPhotos = acceptedFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      preview: URL.createObjectURL(file)
    }));
    addPhotos(newPhotos);
  }, [addPhotos]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    multiple: true
  });

  return (
    <div className="space-y-6 w-50%">
      <div>
        <h2 className="text-2xl font-semibold">Ajoutez des photos de votre bien</h2>
        <p className="text-gray-600 mt-2">Les annonces avec de belles photos sont plus attractives</p>
      </div>

      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-xl p-8 text-center cursor-pointer
          ${isDragActive ? 'border-primary bg-primary/5' : 'border-gray-300'}
        `}
      >
        <input {...getInputProps()} />
        <div className="space-y-4">
          <div className="text-4xl">📸</div>
          <div>
            <p className="text-lg font-medium">
              {isDragActive ? 'Déposez les photos ici' : 'Glissez-déposez vos photos ici'}
            </p>
            <p className="text-gray-500">ou cliquez pour sélectionner des fichiers</p>
          </div>
        </div>
      </div>

      {photos.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="relative group">
              <img
                src={photo.preview}
                alt="Property"
                className="w-full h-40 object-cover rounded-lg"
              />
              <button
                onClick={() => removePhoto(photo.id)}
                className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-lg 
                         opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                     strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      <StepNavigation
        onNext={onNext}
        onBack={onBack}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        canProgress={photos.length >= 3}
      />
    </div>
  );
}
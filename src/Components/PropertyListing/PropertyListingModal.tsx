import { Dialog } from '@headlessui/react';
import PropertyListingWizard from './PropertyListingWizard';

interface PropertyListingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PropertyListingModal({ isOpen, onClose }: PropertyListingModalProps) {
  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-4xl bg-red-700 rounded-xl shadow-xl">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <PropertyListingWizard onComplete={onClose} />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
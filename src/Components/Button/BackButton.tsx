interface BackButtonProps {
    onClick: () => void;
  }
  
  export default function BackButton({ onClick }: BackButtonProps) {
    return (
      <button
        onClick={onClick}
        className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700 focus:outline-none"
      >
        Retour
      </button>
    );
  }
  
import React, { useRef } from 'react';
import { Button } from '../ui/Button';

const ProfilePhotoButton: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click(); // Ouvre le sélecteur de fichiers
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Ici, vous pouvez gérer le fichier (par exemple, l'afficher ou l'envoyer à un serveur)
      console.log('Fichier sélectionné:', file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }} // Masquer l'input
        onChange={handleFileChange}
      />
      <Button
        className="bg-primary hover:bg-footercolor text-white"
        onClick={handleButtonClick}
      >
        Ajouter ma photo de profil
      </Button>
    </div>
  );
};

export default ProfilePhotoButton;

import React, { useEffect, useState } from 'react';
import {
  Bell,
  CreditCard,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Settings,
  Shield,
  Umbrella,
  User,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'; 
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import ProfilePhotoButton from '../Profil/UserProfil';

// Type pour les éléments du menu
type MenuItem = {
  icon: React.ReactNode;
  title: string;
  description?: string;
  badge?: number;
  isExternal?: boolean;
};

export default function Dashboard() {
  const navigate = useNavigate(); // Hook pour la redirection
  const [user, setUser] = useState({
    name: 'gest user',
    walletBalance: 0.0, // Solde du portefeuille
    photoUrl: '/Herro.png', // URL de la photo de profil (vide si aucune photo)
  });

  useEffect(() => {
    const auth = getAuth(); // Initialiser Firebase Auth
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || "Nom de l'utilisateur",
          walletBalance: 0.0, // Placeholder pour le portefeuille
          photoUrl: currentUser.photoURL || '', // URL de la photo
        });
      } else {
        // Rediriger si l'utilisateur n'est pas connecté
        navigate('/login');
      }
    });

    // Nettoyer le listener lors du démontage
    return () => unsubscribe();
  }, [navigate]);

  // Fonction de déconnexion
  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth); // Déconnexion Firebase
      setUser({ name: '', walletBalance: 0.0, photoUrl: '' });
      navigate('/login'); // Redirection vers la page de connexion
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  };

  // Liste des éléments du menu
  const menuItems: MenuItem[] = [
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: 'Annonces',
      description: 'Gérer mes annonces déposées',
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Transactions',
      description: 'Suivre mes achats et mes ventes',
    },
    {
      icon: <Umbrella className="w-8 h-8" />,
      title: 'Réservation de vacances',
      description: "Retrouver vos réservations en tant qu'hôte ou voyageur",
    },
    {
      icon: <User className="w-8 h-8" />,
      title: 'Profil & Espaces',
      description:
        'Modifier mon profil public, accéder à mes avis, aux espaces candidat, locataire et bailleur',
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Paramètres',
      description: 'Compléter et modifier mes informations privées et préférences',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Connexion et sécurité',
      description: 'Protéger mon compte et consulter son indice de sécurité',
      badge: 1,
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: 'Mes crédits',
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: 'Aide',
      isExternal: true,
    },
  ];

  return (
    <div className="min-h-screen bg-customchoco pt-16">
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* En-tête avec profil et porte-monnaie */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative">
              {user.photoUrl ? (
                <div
                  className="w-20 h-20 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${user.photoUrl})`,
                  }}
                />
              ) : (
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl">
                  {user.name[0]}
                </div>
              )}
            </div>
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <ProfilePhotoButton />
            </div>
          </div>
          <Card
            title="Porte-monnaie"
            description={
              <>
                <p className="text-2xl font-bold">{user.walletBalance.toFixed(2)} $</p>
                <p className="text-sm text-gray-600">Solde disponible</p>
              </>
            }
          />
        </div>

        {/* Grille de menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              badge={item.badge}
              isExternal={item.isExternal}
            />
          ))}
        </div>

        {/* Bouton de déconnexion */}
        <Button
          variant="outline"
          className="w-full sm:w-auto text-white bg-primary"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Me déconnecter
        </Button>
      </div>
    </div>
  );
}

import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../Config/Firebase';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import type { User, AuthState } from '../../Types';

// Définir le type AuthContext
interface AuthContextType extends AuthState {
  setUser: (user: User | null) => void;
  setError: (error: string | null) => void;
}

// Créer le contexte AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Composant AuthProvider pour fournir le contexte
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });

  // Fonction pour récupérer les données utilisateur depuis l'API
  const getUserData = async (email: any) => {
    try {
      const response = await fetch('http://localhost:3333/current-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (!response.ok) {
        throw new Error(`Erreur: ${response.statusText}`);
      }

      const data = await response.json();
      return data
    } catch (error) {
      console.error('Erreur réseau ou serveur:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
        if (firebaseUser) {
          // Récupérer les données utilisateur supplémentaires
          console.log(firebaseUser.email!);
          
          const userData = await getUserData(firebaseUser.email!);

          console.log('utilisateur', userData);
          

          const user: User = {
            id: firebaseUser.uid,
            email: firebaseUser.email!,
            name: firebaseUser.displayName || userData?.name || 'Utilisateur inconnu', // Gérer les noms manquants
            photoURL: firebaseUser.photoURL || undefined, // Gérer les photos manquantes
            twoFactorEnabled: false,
            password: '',
          };

          setState(prev => ({ ...prev, user, loading: false }));
        } else {
          setState(prev => ({ ...prev, user: null, loading: false }));
        }
      });

      return () => unsubscribe(); // Nettoyer le listener lors du démontage
    };

    fetchUserData();
  }, []);

  // Valeur du contexte
  const value = {
    ...state,
    setUser: (user: User | null) => setState(prev => ({ ...prev, user })),
    setError: (error: string | null) => setState(prev => ({ ...prev, error })),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook personnalisé pour consommer le contexte AuthContext
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import { User } from '../../Types';
//import { useForm, SubmitHandler } from "react-hook-form";
//import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
//import { auth } from '../../Components/Config/Firebase';
import { useAuth } from '../../Components/Contente/AuthContente';
import { Mail, Lock} from 'lucide-react';
import { GoogleLogo } from '../../Components/GoogleLogo/GoogleLogo';
import toast from 'react-hot-toast';

export function Login() {
  const navigate = useNavigate();
  const { setError } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      //const user = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      
      toast.success('Connexion réussie');
      navigate('/Verification');
    } catch (error: any) {
      setError(error.message);
      toast.error('Erreur lors de la connexion');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      ////const provider = new GoogleAuthProvider();
      //const user = await signInWithPopup(auth, provider);
      toast.success('Connexion réussie avec Google');
      navigate('/Verification');
    } catch (error: any) {
      setError(error.message);
      toast.error('Erreur lors de la connexion avec Google');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Connexion 
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Adresse email
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brown-500 focus:border-brown-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brown-500 focus:border-brown-500"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-brown-900 focus:ring-brown-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Se souvenir de moi
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-brown-900 hover:text-brown-800">
                  Mot de passe oublié?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-brown-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500"
              >
                Se connecter
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Ou continuer avec</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500"
              >
                <GoogleLogo size={20}/>
                Google
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Pas encore inscrit?{' '}
            <Link to="/register" className="font-medium text-brown-900 hover:text-footercolor">
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
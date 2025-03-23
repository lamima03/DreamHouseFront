import { Link, useNavigate } from 'react-router-dom';
import { User as userType } from '../../Types';
import { useForm } from "react-hook-form";
import { Mail, Lock, User, Loader2 } from 'lucide-react';
import { GoogleLogo } from '../../Components/GoogleLogo/GoogleLogo';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Components/Config/Firebase';

export default function Register() {
  const navigate = useNavigate();

  // États pour chaque champ d'entrée
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    watch,
  } = useForm<userType>();



      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (password !== confirmPassword) {
          toast.error("Les mots de passe ne correspondent pas");
          return;
        }
    
        const userData = {
          name,
          email,
          password,
        };
    
        setIsLoading(true);
    
        try {

          
          const response = await fetch(process.env.REACT_APP_API+'/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });

          const user = await (await createUserWithEmailAndPassword(auth, email, password)).user
    
          if (response.ok) {
            const data = await response.json();
            toast.success("Inscription réussie !");
            console.log('Réponse API :', data);
            console.log('firebase :', user);
            navigate('/');
          } else {
            const errorData = await response.json();
            toast.error(errorData.message || "Une erreur est survenue lors de l'inscription.");
          }
        } catch (error) {
          console.error("Erreur réseau :", error);
          toast.error("Impossible de se connecter au serveur.");
        } finally {
          setIsLoading(false);
        }
      };


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Créer un compte
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom complet
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brown-500 focus:border-brown-500"
                  {...register("name")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {errors.name && <span className='text-red-500 text-sm'>Veuillez remplir</span>}
            </div>

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
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brown-500 focus:border-brown-500"
                  {...register("email", {required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i})}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {errors.email && <span className='text-red-500 text-sm'>Veuillez saisir une adresse email valide</span>}
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
                  type="password"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brown-500 focus:border-brown-500"
                  {...register("password", {required: true, minLength: 8})}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                
              </div>
              {errors.password && <span className='text-red-500 text-sm'>Votre  mot de passe doit comptenir au moins 8 caracteres</span>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirmer le mot de passe
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  type="password"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brown-500 focus:border-brown-500"
                  {...register("confirmPassword", {
                  required: "Ce champ est obligatoire",
                  minLength: {value: 8,message: "Le mot de passe doit contenir au moins 8 caractères"},
                  validate: (value) =>
                  value === watch("password") || "Les mots de passe ne correspondent pas"})}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

              </div>
              {/* {watch("password") != watch("confirmPassword") && <span className='text-red-500 text-sm'>Mot de passe incorrect</span>} */}
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-brown-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500"
              >
                {isLoading ? <Loader2 size={8}/> : "S'inscrire"}
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
                className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500"
              >
                <GoogleLogo size={20} />
                Google
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Déjà inscrit?{' '}
            <Link to="/login" className="font-medium text-gray-600 hover:text-footercolor">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
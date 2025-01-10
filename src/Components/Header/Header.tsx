import { useState } from 'react';
import { Search, Heart, Menu, Bell, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Contente/AuthContente';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture/fermeture du menu
  const navigate = useNavigate();
  const { user } = useAuth();

  // Fonction pour basculer l'état du menu mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Dream House</span>
            </Link>
          </div>

          {/* Menu de navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/acheter" className="text-primary hover:text-primary-light transition-colors">
              Acheter
            </Link>
            <Link to="/vendre" className="text-primary hover:text-primary-light transition-colors">
              Vendre
            </Link>
            <Link to="/louer" className="text-primary hover:text-primary-light transition-colors">
              Louer
            </Link>
            <Link to="/contact" className="text-primary hover:text-primary-light transition-colors">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
          <button
              className=" hidden lg:sm:flex w-full  sm:w-auto px-4 py-2 min-w-[150px] bg-primary text-white rounded-lg text-sm sm:text-base hover:bg-primary-dark transition-colors"
              onClick={() => navigate('/Annonce')}
          >
           + Déposer une annonce
            </button>
            <button
  className=" lg:sm:hidden  relative group px-3 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark transition-colors"
  onClick={() => navigate('/Annonce')}
>
  +
  <span
  className="absolute left-1/2 -translate-x-1/2 top-full mt-1 z-10 text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-customchoco text-xs font-medium px-2 py-1 rounded shadow-md transition-all duration-300"
>
  Déposer une annonce
</span>

</button>
            <button
              className="p-2 rounded-full hover:bg-primary-light/20"
              aria-label="Notifications"
              onClick={() => navigate('/')}
            >
              <Bell className="h-5 w-5 text-primary" />
            </button>
            <button className="p-2 rounded-full hover:bg-primary-light/20" aria-label="Recherche">
              <Search className="h-5 w-5 text-primary" />
            </button>
            <button
              className="p-2 rounded-full hover:bg-primary-light/20"
              aria-label="Favoris"
              onClick={() => navigate('/favoris')}
            >
              <Heart className="h-5 w-5 text-primary" />
            </button>
            {user ? (
              <button
                className="p-2 rounded-lg bg-customchoco text-primary hover:bg-secondary transition-colors"
                onClick={() => navigate('/dashboard')}
              >
                {user.name}
              </button>
            ) : (
              <button
                className="p-2 rounded-full hover:bg-primary-light/20"
                aria-label="Se connecter"
                onClick={() => navigate('/register')}
              >
                <User className="h-5 w-5 text-primary" />
              </button>
            )}
            <button
              className="md:hidden p-2 rounded-full hover:bg-primary-light/20"
              aria-label="Menu mobile"
              onClick={toggleMenu}
            >
              <Menu className="h-5 w-5 text-primary" />
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary text-footercolor shadow-md p-4 flex flex-col space-y-4">
          <Link
            to="/acheter"
            className="hover:bg-primary hover:text-secondary text-primary transition-colors px-4 py-2 rounded"
          >
            Acheter
          </Link>
          <Link
            to="/vendre"
            className="hover:bg-primary hover:text-secondary text-primary transition-colors px-4 py-2 rounded"
          >
            Vendre
          </Link>
          <Link
            to="/louer"
            className="hover:bg-primary hover:text-secondary text-primary transition-colors px-4 py-2 rounded"
          >
            Louer
          </Link>
          <Link
            to="/contact"
            className="hover:bg-primary hover:text-secondary text-primary transition-colors px-4 py-2 rounded"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

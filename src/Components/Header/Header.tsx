import { useState, useRef, useEffect } from 'react';
import { Search, Heart, Menu, Bell, User } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Contente/AuthContente';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const { user } = useAuth();
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Ferme le dropdown si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = ["Appartement", "Maison", "Terrain", "Salle Polyvalente", "Bureau", "Studio"];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Dream House</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 relative" ref={menuRef}>
            {["Acheter", "Vendre", "Louer"].map((item) => (
              <div key={item} className="relative">
                <button
                  className={`text-primary hover:text-primary-light transition-colors relative ${
                    activeDropdown === item.toLowerCase() ? "pb-2 border-b-4 border-primary" : ""
                  }`}
                  onClick={() => toggleDropdown(item.toLowerCase())}
                >
                  {item}
                </button>
                {activeDropdown === item.toLowerCase() && (
                  <div className="absolute left-0 mt-2 w-48 bg-customchoco shadow-lg rounded-lg p-2">
                    {menuItems.map((option) => (
                      <Link
                        key={option}
                        to={`/${item.toLowerCase()}/${option.toLowerCase()}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:font-bold rounded"
                      >
                        {option}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="text-primary hover:text-primary-light transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              className="hidden lg:flex px-4 py-2 bg-primary text-white rounded-lg text-sm sm:text-base hover:bg-primary-dark transition-colors"
              onClick={() => navigate('/Annonce')}
            >
              + Déposer une annonce
            </button>
            <button className="p-2 rounded-full hover:bg-primary-light/20" onClick={() => navigate('/')}>
              <Bell className="h-5 w-5 text-primary" />
            </button>
            <button className="p-2 rounded-full hover:bg-primary-light/20">
              <Search className="h-5 w-5 text-primary" />
            </button>
            <button className="p-2 rounded-full hover:bg-primary-light/20" onClick={() => navigate('/favoris')}>
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
                onClick={() => navigate('/register')}
              >
                <User className="h-5 w-5 text-primary" />
              </button>
            )}
            <button className="md:hidden p-2 rounded-full hover:bg-primary-light/20" onClick={toggleMenu}>
              <Menu className="h-5 w-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

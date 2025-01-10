import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  services: [
    { name: 'Acheter', path: '/acheter' },
    { name: 'Vendre', path: '/vendre' },
    { name: 'Louer', path: '/louer' },
    { name: 'Estimer', path: '/estimation' }
  ],
  legal: [
    { name: 'Mentions légales', path: '/mentions-legales' },
    { name: 'Politique de confidentialité', path: '/confidentialite' },
    { name: 'CGU', path: '/cgu' },
    { name: 'Plan du site', path: '/plan-site' }
  ],
  about: [
    { name: 'Notre histoire', path: '/histoire' },
    { name: 'L\'équipe', path: '/equipe' },
    { name: 'Nos agences', path: '/agences' },
    { name: 'Blog', path: '/blog' }
  ]
};

export const Footer = () => {
  return (
    <footer className="bg-footercolor text-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <Home className="h-8 w-8 text-secondary mr-2" />
              <span className="text-2xl font-bold text-white">Dream House</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Votre partenaire de confiance dans la recherche de votre bien immobilier idéal.
              Plus de 15 ans d'expertise à votre service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <FiFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <FiTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <FiInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <FiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="hover:text-secondary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* À propos */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">À propos</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="hover:text-secondary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FiMail className="h-5 w-5 mr-3 text-secondary" />
                <a href="mailto:contact@dreamhouse.fr" className="hover:text-secondary transition-colors">
                  contact@dreamhouse.fr
                </a>
              </li>
              <li className="flex items-center">
                <FiPhone className="h-5 w-5 mr-3 text-secondary" />
                <a href="tel:+33123456789" className="hover:text-secondary transition-colors">
                  +243820640654
                </a>
              </li>
              <li className="flex items-start">
                <FiMapPin className="h-5 w-5 mr-3 text-secondary mt-1" />
                <span>
                  Gombe<br />
                  75008 de l'école, Kinshasa
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Liens légaux et copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Dream House. Tous droits réservés.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-400 hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};